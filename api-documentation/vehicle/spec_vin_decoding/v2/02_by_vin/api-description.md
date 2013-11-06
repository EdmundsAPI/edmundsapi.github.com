---
layout: api-documentation
title : 'Get Vehicle Details Through VIN Decoding'
title_active_left_menu: "Spec: VIN Decoding"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Vehicle Details Through VIN Decoding v2'
spec: spec_vin_decoding
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/vins/{vin}'


level: 3
description_endpoint: 'Get Vehicle Details Through VIN Decoding'
title_md : Description
number: 1

---

### Description

Decode the supplied VIN to its most basic vehicle specs (i.e. make, model, year, style, trim, engine and transmission details.)

**Please note** that this resource is ***not*** a *VIN Lookup*. Manufacturers can do the VIN lookup on their own vehicles, but since we cover all manufacturers and makes and models, we can reliably *look up* a vehicle by just its VIN. So what we do is reduce the VIN to a **Squish VIN**, or VIN prefix, which is basically **the first 11 digits of the VIN minus the 9th digit which is a check digit**.

### URL

	https://api.edmunds.com/api/vehicle/v2/vins/{car VIN}?manufactureCode={manufacturer code}&fmt=json&api_key={api key}
	
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
					"manufacturerCode": "3548"
				};

				// Callback function to be called when the API response is returned
				function success(res) {
					var body = document.getElementById('results-body');
					body.innerHTML = "The car make is: " + res.styleHolder[0].makeName;
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/api/vehicle/v2/vins/4T1BK1EB6DU056165', options, success, fail);

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