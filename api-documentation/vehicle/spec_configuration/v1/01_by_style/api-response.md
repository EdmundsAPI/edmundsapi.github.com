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
	    "id": {integer},
	    "longName": {string},
	    "pricingAttributeGroup": {
	        "id": {integer},
	        "name": {string},
	        "attributes": {object}
	    },
	    "featuresMap": {
	        {option ID}: {
	            "equipment": {object},
	            "id": {integer},
	            "modelYearId": {integer},
	            "styleId": {integer},
	            "name": {string},
	            "attributeGroups": {object},
	            "equipmentClass": {string},
	            "equipmentAvailability": {string},
	            "equipmentType": {string},
	            "startDate": {date},
	            "endDate": {date}
	        }
	    },
	    "furtherAdditions": {array},
	    "furtherRemovals": {array},
	    "requiredItems": {array},
	    "includedItems": {array},
	    "excludedItems": {array},
	    "name": {string},
	    "tmv": {object}
	}


| Property      				| Description                         					| Visibility                |
|:------------------------------|:------------------------------------------------------|:------------------------- |
| id		    				| The style ID											| Edmunds, Partners, Public |
| longName		    			| The style long name									| Edmunds, Partners, Public |
| pricingAttributeGroup			| Price category **(we will remove this in version 2)**	| Edmunds, Partners, Public |
| featuresMap	  				| List of default options. See [options spec](/api-documentation/vehicle/spec_colors_and_options/v2/)	| Edmunds, Partners, Public |
| furtherAdditions		    	| List of options to be added							| Edmunds, Partners, Public |
| furtherRemovals				| List of options to be removed							| Edmunds, Partners, Public |
| requiredItems	    			| List of options that are required						| Edmunds, Partners, Public |
| excludedItems	    			| List of options to be excluded						| Edmunds, Partners, Public |
| name			    			| The style name										| Edmunds, Partners, Public |
| tmv			    			| TMV® adjusted for options. See [TMV® pricing](/api-documentation/vehicle/price_tmv/v1/)					| Edmunds, Partners, Public |

