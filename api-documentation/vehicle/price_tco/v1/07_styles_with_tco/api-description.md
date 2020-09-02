---
layout: api-documentation
title : 'Get Car Styles with TCO® Value'
title_active_left_menu: 'Price: True Cost to Own'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Car Styles with TCO® Value'
spec: price_tco
version: v1
api: vehicle
dropdown-link: 'v1/api/tco/getstyleswithtcodatabysubmodel'


level: 3
description_edpoint: 'Get Car Styles with TCO® Value'
title_md : Description
number: 1

---

### Description

Get a list of **all car styles** that have a True Cost to Own® value.
Make sure to see the [*Special Requirements*](/api-documentation/vehicle/price_tco/v1/#special_requirements) for displaying the Edmunds True Cost to Own®.

### URL

	https://api.edmunds.com/v1/api/tco/getstyleswithtcodatabysubmodel?make={car make}&model={car model}&year={car years}&submodel={car submodel}&fmt=json&api_key={api key}
	
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
					"make": "acura",
					"model": "zdx",
					"year": 2011,
					"submodel": "hatchback"
				};

				// Callback function to be called when the API response is returned
				function success(res) {
					var body = document.getElementById('results-body');
					body.innerHTML = "The trim of the first style with True Cost to Own® is: " + res.styles["4dr Hatchback AWD (3.7L 6cyl 6A"].trim;
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/v1/api/tco/getstyleswithtcodatabysubmodel', options, success, fail);

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
