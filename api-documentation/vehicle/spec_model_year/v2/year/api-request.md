---
layout: api-documentation
title : 'Get Style Details for a Car Make/Model/Year'
title_active_left_menu: 'Spec: Model/Year'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Style Details for a Car Make/Model/Year'
spec: spec_model_year
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/{year}'


level: 4
description_edpoint: 'Get Style Details for a Car Make/Model/Year'
title_md : Sample Request
number: 4

---

### Sample Request 1

Get the list of models and model/year IDs for __NEW__ Lexus cars

#### URL

	http://api.edmunds.com/api/vehicle/v2/lexus?fmt=json&api_key=xxxxx&state=new
	
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

	http://api.edmunds.com/api/vehicle/v2/lexus?fmt=json&api_key=xxxxx&state=new&view=full

#### Response

	{
		"id": 200001623,
		"models":[{
			"id": "Lexus_CT_200h",
			"name":	"CT 200h",
			"niceName": "ct200h",
			"years":[{
				"id": 100531231,
				"states": ["USED"],
				"year": 2011
			},
			....
			{
				"id": 100537990,
				"states": ["USED"],
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
				"states": ["USED"],
				"year": 1990
			},
			....
			{
				"id": 2030,
				"states": ["USED"],
				"year": 1991
			}]
		}],
		"name": "Lexus",
		"niceName": "lexus"
	}
