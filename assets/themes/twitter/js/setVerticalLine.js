$(function() {
	var $verticalLine = $('.lineVertical'),
		$header = $('.pushTop'),
		$title = $('.h1Title');

	$(window).load(function() {
		var height = $header.outerHeight() + $title.outerHeight();
		$verticalLine.css({ top: height + 'px' });
	});

	$(window).resize(function(){
		var height = $header.outerHeight() + $title.outerHeight();
		$verticalLine.css({ top: height + 'px' });		
	});
})
