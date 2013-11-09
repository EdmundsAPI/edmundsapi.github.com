---
layout: api-documentation
title : 'Get TCO® Details for Used Car'
title_active_left_menu: 'Price: True Cost to Own Categories'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get TCO® Details for Used Car'
spec: price_tco_cats
version: v1
api: vehicle
dropdown-link: 'api/tco/v1/details/allusedtcobystyleidzipandstate/{style ID}/{zipcode}/{US State}'


level: 4
description_edpoint: 'Get TCO® Details for Used Car'
title_md : Sample Request
number: 4

---

### Sample Request

Get TCO® details for style ID **2898** in zip code **90019** and state **CA**

#### URL

	https://api.edmunds.com/api/tco/v1/details/allusedtcobystyleidzipandstate/2898/90019/ca?fmt=json&api_key={api key}
	
#### Response

	{
	    "fuel": {
	        "values": [3140.0, 3234.0, 3331.0, 3431.0, 3534.0],
	        "total": 16670.0
	    },
	    "insurance": {
	        "values": [],
	        "total": 0.0
	    },
	    "maintenance": {
	        "values": [],
	        "total": 0.0
	    },
	    "repairs": {
	        "values": [],
	        "total": 0.0
	    },
	    "depreciation": {
	        "values": [],
	        "total": 0.0
	    },
	    "taxandfees": {
	        "values": [51.0, 36.0, 36.0, 36.0, 36.0],
	        "total": 195.0
	    },
	    "financing": {
	        "values": [32.0, 26.0, 18.0, 12.0, 4.0],
	        "total": 92.0
	    }
	}