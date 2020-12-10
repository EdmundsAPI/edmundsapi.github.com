---
layout: api-documentation
title : 'Find Repairshop by ID'
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 125
title-endpoint: 'Find Repairshop by ID'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/repairshops/{repairshopId}'

level: 4
description_edpoint: 'Find Repairshop by ID'
title_md : Response format
number: 3

---


### Response format

    {
        "repairshopId": {string},
        "dealerId": {string},
        "name": {string},
        "niceName": {string},
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
            "zipcode": {integer}
        },
        "active": {boolean},
        "make": {
            "name": {string},
            "niceName": {string}
        },
        "type": {string}
    }


| Property                      | Description                                                       | Visibility                |
|:------------------------------|:------------------------------------------------------------------|:--------------------------|
| repairshopId                  | The repairshop ID                                                 | Edmunds, Partners, public |
| dealerId                      | The dealer location ID                                            | Edmunds, Partners, public |
| type                          | The dealer location type                                          | Edmunds, Partners, public |
| name                          | The repairshop name                                               | Edmunds, Partners, public |
| active                        | Indicates that the repairshop is active                           | Edmunds, Partners, public |
| niceName                      | The repairshop logical name                                       | Edmunds, Partners, public |
| address                       | The address for the repairshop                                    | Edmunds, Partners, public |
| operations                    | The list of operations                                            | Edmunds, Partners, public |
| make                          | The make supported by the repairshop                              | Edmunds, Partners, public |
| contactInfo                   | The repairshop contact info                                       | Edmunds, Partners, public | 





