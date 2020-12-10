---
layout: api-documentation
title : 'Get All TMV® Bands'
title_active_left_menu: 'Price: True Market Value'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get All TMV® Bands'
spec: price_tmv
version: v2
api: vehicle
dropdown-link: 'api/v2/usedtmv/getalltmvbands'


level: 3
description_edpoint: 'Get All TMV® Bands'
title_md : Description
number: 1

---

### Description

Get All TMV® Bands.
Make sure to see the [*Special Requirements*](/api-documentation/vehicle/price_tmv/v2/) for displaying the Edmunds True Market Value®.

### URL

	https://api.edmunds.com/api/v2/usedtmv/getalltmvbands?styleid={style ID}&zip={zip code}&api_key={api key}
	
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
					"styleid": "200419751",
					"zip": 90019
				};

				// Callback function to be called when the API response is returned
				function success(res) {
					var body = document.getElementById('results-body');
					body.innerHTML = "The Used TMV® Band National Base Price is: " + res.tmvconditions.OUTSTANDING.Current.nationalBasePrice.usedTmvRetail;
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/api/v2/usedtmv/getalltmvbands', options, success, fail);

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

