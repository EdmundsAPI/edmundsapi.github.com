---
layout: api-documentation
title : 'Get years with styles for a Car Make/Model'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get years with styles for a Car Make/Model'
spec: spec_model_year
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/{make}/{model}/years'


level: 4
description_edpoint: 'Get years with styles for a Car Make/Model'
title_md : Response format
number: 3
---

### Response format

#### JSON Response

	{
		"years": {array of objects},
	}

| Property      | Description                                              | Visibility                |
|:--------------|:---------------------------------------------------------|:------------------------- |
| years   		| An array of objects describing car model years           | Edmunds, Partners, Public |

Each element in the <code>years</code> array follows this format:

	{
		"id": {integer},
		"year": {integer},
		"states":{array of strings},
	}

| Property | Description                                            | Visibility                |
|:---------|:-------------------------------------------------------|:------------------------- |
| id       | The Edmunds ID for the model year	                   	 | Edmunds, Partners, Public |
| year	    | The model year 	                                       | Edmunds, Partners, Public |
| states   | List of states of this model year                      | Edmunds, Partners, Public |
