
	var canvas = document.getElementById('field');
var ctx = canvas.getContext("2d");
var imageObj = new Image();
var start = [], finish = []; 
var dj = function() { var col;
	function random_color(){
		var rint = Math.round(0xffffff * Math.random());
		return 'rgba(' + (rint >> 16) + ',' + (rint >> 8 & 255) + ',' + (rint & 255) + ',.4)';	  
	}
	return {
		init : function() {
		 
			
			this.ul_path_display = document.getElementById("path_display");

			this.width = canvas.getAttribute("width");
			this.height = canvas.getAttribute("height");
			this.ctx = canvas.getContext('2d');
			
			

			this.available = this.copy_erase_map();
			//this.start = [], this.finish = []; 
			this.completed_paths = [];

			this.draw_map();
			
		
		},
		begin : function(){
			dj.find_shortest_path();
		
			dj.output();
		},
		copy_erase_map : function(){
	
	    var new_map = jQuery.extend(true, {}, map);

			
			for (var col = 0; col < map.length ; col++) {
				for (var row = 0; row < map[col].length ; row++) {
					new_map[row][col] = 1; //1 = open; 0 = closed
				}
			}
			return new_map;
		},
		draw_map : function(){
			this.block_size_x = this.width / map[0].length;
			this.block_size_y = this.height / map.length;
			
			//map[row][col] aka map[y][x]
			for ( var col = 0; col < map.length ; col++) {
				for (var row = 0; row < map[col].length ; row++) {

					switch(map[row][col]){
						case 0: //open
							var color = "rgb(255,255,255)";
							break;
						case 1: //wall
							var color = "rgb(0,0,0)";
							break;
						case 2:

					    var  color = "rgb(0,255,0)";    

							this.start = [col,row];
						var a=	col , b = row;
							
							this.ctx.fillStyle = color;
			

							break
						case 3:
						
							var color = "rgb(0,0,0)";      
							this.finish = [col,row];
							
							
							this.ctx.fillStyle = color;
					
							
							break;
					}

					this.ctx.fillStyle = color;


				};
			};
		},
		draw_block: function (coord, color) {

			var row = coord[0],
				col = coord[1];
					

		this.ctx.fillStyle = color;

		this.ctx.fillRect(row * this.block_size_x, col * this.block_size_y, 2,2);


		},
		open_close : function(coord){			
			switch(this.available[coord[1]][coord[0]]){
				case 0: return "closed";
				case 1: return "open";
			}
			return false;
		},
		test_collision : function(coord){
			var col = coord[0],
				row = coord[1];

			try{
				switch(map[row][col]){
					case 0: 
						switch(this.open_close(coord)){
							case "closed":
								return "blank-closed";
								break;
							case "open":
								return "blank";
								break;
						}
					break;
					case 1: return "wall";   break;
					// case 2: return "start";  break; //this will never happen
					case 3: return "finish"; break;
				}
			}catch(e){
				return false;	
			}
		},
		find_shortest_path : function(){
			var paths = [];
			var directions = Array("up","down","left","right"); //const
			
			//kick things off
			paths.push([this.start]); //first path has only one branch that branch has only coord, the origin

			var temp_paths = [];

			for (var i = 0; i < paths.length; i++) {

				var trail_head = paths[i][paths[i].length - 1]; 

				for(d in directions){ //potentially up to 4 more branches

					var branches = []; //new branch

					switch(directions[d]){
						case "up":
							var test_coord = [trail_head[0],(trail_head[1]  - 1)];
							break;
						case "down":
							var test_coord = [trail_head[0], (trail_head[1] + 1)];
							break;
						case "left":
							var test_coord = [(trail_head[0] - 1), trail_head[1]];
							break;
						case "right":
							var test_coord = [(trail_head[0] + 1), trail_head[1]];
							break;
					}


					//if the next block is blank then this branch is good, push this branch on the temp_paths and do this again.
					switch(this.test_collision(test_coord)){
						case "blank":
							//direction is good, push this branch on the temp_paths
							var temp_path = paths[i];
							temp_paths.push( temp_path.concat([test_coord]) );
							this.available[test_coord[1]][test_coord[0]] = 0; //no longer available
						break;
						case "blank-closed": break;
						case "wall":
							//branch is dead, do nothing
						break;
						case "finish":
							this.completed_paths.push(paths[i]);
							//complete path, push this to directions
						break;
					}
				} //end for earch direction

				//console.log(temp_paths);

				paths = temp_paths

			};			
		},
		output : function(){

			if(!this.completed_paths.length > 0){

				alert("no path!");
				this.draw_map();

			}else{
			    this.draw_path(0);



			}

		},
		draw_path : function(path){
		    var color = "rgb(255,0,0)";
		    var color2 = "rgb(255,255,255)";

     
			
			var len = this.completed_paths[path].length;
		  
			for (var i = 1; i <len ; i++) {
			  var that2= this;
			(function(){
			
				var x = that2.completed_paths[path][i];
				var that = that2;
				  setTimeout(function(){
					that.draw_block(x, color);
				//	console.log(x);
				},30*i);
			})();
			       

			 };

		}
	};
		
}();
