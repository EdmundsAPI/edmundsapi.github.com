// CERTIFIED DEVELOPER NETWORK JS - START
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

	    var hrefLink = $(this).attr('href');

	    var classArrow = hrefLink.substr(1);

		var arrow = $('.arrow');

	   	arrow.removeAttr('class');

	    arrow.addClass('arrow '+ classArrow +'');
    });
}

$(function(){
	if ($('.discriptBlokBisOwner').length > 0) {
    	var discriptBlokBisOwner = $('.discriptBlokBisOwner');
	    var discriptBlokDev = $('.discriptBlokDev');
	    var blokHover = $('.blokHover');
	    var section2 = $('.section2');
	    var isOver = false;
    
	    function onMouseOver(){
	    	isOver = true;
	    	var thisClass = $(this).hasClass('leftBlock1');
	    	if (thisClass){
	    		section2.addClass('busOwnerActive');
	    	} else {
	    		section2.addClass('developerActive');
	    	}
	    };
    
	    function onMouseLeave(){
	    	isOver = false;
			$('.discriptBlokBisOwner, .discriptBlokDev').on('mouseover', function(){
	    		 isOver = true;
	    	});
    
	    	setTimeout(function(){
				if(isOver == false){
					section2.removeClass('busOwnerActive developerActive');
				}
	    	}, 100);
	    };
    
	    blokHover.on('mouseover', onMouseOver).on('mouseleave', onMouseLeave);
	    $('.discriptBlokBisOwner, .discriptBlokDev').on('mouseleave', function(){
	    	section2.removeClass('developerActive busOwnerActive');
	    });
	}
});

// CERTIFIED DEVELOPER NETWORK JS - END


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