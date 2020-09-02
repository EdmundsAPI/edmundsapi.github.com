---
layout: api-documentation
title : 'Get details for a specific car make/brand v3'
title_active_left_menu: 'Spec: Make'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'v3/{make}'
spec: spec_make
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/{make}'


level: 4
description_edpoint: 'Get Details on a Specific Car Make v3'
title_md : Sample Request
number: 4

---

### Sample Request 1

Get the list of models and model/year IDs for __NEW__ Lexus cars

#### URL

    http://api.edmunds.com/api/vehicle/v3/lexus?api_key={api key}&state=NEW

#### Response

    {
        "id": 200001623,
        "name": "Lexus",
        "niceName": "lexus",
        "models":[
          {
            "id": "Lexus_CT_200h",
            "name":    "CT 200h",
            "niceName": "ct200h",
            "years":[
              {
                "id": 200437666,
                "year": 2013,
                "states": ["NEW"]
              },
              ...
              {
                "id": 100537990,
                "year": 2012,
                "states": ["USED"]
              }
            ],
            "states": [
              "NEW",
              "USED",
              "NEW_USED"
            ]
          },
          ...
          {
            "id": "Lexus_ES_350",
            "name": "ES 350",
            "niceName": "es350",
            "years": [
              {
                "id": 2013,
                "year": 100539469,
                "states":["USED", "NEW"]
              }
            ],
            "states": [
              "NEW",
              "USED",
              "NEW_USED"
            ]
          }
        ]
    }