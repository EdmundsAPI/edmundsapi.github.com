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
dropdown-link: 'v1/api/drrrepository/v2'


level: 3
description_edpoint: 'Submit dealer review'
title_md : Description
number: 1

---


### Description

The Edmunds review submission and verification process does not require a user to create an account or password. We validate legitimacy via a verification email sent to the reviewer. A review may not be published until it is confirmed via this email.


### URL

	http://api.edmunds.com/v1/api/drrrepository/v2?api_key={api key}
	
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
					"dealerid": "26811",
					"limit": "0,5"
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
				res.api('/v1/api/drrrepository/v2', options, success, fail);

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