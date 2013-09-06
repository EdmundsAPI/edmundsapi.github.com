---
layout: api-documentation
title : 'Get Car Equipment Details by ID'
title_active_left_menu: "Spec: Equipment"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Car Equipment Details by ID'
spec: spec_equipment
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/equipment/{id}'


level: 4
description_edpoint: 'Get Car Equipment Details by ID'
title_md : Response format
number: 3

---

###Response format

#### JSON Response

	{
	  "id": {integer},
  	  "name": {string},
	  "equipmentType": {string},
	  "availability": {string},
	  "attributes": [
        {
          "name": {string},
          "value": {string}
        }
      ],
	  "make": {object},
	  "model": {object},
	  {"style" | "styles"}: {object | array of objects},
	  "year": {object}
	}

| Property      	| Description                         						| Visibility                |
|:------------------|:----------------------------------------------------------|:------------------------- |
| id		    	| The equipment ID											| Edmunds, Partners, Public |
| name		    	| The equipment name										| Edmunds, Partners, Public |
| equipmentType		| The type of the equipment (see overview)					| Edmunds, Partners, Public |
| availability		| The availability of the equipment (see overview)			| Edmunds, Partners, Public |
| attributes	    | The name/value pairs describing the equipment				| Edmunds, Partners, Public |
| make	        	| Car make details (id, name and niceName)   			   	| Edmunds, Partners, Public |
| model         	| Car make details (id, name and niceName)					| Edmunds, Partners, Public |
| styles        	| List/object of styles for this model year (see below)   	| Edmunds, Partners, Public |
| year		    	| The model year ID and the four-digit year                	| Edmunds, Partners, Public |

Each <code>style</code> object follows this format:

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


