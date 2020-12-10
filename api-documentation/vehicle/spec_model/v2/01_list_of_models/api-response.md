---
layout: api-documentation
title : 'Get List of Car Models for a Car Make'
title_active_left_menu: 'Spec: Model'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get List of Car Models for a Car Make'
spec: spec_model
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/models'

level: 4
description_edpoint: 'Get List of Car Models for a Car Make'
title_md : Response format
number: 3
---

### Response format

#### JSON Response

	{
		"models": {array of objects},
		"modelsCount": {integer}
	}

| Property      | Description                                              | Visibility                |
|:--------------|:---------------------------------------------------------|:------------------------- |
| models   		| An array of objects describing car models                | Edmunds, Partners, Public |
| modelsCount 	| Total number of car models							   | Edmunds, Partners, Public |

Each element in the <code>models</code> array follows this format:

	{
		"id": {integer},
		"years":{array of objects},
		"name": {string},
		"niceName": {string},
		"state": {array of strings}, // only when view=full
	}
	
| Property      | Description                                              | Visibility                |
|:--------------|:---------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the car model                         | Edmunds, Partners, Public |
| years         | List of model years and styles (see below)    		   | Edmunds, Partners, Public |
| name          | The name of this car model                               | Edmunds, Partners, Public |
| niceName      | URL-friendly car model name	                           | Edmunds, Partners, Public |
| states      	| The state of this car model (i.e. NEW, USED, FUTURE)     | Edmunds, Partners, Public |
	
Each element in the <code>years</code> array follows this format:

	{
		"id": {integer},
		"states": {array of strings}, // only when view=full
		"styles": {array of objects},
		"year": {integer}
	}

| Property      | Description                                                    | Visibility                |
|:--------------|:---------------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the car model year                          | Edmunds, Partners, Public |
| states        | The state of this model/year (e.g. NEW, USED, FUTURE)       	 | Edmunds, Partners, Public |
| styles        | List of styles belonging to this model year (see below)    	 | Edmunds, Partners, Public |
| year	        | The car year											    	 | Edmunds, Partners, Public |
		
Each element in the <code>styles</code> array follows this format:

	{
		"id": {integer},
		"name": {string},
		"submodel": {object},
		"trim": {string},
		"states": {array of strings} // only when view=full
	}
	
| Property      | Description                                                    | Visibility                |
|:--------------|:---------------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the car style 		                         | Edmunds, Partners, Public |
| name	        | The car style name										     | Edmunds, Partners, Public |
| submodel      | The vehicle submodel (body and modelName info)                 | Edmunds, Partners, Public |
| trim      	| The vehicle trim for this car style 			                 | Edmunds, Partners, Public |
