---
layout: api-documentation
title : 'Find Franchise by ID'
title_active_left_menu: Details and Location
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Franchise by ID'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/franchises/{franchiseId}'

level: 4
description_edpoint: 'Find Franchise by ID'
title_md : Response format
number: 3

---


### Response format

#### JSON Response w/ view=basic (default)

    {
        "franchiseId": {string},
        "dealerId": {string},
        "name": {string},
        "niceName": {string},
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
        "make": {
            "name": {string},
            "niceName": {string}
        },
        "contactInfo": {
            "phone": {string},
            "website": {string}
        },
        "active": {boolean},
        "state": {string},
        "type": {string}
    }

| Property                      | Description                                                     | Visibility                |
|:------------------------------|:----------------------------------------------------------------|:--------------------------|
| franchiseId                   | The franchise ID                                                | Edmunds, Partners, Public |
| dealerId                      | The dealer location ID                                          | Edmunds, Partners, Public |
| name                          | The franchise name                                              | Edmunds, Partners, Public |
| niceName                      | The franchise logical name                                      | Edmunds, Partners, Public |
| address                       | The address for the franchise                                   | Edmunds, Partners, Public |
| active                        | Indicates that the franchise is active                          | Edmunds, Partners, Public |
| make                          | The make supported by the franchise                             | Edmunds, Partners, Public |
| contactInfo                   | The franchise contact info                                      | Edmunds, Partners, Public |
| state                         | The vehicle state the franchise works with                      | Edmunds, Partners, Public |
| type                          | The dealer location type                                        | Edmunds, Partners, Public |


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
            "zipcode": {string}
        },
        "make": {
            "name": {string},
            "niceName": {string}
        },
        "contactInfo": {
            "phone": {string},
            "website": {string}
        },
        "active": {boolean},
        "franchiseId": {string},
        "contactInfo": {
            "phone": {string},
            "website": {string}
        },
        "state": {string},
        "type": {string}
    }

| Property                      | Description                                                     | Visibility                |
|:------------------------------|:----------------------------------------------------------------|:--------------------------|
| franchiseId                   | The franchise ID                                                | Edmunds, Partners, Public |
| dealerId                      | The dealer location ID                                          | Edmunds, Partners, Public |
| name                          | The franchise name                                              | Edmunds, Partners, Public |
| niceName                      | The franchise logical name                                      | Edmunds, Partners, Public |
| operations                    | The list of operations                                          | Edmunds, Partners, Public |
| address                       | The address for the franchise                                   | Edmunds, Partners, Public |
| active                        | Indicates that the franchise is active                          | Edmunds, Partners, Public |
| make                          | The make supported by the franchise                             | Edmunds, Partners, Public |
| contactInfo                   | The franchise contact info                                      | Edmunds, Partners, Public |
| state                         | The vehicle state the franchise works with                      | Edmunds, Partners, Public |
| type                          | The dealer location type                                        | Edmunds, Partners, Public |
