---
layout: api-documentation
title : 'Get safety ratings by Make/Model/Year'
title_active_left_menu: 'Service: Safety'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get safety ratings by Make/Model/Year'
spec: service_safety
version: v2
api: vehicle
dropdown-link: '/api/vehicle/v2/{make}/{model}/{year}/safety'


level: 3
description_edpoint: 'Get safety ratings by Make/Model/Year'
title_md : Description
number: 1

---

### Description

Get safety ratings by Make/Model/Year

### URL

    https://api.edmunds.com/api/vehicle/v2/{make}/{model}/{year}/safety?fmt=json&api_key={api_key}

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
                    body.innerHTML = "The nhtsa overall is: " + res.nhtsa.overall;
                }

                // Oops, Houston we have a problem!
                function fail(data) {
                    console.log(data);
                }

                // Fire the API call
                res.api('/api/vehicle/v2/acura/ilx/2013/safety', options, success, fail);

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