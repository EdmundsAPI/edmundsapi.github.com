---
layout: api-documentation
title : 'Get TCO® for a Used Car'
title_active_left_menu: 'Price: True Cost to Own'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get TCO® for a Used Car'
spec: price_tco
version: v1
api: vehicle
dropdown-link: 'v1/api/tco/usedtruecosttoownbystyleidandzip/{style ID}/{zipcode}'


level: 4
description_edpoint: 'Get TCO® for a Used Car'
title_md : Response format
number: 3

---

### Response format

	{
	    "value": {float}
	}
	
| Property      | Description                                              	| Visibility                |
|:--------------|:----------------------------------------------------------|:------------------------- |
| value         | The TCO® total value					                   	| Edmunds, Partners, Public |