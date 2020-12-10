---
layout: api-documentation
title : Find Rooftop Dealer by ID
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 125
title-endpoint: Find Rooftop Dealer by ID
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/dealers/{id}'

level: 4
description_edpoint: Find Rooftop Dealer by ID
title_md : Sample Request
number: 4

---


### Sample Request

Find Rooftop Dealer with ID **3742**

#### Basic request

#### URL

    https://api.edmunds.com/api/dealer/v2/dealers/3742?api_key={api_key}&fmt=json

#### Response

    {
        "dealerId": "3742",
        "name": "Dayton Andrews Chrysler Dodge Jeep Ram",
        "niceName": "DaytonAndrewsChryslerJeepDodgeRam",
        "operations": {
            "Wednesday": "08:00 AM-08:00 PM",
            "Thursday": "08:00 AM-08:00 PM",
            "Tuesday": "08:00 AM-08:00 PM",
            "Saturday": "09:00 AM-06:00 PM",
            "Friday": "08:00 AM-08:00 PM",
            "Monday": "08:00 AM-08:00 PM",
            "Sunday": "10:00 AM-06:00 PM"
        },
        "address": {
            "street": "2388 Gulf To Bay Blvd",
            "apartment": "",
            "city": "Clearwater",
            "stateCode": "FL",
            "stateName": "Florida",
            "county": "Pinellas",
            "country": "USA",
            "latitude": 27.960626,
            "longitude": -82.738664,
            "zipcode": "33765"
        },
        "active": true,
        "contactInfo": {
            "phone": "(888) 379-7113",
            "website": "http://WWW.DAYTONANDREWS.NET"
        },
        "states": [
            "NEW",
            "USED"
        ],
        "type": "ROOFTOP"
    }
    
    
#### Full request

#### URL

    https://api.edmunds.com/api/dealer/v2/dealers/3742?view=full&api_key={api_key}&fmt=json

#### Response

    {
        "dealerId": "3742",
        "name": "Dayton Andrews Chrysler Dodge Jeep Ram",
        "niceName": "DaytonAndrewsChryslerJeepDodgeRam",
        "operations": {
            "Wednesday": "08:00 AM-08:00 PM",
            "Thursday": "08:00 AM-08:00 PM",
            "Tuesday": "08:00 AM-08:00 PM",
            "Saturday": "09:00 AM-06:00 PM",
            "Friday": "08:00 AM-08:00 PM",
            "Monday": "08:00 AM-08:00 PM",
            "Sunday": "10:00 AM-06:00 PM"
        },
        "address": {
            "street": "2388 Gulf To Bay Blvd",
            "apartment": "",
            "city": "Clearwater",
            "stateCode": "FL",
            "stateName": "Florida",
            "county": "Pinellas",
            "country": "USA",
            "latitude": 27.960626,
            "longitude": -82.738664,
            "zipcode": "33765"
        },
        "active": true,
        "contactInfo": {
            "phone": "(888) 379-7113",
            "website": "http://WWW.DAYTONANDREWS.NET"
        },
        "franchises": [
            {
                "name": "Dayton Andrews Chrysler Dodge Jeep Ram",
                "address": {
                    "street": "2388 Gulf To Bay Blvd",
                    "city": "Clearwater",
                    "stateCode": "FL",
                    "stateName": "Florida",
                    "county": "Pinellas",
                    "country": "USA",
                    "zipcode": "33765"
                },
                "active": true,
                "franchiseId": "648757",
                "make": {
                    "name": "Dodge",
                    "niceName": "dodge"
                },
                "tier": {
                    "type": "DIRECT"
                },
                "contactInfo": {
                    "phone": "(888) 379-7113",
                    "website": "http://WWW.DAYTONANDREWS.NET"
                },
                "state": "NEW",
            },
            ...
            {
                "name": "Dayton Andrews Chrysler Dodge Jeep Ram",
                "address": {
                    "street": "2388 Gulf To Bay Blvd",
                    "city": "Clearwater",
                    "stateCode": "FL",
                    "stateName": "Florida",
                    "county": "Pinellas",
                    "country": "USA",
                    "zipcode": "33765"
                },
                "active": true,
                "franchiseId": "816091",
                "make": {
                    "name": "Ram",
                    "niceName": "ram"
                },
                "tier": {
                    "type": "DIRECT"
                },
                "contactInfo": {
                    "phone": "(888) 380-6991",
                    "website": "http://WWW.DAYTONANDREWS.NET"
                },
                "state": "NEW",
            }
        ],
        "repairshops": [
            {
                "name": "Dayton Andrews Chrysler Dodge Jeep Ram",
                "address": {
                    "street": "2388 Gulf To Bay Blvd",
                    "city": "Clearwater",
                    "stateCode": "FL",
                    "stateName": "Florida",
                    "county": "Pinellas",
                    "country": "USA",
                    "zipcode": "33765"
                },
                "active": true,
                "repairshopId": "781193"
            },
            ...
            {
                "name": "Dayton Andrews Chrysler Dodge Jeep Ram",
                "address": {
                    "street": "2388 Gulf To Bay Blvd",
                    "city": "Clearwater",
                    "stateCode": "FL",
                    "stateName": "Florida",
                    "county": "Pinellas",
                    "country": "USA",
                    "zipcode": "33765"
                },
                "active": true,
                "repairshopId": "76679",
                "make": {
                    "name": "Jeep",
                    "niceName": "jeep"
                }
            }
        ],
        "reviews": {
            "sales": {
                "overallRating": 0,
                "count": 2,
                "recommendedCount": 0,
                "notRecommendedCount": 0
            },
            "service": {
                "overallRating": 0,
                "count": 3,
                "recommendedCount": 0,
                "notRecommendedCount": 0
            }
        },
        "states": [
            "NEW",
            "USED"
        ],
        "type": "ROOFTOP"
    }
