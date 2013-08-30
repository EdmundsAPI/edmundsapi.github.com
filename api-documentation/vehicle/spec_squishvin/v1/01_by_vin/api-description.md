---
layout: api-documentation
title : 'Get Vehicle Details by Squish VIN'
title_active_left_menu: "Spec: VIN Decoding"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Vehicle Details by Squish VIN'
spec: spec_squishvin
version: v1
api: vehicle
dropdown-link: 'api/vehicle/v2/squishvins/{squish VIN}/'


level: 4
description_edpoint: 'Get Vehicle Details by Squish VIN'
title_md : Description
number: 1

---

### Description

Decode the supplied VIN to its most basic vehicle specs (i.e. make, model, year, style, trim, engine and transmission details.)

**Please note** that this resource is ***not*** a *VIN Lookup*. Manufacturers can do the VIN lookup on their own vehicles, but since we cover all manufacturers and makes and models, we can reliably *look up* a vehicle by just its VIN. So what we do is reduce the VIN to a **Squish VIN**, or VIN prefix, which is basically **the first 11 digits of the VIN minus the 9th digit which is a check digit**.

### URL

	https://api.edmunds.com/v1/api/toolsrepository/vindecoder?vin={car VIN}&fmt=json&api_key={api key}
	
### Code Example

You need the [Javascript SDK](https://github.com/EdmundsAPI/edmunds-javascript-sdk) to run this example.

	<!DOCTYPE html>

	<html>
	<head>
		<meta charset=utf-8>
		<title>Get the number of all car brands listed as NEW</title>
	</head>

	<body>
		<div id="results-body"></div>
		<script>
		  	window.sdkAsyncInit = function() {
		    	// Instantiate the SDK
				var res = new EDMUNDSAPI('YOUR API KEY');

				// Optional parameters
				var options = {
					"vin": "1N4AL3AP4DC295509"
				};

				// Callback function to be called when the API response is returned
				function success(res) {
					var body = document.getElementById('results-body');
					body.innerHTML = "The style name for this configured vehicle is: " + res.longName;
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/v1/api/toolsrepository/vindecoder', options, success, fail);

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