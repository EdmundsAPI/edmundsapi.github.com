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
title_md : Response format
number: 3

---

### Response format

	{
	    "fuel": {
	        "values": {array},
	        "total": {float}
	    },
	    "insurance": {
	        "values": {array},
	        "total": {float}
	    },
	    "maintenance": {
	        "values": {array},
	        "total": {float}
	    },
	    "repairs": {
	        "values": {array},
	        "total": {float}
	    },
	    "depreciation": {
	        "values": {array},
	        "total": {float}
	    },
	    "taxandfees": {
	        "values": {array},
	        "total": {float}
	    },
	    "financing": {
	        "values": {array},
	        "total": {float}
	    }
	}
	
| Property      | Description                                              	| Visibility                |
|:--------------|:----------------------------------------------------------|:------------------------- |
| value         | An array with five float values representing the 5-year breakdown of the TCO® value. | Edmunds, Partners, Public |
| total         | The total TCO® for the five years                         | Edmunds, Partners, Public | 

