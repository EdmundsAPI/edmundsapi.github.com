---
layout: api-documentation
title : 'Get Vehicle Incentives and Rebates by Vehicle Make ID'
title_active_left_menu: 'Price: Incentives and Rebates'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Vehicle Incentives and Rebates by Vehicle Make ID'
spec: price_incentives_and_rebates
version: v1
api: vehicle
dropdown-link: 'v1/api/vehicle/incentive/incentiverepository/findincentivesbymakeid'


level: 4
description_edpoint: 'Get Vehicle Incentives and Rebates by Vehicle Make ID'
title_md : Response format
number: 3

---

###Response format

	{
	    "incentiveHolder": [{
	        "rebateAmount": {float},
	        "termMonths": {integer},
	        "apr": {float},
	        "creditRatingTier": {string},
	        "id": {integer},
	        "type": {string},
	        "contentType": {string},
	        "sourceType": {string},
	        "subprogramId": {integer},
	        "startDate": {date},
	        "endDate": {date},
	        "comments": "",
	        "restrictions": {string},
	        "name": {string},
	        "primary": {boolean},
	        "incentiveVehicles": [{
	            "link": {URI}
	        }],
	        "zipcodeExceptions": {array},
	        "categories": {array},
	        "regions": ["i397"],
	        "incentiveType": {string},
	        "optionIds": {array},
	        "makeIds": [{
	            "link": {URI}
	        }],
	        "styleIds": [{
	            "link": {URI}
	        }]
	    }]
	}
	
| Property      | Description                         					| Visibility                |
|:--------------|:------------------------------------------------------|:------------------------- |
| id		    | The style ID											| Edmunds, Partners, Public |
| name		    | The style name										| Edmunds, Partners, Public |
| make		    | The car make details (id, name and nicename)			| Edmunds, Partners, Public |
| model		    | The car model details (id, name and nicename)			| Edmunds, Partners, Public |
| year		    | The car model year ID and four-digit year				| Edmunds, Partners, Public |
| submodel	    | Car submode details									| Edmunds, Partners, Public |
| trim		    | The car trim											| Edmunds, Partners, Public |
	
	