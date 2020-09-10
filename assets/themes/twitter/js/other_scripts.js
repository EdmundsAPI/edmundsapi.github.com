// FAQ - START

$(function(){
	if ($('#faq-1').length > 0) {
 		function scrollTo(element){
			var elementClick = element.attr("href");
			var cutElementClick = elementClick.substring(1);
			var destination = $('[name="'+ cutElementClick +'"]').offset().top;
			$("html, body").animate({ scrollTop: destination}, 500 );
			return false;
		};

	  	$("a").on('click', function (element) {
	   		var thisLink = $(this);
	   		scrollTo(thisLink);
	  	});
	}
});
// FAQ - END

// WIDGETS AND APPS - START
if ($('.carousel-indicators').length > 0) {
	$('.carousel-indicators a').bind('click.tabLink', function(){

		var wrapperWidget= $('#wrapperWidget');
	 	var hrefThis = $(this).attr('href');
	 	var classWrapp = hrefThis.substr(1);
	 	wrapperWidget.removeAttr('class');
	 	wrapperWidget.addClass(classWrapp);

	});

	$('.carousel').carousel({
		pause: true,
		interval: false
	});
}
// WIDGETS AND APPS - END

if ($('.carousel').length > 0) {

    $('.carousel').carousel({
	    pause: true,
		interval: false
    });

    $('.carousel').on('slide', function(event) {
    	var slideNumber = $(event.relatedTarget).data('itemNumber');
    	$('.app-picture.active').fadeOut(500, function() {
    		$(this).removeClass('active');
    		$('[data-slide-number="'+ slideNumber +'"]').addClass('active');
    	});
    	$('[data-slide-number="'+ slideNumber +'"]').fadeIn(500);
    });
}

if ($('#myTab').length > 0) {
    $('#myTab a').click(function (e) {
	    e.preventDefault();
	    $(this).tab('show');

	    //moving arrow
		if ($('.arrow').length > 0) {
	    	var hrefLink = $(this).attr('href');
		    var classArrow = hrefLink.substr(1);
			var arrow = $('.arrow');
		   	arrow.removeAttr('class');
		    arrow.addClass('arrow '+ classArrow +'');
		}
	});
}

// WIDGETS - START

