---
layout: api-documentation
title : 'Submit dealer review'
title_active_left_menu: 'Ratings and Reviews'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Submit dealer review'
spec: ratings_and_reviews
version: v2
api: dealer
dropdown-link: 'api/dealerreviews/v2'


level: 3
description_edpoint: 'Submit dealer review'
title_md : Description
number: 1

---


### Description

The Edmunds review submission and verification process does not require a user to create an account or password. We validate legitimacy via a verification email sent to the reviewer. A review may not be published until it is confirmed via this email.


### URL

	POST http://api.edmunds.com/api/dealerreviews/v2?api_key={api key}

### Request Body

	{
	 "dealerId": 838870,
	 "stateCode": "AK",
	 "publishingSource": "EDMUNDS_REST_API",
	 "title": "test",
	 "text": "test",
	 "authorName": "John",
	 "email": "John@edmunds.com",
	 "overallRating": "5",
	 "reviewType": "sales",
	 "dealerRecommended": true,
	 "carBought": true,
	 "ipAddress": "111.11.11.11"
	}

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
				    "dealerId": 838870,
				    "stateCode": "AK",
				    "publishingSource": "EDMUNDS_REST_API",
				    "title": "test",
				    "text": "test",
				    "authorName": "John",
				    "email": "John@edmunds.com",
				    "overallRating": "5",
				    "reviewType": "sales",
				    "dealerRecommended": true,
				    "carBought": true,
				    "ipAddress": "111.11.11.11"
				};

				// Callback function to be called when the API response is returned
				function success(res) {
					var body = document.getElementById('results-body');
					body.innerHTML = "This dealer's name is : " + res.dealerName;
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/api/dealerreviews/v2', options, success, fail);

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