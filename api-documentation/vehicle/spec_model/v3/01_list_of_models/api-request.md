---
layout: api-documentation
title : 'Spec: Model'
title_active_left_menu: 'Spec Model'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get A List of Models'
spec: spec_model
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/models'


level: 4
description_edpoint: 'Get A List of Models'
title_md : Sample Request
number: 4
---

### Sample Request

Get A List of Models for **Honda**.

#### URL

    https://api.edmunds.com/api/vehicle/v3/models?api_key={api key}&makeNiceName=honda
    
#### Response
    
    {
      "totalNumber": 23,
      "totalPages": 3,
      "results": [
        {
          "id": "Honda_Clarity",
          "makeId": 200001444,
          "makeName": "Honda",
          "makeNiceName": "honda",
          "makeNiceId": "honda",
          "name": "Clarity",
          "niceName": "clarity",
          "adTargetId": "clarity",
          "niceId": "clarity",
          "modelLinkCode": "M170016",
          "make": {
            "id": 200001444,
            "href": "/api/vehicle/v3/makes?id=200001444"
          },
          "modelYears": [
            {
              "id": 401784083,
              "name": "2019",
              "year": 2019,
              "publicationStates": [
                "NEW_USED"
              ],
              "href": "/api/vehicle/v3/modelYears?id=401784083"
            },
            ...
          ],
          "attributeGroups": {
            "MAIN": {
              "id": 1,
              "name": "MAIN",
              "properties": {
                "USE_IN_NEW": "Y",
                "EPI_CATEGORY_ID": "14",
                ...
              },
              "attributes": {
                "USE_IN_NEW": {
                  "id": 10,
                  "name": "USE_IN_NEW",
                  "value": "Y"
                },
                "EPI_CATEGORY_ID": {
                  "id": 730,
                  "name": "EPI_CATEGORY_ID",
                  "value": "14"
                },
                ...
              }
            }
          },
          "categories": {
            "PRIMARY_BODY_TYPE": [
              "Car"
            ],
            ...
          },
          "categoryValues": [
            "N/A",
            ...
          ],
          "publicationStates": [
            "USED",
            "NEW_USED",
            "NEW"
          ]
        },
        ...
      ]
    }