---
layout: api-documentation
title : 'Get Rating Details by Style ID'
title_active_left_menu: "Content: Letter Grade Rating"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Rating Details by Style ID'
spec: content_letter_grade
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{styleId}/grade'


level: 3
description_edpoint: 'Get Rating Details by Style ID'
title_md : Description
number: 1

---

### Description

Get Rating Details by Car Style ID.

### URL

    https://api.edmunds.com/api/vehicle/v2/styles/{styleId}/grade?fmt=json&api_key={api_key}

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
                    body.innerHTML = "The review's grade: " + res.grade;
                }

                // Oops, Houston we have a problem!
                function fail(data) {
                    console.log(data);
                }

                // Fire the API call
                res.api('/api/vehicle/v2/styles/200443446/grade', options, success, fail);

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