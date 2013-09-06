$(function(){
	
	
	//Set default active links top menu 
	function acrivation_link(){
		//top menu
		var linkHeaderMenu = $('.headerMenu').find('a');
		
		var valueActiveTopMenu = $('#h1Title').text();
		
		var amountLinks = linkHeaderMenu.length;
		
		for (var i=0; i<=amountLinks; i++) {
			
			var valTitle = linkHeaderMenu.eq(i).attr('title');
			if(valTitle == valueActiveTopMenu) {
				
				linkHeaderMenu.eq(i).addClass('active');
			}
		}
	};
	acrivation_link();
	
	
	//color code
	function color_code(){
		$('pre').addClass('prettyprint');
		$('pre').addClass('linenums');
	}
	color_code();
	
	
	
});

	

	
	


		
