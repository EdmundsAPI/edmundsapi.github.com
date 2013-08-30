---
layout: api-documentation
title : 'Get configured vehicle w/ Options by style ID and Zip Code'
title_active_left_menu: "Spec: Configuration"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get configured vehicle w/ Options by style ID and Zip Code'
spec: spec_configuration
version: v1
api: vehicle
dropdown-link: 'v1/api/configurator/withOptions'


level: 4
description_edpoint: 'Get configured vehicle w/ Options by style ID and Zip Code'
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

