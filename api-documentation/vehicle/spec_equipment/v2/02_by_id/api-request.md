---
layout: api-documentation
title : 'Get Car Equipment Details by ID'
title_active_left_menu: "Spec: Equipment"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Car Equipment Details by ID'
spec: spec_equipment
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/equipment/{id}'


level: 4
description_edpoint: 'Get Car Equipment Details by ID'
title_md : Sample Request
number: 4

---

###Sample Request

Get equipment details for equipment ID **10135396713**

#### URL

	https://api.edmunds.com/api/vehicle/v2/equipment/10135396713?fmt=json&api_key={api key}
	
#### Response
	
	{
	  "id": "10135396713",
	  "name": "AIR_CONDITIONING",
	  "equipmentType": "OTHER",
	  "availability": "STANDARD",
	  "year": {
	    "id": 100533091,
	    "year": 2011
	  },
	  "style": {
	    "id": 101353967,
	    "name": "4dr SUV (3.5L 6cyl 6A)",
	    "submodel": {
	      "body": "SUV",
	      "modelName": "RX 350 SUV"
	    },
	    "trim": "Base"
	  },
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
	  "attributes": [
	    {
	      "name": "Front Air Conditioning Zones",
	      "value": "dual"
	    },
	    {
	      "name": "Front Air Conditioning",
	      "value": "automatic climate control"
	    },
	    {
	      "name": "Rear Heat",
	      "value": "rear ventilation ducts"
	    },
	    {
	      "name": "Air Filtration",
	      "value": "interior air filtration"
	    }
	  ]
	}