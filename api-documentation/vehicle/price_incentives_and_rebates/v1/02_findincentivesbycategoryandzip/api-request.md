---
layout: api-documentation
title : 'Get Vehicle Incentives and Rebates by Vehicle Category and Zipcode'
title_active_left_menu: 'Price: Incentives and Rebates'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Vehicle Incentives and Rebates by Vehicle Category and Zipcode'
spec: price_incentives_and_rebates
version: v1
api: vehicle
dropdown-link: 'v1/api/vehicle/incentive/incentiverepository/findincentivesbycategoryandzipcode'


level: 4
description_edpoint: 'Get Vehicle Incentives and Rebates by Vehicle Category and Zipcode'
title_md : Sample Request
number: 4

---

### Sample Request

Get all incentives for **Sedans** in the **90019** area.

### URL

	https://api.edmunds.com/v1/api/incentive/incentiverepository/findincentivesbycategoryandzipcode?category=Sedan&zipcode=90019&fmt=json&api_key={api key}

### Response

	{
	    "incentiveHolder": [{
	        "rebateAmount": 750.0,
	        "termMonths": 60,
	        "apr": 0.9,
	        "creditRatingTier": "Tier 1",
	        "id": 2943384,
	        "type": "CASH_REBATE",
	        "contentType": "CUSTOMER_CASH_OR_APR",
	        "sourceType": "UNKNOWN",
	        "subprogramId": 830583,
	        "startDate": "2013-07-09",
	        "endDate": "2013-09-03",
	        "comments": "",
	        "restrictions": "$750 Customer Retail Cash may not be combined with 0.90% APR - 2.90 % APR and vehicle must be financed through Ally Financial Inc. ",
	        "name": "CC or APR - 2013 Verano - National",
	        "primary": false,
	        "incentiveVehicles": [{
	            "link": "/api/incentive/incentivevehicle/57298"
	        }],
	        "zipcodeExceptions": [],
	        "categories": ["Car", "Sedan"],
	        "regions": ["i397"],
	        "incentiveType": "cashRebate",
	        "optionIds": [],
	        "makeIds": [{
	            "link": "/api/vehicle/make/200006659"
	        }],
	        "styleIds": [{
	            "link": "/api/vehicle/style/200430609"
	        }, {
	            "link": "/api/vehicle/style/200430608"
	        }, {
	            "link": "/api/vehicle/style/200424094"
	        }, {
	            "link": "/api/vehicle/style/200430607"
	        }]
	    },
		...
	}