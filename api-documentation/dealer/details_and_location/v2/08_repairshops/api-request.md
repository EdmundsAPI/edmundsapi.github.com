---
layout: api-documentation
title : 'Find Repairshops by zipcode'
title_active_left_menu: Details and Location
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Repairshops by zipcode'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/repairshops'

level: 4
description_edpoint: 'Find Repairshops by zipcode'
title_md : Sample Request
number: 4

---

### Sample Request

Find Repairshops of the **90404** area

#### URL

    https://api.edmunds.com/api/dealer/v2/repairshops?zipcode=90404&api_key={api_key}&fmt=json

#### Response

    {
        "repairshops": [
            {
                "dealerId": "893",
                "name": "Volkswagen Santa Monica",
                "niceName": "VolkswagenSantaMonica_3",
                "distance": 0.408611146753936,
                "operations": {
                "Wednesday": "7:00 AM-8:00 PM",
                "Tuesday": "7:00 AM-8:00 PM",
                "Thursday": "7:00 AM-8:00 PM",
                "Saturday": "7:00 AM-5:00 PM",
                "Friday": "7:00 AM-8:00 PM",
                "Monday": "7:00 AM-8:00 PM",
                "Sunday": "Day off"
                },
                "address": {
                    "street": "2440 Santa Monica Blvd",
                    "apartment": "",
                    "city": "Santa Monica",
                    "stateCode": "CA",
                    "stateName": "California",
                    "county": "Los Angeles",
                    "country": "USA",
                    "latitude": 34.032043,
                    "longitude": -118.475861,
                    "zipcode": "90404"
                },
                "active": true,
                "repairshopId": "72262",
                "make": {
                    "name": "Volkswagen",
                    "niceName": "volkswagen"
                },
                "type": "REPAIRSHOP"
            },
            ...
            {
                "dealerId": "885",
                "name": "Honda of Santa Monica",
                "niceName": "HondaofSantaMonica745196",
                "distance": 0.7253494405581872,
                "operations": {
                    "Wednesday": "9:00 AM-9:00 PM",
                    "Tuesday": "9:00 AM-9:00 PM",
                    "Thursday": "9:00 AM-9:00 PM",
                    "Saturday": "9:00 AM-9:00 PM",
                    "Friday": "9:00 AM-9:00 PM",
                    "Monday": "9:00 AM-9:00 PM",
                    "Sunday": "10:00 AM-7:00 PM"
                },
                "address": {
                    "street": "1720 Santa Monica Blvd",
                    "apartment": "",
                    "city": "Santa Monica",
                    "stateCode": "CA",
                    "stateName": "California",
                    "county": "Los Angeles",
                    "country": "USA",
                    "latitude": 34.026574,
                    "longitude": -118.482604,
                    "zipcode": "90404"
                },
                "active": true,
                "repairshopId": "781499",
                "type": "REPAIRSHOP"
            }
        ],
        "repairshopsCount": 1675,
        "links": [
            {
                "rel": "first",
                "href": "/api/dealer/v2/repairshops?zipcode=90404&pagesize=10&pagenum=1&api_key={api_key}"
            },
            {
                "rel": "next",
                "href": "/api/dealer/v2/repairshops?zipcode=90404&pagesize=10&pagenum=2&api_key={api_key}"
            },
            {
                "rel": "last",
                "href": "/api/dealer/v2/repairshops?zipcode=90404&pagesize=10&pagenum=168&api_key={api_key}"
            }
        ]
    }
        
