---
layout: api-documentation
title : 'Get Style Details for a Car Make/Model/Year'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 23
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

Get style details for the 2011 Lexus RX-350.

#### URL

	https://api.edmunds.com/api/vehicle/v2/lexus/rx350/2011?fmt=json&api_key={api key}
	
#### Response

	{
	  "id": 100533091,
	  "year": 2011,
	  "styles": [
	    {
	      "id": 101353968,
	      "name": "4dr SUV AWD (3.5L 6cyl 6A)",
	      "submodel": {
	        "body": "SUV",
	        "modelName": "RX 350 SUV",
	        "niceName": "suv"
	      },
	      "trim": "Base"
	    },
	    {
	      "id": 101353967,
	      "name": "4dr SUV (3.5L 6cyl 6A)",
	      "submodel": {
	        "body": "SUV",
	        "modelName": "RX 350 SUV",
	        "niceName": "suv"
	      },
	      "trim": "Base"
	    }
	  ]
	}
	
### Sample Request 2

Get style details for the 2011 Lexus RX-350 with <code>view=full</code>

#### URL

	http://api.edmunds.com/api/vehicle/v2/lexus/rx350/2011?view=full&fmt=json&api_key={api key}

#### Response

	{
	  "id": 100533091,
	  "make": {
	    "id": 200001623,
	    "name": "Lexus",
	    "niceName": "lexus"
	  },
	  "model": {
	    "id": "Lexus_RX_350",
	    "name": "RX 350",
	    "niceName": "rx350"
	  },
	  "year": 2011,
	  "styles": [
	    {
	      "id": 101353968,
	      "name": "4dr SUV AWD (3.5L 6cyl 6A)",
	      "submodel": {
	        "body": "SUV",
	        "modelName": "RX 350 SUV",
	        "niceName": "suv"
	      },
	      "trim": "Base",
	      "states": [
	        "USED"
	      ]
	    },
	    {
	      "id": 101353967,
	      "name": "4dr SUV (3.5L 6cyl 6A)",
	      "submodel": {
	        "body": "SUV",
	        "modelName": "RX 350 SUV",
	        "niceName": "suv"
	      },
	      "trim": "Base",
	      "states": [
	        "USED"
	      ]
	    }
	  ],
	  "states": [
	    "USED"
	  ]
	}
