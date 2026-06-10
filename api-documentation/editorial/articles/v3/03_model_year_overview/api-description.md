---
layout: api-documentation
title : 'Get model/year overview'
title_active_left_menu: 'Articles'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get model/year overview'
spec: articles
version: v3
api: editorial
dropdown-link: 'api/editorial/v3/{make}/{model}/{year}'


level: 3
description_edpoint: 'Get model/year overview'
title_md : Description
number: 1

---


### Description

Get editorial content written by the Edmunds staff by make name, model name and year. V3 includes the current editorial review and rating format used by newer model years.
Pass the submodel nice ID when you need editorial content and ratings for a specific vehicle submodel. Submodel values vary by model year and can identify body styles or named variants, such as `sedan`, `hatchback`, `si` or `type-r`.
Make sure to see the [*Special Requirements*](/api-documentation/editorial/#special_requirements) for displaying Edmunds editorial content.

### URL

    https://api.edmunds.com/api/editorial/v3/{make}/{model}/{year}?api_key={api_key}&fmt=json

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
                    "view": "full",
                    "submodel": "sedan"
                };

                // Callback function to be called when the API response is returned
                function success(res) {
                    var body = document.getElementById('results-body');
                    body.innerHTML = "Title: " + res.title;
                }

                // Oops, Houston we have a problem!
                function fail(data) {
                    console.log(data);
                }

                // Fire the API call
                res.api('/api/editorial/v3/honda/civic/2025', options, success, fail);

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
