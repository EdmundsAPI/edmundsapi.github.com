---
layout: api-documentation
title : 'Find Rooftop Dealers by zipcode'
title_active_left_menu: Details and Location
title_parent: Api documentation

amount_version: 125
title-endpoint: 'Find Rooftop Dealers by zipcode'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/dealers/'

level: 4
description_edpoint: 'Find Rooftop Dealers by zipcode'
title_md : Sample Request
number: 4

---


### Sample Request

Find **Ford** Rooftop Dealers of the **33756** area

#### URL

    https://api.edmunds.com/api/dealer/v2/dealers?zipcode=33756&make=ford&api_key={api_key}&fmt=json

#### Response

    {
        "dealers": [
            {
                "dealerId": "3739",
                "name": "Walker Ford",
                "niceName": "WalkerFord",
                "distance": 3.658880049761106,
                "operations": {
                    "Wednesday": "08:30 AM-08:00 PM",
                    "Tuesday": "08:30 AM-08:00 PM",
                    "Thursday": "08:30 AM-08:00 PM",
                    "Saturday": "08:30 AM-06:00 PM",
                    "Friday": "08:30 AM-08:00 PM",
                    "Monday": "08:30 AM-08:00 PM",
                    "Sunday": "11:30 AM-06:00 PM"
                },
                "address": {
                    "street": "17556 US 19 N",
                    "apartment": "",
                    "city": "Clearwater",
                    "stateCode": "FL",
                    "stateName": "Florida",
                    "county": "Pinellas",
                    "country": "USA",
                    "latitude": 27.93164,
                    "longitude": -82.730647,
                    "zipcode": "33764"
                },
                "active": true,
                "reviews": {
                    "sales": {
                        "overallRating": 0,
                        "count": 3,
                        "recommendedCount": 0,
                        "notRecommendedCount": 0
                    },
                    "service": {
                        "overallRating": 0,
                        "count": 2,
                        "recommendedCount": 0,
                        "notRecommendedCount": 0
                    }
                },
                "states": [
                    "NEW",
                    "USED"
                ],
                "type": "ROOFTOP"
            },
            ...
            {
                "dealerId": "3664",
                "name": "Gator Ford",
                "niceName": "GatorFord",
                "distance": 30.05196795309994,
                "operations": {
                    "Wednesday": "08:30 AM-08:00 PM",
                    "Thursday": "08:30 AM-08:00 PM",
                    "Tuesday": "08:30 AM-08:00 PM",
                    "Saturday": "08:30 AM-06:00 PM",
                    "Friday": "08:30 AM-08:00 PM",
                    "Monday": "08:30 AM-08:00 PM",
                    "Sunday": "12:00 PM-05:00 PM"
                },
                "address": {
                    "street": "11780 Tampa Gateway Blvd",
                    "apartment": "",
                    "city": "Tampa",
                    "stateCode": "FL",
                    "stateName": "Florida",
                    "county": "Hillsborough",
                    "country": "USA",
                    "latitude": 28.007675,
                    "longitude": -82.300846,
                    "zipcode": "33584"
                },
                "active": true,
                "reviews": {
                    "sales": {
                        "overallRating": 5,
                        "count": 3,
                        "recommendedCount": 1,
                        "notRecommendedCount": 0
                    },
                    "service": {
                        "overallRating": 0,
                        "count": 0,
                        "recommendedCount": 0,
                        "notRecommendedCount": 0
                    }
                },
                "states": [
                    "USED",
                    "NEW"
                ],
                "type": "ROOFTOP"
            }
        ]
        "dealersCount": 43,
        "links": [
            {
                "rel": "first",
                "href": "/api/dealer/v2/dealers?zipcode=33756&make=ford&pagesize=10&pagenum=1&api_key={api_key}"
            },
            {
                "rel": "next",
                "href": "/api/dealer/v2/dealers?zipcode=33756&make=ford&pagesize=10&pagenum=2&api_key={api_key}"
            },
            {
                "rel": "last",
                "href": "/api/dealer/v2/dealers?zipcode=33756&make=ford&pagesize=10&pagenum=5&api_key={api_key}"
            }
        ]
    }
    
