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
title_md : Sample Request
number: 3

---

### Sample Request

Get a list of all car models for car make ID **200002038** that have a True Cost to Own® value.

#### URL

	https://api.edmunds.com/v1/api/tco/getmodelswithtcodata?makeid=200002038&fmt=json&api_key={api key}
	
#### Response

	{
	    "models": {
	        "mdx:SUV": {
	            "id": "Acura_MDX",
	            "name": "MDX SUV",
	            "link": "/acura/mdx",
	            "submodel": "SUV",
	            "nicesubmodel": "suv",
	            "model": "MDX",
	            "nicemodel": "mdx",
	            "years": {
	                "NEW_USED": [2013],
	                "USED": [2008, 2009, 2010, 2011, 2012]
	            }
	        },
	        "rdx:SUV": {
	            "id": "Acura_RDX",
	            "name": "RDX SUV",
	            "link": "/acura/rdx",
	            "submodel": "SUV",
	            "nicesubmodel": "suv",
	            "model": "RDX",
	            "nicemodel": "rdx",
	            "years": {
	                "NEW_USED": [2013],
	                "USED": [2008, 2009, 2010, 2011, 2012]
	            }
	        },
	        "rl:Sedan": {
	            "id": "Acura_RL",
	            "name": "RL Sedan",
	            "link": "/acura/rl",
	            "submodel": "Sedan",
	            "nicesubmodel": "sedan",
	            "model": "RL",
	            "nicemodel": "rl",
	            "years": {
	                "NEW_USED": [2012],
	                "USED": [2008, 2009, 2010, 2011]
	            }
	        },
	        "tl:Sedan": {
	            "id": "Acura_TL",
	            "name": "TL Sedan",
	            "link": "/acura/tl",
	            "submodel": "Sedan",
	            "nicesubmodel": "sedan",
	            "model": "TL",
	            "nicemodel": "tl",
	            "years": {
	                "NEW": [2013],
	                "NEW_USED": [2013],
	                "USED": [2008, 2009, 2010, 2011, 2012]
	            }
	        },
	        "tl:Type-S": {
	            "id": "Acura_TL",
	            "name": "TL Type-S",
	            "link": "/acura/tl",
	            "submodel": "Type-S",
	            "nicesubmodel": "types",
	            "model": "TL",
	            "nicemodel": "tl",
	            "years": {
	                "USED": [2008]
	            }
	        },
	        "tsx:Sedan": {
	            "id": "Acura_TSX",
	            "name": "TSX Sedan",
	            "link": "/acura/tsx",
	            "submodel": "Sedan",
	            "nicesubmodel": "sedan",
	            "model": "TSX",
	            "nicemodel": "tsx",
	            "years": {
	                "NEW_USED": [2013],
	                "USED": [2008, 2009, 2010, 2011, 2012]
	            }
	        },
	        "tsxsportwagon": {
	            "id": "Acura_TSX_Sport_Wagon",
	            "name": "TSX Sport Wagon",
	            "link": "/acura/tsxsportwagon",
	            "model": "TSX Sport Wagon",
	            "nicemodel": "tsxsportwagon",
	            "years": {
	                "NEW": [2013],
	                "NEW_USED": [2012],
	                "USED": [2011]
	            }
	        },
	        "zdx:Hatchback": {
	            "id": "Acura_ZDX",
	            "name": "ZDX Hatchback",
	            "link": "/acura/zdx",
	            "submodel": "Hatchback",
	            "nicesubmodel": "hatchback",
	            "model": "ZDX",
	            "nicemodel": "zdx",
	            "years": {
	                "NEW": [2013],
	                "NEW_USED": [2012],
	                "USED": [2010, 2011]
	            }
	        }
	    }
	}