---
layout: api-documentation
title : 'Get Car Equipment Details for a Car Style'
title_active_left_menu: "Spec: Equipment"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Car Equipment Details for a Car Style'
spec: spec_equipment
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{style ID}/equipment'


level: 3
description_edpoint: 'Get Car Equipment Details for a Car Style'
title_md : Description
number: 1

---

### Description

Get vehicle equipment for a car style.

### URL

	https://api.edmunds.com/api/vehicle/v2/styles/{style ID}/equipment?fmt=json&api_key={api key}
	
### Code Example

You need the [Javascript SDK](https://github.com/EdmundsAPI/edmunds-javascript-sdk) to run this example.

	<!DOCTYPE html>

	<html>
	<head>
		<meta charset=utf-8>
		<title>Get Equipment for Style ID 100314158</title>
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
					body.innerHTML = "The first equipment is: " + 
					res.equipment[0].name;
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/api/vehicle/v2/styles/100314158/equipment', options, success, fail);

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