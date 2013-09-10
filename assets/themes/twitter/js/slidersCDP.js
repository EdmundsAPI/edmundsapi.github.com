$(function(){
    var step = 143;

    var buttonSlider = $('.buttonSlider');

    var wrapSlider = $('.wrapSlider');

    var wrapperResultFilter = $('ul.wrapperResultFilter');

    var $company = $('.wrapperResultFilter li');

    var countCompany = $company.length;

    var widthUl = wrapperResultFilter.css('width', step*countCompany);

    var maxHeight = wrapperResultFilter.height();

    wrapSlider.height(maxHeight);

    // click buttonSlider
    function stepNext(){

        var posLeft = wrapperResultFilter.css('left');

        var widthUl = "-" + wrapperResultFilter.css('width');

        var resultWidthUl = (parseInt(widthUl.slice(0,-2)) + 143) + 'px';

        console.log(posLeft +'==' +resultWidthUl);

        if(posLeft == resultWidthUl){

            wrapperResultFilter.css('left', 0);

        } else {

            wrapperResultFilter.animate({
                'left': '-=143'
            },0);

        }

    };

    function stepBack(){

        var posLeft = wrapperResultFilter.css('left');

        var widthUl = "-" + wrapperResultFilter.css('width');

        var resultWidthUl = parseInt(widthUl.slice(0,-2)) + 143;

        if(posLeft == '0px'){

            wrapperResultFilter.css('left', resultWidthUl);

        } else {

            wrapperResultFilter.animate({
                'left': '+=143'
            },0);

        }

    };


    $('.linkNext').on('click', function(){

        stepNext();

    });

    $('.linkBack').on('click', function(){

        stepBack();

    });


});
