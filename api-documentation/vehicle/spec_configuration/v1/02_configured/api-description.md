---
layout: api-documentation
title : 'Get configured vehicle w/ Options by style ID and Zip Code'
title_active_left_menu: "Spec: Configuration"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get configured vehicle w/ Options by style ID and Zip Code'
spec: spec_configuration
version: v1
api: vehicle
dropdown-link: 'v1/api/configurator/withOptions'


level: 3
description_edpoint: 'Get configured vehicle w/ Options by style ID and Zip Code'
title_md : Description
number: 1

---

### Description

Get a **configured vehicle** with options by the style ID and ZIP code. This endpoint helps **resolve conflicts** between two or more options should any exists.

For example, let's say you you want to configure a **2013 BMW 328i Sedan (2.0L 4-cyl. Turbo 6-speed Manual)**, which has a style ID of **200423469**. And let's say you're in Santa Monica, CA (ZIP code is **90404**).

Now that you have a style ID and a zip code, you can get the default configuration of this vehicle, which is documented in [this endpoint](/api-documentation/vehicle/spec_configuration/v1/01_by_style/api-description.html). Now let's say you want to add the **M Sport Line** package. In order to verify what other options are *required* when this package is selected, we use this endpoint.

This endpoint gives us an idea that given a certain option, what other options need to be *excluded*, *included* and *required* to have a sound vehicle configuration.

### URL

	https://api.edmunds.com/v1/api/configurator/withOptions?zip={zipcode}&styleid={style ID}&selected={option ID}&fmt=json&api_key={api key}
	
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
					"zip": "77001",
					"styleid": "200423469",
					"selected": "200425407"
				};

				// Callback function to be called when the API response is returned
				function success(res) {
					var body = document.getElementById('results-body');
					body.innerHTML = "The first option ID that is excluded is: " + res.excludedItems[0];
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/api/configurator/withOptions', options, success, fail);

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