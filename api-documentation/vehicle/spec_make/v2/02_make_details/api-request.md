---
layout: api-documentation
title : 'Get details for a specific car make/brand'
title_active_left_menu: 'Spec: Make'
title_parent: Api documentation

amount_version: 23
title-endpoint: '{make}'
spec: spec_make
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}'


level: 4
description_edpoint: 'Get Details on a Specific Car Make'
title_md : Sample Request
number: 4

---

### Sample Request 1

Get the list of models and model/year IDs for __NEW__ Lexus cars

#### URL

	http://api.edmunds.com/api/vehicle/v2/lexus?fmt=json&api_key={api key}&state=new

#### Response

	{
		"id": 200001623,
		"models":[{
			"id": "Lexus_CT_200h",
			"name":	"CT 200h",
			"niceName": "ct200h",
			"years":[{
				"id": 100531231,
				"year": 2011
			},
			....
			{
				"id": 100537990,
				"year": 2012
			}]
		},
		....
		{
			"id": "Lexus_ES_250",
			"name": "ES 250",
			"niceName": "es250",
			"years": [{
				"id": 2029,
				"year": 1990
			},
			....
			{
				"id": 2030,
				"year": 1991
			}]
		}],
		"name": "Lexus",
		"niceName": "lexus"
	}

### Sample Request 2

Get the list of models and model/year IDs and their states (i.e. new, used, future) for __NEW__ Lexus cars

#### URL

	http://api.edmunds.com/api/vehicle/v2/lexus?fmt=json&api_key={api key}&state=new&view=full

#### Response

	{
		"id": 200001623,
		"name": "Lexus",
		"niceName": "lexus",
		"models":[
		  {
			"id": "Lexus_CT_200h",
			"name":	"CT 200h",
			"niceName": "ct200h",
			"years":[
			  {
				"id": 200437666,
				"year": 2013,
				"states": ["NEW"]
			  },
			  ...
			  {
				"id": 100537990,
				"year": 2012,
				"states": ["USED"]
			  }
			],
			"states":["USED", "NEW"]
		  },
		  ...
		  {
			"id": "Lexus_ES_350",
			"name": "ES 350",
			"niceName": "es350",
			"years": [
			  {
				"id": 2013,
				"year": 100539469,
				"states":["USED", "NEW"]
			  }
			],
			"states":["USED", "NEW"]
		  }
		]
	}