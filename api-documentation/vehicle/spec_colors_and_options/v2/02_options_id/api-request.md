---
layout: api-documentation
title : 'Get Option Details by ID'
title_active_left_menu: "Spec: Colors and Options"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Option Details by ID'
spec: spec_colors_and_options
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/options/{id}'


level: 4
description_edpoint: 'Get Option Details by ID'
title_md : Sample Request
number: 4

---

###Sample Request

Get the option details for ID **200235312**

#### URL

	https://api.edmunds.com/api/vehicle/v2/options/200235312?fmt=json&api_key={api key}
	
#### Response
	
	{
	  "id": "200235312",
	  "name": "Power Moonroof",
	  "equipmentType": "OPTION",
	  "availability": "Super\/SuperCrew XLT\/FX4\/Lariat",
	  "year": {
	    "id": 100502974,
	    "year": 2004
	  },
	  "make": {
	    "id": 200005143,
	    "name": "Ford",
	    "niceName": "ford"
	  },
	  "model": {
	    "id": "Ford_F_150",
	    "name": "F-150",
	    "niceName": "f150"
	  },
	  "manufactureOptionName": "Power Moonroof",
	  "manufactureOptionCode": "43M",
	  "equipment": [

	  ],
	  "category": "Other"
	}