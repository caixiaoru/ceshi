 var evt = "onorientationchange" in window ? "orientationchange" : "resize";
    window.addEventListener(evt, function() {

        var width = document.documentElement.clientWidth;
        var height =  document.documentElement.clientHeight;
        var height2=$('#body').prop('scrollHeight');
        console.log(height2);
        $print =  $('#body');
        if( width > height ){

            $print.width(width);
            $print.height(height);
            $print.css('top',  0 );
            $print.css('left',  0 );
            $print.css('transform' , 'none');
            $print.css('transform-origin' , '50% 50%');
            console.log(1);
        }
        else{
            $print.width(height);
            $print.height(height2);
            $print.css('top',  (height-height2)/2 );
            $print.css('left',  0-(height-height2)/2 );
            $print.css('transform' , 'rotate(270deg)');
            $print.css('transform-origin' , '50% 50%');
            console.log(2);
        }

    }, false);
