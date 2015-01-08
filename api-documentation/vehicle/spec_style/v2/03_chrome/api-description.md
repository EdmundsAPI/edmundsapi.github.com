---
layout: api-documentation
title : 'Get Car Style Details by Chrome Data ID'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Car Style Details by Chrome Data ID'
spec: spec_style
version: v2
api: vehicle
dropdown-link: '/api/vehicle/v2/partners/chrome/styles/{ChromeId}'


level: 3
description_edpoint: 'Get Car Style Details by Chrome Data ID'
title_md : Description
number: 1

---

### Description

Get the vehicle style details (i.e. colors, options, transmission, engine, squishVins, ...etc) by the vehicle's [Chrome Data](http://www.chromedata.com) ID. 
**Chrome Data ID is an endpoint only provided to explicit partners of both [Chrome Data](http://www.chromedata.com) and Edmunds.com, please contact us to inquire.

### URL

	https://api.edmunds.com/api/vehicle/v2/partners/chrome/styles/{ChromeId}?fmt=json&api_key={api key}
	
### Code Example

You need the [Javascript SDK](https://github.com/EdmundsAPI/edmunds-javascript-sdk) to run this example.

	<!DOCTYPE html>

	<html>
	<head>
		<meta charset=utf-8>
		<title>Edmunds API Example</title>
	</head>

	<body>
		<div id="results-body"></div>
		<script>
		  	window.sdkAsyncInit = function() {
		    	// Instantiate the SDK
				var res = new EDMUNDSAPI('YOUR API KEY');

				// Optional parameters
				var options = {};

				// Callback function to be called when the API response is returned
				function success(res) {
					var body = document.getElementById('results-body');
					body.innerHTML = "The car make for this style is: " + res.make.name;
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/api/vehicle/v2/partners/chrome/styles/11916', options, success, fail);

			    // Additional initialization code such as adding Event Listeners goes here
		  };

		  // Load the SDK asynchronously
		  (function(d, s, id){
		     	var js, sdkjs = d.getElementsByTagName(s)[0];
		     	if (d.getElementById(id)) {return;}
		     	js = d.createElement(s); js.id = id;
		     	js.src = "path/to/sdk/file";
		     	sdkjs.parentNode.insertBefore(js, sdkjs);
		   }(document, 'script', 'edmunds-jssdk'));
		</script>
	</body>
	</html>