$(function() {
	if ($('.paging-indicators').length > 0) {
    	var footerHeight = $('.footerLayout').height(),
	       	footer = $('.footerLayout'),
	   		fixedPanel = $('.footer-section'),
	   		slider = new Slider(),
	   		$prev = $('[name="left-carousel"]'),
	   		$next = $('[name="right-carousel"]'),
	   		$prevWrap = $('.prev-wrap'),
	   		$nextWrap = $('.next-wrap'),
	   		$prevShadow = $prevWrap.find('.white-shadow'),
	   		$nextShadow = $nextWrap.find('.white-shadow'),
	   		$pagingIndicators = $('.paging-indicators'),
	   		$sectionHeader = $('.section-header'),
	   		carousel = new CarouselNVC($('[name="main-carousel"]'), $pagingIndicators, $sectionHeader),
	   		leftCarousel = new CarouselNVC($prev),
	   		rightCarousel = new CarouselNVC($next),
	   		$pager = $('.nvc-pager'),
	   		$pagerLeft = $pager.find('.left'),
	   		$pagerRight = $pager.find('.right'),
	   		$marker = $('[class*="marker"]'),
	   		$popups = $('.info-popup'),
	   		height;

	  	fixedPanel.removeClass('fixed');
	  	height = $(document).height();
	  	if((height - $(window).height()) > footerHeight) {
	  		fixedPanel.addClass('fixed');
	  	}

	  	function showElement(el) {
	  		el.removeClass('hide');
	  	}
	  	function hideElement(el) {
	  		el.addClass('hide');
	  	}
	  	function movePrev(event) {
			var leftIndex = $prev.find('.active').data('step'),
				rightIndex = $next.find('.active').data('step');

			event.preventDefault();
			if( leftIndex==0 ) {
				$pagerLeft[0].style.display = "none";
				$prevWrap.addClass('empty-nav');
				$prevShadow.fadeOut(600);
			}
			if(rightIndex == -1) {
				$nextShadow.fadeIn(600);
			}
			carousel.prev();
			leftCarousel.prev();
			rightCarousel.prev();

			$pagerRight[0].style.display = "";
			$nextWrap.removeClass('empty-nav');
	  	}
	  	function moveNext(event) {
			var leftIndex = $prev.find('.active').data('step'),
				rightIndex = $next.find('.active').data('step');

			event.preventDefault();
			if( rightIndex==2 ) {
				$pagerRight[0].style.display = "none";
				$nextWrap.addClass('empty-nav');

				$nextShadow.fadeOut(600);
			}
			if(leftIndex == -1) {
				$prevShadow.fadeIn(600);
			}
			carousel.next();

			rightCarousel.next();
			leftCarousel.next();
			$pagerLeft[0].style.display = "";
			$prevWrap.removeClass('empty-nav');
	  	}

	  	$prevWrap.on('mouseenter', function() {
	  		var active = $prev.find('.active').data('step');
	  		if(active >= 0) {
	  			showElement($pagerLeft);
	  		}
	  	});
	  	$prevWrap.on('mouseleave', function() {
	  		var active = $prev.find('.active').data('step');
	  		if(active >= 0) {
	  			hideElement($pagerLeft);
	  		}
	  	});
	  	$pagerLeft.on('mouseenter', function() {
	  		showElement($pagerLeft);
	  	});
	  	$pagerRight.on('mouseenter', function() {
	  		showElement($pagerRight);
	  	});

	  	$nextWrap.on('mouseenter', function() {
	  		var active = $next.find('.active').data('step');
	  		if(active >= 0) {
	  			showElement($pagerRight);
	  		}
	  	});
	  	$nextWrap.on('mouseleave', function() {
	  		var active = $next.find('.active').data('step');
	  		if(active >= 0) {
	  			hideElement($pagerRight);
	  		}
	  	});

	  	$(window).scroll(function() {
	   		var scrollBottom = height - ($(window).scrollTop() + $(window).height());
	   		if(scrollBottom > footerHeight) {
	    		fixedPanel.addClass('fixed');
	    		footer.addClass('hide');
			}
			else {
	    		fixedPanel.removeClass('fixed');
	    		footer.removeClass('hide');
	   		}
	  	});


		slider.start();

		// Carousel for section 1

		$prevWrap.on('click', function(event) {
	  		var active = $prev.find('.active').data('step');
	  		if(active >= 0) {
				movePrev(event);
			}
		});
		$pager.find('.left').on('click', function(event) {
	  		var active = $prev.find('.active').data('step');
	  		if(active >= 0) {
				movePrev(event);
			}
		});
		$nextWrap.on('click', function(event) {
	  		var active = $next.find('.active').data('step');
	  		if(active >= 0) {
				moveNext(event);
			}
		});
		$pager.find('.right').on('click', function(event) {
	  		var active = $next.find('.active').data('step');
	  		if(active >= 0) {
				moveNext(event);
			}
		});
		$pagingIndicators.on('click', 'li', function() {
			var $el = $(this),
				toStep = $el.data('step'),
				activeStep = $('[name="main-carousel"]').find('.active').data('step'),
				leftIndex = $prev.find('.active').data('step'),
				rightIndex = $next.find('.active').data('step');

			hideElement($pagerRight);
			hideElement($pagerLeft);

			if(toStep === activeStep) return;

			if(rightIndex === -1) {
				$nextShadow.fadeIn(600);
				$pagerRight[0].style.display = "";
			}
			if(leftIndex === -1) {
				$prevShadow.fadeIn(600);
				$pagerLeft[0].style.display = "";
			}
			if(toStep === 0) {
				$prevShadow.fadeOut(600);
				$pagerLeft[0].style.display = "none";
			}
			if(toStep === 2) {
				$nextShadow.fadeOut(600);
				$pagerRight[0].style.display = "none";
			}
			leftCarousel.to(toStep);
			carousel.to(toStep);
			rightCarousel.to(toStep + 1);
		});

		// Markers and popups
		$('.inner-marker').on('click', function(event) {
			var $el = $(this).parent(),
				markerNumber = $el.data('marker'),
				curStep = $el.data('step'),
				$allPopups = $('.popup-container').find('.info-popup');

			event.stopPropagation();
			$marker.removeClass('active');
			$el.addClass('active');
			$allPopups.fadeOut(500);
			$allPopups.each(function() {
				var thisNumber = $(this).data('marker'),
					thisStep = $(this).data('step');
				if(thisNumber === markerNumber) {
					if(thisStep === curStep ) {
						$(this).fadeIn(400);
					}
				}
			});
		});

		$popups.on('click', '.close-btn', function(event) {
			var $el = $(this);
			event.stopPropagation();
			$el.parent().fadeOut(100);
			$marker.removeClass('active');
		});

		$popups.on('click', function(event) {
			event.stopPropagation();
		});

		$('body').on('click', function() {
			$popups.fadeOut(100);
			$marker.removeClass('active');
		});
	}
});

