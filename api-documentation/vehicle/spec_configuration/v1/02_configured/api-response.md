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
		"zipCode": {integer},
		"styleId": {integer},
		"colorId": {integer},
		"currentOptions": {array},
		"selectedOption": {integer},
		"deselectedOption": {integer},
		"furtherAdditions": {array},
		"furtherRemovals": {array},
		"requiredItems": {array},
		"includedItems": {array},
		"excludedItems": {array},
		"name": {
		  {option ID}: {string}
		},
		"tmv": {object}
	}

| Property      				| Description                         					| Visibility                |
|:------------------------------|:------------------------------------------------------|:------------------------- |
| zipCode	    				| The ZIP Code											| Edmunds, Partners, Public |
| styleId	    				| The style ID											| Edmunds, Partners, Public |
| colorId	    				| The color ID											| Edmunds, Partners, Public |
| currentOptions	    		| List of currently selected options                    | Edmunds, Partners, Public |
| selectedOption	    		| The ID of selected option                             | Edmunds, Partners, Public |
| deselectedOption	    		| The ID of deselected option                           | Edmunds, Partners, Public |
| furtherAdditions		    	| List of options to be added							| Edmunds, Partners, Public |
| furtherRemovals				| List of options to be removed							| Edmunds, Partners, Public |
| requiredItems	    			| List of options that are required						| Edmunds, Partners, Public |
| includedItems	    			| List of options to be included						| Edmunds, Partners, Public |
| excludedItems	    			| List of options to be excluded						| Edmunds, Partners, Public |
| name			    			| The object contains mapping of an option ID to an option name  | Edmunds, Partners, Public |
| tmv			    			| TMV® adjusted for options. See [TMV® pricing](/api-documentation/vehicle/price_tmv/v1/)					| Edmunds, Partners, Public |

