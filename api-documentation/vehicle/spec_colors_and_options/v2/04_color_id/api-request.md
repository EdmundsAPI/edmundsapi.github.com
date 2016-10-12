---
layout: api-documentation
title : 'Get Color Details by ID'
title_active_left_menu: "Spec: Colors and Options"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Colors Details by ID'
spec: spec_colors_and_options
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/colors/{id}'


level: 4
description_edpoint: 'Get Colors Details by ID'
title_md : Sample Request
number: 4

---

### Sample Request

Get the color details for ID **200478111**

#### URL

	https://api.edmunds.com/api/vehicle/v2/colors/200478111?fmt=json&api_key={api key}
	
#### Response
	
	{
	  "id": "200478111",
	  "name": "Granite Crystal Metallic Clear Coat",
	  "equipmentType": "COLOR",
	  "manufactureOptionName": "Granite Crystal Metallic Clear Coat",
	  "manufactureOptionCode": "PAU",
	  "category": "Exterior",
	  "colorChips": {
	    "primary": {
	      "r": 72,
	      "g": 72,
	      "b": 72,
	      "hex": "484848"
	    }
	  },
	  "fabricTypes": [ 
	  ],
	  "attributes": [
	  ]
	}