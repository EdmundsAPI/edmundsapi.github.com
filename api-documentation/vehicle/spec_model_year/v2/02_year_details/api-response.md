---
layout: api-documentation
title : 'Get Style Details for a Car Make/Model/Year'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get Style Details for a Car Make/Model/Year'
spec: spec_model_year
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/{year}'


level: 4
description_edpoint: 'Get Style Details for a Car Make/Model/Year'
title_md : Response format
number: 3

---

### Response format

#### JSON Response

	{
		"id": {integer},
		"make": {object}, // only when view=full
		"model": {object}, // only when view=full
		"states" {array of strings}, // only when view=full
		"styles": {array of objects},
		"year": {integer}
	}
	
| Property      | Description                                              	| Visibility                |
|:--------------|:----------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the model year		                   	| Edmunds, Partners, Public |
| make	        | Car make details (id, name and niceName)   			   	| Edmunds, Partners, Public |
| model         | Car model details (id, name and niceName)					| Edmunds, Partners, Public |
| states        | The state of this model/year (e.g. NEW, USED, or FUTURE) 	| Edmunds, Partners, Public |
| year		    | The model year				                         	| Edmunds, Partners, Public |
	
Each element in the <code>styles</code> array follows this format:

	{
		"id": {string},
		"name":	{string},
		"submodel": {object},
		"trim": {string},
		"states": {array of strings} // only when view=full
	}

| Property      | Description                                                    | Visibility                |
|:--------------|:---------------------------------------------------------------|:------------------------- |
| id            | The Style ID   					                             | Edmunds, Partners, Public |
| name          | The style name			                                     | Edmunds, Partners, Public |
| submodel      | Car submodel details (body, modelName, etc.)                   | Edmunds, Partners, Public |
| trim	        | The car trim associated with this style 				         | Edmunds, Partners, Public |
| states        | The state of this car style (e.g. NEW, USED, FUTURE)       	 | Edmunds, Partners, Public |

Each <code>submodel</code> object follows this format:

	{
		"body": {string},
		"fuel": {string}, // is not always populated
		"tuner": {string}, // is not always populated
		"modelName": {string},
		"niceName": {string}
	}

| Property      | Description                                                         | Visibility                 |
|:--------------|:--------------------------------------------------------------------|:-------------------------- |
| body          | The type of car body (e.g. "Sedan", "Hatchback")                    | Edmunds, Partners, Public  |
| fuel          | The type of car fuel (e.g. "Hybrid", "Diesel", "Electric")          | Edmunds, Partners, Public  |
| tuner         | The type of car tuner (e.g. "Base", "Sport")                        | Edmunds, Partners, Public  |
| modelName     | The name of this submodel (e.g. "Civic Hatchback", "X5 SUV Diesel") | Edmunds, Partners, Public  |
| niceName      | The nice name of this submodel (e.g. "sedan", "diesel")             | Edmunds, Partners, Public  |
