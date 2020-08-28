---
layout: api-documentation
title : 'Get Engines for a Car Style'
title_active_left_menu: "Spec: Engine and Transmission"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Engines for a Car Style'
spec: spec_engine_and_transmission
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{style ID}/engines'


level: 4
description_edpoint: 'Get Engines for a Car Style'
title_md : Response format
number: 3

---

### Response format

#### JSON Response

	{
	  "engines": [
		{
			"id": {string},
			"name": {string},
			"equipmentType": "ENGINE",
			"availability": {string},
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
			"compressorType": {string},
			"options": {array of objects}
		}
	  ],
	  "enginesCount": {integer}
	}


| Property      	| Description                         					| Visibility                |
|:------------------|:------------------------------------------------------|:------------------------- |
| id		    	| The engine ID											| Edmunds, Partners, Public |
| name		    	| The engine name										| Edmunds, Partners, Public |
| equipmentType		| Always "ENGINE"										| Edmunds, Partners, Public |
| availability		| The availability of the equipment (see overview)		| Edmunds, Partners, Public |
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
| options           | The list of options associated with this engine (available only for optional engines) | Edmunds, Partners, Public |

