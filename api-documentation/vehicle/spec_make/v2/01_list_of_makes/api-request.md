---
layout: api-documentation
title : 'Get list of car makes'
title_active_left_menu: 'Spec: Make'
title_parent: Api documentation

amount_version: 23
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

### Sample Request 1

Get the list of all **new** car makes with <code>view=full</code>

#### URL

	https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key={api key}&state=new&view=full
	
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
	                     "year":2013,
	                     "states":["USED","NEW"]
	                  },
	                  {
	                     "id":200471908,
	                     "year":2014,
	                     "states":["NEW"]
	                  }
	               ],
	               "states":["NEW","USED"]
	            },
	            ...
	            {
	               "id":"Acura_ZDX",
	               "name":"ZDX",
	               "niceName":"zdx",
	               "years":[
	                  {
	                     "id":100537249,
	                     "year":2012,
	                     "states":["USED","NEW"]
	                  },
	                  {
	                     "id":200441835,
	                     "year":2013,
	                     "states":["NEW"]
	                  }
	               ],
	               "states":["USED","NEW"]
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
	                     "year":2013,
	                     "states":["NEW"]
	                  }
	               ],
	               "states":["USED","NEW"]
	            },
	            ...
	            {
	               "id":"Volvo_XC90",
	               "name":"XC90",
	               "niceName":"xc90",
	               "years":[
	                  {
	                     "id":100539229,
	                     "year":2013,
	                     "states":["USED","NEW"]
	                  },
	                  {
	                     "id":200484498,
	                     "year":2014,
	                     "states":["NEW"]
	                  }
	               ],
	               "states":["USED","NEW"]
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
	                     "year":2013,
	                     "states":["NEW"]
	                  }
	               ],
	               "states":["USED","NEW"]
	            }
	         ]
	      }
	   ],
	   "makesCount":46
	}
	
### Sample Request 2

Get the list of all **new** car makes

#### URL

	https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key={api key}&state=new

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