---
layout: api-documentation
title : 'Get List of Car Models for a Car Make'
title_active_left_menu: 'Spec: Model'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get List of Car Models for a Car Make'
spec: spec_model
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/models'

level: 4
description_edpoint: 'Get List of Car Models for a Car Make'
title_md : Sample Request
number: 4
---

### Sample Request 1

Get the list of all ***new*** 2013 car models for Lexus

#### URL

	https://api.edmunds.com/api/vehicle/v2/lexus/models?fmt=json&api_key={api key}&state=new&year=2013
	
#### Response

	{
	  "models": [
	    {
	      "id": "Lexus_CT_200h",
	      "name": "CT 200h",
	      "niceName": "ct200h",
	      "years": [
	        {
	          "id": 200437666,
	          "year": 2013,
	          "styles": [
	            {
	              "id": 200437667,
	              "name": "4dr Hatchback (1.8L 4cyl gas\/electric hybrid CVT)",
	              "submodel": {
	                "body": "Hatchback",
	                "modelName": "CT 200h Hatchback",
	                "niceName": "hatchback"
	              },
	              "trim": "Base"
	            }
	          ]
	        }
	      ]
	    },
	    ...
	    {
	      "id": "Lexus_RX_450h",
	      "name": "RX 450h",
	      "niceName": "rx450h",
	      "years": [
	        {
	          "id": 200419837,
	          "year": 2013,
	          "styles": [
	            {
	              "id": 200419839,
	              "name": "4dr SUV AWD (3.5L 6cyl gas\/electric hybrid CVT)",
	              "submodel": {
	                "body": "SUV",
	                "modelName": "RX 450h SUV",
	                "niceName": "suv"
	              },
	              "trim": "Base"
	            },
	            {
	              "id": 200419838,
	              "name": "4dr SUV (3.5L 6cyl gas\/electric hybrid CVT)",
	              "submodel": {
	                "body": "SUV",
	                "modelName": "RX 450h SUV",
	                "niceName": "suv"
	              },
	              "trim": "Base"
	            }
	          ]
	        }
	      ]
	    }
	  ],
	  "modelsCount": 16
	}
