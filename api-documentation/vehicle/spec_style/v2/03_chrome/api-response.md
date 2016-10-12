---
layout: api-documentation
title : 'Get Car Style Details by Chrome Data ID'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Car Style Details by Chrome Data ID'
spec: spec_style
version: v2
api: vehicle
dropdown-link: '/api/vehicle/v2/partners/chrome/styles/{ChromeId}'


level: 4
description_edpoint: 'Get Car Style Details by Chrome Data ID'
title_md : Response format
number: 3

---

### Response format

#### JSON Response w/ <code>view=basic</code> (default)

	{
	  "styles": [{  	
	  	"id": {integer},
		  "name": {string},
		  "make": {
		    "id": {integer},
		    "name": {string},
		    "niceName": {string}
		  },
		  "model": {
		    "id": {string},
		    "name": {string},
		    "niceName": {string}
		  },
		  "year": {
		    "id": {integer},
		    "year": {integer}
		  },
		  "submodel": {
		    "body": {string},
		    "modelName": {string}
		  },
		  "trim": {string}
		},
		...
	  }]
	}

The *make*, *model*, *year* and *submodel* objects are identical to what's returned in the Make and Model specs.

| Property      | Description                         					| Visibility                |
|:--------------|:------------------------------------------------------|:------------------------- |
| id		    | The style ID											| Edmunds, Partners, Public |
| name		    | The style name										| Edmunds, Partners, Public |
| make		    | The car make details (id, name and nicename)			| Edmunds, Partners, Public |
| model		    | The car model details (id, name and nicename)			| Edmunds, Partners, Public |
| year		    | The car model year ID and four-digit year				| Edmunds, Partners, Public |
| submodel	    | Car submode details									| Edmunds, Partners, Public |
| trim		    | The car trim											| Edmunds, Partners, Public |

#### JSON Response w/ <code>view=full</code>

	{
	  "styles": [{
	 	  "id": {integer},
	      "name": {string},
		  "make": {
		    "id": {integer},
		    "name": {string},
		    "niceName": {string}
		  },
		  "model": {
		    "id": {string},
		    "name": {string},
		    "niceName": {string}
		  },
		  "year": {
		    "id": {integer},
		    "year": {integer}
		  },
		  "submodel": {
		    "body": {string},
		    "modelName": {string}
		  },
		  "trim": {string},
		  "states": {array},
		  "engine": {object},
		  "transmission": {object},
		  "drivenWheels": {string},
	      "numOfDoors": {integer},
		  "options": [
		    {
		      "category": {string},
		      "options": {array}
		    }
		  ],
		  "colors": [
		    {
		      "category": {string},
		      "options": {array}
		    }
		  ],
		  "manufacturerCode": {string},
		  "price": {object},
		  "categories": {object},
		  "MPG": {object},
		  "squishVins": {array}
		},
		...
	  }]
	}

| Property      | Description                         					| Visibility                |
|:--------------|:------------------------------------------------------|:------------------------- |
| id		    | The style ID											| Edmunds, Partners, Public |
| name		    | The style name										| Edmunds, Partners, Public |
| make		    | The car make details (id, name and nicename)			| Edmunds, Partners, Public |
| model		    | The car model details (id, name and nicename)			| Edmunds, Partners, Public |
| year		    | The car model year ID and four-digit year				| Edmunds, Partners, Public |
| submodel	    | Car submode details									| Edmunds, Partners, Public |
| trim		    | The car trim											| Edmunds, Partners, Public |
| states        | The state of this style (e.g. NEW, USED, or FUTURE) 	| Edmunds, Partners, Public |
| engine	    | The engine details on this style (see below)			| Edmunds, Partners, Public |
| transmission  | The transmission details on this style (see below)	| Edmunds, Partners, Public |
| drivenWheels  | All, Front, Rear or Four wheel drive value			| Edmunds, Partners, Public |
| numOfDoors    | The number of doors on the car						| Edmunds, Partners, Public |
| options	    | Available options for this style (see below)			| Edmunds, Partners, Public |
| colors	    | Available colors for this style (see below)			| Edmunds, Partners, Public |
| manufacturerCode	| The OEM code for this car							| Edmunds, Partners, Public |
| price		    | The base price for the vehicle (see below)			| Edmunds, Partners, Public |
| categories    | The different categories in which this car fits (see below) | Edmunds, Partners, Public |
| MPG		    | City and Highway MPG values							| Edmunds, Partners, Public |
| squishVins    | All the squish Vins associated with this style		| Edmunds, Partners, Public |


The properties within the <code>engine</code> object are:

	"id": {string},
    "name": {string},
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

| Property      	| Description                         					| Visibility                |
|:------------------|:------------------------------------------------------|:------------------------- |
| id		    	| The engine ID											| Edmunds, Partners, Public |
| name		    	| The engine name										| Edmunds, Partners, Public |
| compressionRatio	| The engine compression ratio							| Edmunds, Partners, Public |
| cylinder		    | The number of cylinders this engine has				| Edmunds, Partners, Public |
| size			    | The car model year ID and four-digit year				| Edmunds, Partners, Public |
| displacement	    | The engine size										| Edmunds, Partners, Public |
| configuration		| The engine configuration								| Edmunds, Partners, Public |
| fuelType	        | The engine fuel type									| Edmunds, Partners, Public |
| horsepower	    | The engine horsepower									| Edmunds, Partners, Public |
| torque			| The engine torque										| Edmunds, Partners, Public |
| totalValves	    | The total values in the engine 						| Edmunds, Partners, Public |
| type			    | The type type (gas, hybrid, diesel, ...etc)			| Edmunds, Partners, Public |
| code			    | The engine code										| Edmunds, Partners, Public |
| compressorType	| The engine compressor type							| Edmunds, Partners, Public |

