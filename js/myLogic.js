// JavaScript Document
$(function(){
        var zoom = new ZoomView('#mo3','#field');
		
    });


	var zIndexBackup = 10;



    function ZoomView(container, element) {

        container = $(container).hammer({
            prevent_default: true,
            scale_treshold: 0,
            drag_min_distance: 0
        });

        element = $(element);


        var displayWidth = container.width();
        var displayHeight = container.height();

        //These two constants specify the minimum and maximum zoom
        var MIN_ZOOM = 1;
        var MAX_ZOOM = 3;

        var scaleFactor = 1;
        var previousScaleFactor = 1;

        //These two variables keep track of the X and Y coordinate of the finger when it first
        //touches the screen
        var startX = 0;
        var startY = 0;

        //These two variables keep track of the amount we need to translate the canvas along the X
        //and the Y coordinate
        var translateX = 0;
        var translateY = 0;

        //These two variables keep track of the amount we translated the X and Y coordinates, the last time we
        //panned.
        var previousTranslateX = 0;
        var previousTranslateY = 0;

        //Translate Origin variables

        var tch1 = 0, 
            tch2 = 0, 
            tcX = 0, 
            tcY = 0,
            toX = 0,
            toY = 0,
            cssOrigin = "";

        container.bind("transformstart", function(event){

            //We save the initial midpoint of the first two touches to say where our transform origin is.
            e = event

            tch1 = [e.touches[0].x, e.touches[0].y],
            tch2 = [e.touches[1].x, e.touches[1].y]

            tcX = (tch1[0]+tch2[0])/2,
            tcY = (tch1[1]+tch2[1])/2

            toX = tcX
            toY = tcY

            var left = $(element).offset().left;
            var top = $(element).offset().top;

            cssOrigin = (-(left) + toX)/scaleFactor +"px "+ (-(top) + toY)/scaleFactor +"px";
        })

        container.bind("transform", function(event) {
            scaleFactor = previousScaleFactor * event.scale;
			
            scaleFactor = Math.max(MIN_ZOOM, Math.min(scaleFactor, MAX_ZOOM));
            transform(event);
        });

        container.bind("transformend", function(event) {
            previousScaleFactor = scaleFactor;
        });


        /**
        * on drag
       
        var dragview = new DragView($(container));
        container.bind("dragstart", $.proxy(dragview.OnDragStart, dragview));
        container.bind("drag", $.proxy(dragview.OnDrag, dragview));
        container.bind("dragend", $.proxy(dragview.OnDragEnd, dragview));

        setInterval($.proxy(dragview.WatchDrag, dragview), 10);
 */


        function transform(e) {
            //We're going to scale the X and Y coordinates by the same amount
            var cssScale = "scaleX("+ scaleFactor +") scaleY("+ scaleFactor +")";

            element.css({
                webkitTransform: cssScale,
                webkitTransformOrigin: cssOrigin,

                transform: cssScale,
                transformOrigin: cssOrigin,
            });

            
        }

    }