$(function() {
	if ($('.btn-color-selector').length > 0) {
  		var footerHeight = $('.footerLayout').height(),
	   		footer = $('.footerLayout'),
			fixedPanel = $('.footer-section'),
			height,
			$title = $('.h1Title h1 span'),
			titleText = $title.html();

		titleText = titleText.replace(/®/g, '<sup>®</sup>');
		$title.html(titleText);

		fixedPanel.removeClass('fixed');
		height = $(document).height();

		if((height - $(window).scrollTop() - $(window).height()) > footerHeight) {
			fixedPanel.addClass('fixed');
		}

		$(window).scroll(function() {
		   	var scrollBottom = height - ($(window).scrollTop() + $(window).height());
		   	if(scrollBottom > footerHeight) {
		    	fixedPanel.addClass('fixed');
		    	footer.addClass('hide');
		   	}
		   	else {
		    	fixedPanel.removeClass('fixed');
		    	footer.removeClass('hide');
		   }
		 });
		$('.btn-color-selector').on('click', function() {
			var selectedColor;
			$('.btn-color-selector').removeClass('selected');
			$(this).addClass('selected');
			if($(this).hasClass('green')) {
				selectedColor = 'green';
			}
			else if($(this).hasClass('yellow')) {
			selectedColor = 'yellow';
			}
			else if($(this).hasClass('gray')) {
				selectedColor = 'gray';
			}

			$('.screen-bgnd').removeClass('yellow green gray').addClass(selectedColor);
		});
		interval(timeInterval);
	}
    $('.btn-glance-selector').on('click', function() {
        var selectedGlance;
        $('.btn-glance-selector').removeClass('selected');
        $(this).addClass('selected');
        if($(this).hasClass('rating')) {
            selectedGlance = 'rating';
        }
        else if($(this).hasClass('says')) {
            selectedGlance = 'says';
        }
        else if($(this).hasClass('reviews')) {
            selectedGlance = 'reviews';
        }
        else if($(this).hasClass('cost')) {
            selectedGlance = 'cost';
        }
        else if($(this).hasClass('photos')) {
            selectedGlance = 'photos';
        }

        $('.screen-bgnd').removeClass('rating says reviews cost photos').addClass(selectedGlance);
    });

});
// WIDGETS - END

$(function(){
	//Set default active links top menu
	function acrivation_link(){
		//top menu
		var linkHeaderMenu = $('.headerMenu').find('a');
		var valueActiveTopMenu = $('#h1Title').text().toLowerCase();
		var amountLinks = linkHeaderMenu.length;
		linkHeaderMenu.each(function(){
			var thisLink = $(this);
			var titleLink = thisLink.attr('title').toLowerCase();
			if (titleLink == valueActiveTopMenu) {
				thisLink.addClass('active');
				return false;
			};
		});
	};
	acrivation_link();

	//color code
	function color_code(){
		$('pre').addClass('prettyprint linenums');
	}
	color_code();
});

// Add Twitter to page
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");