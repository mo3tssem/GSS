

window.onload = function () {

    

    var nextId = 1, link2, page = ["page_one.html", "page_tow.html", "page_three.html"],
endPoint = localStorage.getItem('endPoint'), beginPoint = localStorage.getItem('beginPoint'),
the_beginlevelnameNotInsid = localStorage.getItem('the_beginlevelnameNotInsid'),
arabiclevel = ["الاول", "الثاني", "الثالث", "الرابع"];

    // in the  same level 

    var levelbegin_temp, leveltwotemp, css_click_li;
    var EndAndBeginSameinLocal = localStorage.getItem('EndAndBeginSameinLocal');
	var ops =localStorage.getItem('ops');
	var nameOflevels = localStorage.getItem('nameOflevels');
	    var link3, link4 ,link5;
	    var dontShow_door = EndAndBeginSameinLocal.toString();
	    if (dontShow_door === "one" || dontShow_door === "two" || dontShow_door === "three") {
	        $("#paths").hide();
	    }

    if (EndAndBeginSameinLocal.length > 0) {



        if (EndAndBeginSameinLocal.toString() === "one") {

            link2 = "<li><a  data-type='clickable' id='select1'  data-href='" + page[0] + "'> الطابق الأول </a></li> ";
            levelbegin_temp = arabiclevel[0];
            leveltwotemp = arabiclevel[0];

        }
        else if (EndAndBeginSameinLocal.toString() === "two") {
            link2 = "<li><a  data-type='clickable' id='select2'  data-href='" + page[1] + "'>  الطابق الثاني </a></li> ";
            levelbegin_temp = arabiclevel[1];
            leveltwotemp = arabiclevel[1];
        }
        else if (EndAndBeginSameinLocal.toString() === "three") {

            link2 = "<li><a  data-type='clickable' id='select3'  data-href='" + page[2] + "'> الطابق الثالث </a></li> ";
            levelbegin_temp = arabiclevel[2];
            leveltwotemp = arabiclevel[2];

        }
        css_click_li = 0;


        $("#level_number").append(link2);

    }



        //end of if level number in same //begin th level not the same
    else  {
    
        if (the_beginlevelnameNotInsid === "one"  ) {
            levelbegin_temp = arabiclevel[0];
            leveltwotemp = arabiclevel[1];
            link3 = "<li><a  data-type='clickable' id='select2'  data-href='" + page[1] + "'>  الطابق الثاني </a></li> ";
            link4 = "<li><a  data-type='clickable' id='select1'  data-href='" + page[0] + "'> الطابق الأول </a></li> ";



            css_click_li = 1;

            $("#level_number").append(link4);
            $("#level_number").append(link3);

        }

        else if (the_beginlevelnameNotInsid === "two") {
            levelbegin_temp = arabiclevel[1];
            leveltwotemp = arabiclevel[2];

            link3 = "<li><a  data-type='clickable' id='select3'  data-href='" + page[2] + "'>  الطابق الثالث </a></li> ";
            link4 = "<li><a  data-type='clickable' id='select2'  data-href='" + page[1] + "'> الطابق الثاني </a></li> ";


            css_click_li = 2;

            $("#level_number").append(link4);
            $("#level_number").append(link3);

        }


        else if (the_beginlevelnameNotInsid=== "Two_one") {

            levelbegin_temp = arabiclevel[1];
            leveltwotemp = arabiclevel[0];
            link3 = "<li><a  data-type='clickable' id='select2'  data-href='" + page[1] + "'> الطابق الثاني </a></li> ";
            link4 = "<li><a  data-type='clickable' id='select1'  data-href='" + page[0] + "'> الطابق الأول </a></li> ";



            css_click_li = 2;


            $("#level_number").append(link3);
            $("#level_number").append(link4);



        }


        else if (the_beginlevelnameNotInsid=== "three_two") {

            levelbegin_temp = arabiclevel[2];
            leveltwotemp = arabiclevel[1];
            link3 = "<li><a  data-type='clickable' id='select3'  data-href='" + page[2] + "'>  الطابق الثالث </a></li> ";
            link4 = "<li><a  data-type='clickable' id='select2'  data-href='" + page[1] + "'> الطابق الثاني </a></li> ";



            css_click_li = 3;


            $("#level_number").append(link3);
            $("#level_number").append(link4);

        }		
		

		else if (nameOflevels === "one_three")		{
		   levelbegin_temp = arabiclevel[0];
            leveltwotemp = arabiclevel[2];
            link3 = "<li><a  data-type='clickable' id='select3'  data-href='" + page[2] + "'> الطابق الثالث </a></li> ";
            link4 = "<li><a  data-type='clickable' id='select2'  data-href='" + page[1] + "'> الطابق الثاني </a></li> ";
		    link5 = "<li><a  data-type='clickable' id='select1'  data-href='" + page[0] + "'> الطابق الأول </a></li> ";
			
			
            css_click_li = 1;
			            $("#level_number").append(link5);
				        $("#level_number").append(link4);
	   				   $("#level_number").append(link3);


		}


		
		else if ( nameOflevels === "three_one"){
		
				   levelbegin_temp = arabiclevel[2];
            leveltwotemp = arabiclevel[0];
            link3 = "<li><a  data-type='clickable' id='select3' data-clickload='spin' data-href='" + page[2] + "'>  الطابق الثالث </a></li> ";
            link4 = "<li><a  data-type='clickable' id='select2' data-clickload='spin' data-href='" + page[1] + "'>الطابق الثاني </a></li> ";
            link5 = "<li><a  data-type='clickable' id='select1' data-clickload='spin' data-href='" + page[0] + "'> الطابق الأول </a></li> ";
			
			
            css_click_li = 3;
			            $("#level_number").append(link3);
				        $("#level_number").append(link4);
	   				   $("#level_number").append(link5);


		}
		
		}
    

	var you_are1 = " أنت الأن  في الطابق ", you_are2 = "تريد الذهاب الى الطابق ", start = " للوصول الى المكان المطلوب يرجى الضغط على القائمة بالأعلى";
	$("#discripton").text(you_are1 + "  " + levelbegin_temp + "  عند  " + beginPoint + "  " + you_are2 + "  " + leveltwotemp + " إلي " + endPoint + " " + start);

    $("#level_number a").click(function () {
        $elem = $(this);
        $("#holdmap").load($elem.attr("data-href"));
        setTimeout(function () { menu1.slideClose(); }, 2000);


        $("#field").hide();
        $('#dvLoading').fadeIn(1000);

        $('#dvLoading').fadeOut(3000);

        $('#loading_menu').show();
        $("#loading_menu").fadeOut(3000);


     
      
      

      
      
        $("#in_two").live("click", function () {
            localStorage.setItem('css_two',2);

        });

        var csstwo = localStorage.getItem('css_two');
        if (csstwo.toString() === "2") {
            $(".content a:eq(0)").css("background", "#ffda00");
            $(".content a:eq(1)").css("background", "#000000");
            $(".content a:eq(0)").css("color", "#000000");

        }
        $("#in_one").live("click", function () {
            localStorage.setItem('css_two',1);
           
        });
        if (csstwo.toString() === "1") {
            $(".content a:eq(1)").css("background", "#ffda00");
            $(".content a:eq(0)").css("background", "#000000");
             $(".content a:eq(1)").css("color", "#000000");

        }


        $("#level_number a").live("click", function () {

            $("#level_number a").css('color', '#fff');
       $("#level_number a").css('background', '#000000');
        if ($(this).attr('id') == "select1" ||
            $(this).attr('id') == "select2" ||
            $(this).attr('id') == "select3" ||
            $(this).attr('id') == "select4") {
            $(this).css('background', '#ffda00');
            $(this).css('color', '#000');
            
        }
    });

    });
  

    $("#level_number a:eq(0)").click();



    $("#logo").live("click", function () {
	    window.location = "index.html";
	   
	
	});
	

	


	
	
	
};






