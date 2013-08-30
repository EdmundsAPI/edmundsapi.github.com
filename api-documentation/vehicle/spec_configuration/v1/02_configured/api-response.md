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
title_md : Response format
number: 3

---

###Response format

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
		"make": {object},
		"model": {object},
		"year": {object}
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
| make		    | The car make details (id, name and nicename)			| Edmunds, Partners, Public |
| model		    | The car model details (id, name and nicename)			| Edmunds, Partners, Public |
| year		    | The car model year ID and four-digit year				| Edmunds, Partners, Public |

