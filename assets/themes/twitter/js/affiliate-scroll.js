$(function () {
	
	var $topPanel = $('.affiliate-steps-panel'),
	    $page = $('.pageAffilligNet'),
	    $h1Title = $('.h1Title'),
		panelHeight = $topPanel.height(),
		lastScroll = 0,
		isPanelVisible = true;

	$page.addClass('fixed');

	$(window).scroll(function(event) {
		var scrollTop = $(window).scrollTop();
		console.log(scrollTop);
		if(isPanelVisible) {
			if(scrollTop >= panelHeight) {
				// hide panel
				isPanelVisible = false;
				$topPanel.css('display', 'none');
				$h1Title.removeClass('no-border');
				$page.removeClass('fixed');
				$page.addClass('non-fixed');
			}
		} else {
			if(scrollTop < panelHeight) {
				isPanelVisible = true;
				$topPanel.css('display', 'block');
				$h1Title.addClass('no-border');
				$page.removeClass('non-fixed');
				$page.addClass('fixed');
			}
		}
	});

});