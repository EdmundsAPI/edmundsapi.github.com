
		$(function(){
		    // Fetch the elements
		    var $result = $('#result'),
		        $menu = $('#menu'),
		        $content = $('#content'),
		        
		        $business_owner = $('#business_owner'),
		        $certified_developer = $('#certified_developer'),
		        
		        $current = $('#current');
		        
		    var currentHash = window.location.hash;
		    var idBusiness_owner =  $business_owner.attr('id');	
		    var idCertified_developer=  $certified_developer.attr('id');	
		    	    
			var $links = $menu.find('a');
		   
		    // Get the tabs
		    var $tabs = $content.children();

		    // Define our update menu function - as this is used a lot
		    function updateMenu(state){
		        // Update out tab menu
		        
		        $links.removeClass('activeToggle');
		        
		        $menu.find('a[href="#'+ state +'"]').addClass('activeToggle');
		        
		        
		    };
		    
		    if (currentHash == ('#' + idCertified_developer)) {
		    	$business_owner.hide();
		    	$certified_developer.show();
		    	// Update Menu
		    	updateMenu(idCertified_developer);
		    } else {

		    	$business_owner.show();
		    	$certified_developer.hide();
		    	// Update Menu
		    	updateMenu(idBusiness_owner);
		    }
		   
		    // Bind a handler for state: business_owner
		    $.History.bind('business_owner',function(state){
		        // Update Menu
		        updateMenu(state);
		        // Show apricots tab, hide the other tabs
		        $tabs.hide();
		        $business_owner.show();
		        event.stopPropagation();
		        
		    });
		
		    // Bind a handler for state: certified_developer
		    $.History.bind('certified_developer',function(state){
		        // Update Menu
		        updateMenu(state);
		        // Show bananas tab, hide the other tabs
		        $tabs.hide();
		        $certified_developer.show();
		       
		    });
		   

		});