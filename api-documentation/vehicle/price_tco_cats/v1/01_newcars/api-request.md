---
layout: api-documentation
title : 'Get TCO® Details for New Car'
title_active_left_menu: 'Price: True Cost to Own'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get TCO® Details for New Car'
spec: price_tco_cats
version: v1
api: vehicle
dropdown-link: 'api/tco/v1/details/allnewtcobystyleidzipandstate'


level: 4
description_edpoint: 'Get TCO® Details for New Car'
title_md : Sample Request
number: 3

---

### Sample Request

Get TCO® for style ID **101426944** in zip code **90019**

#### URL

	https://api.edmunds.com/api/tco/v1/details/allnewtcobystyleidzipandstate/101426944/90019/NY?fmt=json&api_key={api key}
	
#### Response

	{
	    "fuel": {
	        "values": [1433.0, 1475.0, 1520.0, 1565.0, 1612.0],
	        "total": 7605.0
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
	        "values": [0.0, 0.0, 0.0, 0.0, 0.0],
	        "total": 0.0
	    },
	    "taxandfees": {
	        "values": [289.0, 274.0, 274.0, 274.0, 274.0],
	        "total": 1385.0
	    },
	    "financing": {
	        "values": [1266.0, 1007.0, 736.0, 456.0, 163.0],
	        "total": 3628.0
	    }
	}