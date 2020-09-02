---
layout: api-documentation
title : 'Get Car Style Details by Car Style ID'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Car Style Details by Car Style ID'
spec: spec_style
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{id}'


level: 4
description_edpoint: 'Get Car Style Details by Car Style ID'
title_md : Sample Request
number: 4

---

### Sample Request 1

Get the style details for car style **101353967**

#### URL

	https://api.edmunds.com/api/vehicle/v2/styles/101353967?fmt=json&api_key={api key}
	
#### Response
	
	{
	  "id": 101353967,
	  "name": "4dr SUV (3.5L 6cyl 6A)",
	  "make": {
	    "id": 200001623,
	    "name": "Lexus",
	    "niceName": "lexus"
	  },
	  "model": {
	    "id": "Lexus_RX_350",
	    "name": "RX 350",
	    "niceName": "rx350"
	  },
	  "year": {
	    "id": 100533091,
	    "year": 2011
	  },
	  "submodel": {
	    "body": "SUV",
	    "modelName": "RX 350 SUV",
	    "niceName": "suv"
	  },
	  "trim": "Base"
   }

###Sample Request 2

Get the style ***full*** details for **2011 Lexus RX-350**

#### URL

	https://api.edmunds.com/api/vehicle/v2/styles/101353967?fmt=json&api_key={api key}&view=full

