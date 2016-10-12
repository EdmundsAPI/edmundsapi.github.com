---
layout: api-documentation
title : 'Get Vehicle Recalls by Car Model Year ID'
title_active_left_menu: 'Service: Recalls'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Vehicle Recalls by Car Model Year ID'
spec: service_recalls
version: v1
api: vehicle
dropdown-link: 'v1/api/maintenance/recallrepository/findbymodelyearid'


level: 4
description_edpoint: 'Get Vehicle Recalls by Car Model Year ID'
title_md : Response format
number: 3

---

### Response format

	{
	    "recallHolder": [{
	        "id": {integer},
	        "recallNumber": {string},
	        "componentDescription": {string},
	        "manufacturerRecallNumber": {string},
	        "manufacturedTo": {date},
	        "numberOfVehiclesAffected": {integer},
	        "influencedBy": {string},
	        "defectConsequence": {string},
	        "defectCorrectiveAction": {string},
	        "defectDescription": {string},
	        "modelYear": {URI}
	    }]
	}

| Property      			| Description                                              	| Visibility                |
|:--------------------------|:----------------------------------------------------------|:------------------------- |
| id            			| The recall ID							                   	| Edmunds, Partners, Public |
| recallNumber            	| The recall number						                   	| Edmunds, Partners, Public |
| componentDescription      | The recall component description		                   	| Edmunds, Partners, Public |
| manufacturerRecallNumber  | The recall manufacturer number		                   	| Edmunds, Partners, Public |
| manufacturedTo            | The date this vehicle was manufactured                   	| Edmunds, Partners, Public |
| numberOfVehiclesAffected  | The total number of vehicles affected	                   	| Edmunds, Partners, Public |
| influencedBy            	| The entity influencing this recall	                   	| Edmunds, Partners, Public |
| defectConsequence         | What this defect causes				                   	| Edmunds, Partners, Public |
| defectCorrectiveAction 	| The action to remedy this defect		                   	| Edmunds, Partners, Public |
| defectDescription       	| The description of the defect			                   	| Edmunds, Partners, Public |
| modelYear            		| The model year affected by this recall                   	| Edmunds, Partners, Public |

