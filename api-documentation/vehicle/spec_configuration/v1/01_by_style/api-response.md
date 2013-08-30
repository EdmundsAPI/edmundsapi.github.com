---
layout: api-documentation
title : 'Get the default configuration for vehicle with style ID and Zip Code'
title_active_left_menu: "Spec: Configuration"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get the default configuration for vehicle with style ID and Zip Code'
spec: spec_configuration
version: v1
api: vehicle
dropdown-link: 'v1/api/configurator/default'


level: 4
description_edpoint: 'Get the default configuration for vehicle with style ID and Zip Code'
title_md : Response format
number: 3

---

###Response format

#### JSON Response

	{
	    "id": 200443450,
	    "longName": {string},
	    "pricingAttributeGroup": {
	        "id": 3,
	        "name": {string},
	        "attributes": {object}
	    },
	    "featuresMap": {
	        {option ID}: {
	            "equipment": {object},
	            "id": "200443482",
	            "modelYearId": 200442557,
	            "styleId": 0,
	            "name": {string},
	            "attributeGroups": {object},
	            "equipmentClass": {string},
	            "equipmentAvailability": {string},
	            "equipmentType": {string},
	            "startDate": {date},
	            "endDate": {date}
	        }
	    },
	    "furtherAdditions": [],
	    "furtherRemovals": [],
	    "requiredItems": [],
	    "includedItems": [],
	    "excludedItems": [],
	    "name": {string},
	    "tmv": {object}
	}


| Property      				| Description                         					| Visibility                |
|:------------------------------|:------------------------------------------------------|:------------------------- |
| id		    				| The option ID											| Edmunds, Partners, Public |
| name		    				| The option name										| Edmunds, Partners, Public |
| equipmentType 				| Equipment type. See [Spec: Equipment](/api-documentation/vehicle/spec_equipment/v2/)	| Edmunds, Partners, Public |
| availability  				| Option availability									| Edmunds, Partners, Public |
| manufactureOptionName		    | Manufacturer name										| Edmunds, Partners, Public |
| manufactureOptionCode			| Manufacturer code										| Edmunds, Partners, Public |
| equipment	    				| Equipment objects. See [Spec: Equipment](/api-documentation/vehicle/spec_equipment/v2/) | Edmunds, Partners, Public |
| category	    				| The option category (see overview)					| Edmunds, Partners, Public |

