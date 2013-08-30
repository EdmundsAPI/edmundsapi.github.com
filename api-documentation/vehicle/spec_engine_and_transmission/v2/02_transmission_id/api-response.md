---
layout: api-documentation
title : 'Get Transmission Details by ID'
title_active_left_menu: "Spec: Engine and Transmission"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Transmission Details by ID'
spec: spec_engine_and_transmission
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/transmission/{id}'


level: 4
description_edpoint: 'Get Transmission Details by ID'
title_md : Response format
number: 3

---

###Response format

#### JSON Response

	{
		"id": {integer},
    	"name": {string},
		"make": {object},
		"model": {object},
		"styles":{array of objects},
		"year": {object}
		"equipmentType": "TRANSMISSION",
	    "availability": {string},
    	"automaticType": {string},
    	"transmissionType": {string},
    	"numberOfSpeeds": {integer}
	}

| Property      	| Description                         					| Visibility                |
|:------------------|:------------------------------------------------------|:------------------------- |
| id		    	| The transmission ID									| Edmunds, Partners, Public |
| name		    	| The transmission name									| Edmunds, Partners, Public |
| make	        	| Car make details (id, name and niceName)   			   	| Edmunds, Partners, Public |
| model         	| Car make details (id, name and niceName)					| Edmunds, Partners, Public |
| styles        	| List of styles belonging to this model year (see below)   | Edmunds, Partners, Public |
| year		    	| The model year ID and the four-digit year                	| Edmunds, Partners, Public |
| equipmentType		| Always "TRANSMISSION"									| Edmunds, Partners, Public |
| availability		| The availability of the equipment (see overview)		| Edmunds, Partners, Public |
| automaticType		| The type of automatic transmission					| Edmunds, Partners, Public |
| transmissionType  | The transmission type (automatic, manual, ..etc)		| Edmunds, Partners, Public |
| numberOfSpeeds    | The number of speed the car has						| Edmunds, Partners, Public |

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


