---
layout: api-documentation
title : 'Get articles by tags'
title_active_left_menu: 'Articles'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get articles by tags'
spec: articles
version: v2
api: editorial
dropdown-link: 'api/editorial/v2/articles?tag={tag}'


level: 3
description_edpoint: 'Get articles by tags'
title_md : Description
number: 1

---


### Description

Get articles written by the Edmunds staff. This is done by tags, make,model or year.
Make sure to see the [*Special Requirements*](http://developer.edmunds.com/api-documentation/editorial/#special_requirements) for displaying Edmunds editorial content.

### URL

    https://api.edmunds.com/api/editorial/v2/articles?tag={tag}&api_key={api_key}&fmt=json

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
                    "view": "full"
                };

                // Callback function to be called when the API response is returned
                function success(res) {
                    var body = document.getElementById('results-body');
                    body.innerHTML = "Description: " + res.articles[0].description;
                }

                // Oops, Houston we have a problem!
                function fail(data) {
                    console.log(data);
                }

                // Fire the API call
                res.api('/api/editorial/v2/articles?tag=editor-reviews', options, success, fail);

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
