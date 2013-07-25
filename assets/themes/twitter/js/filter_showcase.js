$(function(){
		
	var $linksFilter = $('.multiLevelMenu').find('a');  
	var $allCompany = $('.wrapperResultFilter').find('li'); 
	
	

	$linksFilter.bind('click', function(event){
		
		var thisLink = $(this);
		
		var hasClassActive = thisLink.hasClass('active');
		
		var actLink = $('.active');
		
		var dataLink = thisLink.data('filter');

		if(!hasClassActive) {
			
			actLink.removeClass('active');  
			thisLink.addClass('active');  
		} else {
			return false;
		}
		
		$allCompany.animate({
			'margin-top': '-30px',
			'opacity':0
		}, 300).fadeOut(0);
		

		var lengthLi = $allCompany.length;
	 
	    for(var i = 0; i < lengthLi; i++) {
	    	
        	var element =  $allCompany.eq(i);
        	var hasFilterName = element.hasClass(dataLink);
        	
        	if(hasFilterName) {
		        $(element).fadeIn(0).delay(70 * i).animate({'margin-top': 0,opacity: 1},100); 
	        }
	    };

		event.preventDefault();
		
	});
});