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
title_md : Response format
number: 3

---


### Response format

    {
        "repairshops": [
            {
                "dealerId": {string},
                "name": {string},
                "niceName": {string},
                "distance": {double},
                "operations": {
                    "Wednesday": {string},
                    "Tuesday": {string},
                    "Thursday": {string},
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
                "repairshopId": {string},
                "make": {
                    "name": {string},
                    "niceName": {string}
                },
                "type": {string}
            },
            ...
        ],
        "repairshopsCount": {integer},
        "links": [
            {
                "rel": {string},
                "href": {string}
            },
            ...
        ]
    }

| Property                      | Description                                                       | Visibility                |
|:------------------------------|:------------------------------------------------------------------|:--------------------------|
| repairshopId                  | The repairshop ID                                                 | Edmunds, Partners, Public |
| dealerId                      | The dealer location ID                                            | Edmunds, Partners, Public |
| name                          | The repairshop name                                               | Edmunds, Partners, Public |
| niceName                      | The repairshop logical name                                       | Edmunds, Partners, Public |
| distance                      | The distance between repairshop and specified by zipcode location | Edmunds, Partners, Public |
| operations                    | The list of operations                                            | Edmunds, Partners, Public |
| address                       | The address for the repairshop                                    | Edmunds, Partners, Public |
| active                        | Indicates that the repairshop is active                           | Edmunds, Partners, Public |
| make                          | The make supported by the repairshop                              | Edmunds, Partners, Public |
| type                          | The dealer location type                                          | Edmunds, Partners, Public |
| repairshopsCount              | The repairshops count                                             | Edmunds, Partners, Public |
| links                         | The pagination links                                              | Edmunds, Partners, Public |
