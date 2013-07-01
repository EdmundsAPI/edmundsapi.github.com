
	var step = -316;
	
	var $slides = $('.sliderTMV').find('ul');
	
	var amountSlides = $slides.find('li').length;
	
	//console.log(amountSlides);
	
	var count = 1;
	
	$('#downSlide').click(function(){
		
		if (count < amountSlides) {
			
			$slides.animate({top: '+=' + step + ''}, 400);
			count++;

		} else {
			
			$slides.animate({top: 0}, 400);
			count = 1;
			
		};	
		
	});
	
	
	$('#upSlide').click(function(){
		
		if (count > 1) {
			
			$slides.animate({top: '-=' + step + ''}, 400);
			count--;
			
		} else {
			
			$slides.animate({top: -632}, 400);
			count = amountSlides;
			
		};

	});
	



