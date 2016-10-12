---
layout: api-documentation
title : 'Find Franchises by zipcode'
title_active_left_menu: Details and Location
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Franchises by zipcode'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/franchises'

level: 4
description_edpoint: 'Find Franchises by zipcode'
title_md : Sample Request
number: 4

---

### Sample Request

Find Franchises of the **12345** area

#### URL

    https://api.edmunds.com/api/dealer/v2/franchises?zipcode=12345?api_key={api_key}&fmt=json

#### Response

    {
        "franchises": [
            {
                "dealerId": "880478",
                "name": "gaelicenterprises",
                "niceName": "",
                "distance": 0.20017129549571702,
                "address": {
                    "street": "14 N Jay St",
                    "apartment": "",
                    "city": "Schenectady",
                    "stateCode": "NY",
                    "stateName": "New York",
                    "county": "Schenectady",
                    "country": "USA",
                    "latitude": 42.816623,
                    "longitude": -73.938601,
                    "zipcode": "12305"
                },
                "active": true,
                "franchiseId": "880479",
                "state": "USED",
                "type": "DEALERFRANCHISE"
            },
            ...
            {
                "dealerId": "831529",
                "name": "Wedekind Motors",
                "niceName": "WedekindMotors_1",
                "distance": 2.5190307457362002,
                "operations": {
                    "Wednesday": "09:00 AM-07:00 PM",
                    "Tuesday": "09:00 AM-07:00 PM",
                    "Thursday": "09:00 AM-07:00 PM",
                    "Saturday": "09:00 AM-04:00 PM",
                    "Friday": "09:00 AM-05:30 PM",
                    "Monday": "09:00 AM-07:00 PM",
                    "Sunday": "Day off"
                },
                "address": {
                    "street": "1595 State St",
                    "apartment": "",
                    "city": "Schenectady",
                    "stateCode": "NY",
                    "stateName": "New York",
                    "county": "Schenectady",
                    "country": "USA",
                    "latitude": 42.78712,
                    "longitude": -73.911397,
                    "zipcode": "12304"
                },
                "active": true,
                "franchiseId": "831530",
                "state": "USED",
                "type": "DEALERFRANCHISE"
            }
        ],
        "franchisesCount": 1527,
        "links": [
            {
                "rel": "first",
                "href": "/api/dealer/v2/franchises?zipcode=12345&view=full&pagesize=10&pagenum=1&api_key={api_key}"
            },
            {
                "rel": "next",
                "href": "/api/dealer/v2/franchises?zipcode=12345&view=full&pagesize=10&pagenum=2&api_key={api_key}"
            },
            {
                "rel": "last",
                "href": "/api/dealer/v2/franchises?zipcode=12345&view=full&pagesize=10&pagenum=153&api_key={api_key}"
            }
        ]
    }
    
