---
layout: api-documentation
title : 'Get Equipments List'
title_active_left_menu: "Spec: Equipment"
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get Equipments List'
spec: spec_equipment
version: v3
api: vehicle
dropdown-link: '/api/vehicle/v3/equipments'


level: 4
description_edpoint: 'Get Equipments List'
title_md : Sample Request
number: 4

---

### Sample Request

Get equipments details for car style ID **101353967** (2011 Lexus RX 350 4dr SUV).

#### URL

    https://api.edmunds.com/api/vehicle/v3/equipments?styleId=101353967&api_key={api key}
    
#### Response
    
    {
      "totalNumber": 105,
      "totalPages": 11,
      "results": [
        {
          "id": "-10135396748",
          "niceId": "10135396748",
          "modelYearId": 100533091,
          "styleId": 101353967,
          "name": "MISC._INTERIOR_FEATURES",
          "attributeGroups": {
            "MISC._INTERIOR_FEATURES": {
              "id": 30,
              "name": "MISC._INTERIOR_FEATURES",
              "properties": {
                "RETAINED_ACCESSORY_POWER": "retained accessory power",
                "FLOOR_MAT_MATERIAL": "carpet",
                "FIRST_AID_KIT": "first aid kit",
                "CRUISE_CONTROL": "cruise control",
                "READING_LIGHTS": "front and rear reading lights",
                "FLOOR_MATS": "floor mats",
                "CARGO_AREA_LIGHT": "cargo area light",
                "UNIVERSAL_REMOTE_TRANSMITTER": "universal remote transmitter",
                "2ND_ROW_FLOOR_MATS": "rear floor mats"
              },
              ...
            }
          },
          "equipmentClass": "UNKNOWN",
          "equipmentAvailability": "STANDARD"
        },
        ...
      ]
    }