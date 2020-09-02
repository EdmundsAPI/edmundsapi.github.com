---
layout: api-documentation
title : 'Get Car Equipment Details for a Car Style'
title_active_left_menu: "Spec: Equipment"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Car Equipment Details for a Car Style'
spec: spec_equipment
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{style ID}/equipment'


level: 4
description_edpoint: 'Get Car Equipment Details for a Car Style'
title_md : Sample Request
number: 4

---

### Sample Request

Get equipment details for car style ID **101353967** (2011 Lexus RX 350 4dr SUV).

#### URL

	https://api.edmunds.com/api/vehicle/v2/styles/101353967/equipment?fmt=json&api_key={api key}
	
#### Response
	
	{
	  "equipment": [
	    {
	      "id": "10135396713",
	      "name": "AIR_CONDITIONING",
	      "equipmentType": "OTHER",
	      "availability": "STANDARD",
	      "attributes": [
	        {
	          "name": "Front Air Conditioning Zones",
	          "value": "dual"
	        },
	        {
	          "name": "Front Air Conditioning",
	          "value": "automatic climate control"
	        },
	        {
	          "name": "Rear Heat",
	          "value": "rear ventilation ducts"
	        },
	        {
	          "name": "Air Filtration",
	          "value": "interior air filtration"
	        }
	      ]
	    },
	    ...
	    {
	      "id": "200349838",
	      "name": "Engine",
	      "equipmentType": "ENGINE",
	      "availability": "STANDARD",
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
	    {
	      "id": "200349839",
	      "name": "6A",
	      "equipmentType": "TRANSMISSION",
	      "availability": "STANDARD",
	      "automaticType": "Shiftable automatic",
	      "transmissionType": "AUTOMATIC",
	      "numberOfSpeeds": "6"
	    },
	    ...
	  ],
	  "equipmentCount": 68
	}