var $inputList = $('#qualification, #location').find('input');

var $developers = $('.wrapperDeveloper');

var wrapperButtons = $('#selectedQual');	

	function init(){
		
		
		//checkbox is default
		$inputList.each(function(){

			this.checked = false;

		});

		//check();
		$inputList.on('click', check);

	};
	
	//count Result
	function countResult(){
		
		var anountResult = $('.wrapperDeveloper').length;
		
		var wrappResult =  $('#amountDev');
		
		wrappResult.text(anountResult);
		
	};
	
	// create button 
	function createButton(checkboxID){
		
		var checkbox = $(this);
		
		var nameLabel = $('.tab-content label[name="'+ checkboxID +'"]').text();
			
		wrapperButtons.append('<span class="itemFilterBadge '+ checkboxID +'">'+ nameLabel +'<span class="removeOptionFilter">&nbsp;</span></span>')

	};
	
	// delete button 
	function deleteButton(checkboxID) {
		
		var checkbox = $(this);
		
		if(!this.checked) {
			
			$('#selectedQual').find('.'+ checkboxID +'').detach();
			
		}
		
	};
	
	// delete: click selected markers
	$('.removeOptionFilter').on('click', function(){
		
		alert('test');
		
		var cross = $(this);
		
		var arrClass = cross.parent('.itemFilterBadge').attr('class').split(' ');
		
		console.log(arrClass);
		
	});
	

	function check(event){

			amountCheck = $('#qualification, #location').find('input:checked').length;

			inputID = $(this).attr('id');

			if(this.checked){
				
				// create button 
				createButton(inputID);

				//developers prthing
				$developers.each(developerParthADD);

			} else {
				
				// delete button 
				deleteButton(inputID);

				if(amountCheck == 0) {

					$developers.removeClass('hide');
				}

				$developers.each(developerParthDelete);	
			}
			
			// count Result
			countResult();
			
			//event.preventDefault();

	};

	//developerParthADD
	function developerParthADD(event){

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
			
		//event.preventDefault();
		
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
	
		//event.preventDefault();
		
	};


	//initialization
	init();


	
