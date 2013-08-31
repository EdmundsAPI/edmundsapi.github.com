---
layout: api-documentation
title : 'Find Car Model Year IDs with Maintenance Schedules'
title_active_left_menu: 'Service: Maintenance'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Find Car Model Year IDs with Maintenance Schedules'
spec: service_maintenance
version: v1
api: vehicle
dropdown-link: 'v1/api/maintenance/actionrepository/findmodelyearidswithmaintenanceschedule'


level: 3
description_edpoint: 'Find Car Model Year IDs with Maintenance Schedules'
title_md : Description
number: 1

---

### Description

Get a list of model year IDs with available maintenance schedule information.

### URL

	https://api.edmunds.com/v1/api/maintenance/actionrepository/findmodelyearidswithmaintenanceschedule?fmt=json&api_key={api key}
	
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
				var options = {};

				// Callback function to be called when the API response is returned
				function success(res) {
					var body = document.getElementById('results-body');
					body.innerHTML = "The first model year ID is: " + res.longListHolder[0];
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/v1/api/maintenance/actionrepository/findmodelyearidswithmaintenanceschedule', options, success, fail);

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