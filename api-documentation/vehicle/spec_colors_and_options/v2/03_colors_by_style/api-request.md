---
layout: api-documentation
title : 'Get All Colors for a Car Style'
title_active_left_menu: "Spec: Colors and Options"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get All Colors for a Car Style'
spec: spec_colors_and_options
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{style ID}/colors'


level: 4
description_edpoint: 'Get All Colors for a Car Style'
title_md : Sample Request
number: 4

---

### Sample Request

Get all options available for car style ID **200477947**

#### URL

	https://api.edmunds.com/api/vehicle/v2/styles/200477947/colors?fmt=json&api_key={api key}
	
#### Response
	
	{
	  "colors": [
	    {
	      "id": "200478112",
	      "name": "Jazz Blue Pearl Coat",
	      "equipmentType": "COLOR",
	      "availability": "USED",
	      "manufactureOptionName": "Jazz Blue Pearl Coat",
	      "manufactureOptionCode": "PBX",
	      "category": "Exterior",
	      "colorChips": {
	        "primary": {
	          "r": 0,
	          "g": 24,
	          "b": 88,
	          "hex": "001858"
	        }
	      },
	      "fabricTypes": [
	      ],
	      "attributes": [
	      ]
	    },
	    {
	      "id": "200478111",
	      "name": "Granite Crystal Metallic Clear Coat",
	      "equipmentType": "COLOR",
	      "availability": "USED",
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
	    },
	    {
	      "id": "200478105",
	      "name": "Bright White Clear Coat",
	      "equipmentType": "COLOR",
	      "availability": "USED",
	      "manufactureOptionName": "Bright White Clear Coat",
	      "manufactureOptionCode": "PW7",
	      "category": "Exterior",
	      "colorChips": {
	        "primary": {
	          "r": 255,
	          "g": 255,
	          "b": 255,
	          "hex": "FFFFFF"
	        }
	      },
	      "fabricTypes": [
	      ],
	      "attributes": [
	      ]
	    },
	    {
	      "id": "200478103",
	      "name": "Deep Cherry Red Crystal Pearl Coat",
	      "equipmentType": "COLOR",
	      "availability": "USED",
	      "manufactureOptionName": "Deep Cherry Red Crystal Pearl Coat",
	      "manufactureOptionCode": "PRP",
	      "category": "Exterior",
	      "colorChips": {
	        "primary": {
	          "r": 157,
	          "g": 57,
	          "b": 66,
	          "hex": "9D3942"
	        }
	      },
	      "fabricTypes": [
	      ],
	      "attributes": [
	      ]
	    },
	    {
	      "id": "200478109",
	      "name": "Billet Silver Metallic Clear Coat",
	      "equipmentType": "COLOR",
	      "availability": "USED",
	      "manufactureOptionName": "Billet Silver Metallic Clear Coat",
	      "manufactureOptionCode": "PSC",
	      "category": "Exterior",
	      "colorChips": {
	        "primary": {
	          "r": 92,
	          "g": 100,
	          "b": 103,
	          "hex": "5C6467"
	        }
	      },
	      "fabricTypes": [
	      ],
	      "attributes": [
	      ]
	    },
	    {
	      "id": "200478107",
	      "name": "Gloss Black",
	      "equipmentType": "COLOR",
	      "availability": "USED",
	      "manufactureOptionName": "Gloss Black",
	      "manufactureOptionCode": "PX8",
	      "category": "Exterior",
	      "colorChips": {
	        "primary": {
	          "r": 22,
	          "g": 22,
	          "b": 22,
	          "hex": "161616"
	        }
	      },
	      "fabricTypes": [
	      ],
	      "attributes": [
	      ]
	    },
	    {
	      "id": "200478106",
	      "name": "Ivory Tri-Coat Pearl",
	      "equipmentType": "COLOR",
	      "availability": "USED",
	      "manufactureOptionName": "Ivory Tri-Coat Pearl",
	      "manufactureOptionCode": "PWD",
	      "category": "Exterior",
	      "colorChips": {
	        "primary": {
	          "r": 253,
	          "g": 254,
	          "b": 249,
	          "hex": "FDFEF9"
	        }
	      },
	      "price": {
	        "baseMSRP": 500,
	        "baseInvoice": 445,
	        "estimateTmv": false
	      },
	      "fabricTypes": [
	      ],
	      "attributes": [
	      ]
	    },
	    {
	      "id": "200478113",
	      "name": "Phantom Black Tri-Coat Pearl",
	      "equipmentType": "COLOR",
	      "availability": "USED",
	      "manufactureOptionName": "Phantom Black Tri-Coat Pearl",
	      "manufactureOptionCode": "PXT",
	      "category": "Exterior",
	      "colorChips": {
	        "primary": {
	          "r": 0,
	          "g": 0,
	          "b": 0,
	          "hex": "000000"
	        }
	      },
	      "fabricTypes": [
	      ],
	      "attributes": [
	      ]
	    },
	    {
	      "id": "200478118",
	      "name": "Black (Leather)",
	      "equipmentType": "COLOR",
	      "availability": "USED",
	      "manufactureOptionName": "Black",
	      "manufactureOptionCode": "X9",
	      "category": "Interior",
	      "colorChips": {
	        "primary": {
	          "r": 0,
	          "g": 0,
	          "b": 0,
	          "hex": "000000"
	        }
	      },
	      "fabricTypes": [
	        {
	          "name": "FABRIC_TYPE_1",
	          "value": "leather"
	        }
	      ],
	      "attributes": [
	      ]
	    }
	  ],
	  "colorsCount": 9
	}