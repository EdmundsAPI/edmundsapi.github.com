/**
 * Created by Ivan_Kauryshchanka on 10/16/2014.
 */
(function($){
    var step = -316;

    var $slides = $('.sliderGlance').find('ul');

    var amountSlides = $slides.find('li').length;

    var count = 1;

    var timeInterval = 3000;

    var $markers = $('.sectiobSliderGlance .markerConf');

    var $tips = $('.sectiobSliderGlance .tips');

    var sliderHover = $('.sliderGlance, .sectiobSliderGlance .markerConf, .sectiobSliderGlance .tips');


// autoSlide
    var intervalID;

    function interval(timeInterval){
        intervalID = setInterval(function(){
            upSlider();
        }, timeInterval);
    }


    sliderHover.mouseenter(function(){  //stop

        clearInterval(intervalID);

    });

    sliderHover.mouseout(function(){  //start

        if(intervalID) {
            clearInterval(intervalID);
        }

        interval(timeInterval);

    });


// click on the arrows

    $('#downSlide').click(function(){ //down Slide
        clearInterval(intervalID);
        downSlider();
        interval(timeInterval);
    });


    $('#upSlide').click(function(){ //up Slide
        clearInterval(intervalID);
        upSlider();
        interval(timeInterval);

    });


// Markers and tips

// Click to markers
    $markers.click(function(event){

        var thisMark = $(this);


        if(thisMark.hasClass('active')){

            thisMark.removeClass('active');

            $tips.fadeOut(200);

        } else {

            $markers.each(function(){

                $(this).removeClass('active');

            });

            thisMark.addClass('active');

            var indexThis = thisMark.attr('data-num'); //data-num

            $tips.fadeOut(200);

            $tips.each(function(){

                var attrDataSlide = $(this).attr('data-slide'); //data-slide

                var attrDataNum = $(this).attr('data-num'); //data-num'

                if(attrDataSlide == count && attrDataNum == indexThis) {

                    $(this).fadeIn(600);
                }

            });

        }

        event.stopPropagation();

    });


// clear
    function closeAll (){
        $tips.fadeOut(200);
        $markers.removeClass('active');
    };

    $('body').click(function(){
        closeAll ();
    });



// Moving Markers (animate)

    function animateMarkers(mark1Top, mark2Top, mark3Top, mark4Top, tip1Top, tip2Top, tip3Top, tip4Top, slidePoint1, slidePoint2, slidePoint3) {
        var mark1 = $('.mark1');
        var mark2 = $('.mark2');
        var mark3 = $('.mark3');
        var mark4 = $('.mark4');
        var tip1 = $('.tip1');
        var tip2 = $('.tip2');
        var tip3 = $('.tip3');
        var tip4 = $('.tip4');
        mark1.animate({top: mark1Top}, 400);
        mark2.animate({top: mark2Top}, 400);
        mark3.animate({top: mark3Top}, 400);
        if(count == 1) {
            mark4.fadeIn(1000).animate({top: mark4Top});
        } else {
            mark4.fadeOut(1000);
        }


        tip1.css('top', tip1Top);
        tip2.css('top', tip2Top);
        tip3.css('top', tip3Top);
        tip4.css('top', tip4Top);

        //slidePoint1.css('background-position', '0 -'+ slidePoint1);
        //slidePoint2.css('background-position', '0 -'+ slidePoint2);
        //slidePoint3.css('background-position', '0 -'+ slidePoint3);

    };

    function moveMark(){

        var slidePoint1 = $('.slidePoint1');
        var slidePoint2 = $('.slidePoint2');
        //var slidePoint3 = $('.slidePoint3');


        switch  (count) {

            case 1:

                animateMarkers(73, 138);

                slidePoint1.css({'background-position': '0 -30px'});
                slidePoint2.css({'background-position': '0 -45px'});
                //slidePoint3.css({'background-position': '0 -45px'});
                break;

            case 2:

                animateMarkers(5, 114);

                slidePoint1.css({'background-position': '0 -45px'});
                slidePoint2.css({'background-position': '0 -30px'});
                //slidePoint3.css({'background-position': '0 -45px'});
                break;
        }

    }

//click on the dots of the slider
    $('.wrapperSliderGlance .pointSlider').on('click', function(){

        clearInterval(intervalID);

        count = $(this).data('number');

        closeAll();

        switch (count) {
            case 1:  $slides.animate({top: 0 }, 400); break;
            case 2:  $slides.animate({top: step*(count-1) }, 400); break;
            case 3:  $slides.animate({top: step*(count-1) }, 400); break
        }

        moveMark();

        interval(timeInterval);
    });


    function upSlider() {
        closeAll ();

        if (count < amountSlides) {

            $slides.animate({top: '+=' + step + ''}, 400);
            count++;

        } else {

            $slides.animate({top: 0}, 400);
            count = 1;

        };


        moveMark()

    };

    function downSlider() {
        closeAll ();


        if (count > 1) {

            $slides.animate({top: '-=' + step + ''}, 400);
            count--;

        } else {

            $slides.animate({top: -316}, 400);
            count = amountSlides;

        };


        moveMark()
    };
})(jQuery)
