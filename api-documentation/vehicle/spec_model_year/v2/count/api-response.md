---
layout: api-documentation
title : 'Get Total Count of Car Model Years'
title_active_left_menu: 'Spec: Model/Year'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Total Count of Car Model Years'
spec: spec_model_year
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/years/count'


level: 4
description_edpoint: 'Get Total Count of Car Model Years'
title_md : Response format
number: 3
---

###Response format

#### JSON Response w/ <code>view=basic</code> (default)

	{
		"makesCount": {integer}
	}


| Property      | Description                         | Visibility                |
|:--------------|:------------------------------------|:------------------------- |
| makesCount    | The total count of car makes/brands | Edmunds, Partners, Public |

#### JSON Response w/ <code>view=full</code>

	{
	   "makes":[
	      {
	         "modelsCount": {integer},
	         "niceName": {string}
	      },
	      {
	         "modelsCount": {integer},
	         "niceName": {string}
	      },
	      ...
	   ],
	   "makesCount": {integer}
	}
	
| Property      | Description                         	| Visibility                |
|:--------------|:--------------------------------------|:------------------------- |
| makes		    | The total count of car makes			| Edmunds, Partners, Public |
| modelsCount	| The total count of this model		 	| Edmunds, Partners, Public |
| niceName	    | The URL-friendly name of this model 	| Edmunds, Partners, Public |
| makesCount    | The total count of car makes			| Edmunds, Partners, Public |
