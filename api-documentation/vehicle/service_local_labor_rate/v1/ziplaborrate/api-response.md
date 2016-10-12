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
title_md : Response format
number: 3

---

### Response format

	{
	    "zipLaborRateHolder": [{
	        "zipcode": {integer},
	        "laborRate": {integer}
	    }]
	}

| Property      | Description                                              	| Visibility                |
|:--------------|:----------------------------------------------------------|:------------------------- |
| zipcode       | The zip code of the area				                   	| Edmunds, Partners, Public |
| laborRate     | The amount in dollar per hour			                   	| Edmunds, Partners, Public |