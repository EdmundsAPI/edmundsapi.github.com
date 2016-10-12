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

### Response format

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
      ]
	}

| Property      	| Description                         						| Visibility                |
|:------------------|:----------------------------------------------------------|:------------------------- |
| id		    	| The equipment ID											| Edmunds, Partners, Public |
| name		    	| The equipment name										| Edmunds, Partners, Public |
| equipmentType		| The type of the equipment (see overview)					| Edmunds, Partners, Public |
| availability		| The availability of the equipment (see overview)			| Edmunds, Partners, Public |
| attributes	    | The name/value pairs describing the equipment				| Edmunds, Partners, Public |



