---
layout: api-documentation
title : 'Get Engine Details by ID'
title_active_left_menu: "Spec: Engine and Transmission"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Engine Details by ID'
spec: spec_engine_and_transmission
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/engines/{id}'


level: 4
description_edpoint: 'Get Engine Details by ID'
title_md : Response format
number: 3

---

###Response format

#### JSON Response

	{
		"id": {string},
		"name": {string},
		"equipmentType": "ENGINE",
		"availability": {string},
		"make": {object},
		"model": {object},
		"styles":{array of objects},
		"year": {object}
		"compressionRatio": {float},
		"cylinder": {integer},
		"size": {float},
		"displacement": {integer},
		"configuration": {string},
		"fuelType": {string},
		"horsepower": {integer},
		"torque": {integer},
		"totalValves": {integer},
		"manufacturerEngineCode": {string},
		"type": {string},
		"code": {string},
		"compressorType": {string}
	}

| Property      	| Description                         					| Visibility                |
|:------------------|:------------------------------------------------------|:------------------------- |
| id		    	| The engine ID											| Edmunds, Partners, Public |
| name		    	| The engine name										| Edmunds, Partners, Public |
| equipmentType		| Always "ENGINE"										| Edmunds, Partners, Public |
| availability		| The availability of the equipment (see overview)		| Edmunds, Partners, Public |
| make	        	| Car make details (id, name and niceName)   			   	| Edmunds, Partners, Public |
| model         	| Car make details (id, name and niceName)					| Edmunds, Partners, Public |
| styles        	| List of styles belonging to this model year (see below)   | Edmunds, Partners, Public |
| year		    	| The model year ID and the four-digit year                	| Edmunds, Partners, Public |
| compressionRatio	| The engine compression ratio							| Edmunds, Partners, Public |
| cylinder		    | The number of cylinders this engine has				| Edmunds, Partners, Public |
| size			    | The car model year ID and four-digit year				| Edmunds, Partners, Public |
| displacement	    | The engine size										| Edmunds, Partners, Public |
| configuration		| The engine configuration								| Edmunds, Partners, Public |
| fuelType	        | The engine fuel type									| Edmunds, Partners, Public |
| horsepower	    | The engine horsepower									| Edmunds, Partners, Public |
| torque			| The engine torque										| Edmunds, Partners, Public |
| totalValves	    | The total values in the engine 						| Edmunds, Partners, Public |
| manufacturerEngineCode  | The manufacturer name for the engine			| Edmunds, Partners, Public |
| type			    | The type type (gas, hybrid, diesel, ...etc)			| Edmunds, Partners, Public |
| code			    | The engine code										| Edmunds, Partners, Public |
| compressorType	| The engine compressor type							| Edmunds, Partners, Public |

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


