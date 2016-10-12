---
layout: api-documentation
title : 'Get Car Models with TCO® Value'
title_active_left_menu: 'Price: True Cost to Own'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Car Models with TCO® Value'
spec: price_tco
version: v1
api: vehicle
dropdown-link: 'v1/api/tco/getmodelswithtcodata'


level: 4
description_edpoint: 'Get Car Models with TCO® Value'
title_md : Response format
number: 3

---

### Response format

	{
	    "models": {
	        "{model name}:{submodel name}": {
	            "id": {string},
	            "name": {string},
	            "link": {URI},
	            "submodel": {string},
	            "nicesubmodel": {string},
	            "model": {string},
	            "nicemodel": {string},
	            "years": {
	                "NEW_USED": {array},
	                "USED": {array},
					"NEW": {array}
	            }
	        }
	    }
	}
	
| Property      					| Description                                              	| Visibility                |
|:----------------------------------|:----------------------------------------------------------|:------------------------- |
| model name\:submodel name         | The key for the object is the model and submodel names   	| Edmunds, Partners, Public |
| id						        | The car model ID. **Always a string**.				   	| Edmunds, Partners, Public |
| name						        | The car model name									   	| Edmunds, Partners, Public |
| link 						        | URL stub to car model on Edmunds.com					   	| Edmunds, Partners, Public |
| submodel					        | The car submodel name									   	| Edmunds, Partners, Public |
| nicesubmodel				        | URL-friendly car submodel name						   	| Edmunds, Partners, Public |
| model						        | The car model name									   	| Edmunds, Partners, Public |
| nicename					        | URL-friendly car model name			   					| Edmunds, Partners, Public |
| years						        | The available car years with TCO® value				   	| Edmunds, Partners, Public |
| NEW_USED					        | Car years in the NEW and USED states					   	| Edmunds, Partners, Public |
| USED						        | Car years in the USED state **only**						| Edmunds, Partners, Public |
| NEW						        | Car years in the NEW state **only**						| Edmunds, Partners, Public |
