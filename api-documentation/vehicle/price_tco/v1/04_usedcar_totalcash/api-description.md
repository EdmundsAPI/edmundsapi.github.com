---
layout: api-documentation
title : 'Get the Total Cash Price for a Used Car'
title_active_left_menu: 'Price: True Cost to Own'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get the Total Cash Price for a Used Car'
spec: price_tco
version: v1
api: vehicle
dropdown-link: 'v1/api/tco/usedtotalcashpricebystyleidandzip/{style ID}/{zipcode}'


level: 3
description_edpoint: 'Get the Total Cash Price for a Used Car'
title_md : Description
number: 1

---

### Description

Total Cash Price is the sum of the vehicle's **Private Party TMV®** price in **CLEAN** condition *plus* **typically equipped options**, and base tax and fees assessed by your state.
Make sure to see the [*Special Requirements*](/api-documentation/vehicle/price_tmv/v1/) for displaying the Edmunds True Market Value®.

### URL

	https://api.edmunds.com/v1/api/tco/usedtotalcashpricebystyleidandzip/{style ID}/{zipcode}?fmt=json&api_key={api key}
	
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
					body.innerHTML = "The Total Cash Price is: " + res.value;
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/v1/api/tco/usedtotalcashpricebystyleidandzip/2898/90404', options, success, fail);

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
