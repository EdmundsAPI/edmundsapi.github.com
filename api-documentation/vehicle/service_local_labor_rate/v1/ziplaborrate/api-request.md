---
layout: api-documentation
title : 'Get Local Labor Rate in Dollars per Hour by Zipcode'
title_active_left_menu: 'Service: Local Labor Rate'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Local Labor Rate in Dollars per Hour by Zipcode'
spec: service_local_labor_rate
version: v1
api: vehicle
dropdown-link: 'v1/api/maintenance/ziplaborrate/{zip code}'


level: 4
description_edpoint: 'Get Local Labor Rate in Dollars per Hour by Zipcode'
title_md : Sample Request
number: 4

---

### Sample Request

Get the local labor rate (in $ per hour) for a specific area (the ZIP code 90019).

### URL

	https://api.edmunds.com/v1/api/maintenance/ziplaborrate/90019?fmt=json&api_key={api key}
	
### Response

	{
	    "zipLaborRateHolder": [{
	        "zipcode": "90019",
	        "laborRate": 70
	    }]
	}