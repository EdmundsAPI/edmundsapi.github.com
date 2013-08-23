function Slider() {	
	var step = -383;	
	var $slides = $('.sliderNVC').find('ul');	
	var amountSlides = $slides.find('li').length;	
	var count = 1;	
	var timeInterval = 3000;		
	var $markers = $('.markerConf');	
	var $tips = $('.tips');	
	var sliderHover = $('.sliderNVC, .markerConf, .tips');	
	
	// autoSlide
	var intervalID;

	var interval = function(timeInterval){
		intervalID = setInterval(function(){		
			upSlider();
		}, timeInterval);
	}
	
	var addEventHandlers = function() {
		$('#downSlideNVC').click(function(){ //down Slide		
			downSlider();
		});
		
		
		$('#upSlideNVC').click(function(){ //up Slide		
			upSlider();
		});

		sliderHover.mouseenter(function(){  //stop
			clearInterval(intervalID); 		
			
		});

		sliderHover.mouseout(function(){  //start		
			interval(timeInterval);		
		});

		$('body').click(function(){
			closeAll ();
		});

	
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
	
	};

	this.start = function() {
		addEventHandlers();
		interval(timeInterval); //autoStart
	}


	
	// clear
	var closeAll = function (){
		$tips.fadeOut(200);
		$markers.removeClass('active');
	};
	

	
	
	
	// Moving Markers (animate)
	
	var animateMarkers = function(mark1Top, mark2Top, mark3Top, mark4Top, mark5Top, tip1Top, tip2Top, tip3Top, tip4Top, tip5Top, slidePoint1, slidePoint2, slidePoint3) {
		console.log("NVC animate markers");	
		var mark1 = $('.mark1');
	    var mark2 = $('.mark2');
	    var mark3 = $('.mark3');
	    var mark4 = $('.mark4');
	    var mark5 = $('.mark5');
	    
	    var tip1 = $('.tip1');
      	var tip2 = $('.tip2');
      	var tip3 = $('.tip3');
      	var tip4 = $('.tip4');
      	var tip5 = $('.tip5');
		mark1.animate({top: mark1Top}, 700);
		mark2.animate({top: mark2Top}, 700);
		mark3.animate({top: mark3Top}, 700);
		if(count == 1) {
			mark4.fadeIn(1000).animate({top: mark4Top});
			mark5.fadeIn(1000).animate({top: mark5Top});
		} else {
			mark4.fadeOut(1000);
			mark5.fadeOut(1000);
		}		
		
		tip1.css('top', tip1Top);
		tip2.css('top', tip2Top);
		tip3.css('top', tip3Top);
		tip4.css('top', tip4Top);
		tip5.css('top', tip5Top);
		
		//slidePoint1.css('background-position', '0 -'+ slidePoint1);
		//slidePoint2.css('background-position', '0 -'+ slidePoint2);
		//slidePoint3.css('background-position', '0 -'+ slidePoint3);
	};
	
	var moveMark = function(){ 
      	var slidePoint1 = $('.slidePoint1');
		var slidePoint2 = $('.slidePoint2');
		var slidePoint3 = $('.slidePoint3');
			
		switch  (count) {			
			case 1:			
				animateMarkers(66, 131, 196, 257, 318, 59, 124, 189, 250, 311, 30, 45, 45);
				
				slidePoint1.css({'background-position': '0 -30px'});
				slidePoint2.css({'background-position': '0 -45px'});
				slidePoint3.css({'background-position': '0 -45px'});
				break				
			case 2:			
				animateMarkers(46, 119, 307, undefined, undefined, 40, 113, 300, undefined, undefined, 45, 30, 45);
				
				slidePoint1.css({'background-position': '0 -45px'});
				slidePoint2.css({'background-position': '0 -30px'});
				slidePoint3.css({'background-position': '0 -45px'});
				break				
			case 3:				
				animateMarkers(8, 210, 275, undefined, undefined, 3, 203, 268, undefined, undefined, 45, 45, 30);
				
				slidePoint1.css({'background-position': '0 -45px'});
				slidePoint2.css({'background-position': '0 -45px'});
				slidePoint3.css({'background-position': '0 -30px'});
				break			
		};		
	};


	var upSlider = function() {
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
	
	var downSlider = function() {
		closeAll ();
				
		if (count > 1) {
			
			$slides.animate({top: '-=' + step + ''}, 400);
			count--;
			
		} else {			
			$slides.animate({top: -766}, 400);
			count = amountSlides;
			
		};
		
		
		moveMark()
	};
}