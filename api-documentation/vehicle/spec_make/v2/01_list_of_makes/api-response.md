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
title_md : Response format
number: 3
---

### Response format

#### JSON Response

	{
		"makes": {array of objects},
		"makesCount": {integer}
	}

| Property      | Description                                              | Visibility                |
|:--------------|:---------------------------------------------------------|:------------------------- |
| makes    		| An array of objects describing car makes                 | Edmunds, Partners, Public |
| makesCount 	| Total number of car makes								   | Edmunds, Partners, Public |

Each element in the <code>makes</code> array follows this format:

	{
		"id": {integer},
		"models": {array of objects},
		"name": {string},
		"niceName": {string}
	}
	
| Property      | Description                                              | Visibility                |
|:--------------|:---------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the car make                          | Edmunds, Partners, Public |
| models        | List of models belonging to this car make (see below)    | Edmunds, Partners, Public |
| name          | The name of this car make                                | Edmunds, Partners, Public |
| niceName      | URL-friendly car make name	                           | Edmunds, Partners, Public |
	
Each element in the <code>models</code> array follows this format:

	{
		"id": {string},
		"name":	{string},
		"niceName": {string},
		"states": {array of strings}, // only when view=full
		"years": {array of objects}
	}

| Property      | Description                                                    | Visibility                |
|:--------------|:---------------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the car model                               | Edmunds, Partners, Public |
| name          | The name of this car model                                     | Edmunds, Partners, Public |
| niceName      | URL-friendly car model name                                    | Edmunds, Partners, Public |
| states        | The state of this model/year (e.g. NEW, USED, or FUTURE)       | Edmunds, Partners, Public |
| years         | List of model/years belonging to this car model (see below)    | Edmunds, Partners, Public |
		
Each element in the <code>years</code> array follows this format:

	{
		"id": {integer},
		"states": {array of strings}, // only when view=full
		"year": {integer}
	}
	
| Property      | Description                                                    | Visibility                |
|:--------------|:---------------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the car model/year                          | Edmunds, Partners, Public |
| states        | The state of this model/year (e.g. NEW, USED, or FUTURE)       | Edmunds, Partners, Public |
| year          | The four digit year of this car model                          | Edmunds, Partners, Public |
