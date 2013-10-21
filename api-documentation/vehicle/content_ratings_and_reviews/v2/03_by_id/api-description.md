---
layout: api-documentation
title : 'Get Car Consumer Ratings and Reviews by Review ID'
title_active_left_menu: 'Content Ratings and Reviews'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Car Consumer Ratings and Reviews by Review ID'
spec: content_ratings_and_reviews
version: v2
api: vehicle
dropdown-link: 'api/vehiclereviews/v2/{review ID}'


level: 3
description_edpoint: 'Get Car Consumer Ratings and Reviews by Review ID'
title_md : Description
number: 1

---

### Description

Get a car consumer ratings and reviews by ID.
Make sure to see the [*Special Requirements*](http://developer.edmunds.com/api-documentation/vehicle/content_ratings_and_reviews/v2/) for displaying vistitor vehicle ratings and reviews.

### URL

	https://api.edmunds.com/api/vehiclereviews/v2/{review ID}?fmt=json&api_key={api key}
	
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
					body.innerHTML = "The review is: " + res.text;
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/api/vehiclereviews/v2/204192395', options, success, fail);

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