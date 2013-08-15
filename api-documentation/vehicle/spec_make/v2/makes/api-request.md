---
layout: api-documentation
title : 'Spec: Make'
title_active_left_menu: Spec Make
title_parent: Api documentation

amount_version: 2
title-endpoint: makes
spec: spec_make
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/makes'

level: 4
description_edpoint: 'Get a List of Car Makes'
title_md : Sample Request
number: 4
---

### Sample Request 2

Get the list of all _NEW_ car makes in a _full_ view

#### URL

	http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=xxxxx&state=new&view=full
	
#### Response

	{
	   "makes":[
	      {
	         "id":200002038,
	         "name":"Acura",
	         "niceName":"acura",
	         "models":[
	            {
	               "id":"Acura_ILX",
	               "name":"ILX",
	               "niceName":"ilx",
	               "years":[
	                  {
	                     "id":100538929,
	                     "year":2013
	                  },
	                  {
	                     "id":200471908,
	                     "year":2014
	                  }
	               ]
	            },
	            ...
	            {
	               "id":"Acura_ZDX",
	               "name":"ZDX",
	               "niceName":"zdx",
	               "years":[
	                  {
	                     "id":100537249,
	                     "year":2012
	                  },
	                  {
	                     "id":200441835,
	                     "year":2013
	                  }
	               ]
	            }
	         ]
	      },
	      ...
	      {
	         "id":200010382,
	         "name":"Volvo",
	         "niceName":"volvo",
	         "models":[
	            {
	               "id":"Volvo_C30",
	               "name":"C30",
	               "niceName":"c30",
	               "years":[
	                  {
	                     "id":200425618,
	                     "year":2013
	                  }
	               ]
	            },
	            ...
	            {
	               "id":"Volvo_XC90",
	               "name":"XC90",
	               "niceName":"xc90",
	               "years":[
	                  {
	                     "id":100539229,
	                     "year":2013
	                  },
	                  {
	                     "id":200484498,
	                     "year":2014
	                  }
	               ]
	            }
	         ]
	      },
	      {
	         "id":200038885,
	         "name":"smart",
	         "niceName":"smart",
	         "models":[
	            {
	               "id":"smart_fortwo",
	               "name":"fortwo",
	               "niceName":"fortwo",
	               "years":[
	                  {
	                     "id":200418482,
	                     "year":2013
	                  }
	               ]
	            }
	         ]
	      }
	   ],
	   "makesCount":46
	}
	
### Sample Request 1

Get the list of all _NEW_ car makes

#### URL

http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key=xxxxx&state=new

#### Response

	{
	   "makes":[
	      {
	         "id":200002038,
	         "name":"Acura",
	         "niceName":"acura",
	         "models":[
	            {
	               "id":"Acura_ILX",
	               "name":"ILX",
	               "niceName":"ilx",
				   "states": ["NEW", "USED"],
	               "years":[
	                  {
	                     "id":100538929,
	                     "states": ["NEW", "USED"],
	                     "year":2013
	                  },
	                  {
	                     "id":200471908,
	                     "states": ["NEW", "USED"],
	                     "year":2014
	                  }
	               ]
	            },
	            ...
	            {
	               "id":"Acura_ZDX",
	               "name":"ZDX",
	               "niceName":"zdx",
	               "states": ["NEW", "USED"],
	               "years":[
	                  {
	                     "id":100537249,
	                     "states": ["NEW", "USED"],
	                     "year":2012
	                  },
	                  {
	                     "id":200441835,
	                     "states": ["NEW", "USED"],
	                     "year":2013
	                  }
	               ]
	            }
	         ]
	      },
	      ...
	      {
	         "id":200010382,
	         "name":"Volvo",
	         "niceName":"volvo",
	         "models":[
	            {
	               "id":"Volvo_C30",
	               "name":"C30",
	               "niceName":"c30",
	               "states": ["NEW", "USED"],
	               "years":[
	                  {
	                     "id":200425618,
	                     "states": ["NEW", "USED"],
	                     "year":2013
	                  }
	               ]
	            },
	            ...
	            {
	               "id":"Volvo_XC90",
	               "name":"XC90",
	               "niceName":"xc90",
	               "states": ["NEW", "USED"],
	               "years":[
	                  {
	                     "id":100539229,
	                     "states": ["NEW", "USED"],
	                     "year":2013
	                  },
	                  {
	                     "id":200484498,
	                     "states": ["NEW", "USED"],
	                     "year":2014
	                  }
	               ]
	            }
	         ]
	      },
	      {
	         "id":200038885,
	         "name":"smart",
	         "niceName":"smart",
	         "models":[
	            {
	               "id":"smart_fortwo",
	               "name":"fortwo",
	               "niceName":"fortwo",
	               "states": ["NEW", "USED"],
	               "years":[
	                  {
	                     "id":200418482,
	                     "states": ["NEW", "USED"],
	                     "year":2013
	                  }
	               ]
	            }
	         ]
	      }
	   ],
	   "makesCount":46
	}
