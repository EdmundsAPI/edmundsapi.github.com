---
layout: api-documentation
title : 'Get Model Year Details for a Car Make/Model'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Model Year Details for a Car Make/Model'
spec: spec_model_year
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/years'


level: 4
description_edpoint: 'Get Model Year Details for a Car Make/Model'
title_md : Response format
number: 3
---

###Response format

#### JSON Response

	{
		"years": {array of objects},
		"yearsCount": {integer}
	}

| Property      | Description                                              | Visibility                |
|:--------------|:---------------------------------------------------------|:------------------------- |
| years   		| An array of objects describing car mode years            | Edmunds, Partners, Public |
| yearsCount 	| Total number of car models							   | Edmunds, Partners, Public |

Each element in the <code>years</code> array follows this format:

	{
		"id": {integer},
		"make": {object},
		"model": {object},
		"states": {array of strings}, // only when view=full
		"styles":{array of objects},
		"year": {integer}
	}

| Property      | Description                                               | Visibility                |
|:--------------|:----------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the model year		                   	| Edmunds, Partners, Public |
| make	        | Car make details (id, name and niceName)   			   	| Edmunds, Partners, Public |
| model         | Car make details (id, name and niceName)					| Edmunds, Partners, Public |
| states        | The state of this model/year (e.g. NEW, USED, or FUTURE) 	| Edmunds, Partners, Public |
| year		    | The model year				                         	| Edmunds, Partners, Public |
| styles        | List of styles belonging to this model year (see below)   | Edmunds, Partners, Public |
		
Each element in the <code>styles</code> array follows this format:

	{
		"id": {integer},
		"name": {string},
		"submodel": {object},
		"trim": {string}
	}
	
| Property      | Description                                                    | Visibility                |
|:--------------|:---------------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the car style 		                         | Edmunds, Partners, Public |
| name	        | The car style name										     | Edmunds, Partners, Public |
| submodel      | The vehicle submodel (body and modelName info)                 | Edmunds, Partners, Public |
| trim      	| The vehicle trim for this car style 			                 | Edmunds, Partners, Public |