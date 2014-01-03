$(function(){	
	var aside = $('.wrapperResultFilter').find('aside');	
	var amountAside = aside.lenght;	
	var arrayHeight = [];	
	aside.each(function(){
		arrayHeight.push($(this).height());
		arrayHeight.sort();
	});	
	var arrLength = arrayHeight.length - 1;	
	var heightAside = arrayHeight[arrLength];
	aside.css('height', heightAside);
});

var today = new Date();
var todayNumber = today.getDate();
var $imgNew = $('.iconNew');
var count = 30 * 24*60*60*1000;

$imgNew.each(function(){
    var thisLi = $(this);
    var number = thisLi.data('date');
    var imgDate = new Date(number);
    var balance = today - imgDate;
    if(balance > count){
    	thisLi.hide();
    }
});

$(function(){		
	var $linksFilter = $('.multiLevelMenu').find('a');  
	var $allCompany = $('.wrapperResultFilter').find('li'); 
	$linksFilter.bind('click', function(event){	
		var thisLink = $(this);	
		var hasClassActive = thisLink.hasClass('active');	
		var actLink = $linksFilter.filter('.active');	
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