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



	
	


		
