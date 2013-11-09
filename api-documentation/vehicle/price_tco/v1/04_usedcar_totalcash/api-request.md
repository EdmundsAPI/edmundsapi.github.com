---
layout: api-documentation
title : 'Get the Total Cash Price for a Used Car'
title_active_left_menu: 'Price: True Cost to Own'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get the Total Cash Price for a Used Car'
spec: price_tco
version: v1
api: vehicle
dropdown-link: 'v1/api/tco/usedtotalcashpricebystyleidandzip/{style ID}/{zipcode}'


level: 4
description_edpoint: 'Get the Total Cash Price for a Used Car'
title_md : Sample Request
number: 4

---

### Sample Request

Get TCO® for style ID **2898** in zip code **90404**

#### URL

	https://api.edmunds.com/v1/api/tco/usedtotalcashpricebystyleidandzip/2898/90404?fmt=json&api_key={api key}
	
#### Response

	{
	    "value": 939.0
	}
