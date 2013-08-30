---
layout: api-documentation
title : 'Get Engine Details by ID'
title_active_left_menu: "Spec: Engine and Transmission"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Engine Details by ID'
spec: spec_engine_and_transmission
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/engines/{id}'


level: 4
description_edpoint: 'Get Engine Details by ID'
title_md : Sample Request
number: 4

---

###Sample Request

Get engine details for ID **200478098**

#### URL

	https://api.edmunds.com/api/vehicle/v2/engines/200478098?fmt=json&api_key={api key}
	
#### Response

	{
	  "id": "200478098",
	  "name": "5.7L V8 Engine (EZH)",
	  "equipmentType": "ENGINE",
	  "availability": "OPTIONAL",
	  "year": {
	    "id": 200477946,
	    "year": 2014
	  },
	  "style": {
	    "id": 200477956,
	    "name": "C 4dr Sedan AWD (3.6L 6cyl 8A)",
	    "submodel": {
	      "body": "Sedan",
	      "modelName": "300 Sedan"
	    },
	    "trim": "C"
	  },
	  "make": {
	    "id": 200003644,
	    "name": "Chrysler",
	    "niceName": "chrysler"
	  },
	  "model": {
	    "id": "Chrysler_300",
	    "name": "300",
	    "niceName": "300"
	  },
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