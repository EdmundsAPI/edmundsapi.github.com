---
layout: api-documentation
title : 'Get years with styles for a Car Make/Model'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 23
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
		"styles":{array of objects},
		"year": {integer}
	}

| Property      | Description                                               | Visibility                |
|:--------------|:----------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the model year		                   	| Edmunds, Partners, Public |
| year		    | The model year				                         	| Edmunds, Partners, Public |
| styles        | List of styles belonging to this model year (see below)   | Edmunds, Partners, Public |
		
Each element in the <code>styles</code> array follows this format:

	{
		"id": {integer},
		"name": {string},
		"submodel": {object},
		"trim": {string},
	}
	
| Property      | Description                                                    | Visibility                |
|:--------------|:---------------------------------------------------------------|:------------------------- |
| id            | The Style id  						                         | Edmunds, Partners, Public |
| name	        | The car style name										     | Edmunds, Partners, Public |
| submodel      | The vehicle submodel (body and modelName info)                 | Edmunds, Partners, Public |
| trim      	| The vehicle trim for this car style 			                 | Edmunds, Partners, Public |

Each <code>submodel</code> object follows this format:

	{
		"body": {string},
		"fuel": {string},
		"tuner": {string},
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
