---
layout: api-documentation
title : 'Get Vehicle Incentives and Rebates by Vehicle Style ID'
title_active_left_menu: 'Price: Incentives and Rebates'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Vehicle Incentives and Rebates by Vehicle Style ID'
spec: price_incentives_and_rebates
version: v1
api: vehicle
dropdown-link: 'v1/api/vehicle/incentive/incentiverepository/findincentivesbystyleid'


level: 4
description_edpoint: 'Get Vehicle Incentives and Rebates by Vehicle Style ID'
title_md : Response format
number: 3

---

### Response format

	{
	    "incentiveHolder": [{
	        "rebateAmount": {float}
	        "termMonths": {integer},
	        "apr": {float}
	        "creditRatingTier": {string},
	        "id": {integer},
	        "type": {string},
	        "contentType": {string},
	        "sourceType": {string},
	        "subprogramId": {integer},
	        "startDate": {date},
	        "endDate": {date},
	        "comments": {string},
	        "restrictions": {string},
	        "name": {string},
	        "primary": false,
	        "incentiveVehicles": [{
	            "link": {URI}
	        }],
	        "zipcodeExceptions": {array},
	        "categories": {array},
	        "regions": {arra},
	        "incentiveType": {string},
	        "optionIds": {array},
	        "makeIds": [{
	            "link": {URI}
	        }],
	        "styleIds": [{
	            "link": {URI}
	        }]
	    }
	}
	
| Property      	| Description                                              	| Visibility                |
|:------------------|:----------------------------------------------------------|:------------------------- |
| rebateAmount  	| The rebate amount in dollars			                   	| Edmunds, Partners, Public |
| termMonths		| The numbers of months for financing this vehicle         	| Edmunds, Partners, Public |
| apr				| The APR for this incentive			                   	| Edmunds, Partners, Public |
| creditRatingTier  | Credit rating that qualifies for this incentive          	| Edmunds, Partners, Public |
| id				| The incentive ID						                   	| Edmunds, Partners, Public |
| type  			| Incentive type (see overview)				                | Edmunds, Partners, Public |
| contentType  		| Incentive content type (see overview)		                | Edmunds, Partners, Public |
| sourceType  		| Incentive source type (see overview)				        | Edmunds, Partners, Public |
| subprogramId	 	| *deprecated property*				                   		| Edmunds, Partners, Public |
| startDate  		| The date this incentive starts		                   	| Edmunds, Partners, Public |
| endDate  			| The date this incentive ends			                   	| Edmunds, Partners, Public |
| comments  		| Comments on this incentive			                   	| Edmunds, Partners, Public |
| restrictions  	| Restrictions on this incentive			                   	| Edmunds, Partners, Public |
| name  			| The name of the incentive				                   	| Edmunds, Partners, Public |
| primary  			| Is this a primary incentive?			                   	| Edmunds, Partners, Public |
| incentiveVehicles | List of vehicles this incentive applies to (*deprecated*)	| Edmunds, Partners, Public |
| zipcodeExceptions | List of zip codes where this incentive does **not** apply | Edmunds, Partners, Public |
| categories		| Car categories (see [Vehicle API](/api-documentation/vehicle/))   	| Edmunds, Partners, Public |
| regions  			| List of region IDs where this incentive applies           	| Edmunds, Partners, Public |
| incentiveType  	| Incentive type (see overview			                   	| Edmunds, Partners, Public |
| optionIds  		| List of option this incentive applies to                 	| Edmunds, Partners, Public |
| makeIds  			| List of car make IDs this incentive applies to           	| Edmunds, Partners, Public |
| styleIds		  	| List of car style IDs this incentive applies to			| Edmunds, Partners, Public |


