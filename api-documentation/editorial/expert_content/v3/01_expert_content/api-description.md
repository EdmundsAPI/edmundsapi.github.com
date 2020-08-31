---
layout: api-documentation
title : 'Get Expert content for make/model/year'
title_active_left_menu: 'Expert Content'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Expert content for make/model/year'
spec: expert_content
version: v3
api: editorial
dropdown-link: 'api/editorial/v3/makes/{make}/models/{models}/years/{year}/expertcontent'


level: 3
description_edpoint: 'Get Expert content for make/model/year'
title_md : Description
number: 1

---

### URL

	https://api.edmunds.com/api/editorial/v3/makes/{make}/models/{models}/years/{year}/expertcontent?api_key={API key}
	
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
					body.innerHTML = res[0].content;
				}

				// Oops, Houston we have a problem!
				function fail(data) {
					console.log(data);
				}

				// Fire the API call
				res.api('/api/editorial/v3/makes/mercedes-benz/models/amg-gt/years/2020/expertcontent', options, success, fail);

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