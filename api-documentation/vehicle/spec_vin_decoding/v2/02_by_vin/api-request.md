---
layout: api-documentation
title : 'Get Vehicle Details Through VIN Decoding'
title_active_left_menu: "Spec: VIN Decoding"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Vehicle Details Through VIN Decoding v2'
spec: spec_vin_decoding
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/vins/{vin}'


level: 4
description_edpoint: 'Get Vehicle Details Through VIN Decoding'
title_md : Sample Request
number: 4

---

###Sample Request

Get details for VIN **4T1BK1EB6DU056165**

#### URL

	https://api.edmunds.com/api/vehicle/v2/vins/4T1BK1EB6DU056165?manufacturerCode=3548&fmt=json&api_key={api key}
	
#### Response
	
    {
      "make": {
        "id": 200003381,
        "name": "Toyota",
        "niceName": "toyota"
      },
      "model": {
        "id": "Toyota_Avalon",
        "name": "Avalon",
        "niceName": "avalon"
      },
      "transmission": {
        "id": "200418106",
        "name": "6A",
        "equipmentType": "TRANSMISSION",
        "availability": "STANDARD",
        "automaticType": "Shiftable automatic",
        "transmissionType": "AUTOMATIC",
        "numberOfSpeeds": "6"
      },
      "drivenWheels": "front wheel drive",
      "numOfDoors": "4",
      "options": [
        {
          "category": "Additional Fees",
          "options": [
            {
              "id": "200442180",
              "name": "50 State Emissions",
              "equipmentType": "OPTION",
              "availability": "All",
              "manufactureOptionName": "50 State Emissions",
              "manufactureOptionCode": "FE",
              "category": "Additional Fees",
              "price": {
                "baseMSRP": 0,
                "baseInvoice": 0,
                "estimateTmv": false
              }
            }
          ]
        },
        {
          "category": "Exterior",
          "options": [
            {
              "id": "200442242",
              "name": "Wheel Locks",
              "equipmentType": "OPTION",
              "availability": "All",
              "manufactureOptionName": "Wheel Locks",
              "manufactureOptionCode": "WL",
              "category": "Exterior",
                "price": {
                  "baseMSRP": 81,
                  "baseInvoice": 51,
                  "estimateTmv": false
                }
            }
          ]
        }
      ],
      "colors": [
        {
          "category": "Interior",
          "options": [
            {
              "id": "200442176",
              "name": "Black Leather",
              "equipmentType": "COLOR",
              "availability": "USED",
              "manufactureOptionName": "Black",
              "manufactureOptionCode": "LD20",
              "category": "Interior",
              "colorChips": {
                "primary": {
                  "r": 25,
                  "g": 25,
                  "b": 25,
                  "hex": "191919"
                }
              },
              "fabricTypes": [
                {
                  "name": "FABRIC_TYPE_1",
                  "value": "leather"
                }
              ]
            }
          ]
        },
        {
          "category": "Exterior",
          "options": [
            {
              "id": "200442170",
              "name": "Attitude Black Metallic",
              "equipmentType": "COLOR",
              "availability": "USED",
              "manufactureOptionName": "Attitude Black Metallic",
              "manufactureOptionCode": "218",
              "category": "Exterior",
              "colorChips": {
                "primary": {
                  "r": 36,
                  "g": 35,
                  "b": 30,
                  "hex": "24231E"
                }
              },
              "fabricTypes": [ ]
            }
          ]
        }
      ],
      "manufacturerCode": "3548",
      "price": {
        "baseMSRP": 35500,
        "baseInvoice": 31950,
        "deliveryCharges": 810,
        "usedTmvRetail": 32150,
        "usedPrivateParty": 30796,
        "usedTradeIn": 29001,
        "estimateTmv": false
      },
      "categories": {
        "EPAClass": "Midsize Cars",
        "primaryBodyType": "Car",
        "vehicleStyle": "Sedan",
        "vehicleType": "Car"
      },
      "vin": "4T1BK1EB6DU056165",
      "squishVin": "4T1BK1EBDU",
      "years": [
        {
          "id": 200418086,
          "year": 2013,
          "styles": [
            {
              "id": 200442097,
              "name": "XLE Touring 4dr Sedan (3.5L 6cyl 6A)",
              "submodel": {
                "body": "Sedan",
                "modelName": "Avalon Sedan",
                "niceName": "sedan"
              },
              "trim": "XLE Touring"
            }
          ],
          "states": [
            "NEW",
            "USED"
          ]
        }
      ],
      "matchingType": "VIN",
      "equipment": [
        {
          "id": "200418105",
          "name": "3.5L V6 24 valve _ gas",
          "equipmentType": "ENGINE",
          "availability": "STANDARD",
          "compressionRatio": 10.8,
          "cylinder": 6,
          "size": 3.5,
          "displacement": 3456,
          "configuration": "V",
          "fuelType": "regular unleaded",
          "horsepower": 268,
          "torque": 248,
          "totalValves": 24,
          "manufacturerEngineCode": "2GR-FE",
          "type": "gas",
          "code": "6VNAG3.5",
          "compressorType": "NA"
        },
        {
          "id": "200418106",
          "name": "6A",
          "equipmentType": "TRANSMISSION",
          "availability": "STANDARD",
          "automaticType": "Shiftable automatic",
          "transmissionType": "AUTOMATIC",
          "numberOfSpeeds": "6"
        }
      ],
      "MPG": {
        "highway": "31",
        "city": "21"
      }
    }