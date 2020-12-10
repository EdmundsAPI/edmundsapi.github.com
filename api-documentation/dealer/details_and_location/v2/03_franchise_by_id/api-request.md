---
layout: api-documentation
title : 'Find Franchise by ID'
title_active_left_menu: Details and Location
title_parent: Api documentation

amount_version: 125
title-endpoint: 'Find Franchise by ID'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/franchises/{franchiseId}'

level: 4
description_edpoint: 'Find Franchise by ID'
title_md : Sample Request
number: 4

---

### Sample Request

Find Franchise with ID **880479**

#### Basic request

#### URL

    https://api.edmunds.com/api/dealer/v2/franchises/880479?api_key={api_key}&fmt=json

#### Response

    {
        "dealerId": "880478",
        "name": "gaelicenterprises",
        "niceName": "",
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
   }
   
#### Full request

#### URL

    https://api.edmunds.com/api/dealer/v2/franchises/755769?view=full&api_key={api_key}&fmt=json

#### Response

    {
        "dealerId": "12796",
        "name": "Mohawk Honda",
        "niceName": "MohawkHonda755769",
        "operations": {
            "Wednesday": "08:30 AM-08:00 PM",
            "Thursday": "08:30 AM-08:00 PM",
            "Tuesday": "08:30 AM-08:00 PM",
            "Saturday": "09:00 AM-05:00 PM",
            "Friday": "08:30 AM-06:00 PM",
            "Monday": "08:30 AM-08:00 PM",
            "Sunday": "Day off"
        },
        "address": {
            "street": "175 Freemans Bridge Rd",
            "apartment": "",
            "city": "Scotia",
            "stateCode": "NY",
            "stateName": "New York",
            "county": "Schenectady",
            "country": "USA",
            "latitude": 42.846342,
            "longitude": -73.942109,
            "zipcode": "12302"
        },
        "active": true,
        "franchiseId": "755769",
        "contactInfo": {
            "phone": "(877) 717-6764",
            "website": "http://www.mohawkhonda.com/"
        },
        "state": "USED",
        "type": "DEALERFRANCHISE"
    }
    
