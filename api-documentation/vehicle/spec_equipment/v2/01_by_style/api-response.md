---
layout: api-documentation
title : 'Get Car Equipment Details for a Car Style'
title_active_left_menu: "Spec: Equipment"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Car Equipment Details for a Car Style'
spec: spec_equipment
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{style ID}/equipment'


level: 4
description_edpoint: 'Get Car Equipment Details for a Car Style'
title_md : Response format
number: 3

---

### Response format

#### JSON Response

	{
	  "equipment": [
	    {typical equipment object},
	    {engine object},
	    {transmission object}
	  ],
	  "equipmentCount": {integer}
	}

The properties within the <code>typical equipment</code> object follow this format:

	{
		"id": {integer},
		"name": {string},
		"equipmentType": {string},
		"availability": {string},
		"attributes": [{
			"name": {string},
			"value": {string}
		}]
	}

| Property      	| Description                         						| Visibility                |
|:------------------|:------------------------------------------------------	|:------------------------- |
| id		    	| The equipment ID											| Edmunds, Partners, Public |
| name		    	| The equipment name										| Edmunds, Partners, Public |
| equipmentType		| The type of equipment (see overview for possible values)	| Edmunds, Partners, Public |
| availability		| The availability of the equipment (see overview)			| Edmunds, Partners, Public |
| attributes	    | The name/value pairs describing the equipment				| Edmunds, Partners, Public |

The properties within the <code>engine</code> object are:

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
		"compressorType": {string}
	}

| Property      	| Description                         					| Visibility                |
|:------------------|:------------------------------------------------------|:------------------------- |
| id		    	| The engine ID											| Edmunds, Partners, Public |
| name		    	| The engine name										| Edmunds, Partners, Public |
| equipmentType		| Always "ENGINE"										| Edmunds, Partners, Public |
| availability		| The availability of the equipment (see overview)		| Edmunds, Partners, Public |
| compressionRatio	| The engine compression ratio							| Edmunds, Partners, Public |
| cylinder		    | The number of cylinders this engine has				| Edmunds, Partners, Public |
| size			    | The engine size										| Edmunds, Partners, Public |
| displacement	    | The engine displacement								| Edmunds, Partners, Public |
| configuration		| The engine configuration								| Edmunds, Partners, Public |
| fuelType	        | The engine fuel type (e.g. premium unleaded)			| Edmunds, Partners, Public |
| horsepower	    | The engine horsepower									| Edmunds, Partners, Public |
| torque			| The engine torque										| Edmunds, Partners, Public |
| totalValves	    | The total values in the engine 						| Edmunds, Partners, Public |
| type			    | The type of engine (e.g. gas, hybrid, diesel, etc.)	| Edmunds, Partners, Public |
| code			    | The engine code										| Edmunds, Partners, Public |
| compressorType	| The engine compressor type							| Edmunds, Partners, Public |

The properties within the <code>transmission</code> object are:

	{
		"id": {integer},
		"name": {string},
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
| equipmentType		| Always "TRANSMISSION"									| Edmunds, Partners, Public |
| availability		| The availability of the equipment (see overview)		| Edmunds, Partners, Public |
| automaticType		| The type of automatic transmission					| Edmunds, Partners, Public |
| transmissionType  | The transmission type (automatic, manual, etc.)		| Edmunds, Partners, Public |
| numberOfSpeeds    | The number of speeds the car has						| Edmunds, Partners, Public |

