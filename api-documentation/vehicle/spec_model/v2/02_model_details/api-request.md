---
layout: api-documentation
title : 'Get Model Year and Style Details for a Car Make and Model'
title_active_left_menu: 'Spec: Model'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Model Year and Style Details for a Car Make and Model'
spec: spec_model
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}'


level: 4
description_edpoint: 'Get Model Year and Style Details for a Car Make and Model'
title_md : Sample Request
number: 4

---

### Sample Request 1

Get the list of model years and styles for ***used*** Honda Civics.

#### URL

	https://api.edmunds.com/api/vehicle/v2/honda/civic?state=used&fmt=json&api_key={api key}
	
#### Response

	{
	  "id": "Honda_Civic",
	  "name": "Civic",
	  "niceName": "civic",
	  "years": [
	    {
	      "id": 2148,
	      "year": 1990,
	      "styles": [
	        {
	          "id": 3883,
	          "name": "2dr Hatchback",
	          "submodel": {
	            "body": "Hatchback",
	            "modelName": "Civic Hatchback"
	          },
	          "trim": "Base"
	        },
	        {
	          "id": 3870,
	          "name": "DX 2dr Hatchback",
	          "submodel": {
	            "body": "Hatchback",
	            "modelName": "Civic Hatchback"
	          },
	          "trim": "DX"
	        },
	        ...
	        {
	          "id": 3878,
	          "name": "LX 4dr Sedan",
	          "submodel": {
	            "body": "Sedan",
	            "modelName": "Civic Sedan"
	          },
	          "trim": "LX"
	        }
	      ]
	    },
	    ...
	    {
	      "id": 100505002,
	      "year": 2005,
	      "styles": [
	        {
	          "id": 100474733,
	          "name": "Si 2dr Hatchback (2.0L 4cyl 5M)",
	          "submodel": {
	            "body": "Hatchback",
	            "modelName": "Civic Hatchback"
	          },
	          "trim": "Si"
	        },
	        ...
	        {
	          "id": 100526209,
	          "name": "LX Special Edition 4dr Sedan (1.7L 4cyl 4A)",
	          "submodel": {
	            "body": "Sedan",
	            "modelName": "Civic Sedan"
	          },
	          "trim": "LX Special Edition"
	        }
	      ]
	    }
	  ]
	}
	
### Sample Request 2

Get the list of model year and style details and their states (i.e. new, used, future) for 2013 BMW X5

#### URL

	https://api.edmunds.com/api/vehicle/v2/bmw/x5?year=2013&view=full&fmt=json&api_key={api key}

#### Response

	{
	  "id": "BMW_X5",
	  "name": "X5",
	  "niceName": "x5",
	  "make": {
	    "id": 200000081,
	    "name": "BMW",
	    "niceName": "bmw"
	  },
	  "years": [
	    {
	      "id": 200420450,
	      "year": 2013,
	      "styles": [
	        {
	          "id": 200420451,
	          "name": "xDrive35i 4dr SUV AWD (3.0L 6cyl Turbo 8A)",
	          "submodel": {
	            "body": "SUV",
	            "modelName": "X5 SUV"
	          },
	          "trim": "xDrive35i"
	        },
	        {
	          "id": 200445599,
	          "name": "xDrive35d 4dr SUV AWD (3.0L 6cyl Turbodiesel 6A)",
	          "submodel": {
	            "body": "SUV",
	            "modelName": "X5 SUV Diesel",
	            "fuel": "Diesel"
	          },
	          "trim": "xDrive35d"
	        },
	        {
	          "id": 200420452,
	          "name": "xDrive35i Premium 4dr SUV AWD (3.0L 6cyl Turbo 8A)",
	          "submodel": {
	            "body": "SUV",
	            "modelName": "X5 SUV"
	          },
	          "trim": "xDrive35i Premium"
	        },
	        {
	          "id": 200420453,
	          "name": "xDrive35i Sport Activity 4dr SUV AWD (3.0L 6cyl Turbo 8A)",
	          "submodel": {
	            "body": "SUV",
	            "modelName": "X5 SUV"
	          },
	          "trim": "xDrive35i Sport Activity"
	        },
	        {
	          "id": 200420454,
	          "name": "xDrive50i 4dr SUV AWD (4.4L 8cyl Turbo 8A)",
	          "submodel": {
	            "body": "SUV",
	            "modelName": "X5 SUV"
	          },
	          "trim": "xDrive50i"
	        }
	      ],
	      "states": [
	        "NEW"
	      ]
	    }
	  ],
	  "states": [
	    "NEW",
	    "FUTURE",
	    "USED"
	  ]
	}