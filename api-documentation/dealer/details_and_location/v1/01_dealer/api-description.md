---
layout: api-documentation
title : 'Get Dealer Details and Location'
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 125
title-endpoint: 'Get Dealer Details and Location'
spec: details_and_location
version: v1
api: dealer
dropdown-link: 'v1/api/dealer'

level: 3
description_edpoint: 'Get Dealer Details and Location'
title_md : Description
number: 1

---


### Description

Get Dealership details and information by ZIP code with a specific radius and by supplying either car make/mode or car style ID

### URL

	https://api.edmunds.com/v1/api/dealer?zipcode={zipcode}&fmt=json&api_key={api key}
	
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
					"zipcode": "90019"
				};

				// Callback function to be called when the API response is returned
				function success(res) {
					var body = document.getElementById('results-body');
					body.innerHTML = "This dealer's name is : " + res.dealerHolder[0].name;
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/v1/api/dealer', options, success, fail);

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