---
layout: api-documentation
title : 'Get Total Count of Car Models for Specific Car Make'
title_active_left_menu: 'Spec: Model'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get Total Count of Car Models for Specific Car Make'
spec: spec_model
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/models/count'


level: 4
description_edpoint: 'Get Total Count of Car Models for Specific Car Make'
title_md : Sample Request
number: 4
---

### Sample Request 1

Get the total number of ***new*** Toyota models.

#### URL

	https://api.edmunds.com/api/vehicle/v2/toyota/models/count?state=new&fmt=json&api_key={api key}
	
#### Response

	{
		"modelsCount": 23
	}
	
###Sample Request 2

Get the total number of ***new*** Toyota models ***and*** the breakdown of their model year counts.

#### URL

	https://api.edmunds.com/api/vehicle/v2/toyota/models/count?view=full&state=new&fmt=json&api_key={api key}

#### Response

	{
	  "modelsCount": 23,
	  "models": [
	    {
	      "yearsCount": 2,
	      "niceName": "sequoia"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "fjcruiser"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "priusplugin"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "matrix"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "tacoma"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "landcruiser"
	    },
	    {
	      "yearsCount": 2,
	      "niceName": "camry"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "rav4ev"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "sienna"
	    },
	    {
	      "yearsCount": 2,
	      "niceName": "yaris"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "priusc"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "rav4"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "corolla"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "highlanderhybrid"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "4runner"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "avalon"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "prius"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "tundra"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "highlander"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "priusv"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "venza"
	    },
	    {
	      "yearsCount": 2,
	      "niceName": "camryhybrid"
	    },
	    {
	      "yearsCount": 1,
	      "niceName": "avalonhybrid"
	    }
	  ]
	}
