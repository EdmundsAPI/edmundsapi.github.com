---
layout: api-documentation
title : 'Get Total Count of Car Models for Specific Car Make'
title_active_left_menu: 'Spec: Model'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get Total Count of Car Models for Specific Car Make'
spec: spec_model
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/models/count'


level: 4
description_edpoint: 'Get Total Count of Car Models for Specific Car Make'
title_md : Response format
number: 3
---

### Response format

#### JSON Response w/ <code>view=basic</code> (default)

	{
		"modelsCount": {integer}
	}


| Property      | Description                         					| Visibility                |
|:--------------|:------------------------------------------------------|:------------------------- |
| modelsCount   | The total count of car models for a specific car make	| Edmunds, Partners, Public |

#### JSON Response w/ <code>view=full</code>

	{
	   "models":[
	      {
	         "yearsCount": {integer},
	         "niceName": {string}
	      },
	      {
	         "yearsCount": {integer},
	         "niceName": {string}
	      },
	      ...
	   ],
	   "modelsCount": {integer}
	}
	
| Property      | Description                         					    | Visibility                |
|:--------------|:------------------------------------------------------    |:------------------------- |
| models	    | Array objects including model year counts and model names | Edmunds, Partners, Public |
| yearsCount	| The total number of model years for this model		    | Edmunds, Partners, Public |
| niceName	    | The URL-friendly name of this model 					    | Edmunds, Partners, Public |
| modelsCount   | The total count of car models for a specific car make	    | Edmunds, Partners, Public |
