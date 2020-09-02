---
layout: api-documentation
title : 'Get a List of Car Model Years for a Specific Car Make/Model'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 23
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

Get the list of model years and their styles and trims for all **new Honda Civics**.

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
	
### Sample Request 2

Get the list of model years and their styles and trims for all **New Honda Civics** with <code>view=full</code>

#### URL

	https://api.edmunds.com/api/vehicle/v2/honda/civic?fmt=json&view=full&state=new&api_key={api key}

#### Response

	{
	  "id": 200442557,
	  "name": "Civic",
	  "niceName": "civic",
	  "make": {
	     "id": 200001444,
	     "name": "Honda",
	     "niceName": "honda"
	  },
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
	          "trim": "LX",
	          "states": [
	            "USED",
	            "NEW"
	          ]
	        },
	        {
	          "id": 200443846,
	          "name": "LX 2dr Coupe (1.8L 4cyl 5M)",
	          "submodel": {
	            "body": "Coupe",
	            "modelName": "Civic Coupe",
	            "niceName": "coupe"
	          },
	          "trim": "LX",
	          "states": [
	            "USED",
	            "NEW"
	          ]
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
	          "trim": "HF PZEV",
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
	  ],
	  "states": [
	    "USED",
	    "NEW"
	  ]
	}
