$(function() {
	var $cdpStepBtn = $('.cdp-step'),
		$cdpArrow = $('.cdp-path-arrow'),
		$cdpStepAnchors = $('[name="cdp-steps-section"]').not(':hidden').find('.cdp-step-anchor'),
		top1 = $($cdpStepAnchors[0]).offset().top,
		top2 = $($cdpStepAnchors[1]).offset().top,
		top3 = $($cdpStepAnchors[2]).offset().top,
		top4 = $($cdpStepAnchors[3]).offset().top;

	function highlightStep(step) {
		var activeStep = $cdpArrow.data('activeStep');
		$cdpArrow.removeClass('step' + activeStep);
		$cdpArrow.addClass('step' + step);
		$cdpArrow.data('activeStep', step);
		console.log('step = ' + step);
	}

	$cdpStepBtn.on('click', function(event) {
		var step = $(this).data('step');
		console.log($cdpStepAnchors.length);
		$.each($cdpStepAnchors, function() {
			if ($(this).data('step') === step) {
				var destination = $(this).offset().top;
				$("html, body").animate({ scrollTop: destination}, 500 );
			}
		});
		highlightStep(step);
	});

	 $(window).scroll(function() {
	   	var scrollTop = $(window).scrollTop() + $(window).height();
	   	if(scrollTop < top2) {
	   		highlightStep(1);
	   	} else if(scrollTop >= top2 && scrollTop < top3) {
	    	highlightStep(2);
		} else if(scrollTop >= top3 && scrollTop < top4) {
	    	highlightStep(3);
		} else {
	    	highlightStep(4);
		}
	  });
});