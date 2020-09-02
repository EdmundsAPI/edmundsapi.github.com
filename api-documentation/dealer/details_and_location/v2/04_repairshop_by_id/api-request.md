---
layout: api-documentation
title : 'Find Repairshop by ID'
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Repairshop by ID'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/repairshops/{repairshopId}'

level: 4
description_edpoint: 'Find Repairshop by ID'
title_md : Sample Request
number: 4

---

### Sample Request

Find Repairshop by ID with ID 839031

#### URL

    https://api.edmunds.com/api/dealer/v2/repairshops/839031?api_key={api_key}&fmt=json

#### Response

    {
        "repairshopId": "839031",
        "dealerId": "839025",
        "name": "Mike Reichenbach Volkswagen",
        "niceName": "MikeReichenbachVolkswagen_2",
        "operations": {
            "Wednesday": "7:30 AM-6:00 PM",
            "Tuesday": "7:30 AM-6:00 PM",
            "Thursday": "7:30 AM-6:00 PM",
            "Saturday": "8:00 AM-4:00 PM",
            "Friday": "7:30 AM-6:00 PM",
            "Monday": "7:30 AM-6:00 PM",
            "Sunday": "Day off"
        },
        "address": {
            "street": "600 N Coit St",
            "apartment": "",
            "city": "Florence",
            "stateCode": "SC",
            "stateName": "South Carolina",
            "county": "Florence",
            "country": "USA",
            "latitude": 34.204264,
            "longitude": -79.770935,
            "zipcode": "29501"
        },
        "active": true,
        "make": {
            "name": "Volkswagen",
            "niceName": "volkswagen"
        },
        type: "REPAIRSHOP"
    }
