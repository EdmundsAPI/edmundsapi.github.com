function scrollTo(element){

		var elementClick = element.attr("href");
		
		var cutElementClick = elementClick.substring(1);
		
		var destination = $('a[name="'+ cutElementClick +'"]').offset().top;
		
		$("html, body").animate({ scrollTop: destination}, 500 );
		
		return false;

};