$(function() {
	var $cdpStepBtn = $('.cdp-step'),
		$cdpArrow = $('.cdp-path-arrow'),
		$cdpSection = $('.cdp_section'),
		$cdpStepAnchors = $('[name="cdp-steps-section"]').not(':hidden').find('.cdp-step-anchor'),
		$stepContent = $('.stepContent'),
		top1,
		top2,
		top3,
		top4,
		startTop1,
		startTop2,
		startTop3,
		startTop4,
		startTopArray = [startTop1, startTop2, startTop3, startTop4],
		lastScroll = 0,
		scrollSpeed = .6,
		arrowScrollSpeed = 0.06,
		scrollStep = 55,
		windowScrollTop = $(window).scrollTop(),
		scrollDistance = 0;

	var activeContent = $('.activeToggle').data('activeContent');
	setStartHeights(activeContent);

	$('#menu').on('click', 'a', function() {
		var link = $(this).data('link');
		var activeContent = $(this).data('activeContent');
		$('.cdp-path-image').removeClass('devImage').removeClass('bOwnerImage').addClass(link+'Image');
		setStartHeights(activeContent);
	});

	function setStartHeights(activeContent) {
		var $outerSteps = $('.'+ activeContent).find('.outerStep');

		$outerSteps.each(function() {
			var blockHeight = $(this).find('.wrapperStep').height(),
				windowHeight = $(window).height(),
				top = blockHeight < windowHeight ? (windowHeight - blockHeight) / 2 : 0;
			console.log(activeContent);
			console.log('height = ' + blockHeight);		
			console.log('window height = ' + windowHeight);
			$(this).css('height', blockHeight < windowHeight ? windowHeight : blockHeight);

			$(this).find('.wrapperStep').css('height', blockHeight);	
			$(this).find('.wrapperStep').css('top', top).css('position', 'absolute');
			$(this).find('.stepContent').css('position', 'absolute');

			top1 = $($cdpStepAnchors[0]).offset().top;
			top2 = $($cdpStepAnchors[1]).offset().top;
			top3 = $($cdpStepAnchors[2]).offset().top;
			top4 = $($cdpStepAnchors[3]).offset().top;
			startTop1 = $($stepContent.filter('[name="step-content-1"]')[0]).css('top').split('px')[0];
			startTop2 = $($stepContent.filter('[name="step-content-2"]')[0]).css('top').split('px')[0];
			startTop3 = $($stepContent.filter('[name="step-content-3"]')[0]).css('top').split('px')[0];
			startTop4 = $($stepContent.filter('[name="step-content-4"]')[0]).css('top').split('px')[0];
			startTopArray = [startTop1, startTop2, startTop3, startTop4];
		});
	}

	function highlightStep(step) {
		var activeStep = $cdpArrow.data('activeStep');
		$cdpArrow.removeClass('step' + activeStep);
		$cdpArrow.addClass('step' + step);
		$cdpArrow.data('activeStep', step);
	}

	function scrollStepContent(stepNumber, scrollDown) {
		var topPosition = $($stepContent.filter('[name="step-content-' + stepNumber + '"]')[0]).css('top').split('px')[0];
	   	//topPosition = scrollDown ? parseInt(topPosition, 10) + scrollStep :  parseInt(topPosition, 10) - scrollStep;
	   	topPosition = parseInt(topPosition, 10) + scrollDistance*scrollSpeed;
	   	if(topPosition < startTopArray[stepNumber - 1]) {
	   		topPosition = startTopArray[stepNumber - 1];
	   	}

	   	//highlightStep(stepNumber);
	   	$stepContent.filter('[name="step-content-' + stepNumber + '"]').css('top', topPosition + 'px');
	}

	function scrollArrow() {
		var	arrowTop = $cdpArrow.css('top').split('px')[0]
	   	arrowTop = parseInt(arrowTop, 10) + scrollDistance*arrowScrollSpeed;
	   	arrowTop = arrowTop > 158 ? 158 : arrowTop;
	   	arrowTop = arrowTop < 16 ? 16 : arrowTop;
	   	$cdpArrow.css('top', arrowTop + 'px');

	}

	$cdpStepBtn.on('click', function(event) {
		var step = $(this).data('step');
		$.each($cdpStepAnchors, function() {
			if ($(this).data('step') === step) {
				var destination = $(this).offset().top;
				$("html, body").animate({ scrollTop: destination}, 500 );				
			}
		});
		highlightStep(step);
		//$stepContent.css('top', '');
	});

	 $(window).scroll(function() {
	   	windowScrollTop = $(window).scrollTop();
	   	scrollDistance = windowScrollTop - lastScroll;
	   	var	scrollTop = windowScrollTop + $(window).height(),
	   		sectionTop = $cdpSection.offset().top,
	   		scrollDown = true;

	   	if (windowScrollTop > lastScroll){
             scrollDown = true;
          }
          else {
             scrollDown = false;
          }
          //Updates scroll position

	   	if(windowScrollTop >= sectionTop ) {
	   		$cdpSection.addClass('fixTitle');
	   	} else {
	   		$cdpSection.removeClass('fixTitle');	   		
	   	}

	   	
	   	if(lastScroll >= top1) {
	   		scrollStepContent(1, scrollDown);
	   	} 
	   	if(lastScroll >= top2) {
	    	scrollStepContent(2, scrollDown);
		} 
		if(lastScroll >= top3) {
	    	scrollStepContent(3, scrollDown);
		}

		if(lastScroll >= top1 && lastScroll < top4) {
			scrollArrow();
		}

		if(scrollDown === false) {
			if(windowScrollTop < top1 ) {
				var currentTop1 = $($stepContent.filter('[name="step-content-1"]')[0]).css('top').split('px')[0];
				if(currentTop1 > startTop1) {
		   			scrollStepContent(1, scrollDown);
		   		}
			}
			if(windowScrollTop < top2) {
				var currentTop1 = $($stepContent.filter('[name="step-content-2"]')[0]).css('top').split('px')[0];
				if(currentTop1 > startTop2) {
		   			scrollStepContent(2, scrollDown);
		   		}
			}
			if(windowScrollTop < top3) {
				var currentTop1 = $($stepContent.filter('[name="step-content-3"]')[0]).css('top').split('px')[0];
				if(currentTop1 > startTop3) {
		   			scrollStepContent(3, scrollDown);
		   		}
			}
		}

        lastScroll = windowScrollTop;

	});
});