The properties within the <code>transmission</code> object are:

	"id": {integer},
    "name": {string},
    "automaticType": {string},
    "transmissionType": {string},
    "numberOfSpeeds": {integer}

| Property      	| Description                         					| Visibility                |
|:------------------|:------------------------------------------------------|:------------------------- |
| id		    	| The transmission ID									| Edmunds, Partners, Public |
| name		    	| The transmission name									| Edmunds, Partners, Public |
| automaticType		| The type of automatic transmission					| Edmunds, Partners, Public |
| transmissionType  | The transmission type (automatic, manual, ..etc)		| Edmunds, Partners, Public |
| numberOfSpeeds    | The number of speed the car has						| Edmunds, Partners, Public |


Each element in the <code>options</code> array follows this format:

	{
      "id": {integer},
      "name": {string},
      "equipmentType": {string},
      "manufactureOptionName": {string},
      "manufactureOptionCode": {string},
      "category": {string}
    }

| Property      			| Description                         					| Visibility                |
|:--------------------------|:------------------------------------------------------|:------------------------- |
| id		    			| The option ID											| Edmunds, Partners, Public |
| name		    			| The option name										| Edmunds, Partners, Public |
| equipmentType				| The equipment type (see overview)						| Edmunds, Partners, Public |
| manufactureOptionName  	| The name of this option at the manufacturer			| Edmunds, Partners, Public |
| manufactureOptionCode     | The code of this option at the manufacturer			| Edmunds, Partners, Public |
| category				    | The option category (see overview)					| Edmunds, Partners, Public |
	
Each element in the ***colors*** <code>options</code> array follows this format:

	{
      "id": {integer},
      "name": {string},
      "equipmentType": {string},
      "manufactureOptionName": {string},
      "manufactureOptionCode": {string},
      "category": {string},
      "colorChips": {
        "primary": {
          "r": {integer},
          "g": {integer},
          "b": {integer},
          "hex": {string}
        }
      },
      "fabricType": {string}
    }

| Property      			| Description                         					| Visibility                |
|:--------------------------|:------------------------------------------------------|:------------------------- |
| id		    			| The option ID											| Edmunds, Partners, Public |
| name		    			| The option name										| Edmunds, Partners, Public |
| equipmentType				| The equipment type. It's always "COLOR"				| Edmunds, Partners, Public |
| manufactureOptionName  	| The name of this option at the manufacturer			| Edmunds, Partners, Public |
| manufactureOptionCode     | The code of this option at the manufacturer			| Edmunds, Partners, Public |
| category				    | The option category. **Interior** OR **Exterior**		| Edmunds, Partners, Public |
| colorChips			    | Primary and Secondary colors. Each with RGB and Hex values	| Edmunds, Partners, Public |
| fabricType			    | The fabric type for interior							| Edmunds, Partners, Public |

The properties within the <code>price</code> object are:

	"baseMSRP": {float},
    "baseInvoice": {float},
    "deliveryCharges": {float},
    "usedTmvRetail": {float},
    "usedPrivateParty": {float},
    "usedTradeIn": {float},
    "estimateTmv": {boolean},
    "tmvRecommendedRating": {integer}

| Property      	| Description                         					| Visibility                |
|:------------------|:------------------------------------------------------|:------------------------- |
| baseMSRP	    	| The national base MSRP price of this vehicle			| Edmunds, Partners, Public |
| baseInvoice    	| The national base INVOICE price of this vehicle		| Edmunds, Partners, Public |
| deliveryCharges	| The national DELIVERY CHARGE associated with this car | Edmunds, Partners, Public |
| usedTmvRetail		| The national USED TMV® value for this car				| Edmunds, Partners, Public |
| usedPrivateParty  | The national average of PRIVATE SELLER price			| Edmunds, Partners, Public |
| usedTradeIn		| The national average TRADE IN value of this vehicle	| Edmunds, Partners, Public |
| estimateTmv	    | Is this TMV® value estimated?							| Edmunds, Partners, Public |
| tmvRecommendedRating	| Deprecated value									| Edmunds, Partners, Public |

The properties within the <code>categories</code> object are:

	"EPAClass": {string},
    "vehicleSize": {string},
    "primaryBodyType": {string},
    "vehicleStyle": {string},
    "vehicleType": {string}

| Property      	| Description                         					| Visibility                |
|:------------------|:------------------------------------------------------|:------------------------- |
| EPAClass	    	| The EPA definition of this car						| Edmunds, Partners, Public |
| vehicleSize    	| The size of this car. [view all values](/api-documentation/vehicle/)					| Edmunds, Partners, Public |
| primaryBodyType	| The body type of this car							    | Edmunds, Partners, Public |
| vehicleStyle		| The boy style (or category) of this car. [view all values](/api-documentation/vehicle/)							| Edmunds, Partners, Public |
| vehicleType  		| The type of vehicle this is. [view all values](/api-documentation/vehicle/)			| Edmunds, Partners, Public |

