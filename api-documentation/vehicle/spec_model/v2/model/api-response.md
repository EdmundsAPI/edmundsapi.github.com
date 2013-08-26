---
layout: api-documentation
title : 'Get Model Year and Style Details for a Car Make and Model'
title_active_left_menu: 'Spec: Model'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Model Year and Style Details for a Car Make and Model'
spec: spec_model
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}'


level: 4
description_edpoint: 'Get Model Year and Style Details for a Car Make and Model'
title_md : Response format
number: 3

---

###Response format

#### JSON Response

	{
		"id": {integer},
		"make":{object},
		"name": {string},
		"niceName": {string},
		"state": {array of strings}, // only when view=full
		"years": {array of objects}
	}
	
| Property      | Description                                              | Visibility                |
|:-------------:|:---------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the car make/brand                    | Edmunds, Partners, Public |
| make	        | The car make details (i.e. id, name, nicename)		   | Edmunds, Partners, Public |
| name          | The name of this car model                               | Edmunds, Partners, Public |
| niceName      | URL-friendly car model			                       | Edmunds, Partners, Public |
| states      	| The state of this car model (i.e. NEW, USED, FUTURE)     | Edmunds, Partners, Public |
| years		    | Array of model year details, including styles            | Edmunds, Partners, Public |
	
Each element in the <code>years</code> array follows this format:

	{
		"id": {integer},
		"states": {array of strings}, // only when view=full
		"styles":{array of objects},
		"year": {integer}
	}

| Property      | Description                                                    | Visibility                |
|:-------------:|:---------------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the car model year                          | Edmunds, Partners, Public |
| states        | The state of this model/year (e.g. NEW, USED, FUTURE)       	 | Edmunds, Partners, Public |
| styles        | List of styles belonging to this model year (see below)    	 | Edmunds, Partners, Public |
| year	        | The car year											    	 | Edmunds, Partners, Public |
		
Each element in the <code>styles</code> array follows this format:

	{
		"id": {integer},
		"name": {string},
		"submodel": {object},
		"trim": {string}
	}
	
| Property      | Description                                                    | Visibility                |
|:-------------:|:---------------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the car style 		                         | Edmunds, Partners, Public |
| name	        | The car style name										     | Edmunds, Partners, Public |
| submodel      | The vehicle submodel (body and modelName info)                 | Edmunds, Partners, Public |
| trim      	| The vehicle trim for this car style 			                 | Edmunds, Partners, Public |


