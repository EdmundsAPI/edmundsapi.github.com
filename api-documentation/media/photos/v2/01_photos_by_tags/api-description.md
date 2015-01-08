---
layout: api-documentation
title : 'Find Photos by tags'
title_active_left_menu: 'Photos'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Find Photos by tags'
spec: photos
version: v2
api: media
dropdown-link: 'api/media/v2/photos?tag={tag}'

level: 3
description_edpoint: 'Find Photos by tags'
title_md : Description
number: 1

---


### Description

Find Photos by tags

### URL

    https://api.edmunds.com/api/media/v2/photos?tag={tag}&api_key={api key}

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
                    body.innerHTML = "This photo's title is : " + res.photos[0].title;
                }

                // Oops, Houston we have a problem!
                function fail(data) {
                    console.log(data);
                }

                // Fire the API call
                res.api('/api/media/v2/photos?tag=acura', options, success, fail);

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
