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
dropdown-link: api/dealer/v2/dealers/{id}'

level: 4
description_edpoint: Find Rooftop Dealer by ID
title_md : Response format
number: 3

---


### Response format

#### JSON Response w/ view=basic (default)

    {
        "dealerId": {string},
        "name": {string},
        "niceName": {string},
        "operations": {
            "Wednesday": {string},
            "Thursday": {string},
            "Tuesday": {string},
            "Saturday": {string},
            "Friday": {string},
            "Monday": {string},
            "Sunday": {string}
        },
        "address": {
            "street": {string},
            "apartment": {string},
            "city": {string},
            "stateCode": {string},
            "stateName": {string},
            "county": {string},
            "country": {string},
            "latitude": {double},
            "longitude": {double},
            "zipcode": {string}
        },
        "active": {boolean},
        "contactInfo": {
            "phone": {string},
            "website": {string}
        },
        "states": {array},
        "type": {string}
    }


| Property                      | Description                                           | Visibility                |
|:------------------------------|:------------------------------------------------------|:--------------------------|
| dealerId                      | The dealer location ID                                | Edmunds, Partners, public |
| type                          | The dealer location type                              | Edmunds, Partners, public |
| name                          | The dealer name                                       | Edmunds, Partners, public |
| active                        | Indicates that the dealer is active                   | Edmunds, Partners, public |
| niceName                      | The dealer logical name                               | Edmunds, Partners, public |
| states                        | The list of vehicle states the dealer works with      | Edmunds, Partners, public |
| address                       | The address for the dealer                            | Edmunds, Partners, public |
| operations                    | The list of operations                                | Edmunds, Partners, public |
| contactInfo                   | The dealer contact info                               | Edmunds, Partners, public |


#### JSON Response w/ view=full

    {
        "dealerId": {string},
        "name": {string},
        "niceName": {string},
        "operations": {
            "Wednesday": {string},
            "Thursday": {string},
            "Tuesday": {string},
            "Saturday": {string},
            "Friday": {string},
            "Monday": {string},
            "Sunday": {string}
        },
        "address": {
            "street": {string},
            "apartment": {string},
            "city": {string},
            "stateCode": {string},
            "stateName": {string},
            "county": {string},
            "country": {string},
            "latitude": {double},
            "longitude": {double},
            "zipcode": {integer}
        },
        "active": {boolean},
        "contactInfo": {
            "phone": {string},
            "website": {string}
        },
        "franchises": [
            {
                "name": {string},
                "address": {
                    "street": {string},
                    "city": {string},
                    "stateCode": {string},
                    "stateName": {string},
                    "county": {string},
                    "country": {string},
                    "zipcode": {integer}
                },
                "active": {boolean},
                "franchiseId": {integer},
                "make": {
                    "name": {string},
                    "niceName": {string}
                },
                "tier": {
                    "type": {string}
                },
                "contactInfo": {
                    "phone": {string},
                    "website": {string}
                },
                "state": {string},
            }
        ],
        "repairshops": [
            {
                "name": {string},
                "address": {
                    "street": {string},
                    "city": {string},
                    "stateCode": {string},
                    "stateName": {string},
                    "county": {string},
                    "country": {string},
                    "zipcode": {integer}
                },
                "active": {boolean},
                "repairshopId": {integer}
            },
        ],
        "states": {array},
        "type": {string}
    }

| Property                   | Description                                              | Visibility                |
|:---------------------------|:---------------------------------------------------------|:--------------------------|
| dealerId                   | The dealer location ID                                   | Edmunds, Partners, public |
| type                       | The dealer location type                                 | Edmunds, Partners, public |
| name                       | The dealer name                                          | Edmunds, Partners, public |
| active                     | Indicates that the dealer is active                      | Edmunds, Partners, public |
| niceName                   | The dealer logical name                                  | Edmunds, Partners, public |
| states                     | The list of vehicle states the dealer works with         | Edmunds, Partners, public |
| address                    | The address for the dealer                               | Edmunds, Partners, public |
| operations                 | The list of operations                                   | Edmunds, Partners, public |
| contactInfo                | The dealer contact info                                  | Edmunds, Partners, public |
| reviews                    | The dealer sales and service review counters             | Edmunds, Partners, public |
| franchises                 | The list of dealer franchises                            | Edmunds, Partners, public |
| repairshops                | The list of dealer repairshops                           | Edmunds, Partners, public |




