---
layout: api-documentation
title : 'Get Model Year Details for a Car Make/Model'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Model Year Details for a Car Make/Model'
spec: spec_model_year
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/years'


level: 4
description_edpoint: 'Get Model Year Details for a Car Make/Model'
title_md : Sample Request
number: 4
---

### Sample Request 1

Get the list of model years and their styles and trims for all ***New* Honda Civics**

#### URL

	https://api.edmunds.com/api/vehicle/v2/honda/civic?fmt=json&state=new&api_key={api key}
	
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
	            "modelName": "Civic Coupe"
	          },
	          "trim": "LX"
	        },
	        ...
	        {
	          "id": 200463193,
	          "name": "HF PZEV 4dr Sedan (1.8L 4cyl 5A)",
	          "submodel": {
	            "body": "Sedan",
	            "modelName": "Civic Sedan"
	          },
	          "trim": "HF PZEV"
	        }
	      ]
	    }
	  ],
	  "yearsCount": 1
	}
	
### Sample Request 2

Get the list of model years and their styles and trims for all ***New* Honda Civics** with <code>view=full</code>

#### URL

	https://api.edmunds.com/api/vehicle/v2/honda/civic?fmt=json&view=full&state=new&api_key={api key}

#### Response

	{
	  "years": [
	    {
	      "id": 200442557,
	      "make": {
	        "id": 200001444,
	        "name": "Honda",
	        "niceName": "honda"
	      },
	      "model": {
	        "id": "Honda_Civic",
	        "name": "Civic",
	        "niceName": "civic"
	      },
	      "year": 2013,
	      "styles": [
	        {
	          "id": 200443845,
	          "name": "LX 2dr Coupe (1.8L 4cyl 5A)",
	          "submodel": {
	            "body": "Coupe",
	            "modelName": "Civic Coupe"
	          },
	          "trim": "LX"
	        },
	        {
	          "id": 200443846,
	          "name": "LX 2dr Coupe (1.8L 4cyl 5M)",
	          "submodel": {
	            "body": "Coupe",
	            "modelName": "Civic Coupe"
	          },
	          "trim": "LX"
	        },
	        ...
	        {
	          "id": 200463193,
	          "name": "HF PZEV 4dr Sedan (1.8L 4cyl 5A)",
	          "submodel": {
	            "body": "Sedan",
	            "modelName": "Civic Sedan"
	          },
	          "trim": "HF PZEV"
	        }
	      ],
	      "states": [
	        "NEW",
	        "USED"
	      ]
	    }
	  ],
	  "yearsCount": 1
	}