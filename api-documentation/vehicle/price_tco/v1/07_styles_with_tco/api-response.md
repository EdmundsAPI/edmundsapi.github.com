---
layout: api-documentation
title : 'Get Car Styles with TCO® Value'
title_active_left_menu: 'Price: True Cost to Own'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Car Styles with TCO® Value'
spec: price_tco
version: v1
api: vehicle
dropdown-link: 'v1/api/tco/getstyleswithtcodatabysubmodel'


level: 4
description_edpoint: 'Get Car Styles with TCO® Value'
title_md : Response format
number: 3

---

### Response format

	{
	    "styles": {
	        "{style name}": {
	            "id": {integer},
	            "price": {float},
	            "trim": {string},
	            "styleLongName": {string}
	        }
	    }
	}
	
| Property      | Description                                              	| Visibility                |
|:--------------|:----------------------------------------------------------|:------------------------- |
| style name    | The key for this object is the style name		           	| Edmunds, Partners, Public |
| id	        | The car style ID								           	| Edmunds, Partners, Public |
| price         | The National TMV® price for this trim w/ standard options | Edmunds, Partners, Public |
| trim	        | The car trim									           	| Edmunds, Partners, Public |
| styleLongName | The car style complete name					           	| Edmunds, Partners, Public |
