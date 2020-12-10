---
layout: api-documentation
title : 'Spec: Style'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get A List of Styles'
spec: spec_style
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/styles'


level: 3
description_edpoint: 'Get A List of Styles'
title_md : Description
number: 1
---

### Description

Get style details based on different filters.

### URL

    http://api.edmunds.com/api/vehicle/v3/styles?makeNiceName={makeNiceName}&modelNiceName={modelNiceName}&api_key={api key}&pageNum={pageNum}&pageSize={pageSize}
    
### Code Example

You need the [Javascript SDK](https://github.com/EdmundsAPI/edmunds-javascript-sdk) to run this example.

    <!DOCTYPE html>

    <html>
    <head>
        <meta charset=utf-8>
        <title>Get A List of Styles for the Honda Civic</title>
    </head>

    <body>
        <div id="results-body"></div>
        <script>
              window.sdkAsyncInit = function() {
                // Instantiate the SDK
                var res = new EDMUNDSAPI('YOUR API KEY');

                // Optional parameters
                var options = {
                    "makeNiceName": "honda",
                    "modelNiceName": "civic",
                    "pagenum": 1,
                    "pagesize": 10
                };

                // Callback function to be called when the API response is returned
                function success(res) {
                    var body = document.getElementById('results-body');
                    body.innerHTML = "The first style id for Honda Civic is " + 
                    res.results[0].id;
                }

                // Oops, Houston we have a problem!
                function fail(data) {
                    console.log(data);
                }

                // Fire the API call
                res.api('/api/vehicle/v3/styles', options, success, fail);

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
