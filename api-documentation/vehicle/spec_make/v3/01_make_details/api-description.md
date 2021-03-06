---
layout: api-documentation
title : 'Get details for a specific car make/brand v3'
title_active_left_menu: 'Spec: Make'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'v3/{make}'
spec: spec_make
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/{make}'


level: 3
description_edpoint: 'Get Details on a Specific Car Make v3'
title_md : Description
number: 1

---


### Description

Get the list of models and model/year IDs belonging to a specific car make.

### URL

    http://api.edmunds.com/api/vehicle/v3/{make}?api_key={api key}

### Code Example

You need the [Javascript SDK](https://github.com/EdmundsAPI/edmunds-javascript-sdk) to run this example.

    <!DOCTYPE html>

    <html>
    <head>
        <meta charset=utf-8>
        <title>Get models and model/year IDs for Lexus</title>
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
                    body.innerHTML = "The first model name for Lexus in the response is " + res.models[0].name;
                }

                // Oops, Houston we have a problem!
                function fail(data) {
                    console.log(data);
                }

                // Fire the API call
                res.api('/api/vehicle/v3/lexus', options, success, fail);

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
