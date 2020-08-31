---
layout: api-documentation
title : 'Get All Options for a Car Style'
title_active_left_menu: "Spec: Colors and Options"
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get All Options for a Car Style'
spec: spec_colors_and_options
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{style ID}/options'


level: 4
description_edpoint: 'Get All Options for a Car Style'
title_md : Sample Request
number: 4

---

### Sample Request

Get all options available for car style ID **200477947**

#### URL

	https://api.edmunds.com/api/vehicle/v2/styles/200477947/options?fmt=json&api_key={api key}
	
#### Response
	
	{
	  "options": [
	    {
	      "id": "200478145",
	      "name": "5.7L V8 HEMI MDS VVT Engine (S Rwd)",
	      "equipmentType": "OPTION",
	      "availability": "S Rwd",
	      "manufactureOptionName": "5.7L V8 HEMI MDS VVT Engine",
	      "manufactureOptionCode": "EZH",
	      "equipment": [
	        {
	          "id": "200478100",
	          "name": "5A",
	          "equipmentType": "TRANSMISSION",
	          "availability": "OPTIONAL",
	          "automaticType": "Shiftable automatic",
	          "transmissionType": "AUTOMATIC",
	          "numberOfSpeeds": "5"
	        },
	        {
	          "id": "200478098",
	          "name": "5.7L V8 Engine (EZH)",
	          "equipmentType": "ENGINE",
	          "availability": "OPTIONAL",
	          "compressionRatio": 10.5,
	          "cylinder": 8,
	          "size": 5.7,
	          "displacement": 5654,
	          "configuration": "V",
	          "fuelType": "regular unleaded",
	          "horsepower": 363,
	          "torque": 394,
	          "totalValves": 16,
	          "manufacturerEngineCode": "EZH",
	          "type": "gas",
	          "code": "8VNAG5.7",
	          "compressorType": "NA"
	        }
	      ],
	      "category": "Package",
	      "attributes": [
            {
              "name": "Front Suspension Classification",
              "value": "independent"
            },
            {
              "name": "Independent Suspension",
              "value": "four-wheel"
            },
            {
              "name": "Rear Suspension Classification",
              "value": "independent"
            },
            {
              "name": "Antilock Braking System",
              "value": "4-wheel ABS"
            },
            {
              "name": "Gross Vehicle Weight",
              "value": "5350"
            }
          ],
          "price": {
            "baseMSRP": 2200,
            "baseInvoice": 1958,
            "estimateTmv": false
          }
	    },
	    ...
	    {
	      "id": "200478181",
	      "name": "Luxury Group",
	      "equipmentType": "OPTION",
	      "availability": "S",
	      "manufactureOptionName": "Luxury Group",
	      "manufactureOptionCode": "AFF",
	      "equipment": [
	        
	      ],
	      "category": "Package",
	      "attributes": [
            {
              "name": "Heated Cupholders",
              "value": "heated"
            },
            ...
            {
              "name": "Adjustable Pedals",
              "value": "adjustable pedals"
            }
          ],
          "price": {
            "baseMSRP": 2850,
            "baseInvoice": 2537,
            "estimateTmv": false
          }
	    }
	  ],
	  "optionsCount": 13
	}