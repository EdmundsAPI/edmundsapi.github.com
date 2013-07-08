
	var step = -316;
	
	var $slides = $('.sliderTMV').find('ul');
	
	var amountSlides = $slides.find('li').length;
	
	var count = 1;
	
	var timeInterval = 3000;
		
	var $markers = $('.markerConf');
	
	var $tips = $('.tips');
	
	var sliderHover = $('.sliderTMV, .markerConf, .tips');
	
	
	// autoSlide
	var intervalID;
	
	function interval(timeInterval){
		intervalID = setInterval(function(){		
			upSlider();
		}, timeInterval);
	}
	
	interval(timeInterval); //autoStart
		
	sliderHover.mouseenter(function(){  //stop

		clearInterval(intervalID); 			
		
	});

	sliderHover.mouseout(function(){  //start
		
		interval(timeInterval);
		
	});


	// click on the arrows
	
	$('#downSlide').click(function(){ //down Slide
		
		downSlider();
		
	});
	
	
	$('#upSlide').click(function(){ //up Slide
		
		upSlider();
		
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
		mark1.animate({top: mark1Top}, 700);
		mark2.animate({top: mark2Top}, 700);
		mark3.animate({top: mark3Top}, 700);
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
		var slidePoint3 = $('.slidePoint3');
			

		switch  (count) {
			
			case 1:
			
				animateMarkers(73, 138, 199, 260, 66, 131, 192, 253, 30, 45, 45);
				
				slidePoint1.css({'background-position': '0 -30px'});
				slidePoint2.css({'background-position': '0 -45px'});
				slidePoint3.css({'background-position': '0 -45px'});
				break
				
			case 2:
			
				animateMarkers(5, 114, 187, undefined, -2, 107, 180, undefined, 45, 30, 45);
				
				slidePoint1.css({'background-position': '0 -45px'});
				slidePoint2.css({'background-position': '0 -30px'});
				slidePoint3.css({'background-position': '0 -45px'});
				break
				
			case 3:
				
				animateMarkers(18, 79, 144, undefined, 11, 72, 137, undefined, 45, 45, 30);
				
				slidePoint1.css({'background-position': '0 -45px'});
				slidePoint2.css({'background-position': '0 -45px'});
				slidePoint3.css({'background-position': '0 -30px'});
				break
			
		};
		
	};


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
			
			$slides.animate({top: -632}, 400);
			count = amountSlides;
			
		};
		
		
		moveMark()
	};











