#### Response

	{
	  "id": 101353967,
	  "name": "4dr SUV (3.5L 6cyl 6A)",
	  "make": {
	    "id": 200001623,
	    "name": "Lexus",
	    "niceName": "lexus"
	  },
	  "model": {
	    "id": "Lexus_RX_350",
	    "name": "RX 350",
	    "niceName": "rx350"
	  },
	  "year": {
	    "id": 100533091,
	    "year": 2011
	  },
	  "submodel": {
	    "body": "SUV",
	    "modelName": "RX 350 SUV",
	    "niceName": "suv"
	  },
	  "trim": "Base",
	  "states": [
	    "USED"
	  ],
	  "engine": {
	    "id": "200349838",
	    "name": "Engine",
	    "compressionRatio": 10.8,
	    "cylinder": 6,
	    "size": 3.5,
	    "displacement": 3457,
	    "configuration": "V",
	    "fuelType": "premium unleaded (recommended)",
	    "horsepower": 275,
	    "torque": 257,
	    "totalValves": 24,
	    "manufacturerEngineCode": "2GR-FE",
	    "type": "gas",
	    "code": "6VNAG3.5",
	    "compressorType": "NA"
	  },
	  "transmission": {
	    "id": "200349839",
	    "name": "6A",
	    "automaticType": "Shiftable automatic",
	    "transmissionType": "AUTOMATIC",
	    "numberOfSpeeds": "6"
	  },
	  "options": [
	    {
	      "category": "Interior",
	      "options": [
	        {
	          "id": "200350215",
	          "name": "12-Speaker Premium Audio System",
	          "equipmentType": "OPTION",
	          "manufactureOptionName": "12-Speaker Premium Audio System",
	          "manufactureOptionCode": "EK",
	          "category": "Interior"
	        },
	        ...
	        {
	          "id": "200372325",
	          "name": "Cargo Spider Net",
	          "equipmentType": "OPTION",
	          "manufactureOptionName": "Cargo Spider Net",
	          "manufactureOptionCode": "C6",
	          "category": "Interior"
	        }
	      ]
	    },
	    {
	      "category": "Mechanical",
	      "options": [
	        {
	          "id": "200372330",
	          "name": "Remote Engine Start",
	          "equipmentType": "OPTION",
	          "manufactureOptionName": "Remote Engine Start",
	          "manufactureOptionCode": "V4",
	          "category": "Mechanical"
	        }
	      ]
	    },
	    {
	      "category": "Safety",
	      "options": [
	        {
	          "id": "200350214",
	          "name": "Backup Monitor",
	          "equipmentType": "OPTION",
	          "manufactureOptionName": "Backup Monitor",
	          "manufactureOptionCode": "EC",
	          "category": "Safety"
	        },
	        ...
	        {
	          "id": "200372329",
	          "name": "Glass Breakage Sensor",
	          "equipmentType": "OPTION",
	          "manufactureOptionName": "Glass Breakage Sensor",
	          "manufactureOptionCode": "V2",
	          "category": "Safety"
	        }
	      ]
	    },
	    {
	      "category": "Package",
	      "options": [
	        {
	          "id": "200350238",
	          "name": "Sports Package",
	          "equipmentType": "OPTION",
	          "manufactureOptionName": "Sports Package",
	          "manufactureOptionCode": "SP",
	          "category": "Package"
	        },
	        ...
	        {
	          "id": "200350227",
	          "name": "Luxury Package",
	          "equipmentType": "OPTION",
	          "manufactureOptionName": "Luxury Package",
	          "manufactureOptionCode": "LL",
	          "category": "Package"
	        }
	      ]
	    },
	    {
	      "category": "Exterior",
	      "options": [
	        {
	          "id": "200372332",
	          "name": "Wheel Locks",
	          "equipmentType": "OPTION",
	          "manufactureOptionName": "Wheel Locks",
	          "manufactureOptionCode": "WL",
	          "category": "Exterior"
	        },
	        ...
	        {
	          "id": "200372326",
	          "name": "Towing Hitch Receiver w\/Ball Mount",
	          "equipmentType": "OPTION",
	          "manufactureOptionName": "Towing Hitch Receiver w\/Ball Mount",
	          "manufactureOptionCode": "DH",
	          "category": "Exterior"
	        }
	      ]
	    }
	  ],
	  "colors": [
	    {
	      "category": "Interior",
	      "options": [
	        {
	          "id": "200350199",
	          "name": "Parchment",
	          "equipmentType": "COLOR",
	          "manufactureOptionName": "Parchment",
	          "manufactureOptionCode": "--",
	          "category": "Interior",
	          "colorChips": {
	            "primary": {
	              "r": 168,
	              "g": 163,
	              "b": 143,
	              "hex": "A8A38F"
	            }
	          },
	          "fabricType": "leather"
	        },
	        ...
	        {
	          "id": "200350200",
	          "name": "Black",
	          "equipmentType": "COLOR",
	          "manufactureOptionName": "Black",
	          "manufactureOptionCode": "--",
	          "category": "Interior",
	          "colorChips": {
	            "primary": {
	              "r": 57,
	              "g": 57,
	              "b": 57,
	              "hex": "393939"
	            }
	          },
	          "fabricType": "leather"
	        }
	      ]
	    },
	    {
	      "category": "Exterior",
	      "options": [
	        {
	          "id": "200350211",
	          "name": "Stargazer Black",
	          "equipmentType": "COLOR",
	          "manufactureOptionName": "Stargazer Black",
	          "manufactureOptionCode": "--",
	          "category": "Exterior",
	          "colorChips": {
	            "primary": {
	              "r": 23,
	              "g": 23,
	              "b": 23,
	              "hex": "171717"
	            }
	          }
	        },
	        ...
	        {
	          "id": "200350208",
	          "name": "Obsidian",
	          "equipmentType": "COLOR",
	          "manufactureOptionName": "Obsidian",
	          "manufactureOptionCode": "212",
	          "category": "Exterior",
	          "colorChips": {
	            "primary": {
	              "r": 9,
	              "g": 9,
	              "b": 9,
	              "hex": "090909"
	            }
	          }
	        }
	      ]
	    }
	  ],
	  "drivenWheels": "front wheel drive",
	  "numOfDoors": "4",
	  "squishVins": [
	    "JTJZK1BAB2",
	    "2T2ZK1BABC"
	  ],
	  "categories": {
	    "EPAClass": "Sport Utility Vehicles",
	    "vehicleSize": "Midsize",
	    "primaryBodyType": "SUV",
	    "vehicleStyle": "4dr SUV",
	    "vehicleType": "SUV"
	  },
	  "MPG": {
	    "highway": "25",
	    "city": "18"
	  },
	  "manufacturerCode": "9420",
	  "price": {
	    "baseMSRP": 39075,
	    "baseInvoice": 35363,
	    "deliveryCharges": 875,
	    "usedTmvRetail": 28005,
	    "usedPrivateParty": 26600,
	    "usedTradeIn": 24883,
	    "estimateTmv": false,
	    "tmvRecommendedRating": 0
	  }
	}