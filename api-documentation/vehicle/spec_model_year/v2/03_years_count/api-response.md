---
layout: api-documentation
title : 'Get Total Count of Car Model Years'
title_active_left_menu: 'Spec Model/Year'
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

### Response format

#### JSON Response w/ <code>view=basic</code> (default)

	{
		"yearsCount": {integer}
	}


| Property      | Description                         | Visibility                |
|:--------------|:------------------------------------|:------------------------- |
| yearsCount    | The total count of model years 	  | Edmunds, Partners, Public |

#### JSON Response w/ <code>view=full</code>

	{
	   "years":[
	     {
	         "id": {integer},
	         "stylesCount": {integer},
	         "year": {integer}
	     }
	   ],
	   "yearsCount": {integer}
	}
	
| Property      | Description                         	| Visibility                |
|:--------------|:--------------------------------------|:------------------------- |
| years		    | Array of a year and its styles count	| Edmunds, Partners, Public |
| stylesCount	| The total count of car styles		 	| Edmunds, Partners, Public |
| id		    | The model year ID					 	| Edmunds, Partners, Public |
| year		    | The model year					 	| Edmunds, Partners, Public |
| yearsCount    | The total count of car makes			| Edmunds, Partners, Public |
