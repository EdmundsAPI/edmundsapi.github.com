---
layout: api-documentation
title : 'Find Franchise by ID'
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Franchise by ID'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/franchises/{franchiseId}'

level: 3
description_edpoint: 'Find Franchise by ID'
title_md : Description
number: 1

---


### Description

Find Franchise by ID

### URL

    https://api.edmunds.com/api/dealer/v2/franchises/{franchiseId}?api_key={api_key}&fmt=json
    
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
                    body.innerHTML = "This franchise's name is : " + res.name;
                }

                // Oops, Houston we have a problem!
                function fail(data) {
                    console.log(data);
                }

                // Fire the API call
                res.api('/api/dealer/v2/franchises/880479', options, success, fail);

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
