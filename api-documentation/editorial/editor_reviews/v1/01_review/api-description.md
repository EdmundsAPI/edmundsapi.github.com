---
layout: api-documentation
title : 'Get Edmunds Editor Review by Car Make/Model/Year'
title_active_left_menu: 'Editor Reviews'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Edmunds Editor Review by Car Make/Model/Year'
spec: editor_reviews
version: v1
api: editorial
dropdown-link: 'v1/content/editorreviews'


level: 3
description_edpoint: 'Get Edmunds Editor Review by Car Make/Model/Year'
title_md : Description
number: 1

---


### Description

This resource offers access to the Edmunds Editor Reviews including the pros, cons, and Edmunds Says.
Make sure to see the [*Special Requirements*](/api-documentation/editorial/#special_requirements) for displaying Edmunds editorial content.

### URL

	https://api.edmunds.com/v1/content/editorreviews?make={car make}&model={car model}&year={car year}&fmt=json&api_key={your API key}
	
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
				var options = {
					"make": "honda",
					"model": "accord",
					"year": "2011"
				};

				// Callback function to be called when the API response is returned
				function success(res) {
					var body = document.getElementById('results-body');
					body.innerHTML = res.editorial.body;
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/v1/content/editorreviews', options, success, fail);

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