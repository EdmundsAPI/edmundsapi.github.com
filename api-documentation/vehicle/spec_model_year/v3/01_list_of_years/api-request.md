---
layout: api-documentation
title : 'Get years with styles for a Car Make/Model'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get years with styles for a Car Make/Model'
spec: spec_model_year
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/{make}/{model}/years'


level: 4
description_edpoint: 'Get years with styles for a Car Make/Model'
title_md : Sample Request
number: 4
---

### Sample Request 1

Get the list of model years and their styles and trims for all **new Honda Civics**.

By default, the endpoint returns the first 10 styles without a connection with year if the pagination isn't defined.

For example:
1. Honda civic 2020 contains 7 styles 
2. Honda civic 2019 contains 15 styles. 
3. In this case the endpoint will return 7 styles for 2020 and 3 styles for 2019.
4. In order to return more styles, please define pagination via `pageNum` and `pageSize` query parameters.

#### URL

	https://api.edmunds.com/api/vehicle/v3/honda/civic?fmt=json&api_key={api key}
	
#### Response

	{
	  "years": [
	    {
	      "id": 200442557,
	      "year": 2013,
	      "styles": [
	        {
	          "id": 200443845,
	          "name": "LX 2dr Coupe (1.8L 4cyl 5A)",
	          "submodel": {
	            "body": "Coupe",
	            "modelName": "Civic Coupe",
	            "niceName": "coupe"
	          },
	          "trim": "LX"
	        },
	        ...
	        {
	          "id": 200463193,
	          "name": "HF PZEV 4dr Sedan (1.8L 4cyl 5A)",
	          "submodel": {
	            "body": "Sedan",
	            "modelName": "Civic Sedan",
	            "niceName": "sedan"
	          },
	          "trim": "HF PZEV"
	        }
	      ]
	    }
	  ]
	}
	

