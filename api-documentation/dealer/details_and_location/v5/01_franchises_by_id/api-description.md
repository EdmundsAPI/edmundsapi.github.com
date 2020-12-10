---
layout: api-documentation
title : 'Get Dealer Details and Location'
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 125
title-endpoint: 'Find Dealership Franchises by Id'
spec: details_and_location
version: v5
api: dealer
dropdown-link: 'api/dealer/v5/dealership/{id}/franchises'

level: 3
description_edpoint: 'Find Dealership Franchises'
title_md : Description
number: 1

---


### Description

Find Dealership Franchises

### URL

    https://api.edmunds.com/api/dealer/v5/dealership/{id}/franchises?api_key={api_key}
    
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
                    body.innerHTML = "The first franchise id is : " + res.franchises[0].id;
                }

                // Oops, Houston we have a problem!
                function fail(data) {
                    console.log(data);
                }

                // Fire the API call
                res.api('/api/dealer/v5/dealership/897674/franchises', options, success, fail);

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
