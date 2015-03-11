---
layout: api-documentation
title : 'Get Car Photos By Car Style ID'
title_active_left_menu: 'Photos'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Car Photos By Car Style ID'
spec: photos
version: v1
api: media
dropdown-link: 'v1/api/vehiclephoto/service/findphotosbystyleid'

level: 3
description_edpoint: 'Get Car Photos By Car Style ID'
title_md : Description
number: 1

---

### Description

Get a car's photos by its style ID.

### URL

	https://api.edmunds.com/v1/api/vehiclephoto/service/findphotosbystyleid?styleId=3883&fmt=json&api_key={api key}
	
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
					"styleId": "3883"
				};

				// Callback function to be called when the API response is returned
				function success(res) {
					var body = document.getElementById('results-body');
					body.innerHTML = "<img src='http://media.ed.edmunds-media.com"+ res[0].photoSrcs[0] +"' />";
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/v1/api/vehiclephoto/service/findphotosbystyleid', options, success, fail);

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