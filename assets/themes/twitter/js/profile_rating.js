$(function(){

        var blockRating = $('.blockRating');

        var wrapperReviews = $('.wrapperReviews');

        blockRating.each(function(){  //1

            var dataRating = $(this).find('.rating').data('rating').split(';');

            var lengthDataRating = dataRating.length;

            // start raring Square
            var $arrUl = $(this).find('.ratingSquare'); // array ul

            $arrUl.each(function(indx){

                var $arrLi = $(this).find('li');

                var index = $arrUl.index();

                var dataValue = dataRating[indx];

                for(var i=0; i<dataValue; i++){

                    $arrLi.eq(i).addClass('active');

                }

            });
            // end raring Square


            // start raring Stars

            starRating(dataRating);   //function summation stars

            $(this).find('.amoutStars').text(result);

            var stars = $(this).find('.ratingStar li');

            //showing stars
            showStars(stars);

            stars.each(function(indx){

                 if(indx < result){

                    $(this).addClass('active');

                }

            });

            // end raring Stars

        });

        //showing stars
        function showStars(element){

            element.each(function(indx){

                 if(indx < result){

                    $(this).addClass('active');

                }

            });

        };

        //function summation stars
        function starRating(arr){

            var a = arr;

            var li = a.length;

            for(var sun = 0, i = 0; i < li; i++){

                var value = parseFloat(a[i]);

                sun += value;
            }

            resultSun = sun / li;

            //result = Math.round(resultSun);
            result = (resultSun).toFixed(1);

            return result;
        };


        //start Global sum
        function globalSum(){

            var globalArrStars = [];

            blockRating.find('.amoutStars').each(function(){

                globalArrStars.push($(this).text());

            });

            return globalArrStars;

        };


        function showGlobalStars(element){

            element.each(function(indx){

                 if(indx < Math.round(resultGlobalSumStars)){

                    $(this).addClass('active');

                }

            });

        };

        //start setting result rating
        var arrGlobalSum = globalSum();  //["4.8", "3.5"]

        //console.log(arrGlobalSum);  //["4.8", "3.5"]

        var resultGlobalSumStars = starRating(arrGlobalSum);

        wrapperReviews.find('.amoutStars').text(resultGlobalSumStars);

        var globalStars = wrapperReviews.find('.ratingStar li');

        //showing stars
        showGlobalStars(globalStars);

        //start setting result rating

        //End Global sum


        //start create parameters for diagram

        var arrQuality = [];
        arrExpertise = [],
        arrCost = [],
        arrSchedule = [],
        arrResponse = [],
        arrProfessional = [];


        var arrRating = blockRating.find('.rating');

        arrRating.each(function(){

            var arrData = $(this).data('rating').split(';');

            var lengthData = arrData.length;

            for(var i=0; i<lengthData; i++) {

                var k = arrData[i];

                switch (i) {

                    case 0:
                    arrQuality.push(k);
                    break

                    case 1:
                    arrExpertise.push(k)
                    break

                    case 2:
                    arrCost.push(k)
                    break

                    case 3:
                    arrSchedule.push(k)
                    break

                    case 4:
                    arrResponse.push(k)
                    break

                    case 5:
                    arrProfessional.push(k)
                    break
                };

            };

        });

        //start setting
        var quality = starRating(arrQuality);
        var expertise = starRating(arrExpertise);
        var cost = starRating(arrCost);
        var schedule = starRating(arrSchedule);
        var response = starRating(arrResponse);
        var professional = starRating(arrProfessional);

       /* draw = [
             [
               {axis: "Quality", value: quality},
               {axis: "Expertise", value: expertise},
               {axis: "Cost", value: cost},
               {axis: "Schedule", value: schedule},
               {axis: "Response", value: response},
               {axis: "Professional", value: professional}
              ]
        ];

        RadarChart.draw("#chart", draw);
        //end create parameters for diagram*/






            var radarChartData = {
            labels : ["Quality","Expertise","Cost","Schedule","Response","Professional"],
            datasets : [
                {
                    fillColor : "#a8c6ea",
                    strokeColor : "#538fd5",
                    pointColor : "#538fd5",
                    pointStrokeColor : "#3d78bc",
                    data : [quality,expertise,cost,schedule,response,professional]
                }
            ]

        }

    var myRadar = new Chart(document.getElementById("canvas").getContext("2d")).Radar(radarChartData,{scaleShowLabels : false, pointLabelFontSize : 10});

















    });

























