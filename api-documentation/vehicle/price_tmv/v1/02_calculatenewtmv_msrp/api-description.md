---
layout: api-documentation
title : 'Get TMV® Price for a New Car by MSRP and Spec'
title_active_left_menu: 'Price: True Market Value'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get TMV® Price for a New Car by MSRP and Spec'
spec: price_tmv
version: v1
api: vehicle
dropdown-link: 'api/v1/vehicle/:make/:year/price'


level: 3
description_edpoint: 'Get TMV® Price for a New Car by MSRP and Spec'
title_md : Description
number: 1

---

### Description

Get a the TMV® price for a vehicle make at a certain price in a certain area.

### URL

	https://api.edmunds.com/api/v1/vehicle/{make}/{year}/price?msrp={MSRP}&zip={zip code}&api_key={api key}
	
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
				res.api('/api/v1/vehicle/lexus/2013/price', options, success, fail);

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
