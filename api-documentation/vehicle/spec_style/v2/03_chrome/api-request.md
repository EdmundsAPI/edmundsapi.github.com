---
layout: api-documentation
title : 'Get Car Style Details by Chrome Data ID'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Car Style Details by Chrome Data ID'
spec: spec_style
version: v2
api: vehicle
dropdown-link: '/api/vehicle/v2/partners/chrome/styles/{ChromeId}'


level: 4
description_edpoint: 'Get Car Style Details by Chrome Data ID'
title_md : Sample Request
number: 4

---

### Sample Request 1

Get the style details for **Chrome Data ID 11916**

#### URL

	https://api.edmunds.com/api/vehicle/v2/partners/chrome/styles/11916?fmt=json&api_key={api key}
	
#### Response
	
	{
	    "make": {
	        "id": 200007302,
	        "name": "GMC",
	        "niceName": "gmc"
	    },
	    "model": {
	        "id": "GMC_Savana_Cargo",
	        "name": "Savana Cargo",
	        "niceName": "savana-cargo"
	    },
	    "id": 100001127,
	    "name": "2500 3dr Ext Van (4.3L 6cyl 4A)",
	    "year": {
	        "id": 100000114,
	        "year": 2001
	    },
	    "submodel": {
	        "body": "Van",
	        "modelName": "Savana Cargo",
	        "niceName": "van"
	    },
	    "trim": "2500"
	}

### Sample Request 2

Get the style ***full*** details for **Chrome Data ID 11916**

#### URL

	https://api.edmunds.com/api/vehicle/v2/partners/chrome/styles/11916?fmt=json&api_key={api key}&view=full

#### Response

	{
	    "make": {
	        "id": 200007302,
	        "name": "GMC",
	        "niceName": "gmc"
	    },
	    "model": {
	        "id": "GMC_Savana_Cargo",
	        "name": "Savana Cargo",
	        "niceName": "savana-cargo"
	    },
	    "engine": {
	        "id": "200336341",
	        "name": "Engine",
	        "equipmentType": "ENGINE",
	        "compressionRatio": 9.2,
	        "cylinder": 6,
	        "size": 4.3,
	        "displacement": 4300.0,
	        "configuration": "V",
	        "fuelType": "regular unleaded",
	        "horsepower": 200,
	        "torque": 250,
	        "totalValves": 12,
	        "type": "gas",
	        "code": "6VNAG4.3",
	        "compressorType": "NA"
	    },
	    "transmission": {
	        "id": "200336342",
	        "name": "4A",
	        "equipmentType": "TRANSMISSION",
	        "transmissionType": "AUTOMATIC",
	        "numberOfSpeeds": "4"
	    },
	    "drivenWheels": "rear wheel drive",
	    "numOfDoors": "3",
	    "options": [{
	        "category": "Other",
	        "options": [{
	            "id": "200336289",
	            "name": "Heavy-Duty Trailering Equipment",
	            "description": "Includes platform trailer hitch and eight wire harness.",
	            "equipmentType": "OPTION",
	            "manufactureOptionName": "Heavy-Duty Trailering Equipment",
	            "manufactureOptionCode": "Z82",
	            "price": {
	                "baseMSRP": 310.0,
	                "baseInvoice": 267.0,
	                "estimateTmv": false
	            }
	        }, {
	            "id": "200336306",
	            "name": "Swing Out Rear Door",
	            "description": "INCLUDED in A19. REQUIRES ZW2.",
	            "equipmentType": "OPTION",
	            "manufactureOptionName": "Swing Out Rear Door",
	            "manufactureOptionCode": "A18",
	            "price": {
	                "baseMSRP": 80.0,
	                "baseInvoice": 69.0,
	                "estimateTmv": false
	            }
	        }, 
			...
	        }, {
	            "id": "200336282",
	            "name": "Driver Seat Only",
	            "description": "Includes reclining bucket driver seat only. Deletes passenger side airbag, passenger seat cannot be added back later.",
	            "equipmentType": "OPTION",
	            "manufactureOptionName": "Driver Seat Only",
	            "manufactureOptionCode": "ZX1",
	            "price": {
	                "baseMSRP": -407.0,
	                "baseInvoice": -350.0,
	                "estimateTmv": false
	            }
	        }]
	    }],
	    "colors": [{
	        "category": "Interior",
	        "options": [{
	            "id": "200336252",
	            "name": "Pewter",
	            "equipmentType": "COLOR",
	            "manufactureOptionName": "Pewter",
	            "manufactureOptionCode": "92G",
	            "colorChips": {
	                "primary": {
	                    "r": 127,
	                    "g": 128,
	                    "b": 118,
	                    "hex": "7F8076"
	                }
	            },
	            "fabricTypes": []
	        }, 
			...
	        }, {
	            "id": "200336246",
	            "name": "Fire Red",
	            "equipmentType": "COLOR",
	            "manufactureOptionName": "Fire Red",
	            "manufactureOptionCode": "74U",
	            "colorChips": {
	                "primary": {
	                    "r": 142,
	                    "g": 17,
	                    "b": 38,
	                    "hex": "8E1126"
	                }
	            },
	            "fabricTypes": []
	        }]
	    }],
	    "manufacturerCode": "TG21705",
	    "price": {
	        "baseMSRP": 22124.0,
	        "baseInvoice": 19359.0,
	        "deliveryCharges": 690.0,
	        "usedTmvRetail": 3056.0,
	        "usedPrivateParty": 1951.0,
	        "usedTradeIn": 1288.0,
	        "estimateTmv": false,
	        "tmvRecommendedRating": 0
	    },
	    "categories": {
	        "EPAClass": "Cargo Vans",
	        "vehicleSize": "Large",
	        "primaryBodyType": "Van",
	        "vehicleStyle": "Cargo Van",
	        "vehicleType": "Van"
	    },
	    "id": 100001127,
	    "name": "2500 3dr Ext Van (4.3L 6cyl 4A)",
	    "year": {
	        "id": 100000114,
	        "year": 2001
	    },
	    "submodel": {
	        "body": "Van",
	        "modelName": "Savana Cargo",
	        "niceName": "van"
	    },
	    "trim": "2500",
	    "states": ["USED"],
	    "squishVins": ["1GTFG29F11", "1GTGG29R11", "1GTFG29M11", "1GTGG29F11", "1GTFG29W11", "1GTGG29W11", "1GTFG29R11"],
	    "MPG": {
	        "highway": "17",
	        "city": "13"
	    }
	}