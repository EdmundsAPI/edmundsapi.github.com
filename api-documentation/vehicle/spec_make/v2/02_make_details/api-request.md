---
layout: api-documentation
title : 'Get details for a specific car make/brand'
title_active_left_menu: 'Spec: Make'
title_parent: Api documentation

amount_version: 2
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
		"name": "Lexus",
		"niceName": "lexus",
		"models": [
			{
				"id": "Lexus_CT_200h",
				"name":	"CT 200h",
				"niceName": "ct200h",
				"years": [
					{
						"id":200437666,
						"year":2013
					}
				]
			},
			....
			{
				"id": "Lexus_IS_350",
				"name": "IS 350",
				"niceName": "is350",
				"years": [
					{
						"id": 200432925,
						"year": 2013
					},
					{
						"id": 200443784,
						"year": 2014
					}
				]
			},
		]
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
		"models": [
			{
				"id": "Lexus_CT_200h",
				"name":	"CT 200h",
				"niceName": "ct200h",
				"years": [
					{
						"id": 200437666,
						"year": 2013,
						"states": ["NEW"]
					}
				],
				"states": [
					"USED",
					"NEW"
				]
			},
			....
			{
				"id": "Lexus_ES_350",
				"name": "ES 350",
				"niceName": "es350",
				"years": [
					{
						"id": 100539469,
						"year": 2013,
						"states": [
							"USED",
							"NEW"
						]
					}
				],
				"states": [
					"USED",
					"NEW"
				]
			}
		]
	}
