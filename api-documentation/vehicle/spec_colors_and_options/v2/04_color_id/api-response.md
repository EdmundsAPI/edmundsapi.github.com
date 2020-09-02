---
layout: api-documentation
title : 'Get Color Details by ID'
title_active_left_menu: "Spec: Colors and Options"
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get Colors Details by ID'
spec: spec_colors_and_options
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/colors/{id}'


level: 4
description_edpoint: 'Get Colors Details by ID'
title_md : Response format
number: 3

---

### Response format

#### JSON Response

	{
		"id": {integer},
		"name": {string},
		"equipmentType": {string},
		"availability": {string},
		"manufactureOptionName": {string},
		"manufactureOptionCode": {string},
		"colorChips": {array},
		"fabricTypes": {array},
		"category": {string},
		"attributes": {array},
	    "price": {object}
    }

| Property      | Description                         					| Visibility                |
|:--------------|:------------------------------------------------------|:------------------------- |
| id		    			| The color ID								| Edmunds, Partners, Public |
| name		    			| The color name							| Edmunds, Partners, Public |
| equipmentType 			| Always set to "COLOR"						| Edmunds, Partners, Public |
| manufactureOptionName		| Manufacturer name							| Edmunds, Partners, Public |
| manufactureOptionCode		| Manufacturer code							| Edmunds, Partners, Public |
| colorChips	    		| Color RGB and HEX values for primary and secondary colors | Edmunds, Partners, Public |
| fabricTypes	    		| The fabric types      					| Edmunds, Partners, Public |
| category	    			| The color category (exterior or interior)	| Edmunds, Partners, Public |
| attributes    		    | The name/value pairs describing the color | Edmunds, Partners, Public |
| price 	    		    | The price details for this color  		| Edmunds, Partners, Public |

