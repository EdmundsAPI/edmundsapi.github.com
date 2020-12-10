---
layout: api-documentation
title : 'Spec: Style'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get A List of Styles'
spec: spec_style
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/styles'


level: 4
description_edpoint: 'Get A List of Styles'
title_md : Sample Request
number: 4
---

### Sample Request

Get A List of Styles for **Honda Civic**.

#### URL

    https://api.edmunds.com/api/vehicle/v3/styles?api_key={api key}&makeNiceName=honda&modelNiceName=civic
    
#### Response
    
    {
      "totalNumber": 730,
      "totalPages": 73,
      "results": [
        {
          "id": 3909,
          "makeId": 200001444,
          "year": 1992,
          "makeName": "Honda",
          "makeNiceName": "honda",
          "makeNiceId": "honda",
          "modelId": "Honda_Civic",
          "modelName": "Civic",
          "modelNiceName": "civic",
          "modelNiceId": "civic",
          "modelYearId": 786,
          "modelLinkCode": "M030278",
          "standardEngine": {
            "id": "786_200520065",
            "href": "/api/vehicle/v3/equipments?_id=786_200520065"
          },
          "standardTransmission": {
            "id": "786_200520063",
            "href": "/api/vehicle/v3/equipments?_id=786_200520063"
          },
          "transmissionType": "MANUAL",
          "engineType": "gas",
          "engineCompressorType": "NATURALLY_ASPIRED",
          "engineFuelType": "regular unleaded",
          "engineCylinder": 4,
          "engineSize": 1.5,
          "numberOfSeats": 0,
          "withBluetooth": false,
          "withNavigationSystem": false,
          "withHeatedSeats": false,
          "price": {
            "usedTmvRetail": 1500.0,
            "usedPrivateParty": 813.0,
            "usedTradeIn": 400.0,
            "estimateTmv": false
          },
          "trim": {
            "name": "LX",
            "niceName": "lx",
            "slug": "lx"
          },
          "categories": {
            "PRIMARY_BODY_TYPE": [
              "Car"
            ],
            ...
          },
          "categoryValues": [
            "N/A",
            "Car",
            "Compact",
            "Sedan"
          ],
          "niceCategoryValues": [
            "na",
            "compact",
            "car",
            "sedan"
          ],
          "modelYear": {
            "id": 786,
            "name": "1992",
            "year": 1992,
            "publicationStates": [
              "USED"
            ],
            "href": "/api/vehicle/v3/modelYears?id=786"
          },
          "attributeGroups": {
            "CARGO_DIMENSIONS": {
              "id": 12,
              "name": "CARGO_DIMENSIONS",
              "properties": {
                "CARGO_CAPACITY,_ALL_SEATS_IN_PLACE": "12.4"
              },
              "attributes": {
                "CARGO_CAPACITY,_ALL_SEATS_IN_PLACE": {
                  "id": 120,
                  "name": "CARGO_CAPACITY,_ALL_SEATS_IN_PLACE",
                  "value": "12.4"
                }
              }
            },
            ...
          },
          "squishVins": [
            {
              "squishVin": "JHMEG855NS",
              "engineNames": [
                "4INAG1.5"
              ],
              "squishVinTransmissions": [
                {
                  "transmissionType": "MT",
                  "numberOfSpeeds": 5
                }
              ]
            },
            ...
          ],
          "subModels": [
            {
              "id": 200670177,
              "name": "Civic Sedan",
              "niceId": "sedan",
              "identifier": "Sedan",
              "ruleType": "body"
            }
          ],
          "name": "LX 4dr Sedan",
          "niceName": "lx4drsedan",
          "niceId": "lx-4dr-sedan",
          "publicationState": "USED",
          "standardEquipment": [
            {
              "id": "786_-390910",
              "href": "/api/vehicle/v3/equipments?_id=786_-390910"
            },
            ...
          ],
          "optionalEquipment": [
            
          ],
          "usedEquipment": [
            {
              "id": "786_TMVU39093410000000",
              "href": "/api/vehicle/v3/equipments?_id=786_TMVU39093410000000"
            },
            ...
          ],
          "options": [
            {
              "id": "786_200520071",
              "href": "/api/vehicle/v3/equipments?_id=786_200520071"
            },
            ...
          ],
          "configurableEquipment": [
            
          ],
          "regionRestrictions": {
            
          },
          "typicallyEquippedSpecifications": [
            {
              "antecedent": {
                "styleId": 3909
              },
              "consequent": {
                "elements": [
                  {
                    "optionId": "TMVU39094010000002"
                  },
                  {
                    "elements": [
                      {
                        "optionId": "TMVU39091020000002"
                      },
                      {
                        "optionId": "TMVU39093410000000"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "edTypeCategories": [
            {
              "id": 11,
              "name": "Sedan",
              "slug": "sedan"
            }
          ]
        },
        ...
      ]
    }