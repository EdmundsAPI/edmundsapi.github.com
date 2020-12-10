---
layout: api-documentation
title : 'Get TMV® Price for a Used Car'
title_active_left_menu: 'Price: True Market Value'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get TMV® Price for a Used Car'
spec: price_tmv
version: v1
api: vehicle
dropdown-link: 'v1/api/tmv/tmvservice/calculateusedtmv'


level: 3
description_edpoint: 'Get TMV® Price for a Used Car'
title_md : Description
number: 1

---


### Description

Make sure to see the [*Special Requirements*](/api-documentation/vehicle/price_tmv/v1/) for displaying the Edmunds True Market Value®.

Get the TMV® price for a vehicle given its:

* Style ID
* Condition
* Mileage
* Zip code.

These fields are required. You can also pass an <code>optionid</code> and/or <code>colorid</code> to get a more accurate value.

#### Car Conditions

**Outstanding**

Exceptional mechanical, exterior and interior condition; requires no reconditioning.

Vehicle is in exceptional mechanical, exterior and interior condition with no visible wear; it requires no reconditioning. Paint will have a glossy appearance. Vehicle has no mechanical and/or cosmetic problems and has a clean engine compartment. Exterior and interior are free of any damage. Tires are in nearly new condition. Vehicle has a clean title and has the ability to pass an emissions inspection.

**Clean**

Some normal wear but no major mechanical or cosmetic problems; may require limited reconditioning.

Vehicle shows some normal wear but has no major mechanical and/or cosmetic problems. Paint still has a glossy finish and may have slight scratches or dings. Some reconditioning may be needed. Interior will have minimal fading and wear. Tires have substantial tread remaining. Vehicle has a clean title and has the ability to pass an emissions inspection.

**Average**

May have a few mechanical and/or cosmetic problems and may require a considerable amount of reconditioning 

Vehicle may have a few mechanical and/or cosmetic problems and may require a considerable amount of reconditioning. Exterior paint has some dullness. Vehicle may have a considerable amount of scratches or dings. Interior material is slightly worn and faded. Tires have some useable tread remaining. Vehicle has a clean title and has the ability to pass an emissions inspection.

**Rough**

Several mechanical and/or cosmetic problems requiring significant repairs.

Vehicle has several mechanical and/or cosmetic problems. Exterior and interior need significant repairs. Tires may need to be replaced. Vehicle may need minor repairs to pass an emissions inspection, but has a clean title.

**Damaged**

Sorry, Edmunds.com **does not** provide estimates for damaged vehicles. To derive a value for a "Damaged" vehicle, simply take the the "Average" condition and subtract the cost of restoring the vehicle to "Average" condition.

### URL

	https://api.edmunds.com/v1/api/tmv/tmvservice/calculateusedtmv?styleid={style ID}&condition={condition}&mileage={mileage}&zip={zip code}&fmt=json&api_key={api key}
	
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
					"styleid": "101353967",
					"condition": "Clean",
					"mileage": "25000",
					"zip": 90019
				};

				// Callback function to be called when the API response is returned
				function success(res) {
					var body = document.getElementById('results-body');
					body.innerHTML = "The used TMV® price is: " + res.tmv.nationalBasePrice.usedTmvRetail;
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/v1/api/tmv/tmvservice/calculateusedtmv', options, success, fail);

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