---
layout: api-documentation
title : 'Get Style Details for a Car Make/Model/Year'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get Style Details for a Car Make/Model/Year'
spec: spec_model_year
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/{year}'


level: 3
description_edpoint: 'Get Style Details for a Car Make/Model/Year'
title_md : Description
number: 1

---


### Description

Get the style details for a specific car make/mode/year.

### URL

	http://api.edmunds.com/api/vehicle/v2/{make}/{model}/{year}?fmt=json&api_key={api key}
	
### Code Example

You need the [Javascript SDK](https://github.com/EdmundsAPI/edmunds-javascript-sdk) to run this example.

	<!DOCTYPE html>

	<html>
	<head>
		<meta charset=utf-8>
		<title>Get models and model/year IDs for the 2011 Lexus RX-350</title>
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
					body.innerHTML = "The first style for the 2011 Lexus RX-350 " + 
					res.styles[0].name;
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/api/vehicle/v2/lexus/rx350/2011', options, success, fail);

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
