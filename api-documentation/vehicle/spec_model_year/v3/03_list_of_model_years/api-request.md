---
layout: api-documentation
title : 'Get A List of Model Years'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get A List of Model Years'
spec: spec_model_year
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/modelYears'


level: 4
description_edpoint: 'Get A List of Model Years'
title_md : Sample Request
number: 4
---

### Sample Request

Get a list of model years for **Honda Accord**.

#### URL

    https://api.edmunds.com/api/vehicle/v3/modelYears?api_key={api key}&makeNiceName=honda&modelNiceName=accord
    
#### Response
    
    {
      "totalNumber": 32,
      "totalPages": 4,
      "results": [
        {
          "id": 100537089,
          "makeId": 200001444,
          "makeName": "Honda",
          "makeNiceName": "honda",
          "makeNiceId": "honda",
          "modelId": "Honda_Accord",
          "modelName": "Accord",
          "modelNiceName": "accord",
          "modelNiceId": "accord",
          "modelLinkCode": "M030277",
          "styles": [
            {
              "id": 101403692,
              "href": "/api/vehicle/v3/styles?id=101403692"
            },
            ...
          ],
          "newDefaultStyle": {
            "id": 101403689,
            "href": "/api/vehicle/v3/styles?id=101403689"
          },
          "usedDefaultStyle": {
            "id": 101403689,
            "href": "/api/vehicle/v3/styles?id=101403689"
          },
          "submodels": [
            {
              "id": 200410623,
              "name": "Accord Coupe",
              "niceId": "coupe",
              "identifier": "Coupe",
              "ruleType": "body",
            },
            ...
          ],
          "newDefaultSubmodel": {
            "id": 200410622,
            "name": "Accord Sedan",
            "niceId": "sedan",
            "identifier": "Sedan",
            "ruleType": "body",
          },
          "usedDefaultSubmodel": {
            "id": 200410622,
            "name": "Accord Sedan",
            "niceId": "sedan",
            "identifier": "Sedan",
            "ruleType": "body",
          },
          "midYear": false,
          "year": 2012,
          "model": {
            "id": "Honda_Accord",
            "name": "Accord",
            "niceName": "accord",
            "href": "/api/vehicle/v3/models?id=Honda_Accord"
          },
          "name": "2012",
          "attributeGroups": {
            "RELIABILITY_RATINGS": {
              "id": -100,
              "name": "RELIABILITY_RATINGS",
              "properties": {
                "FEATURES_AND_ACCESS_QUALITY_MECHANICAL": "5.0",
                ...
              },
              "attributes": {
                "FEATURES_AND_ACCESS_QUALITY_MECHANICAL": {
                  "id": 0,
                  "name": "FEATURES_AND_ACCESS_QUALITY_MECHANICAL",
                  "value": "5.0"
                },
                ...
              },
              ...
            }
          },
          "categories": {
            "Vehicle Style": [
              "Coupe",
              "Sedan"
            ],
            "Market": [
              "N/A",
              "Performance"
            ],
            ...
          },
          "types": {
            "market": [
              "N/A",
              "Performance"
            ],
            ...
          },
          "categoryValues": [
            "N/A",
            "Car",
            "Coupe",
            "Midsize",
            "Performance",
            "Sedan"
          ],
          "publicationStates": [
            "USED"
          ],
          "minBaseMSRP": 21480.0,
          "tmvCorePercents": [ ],
          "edTypeCategories": [
            {
              "id": 2,
              "name": "Coupe",
              "slug": "coupe"
            },
            ...
          ]
        },
        ...
      ]
    }