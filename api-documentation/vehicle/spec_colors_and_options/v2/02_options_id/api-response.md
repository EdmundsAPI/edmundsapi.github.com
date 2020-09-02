---
layout: api-documentation
title : 'Get Option Details by ID'
title_active_left_menu: "Spec: Colors and Options"
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get Option Details by ID'
spec: spec_colors_and_options
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/options/{id}'


level: 4
description_edpoint: 'Get Option Details by ID'
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
		"equipment": {array},
		"category": {string},
		"attributes": {array},
	    "price": {object}
    }

| Property      | Description                         					| Visibility                |
|:--------------|:------------------------------------------------------|:------------------------- |
| id		    				| The option ID											| Edmunds, Partners, Public |
| name		    				| The option name										| Edmunds, Partners, Public |
| equipmentType 				| Equipment type. See [Spec: Equipment](/api-documentation/vehicle/spec_equipment/v2/)	| Edmunds, Partners, Public |
| availability  				| Option availability									| Edmunds, Partners, Public |
| manufactureOptionName		    | Manufacturer name										| Edmunds, Partners, Public |
| manufactureOptionCode			| Manufacturer code										| Edmunds, Partners, Public |
| equipment	    				| Equipment objects. See [Spec: Equipment](/api-documentation/vehicle/spec_equipment/v2/) | Edmunds, Partners, Public |
| category	    				| The option category (see overview)					| Edmunds, Partners, Public |
| attributes    				| The name/value pairs describing the option			| Edmunds, Partners, Public |
| price 	    				| The price details for this option  					| Edmunds, Partners, Public |


