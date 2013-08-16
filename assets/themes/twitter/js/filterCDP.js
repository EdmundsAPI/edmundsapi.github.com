var $inputList = $('#qualification, #location').find('input');

var $developers = $('.wrapperDeveloper');

	

	function init(){

		//checkbox is default
		$inputList.each(function(){

			this.checked = false;

		});

		//check();
		$inputList.on('click', check);

	};

	function check(){

			amountCheck = $('#qualification, #location').find('input:checked').length;

			inputID = $(this).attr('id');

			if(this.checked){

				//developers prthing
				$developers.each(developerParthADD);

			} else {

				if(amountCheck == 0) {

					$developers.removeClass('hide');
				}

				$developers.each(developerParthDelete);	
			}

	};

	//developerParthADD
	function developerParthADD(){

		///data-badge
		var arrDataBadge = $(this).data('badge').split(';');

		var pushed = arrDataBadge.push($(this).data('location'));

			if($(this).hasClass('hide') == false){

				for(var i=0, count=0; i<3; i++){
				
					if (arrDataBadge[i] == inputID) {

						count = 1;

					} 

				}

				if(count == 0){

					$(this).addClass('hide');

				}

			}
		
	};

	//developerParthDelete
	function developerParthDelete(){

		///data-badge
		var arrDataBadge = $(this).data('badge').split(';');

		var pushed = arrDataBadge.push($(this).data('location'));

			if($(this).hasClass('hide') == true){

				for(var i=0, count=0; i<3; i++){
					
					$inputList.each(function(){

						var id = $(this).attr('id');

						if(this.checked && arrDataBadge[i] == id){

							count++;

						}
						
					});
					 
				}

			}

		if(count == amountCheck){

			$(this).removeClass('hide');

		}
		
	};


	//initialization
	init();


	
