---
layout: api-documentation
title : 'Spec: Make'
title_active_left_menu: 'Spec: Make'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get A List of Makes'
spec: spec_make
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/makes'


level: 4
description_edpoint: 'Get A List of Makes'
title_md : Sample Request
number: 4
---

### Sample Request

Get A List of Makes.

#### URL

    https://api.edmunds.com/api/vehicle/v3/makes?api_key={api key}
    
#### Response
    
    {
      "totalNumber": 66,
      "totalPages": 7,
      "results": [
        {
          "id": 200347866,
          "name": "Geo",
          "niceName": "geo",
          "adTargetId": "geo",
          "niceId": "geo",
          "useInUsed": "Y",
          "useInNew": "N",
          "useInPreProduction": "N",
          "useInFuture": "N",
          "models": [
            {
              "id": "Geo_Prizm",
              "name": "Prizm",
              "niceName": "prizm",
              "href": "/api/vehicle/v3/models?id=Geo_Prizm"
            },
            ...
          ]
        },
        ...
      ]
    }