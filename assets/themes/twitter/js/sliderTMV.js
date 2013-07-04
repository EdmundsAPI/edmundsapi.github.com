
	var step = -316;
	
	var $slides = $('.sliderTMV').find('ul');
	
	var amountSlides = $slides.find('li').length;
	
	//console.log(amountSlides);
	
	var count = 1;
	
	
	
	
	
	
	
		
		//setInterval(function(){
		//	var sliderAuto = true;
			
	//		$('.sliderTMV').bind('mouseover',function(event){
	 // 			console.log(sliderAuto);
				
	//			sliderAuto = false;  
				
	//			console.log(sliderAuto);
				
	//			return sliderAuto;
//			});
//			
//			if (sliderAuto == true) {
//				downSlide();
//			} else {
//				return false;
//			}
			
			
//		}, 20000);
	
	
	

	

	
	
	


	
	
	
	
	
	
	
	$('#downSlide').click(function(){
		
		downSlide();
		
	});
	
	
	$('#upSlide').click(function(){
		
		upSlider();
		
	});
	
	var $markers = $('.markerConf');
	var $tips = $('.tips');
	
	// Click to markers
	$markers.click(function(event){
		
		var thisMark = $(this); 
		
		
		if(thisMark.hasClass('active')){
			
			thisMark.removeClass('active');

		} else {
					
			$markers.each(function(){
				$(this).removeClass('active');
			});
			
			thisMark.addClass('active');
			
			var indexThis = thisMark.attr('data-num'); //data-num
			
			$tips.fadeOut(200);
			
			$tips.each(function(){
				var attrDataSlide = $(this).attr('data-slide'); //data-slide
				var attrDataNum = $(this).attr('data-num'); //data-num'

				if(attrDataSlide == count && attrDataNum == indexThis) {
					
					$(this).fadeIn(600);
				} 
				
			});

		}
		
		event.stopPropagation();
		
	});
	
	
	// clear
	$('body').click(function(){
		closeAll ();
	});
	
	function closeAll (){
		$tips.fadeOut(200);
		$markers.removeClass('active');
	};
	
	
	function moveMark(){
		
		var mark4 = $('.mark4');
		
		switch  (count) {
			
			case 1:
				//console.log(count==1);
				$('.mark1').animate({top: '73px'}, 700);
				$('.mark2').animate({top: '138px'}, 700);
				$('.mark3').animate({top: '199px'}, 700);
				if(mark4.css('display') == 'none') {
					$('.mark4').fadeIn(1000).animate({top: '260px'});
				}
				
				$('.tip1').css('top', '66px');
				$('.tip2').css('top', '131px');
				$('.tip3').css('top', '192px');
				$('.tip4').css('top', '253px');
				
				$('.slidePoint1').css('background-position', '0 -30px');
				$('.slidePoint2').css('background-position', '0 -45px');
				$('.slidePoint3').css('background-position', '0 -45px');
				
				break
				
			case 2:
				//console.log(count==2);
				$('.mark1').animate({top: '5px'}, 700);
				$('.mark2').animate({top: '114px'}, 700);
				$('.mark3').animate({top: '187px'}, 700);
				$('.mark4').fadeOut(1000);
				
				$('.tip1').css('top', '-2px');
				$('.tip2').css('top', '107px');
				$('.tip3').css('top', '180px');
				
				$('.slidePoint1').css('background-position', '0 -45px');
				$('.slidePoint2').css('background-position', '0 -30px');
				$('.slidePoint3').css('background-position', '0 -45px');
				break
				
			case 3:
				//console.log(count==3);
				$('.mark1').animate({top: '18px'}, 700);
				$('.mark2').animate({top: '79px'}, 700);
				$('.mark3').animate({top: '144px'}, 700);
				$('.mark4').fadeOut(1000);
				
				$('.tip1').css('top', '11px');
				$('.tip2').css('top', '72px');
				$('.tip3').css('top', '137px');
				
				$('.slidePoint1').css('background-position', '0 -45px');
				$('.slidePoint2').css('background-position', '0 -45px');
				$('.slidePoint3').css('background-position', '0 -30px');
				break
			
		};
		
	};


	function upSlider() {
		closeAll ();
		
		if (count < amountSlides) {
			
			$slides.animate({top: '+=' + step + ''}, 400);
			count++;

		} else {
			
			$slides.animate({top: 0}, 400);
			count = 1;
			
		};	
		
		
		moveMark()

	};
	
	function downSlide() {
		closeAll ();
		
		
		if (count > 1) {
			
			$slides.animate({top: '-=' + step + ''}, 400);
			count--;
			
		} else {
			
			$slides.animate({top: -632}, 400);
			count = amountSlides;
			
		};
		
		
		moveMark()
	};











































