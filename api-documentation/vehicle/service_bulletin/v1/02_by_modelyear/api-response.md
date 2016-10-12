---
layout: api-documentation
title : 'Get Service Bulletin by Car Model Year ID'
title_active_left_menu: 'Service: Service Bulletin'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Service Bulletin by Car Model Year ID'
spec: service_bulletin
version: v1
api: vehicle
dropdown-link: 'v1/api/maintenance/servicebulletinrepository/findbymodelyearid'


level: 4
description_edpoint: 'Get Service Bulletin by Car Model Year ID'
title_md : Response format
number: 3

---

### Response format

	{
	    "serviceBulletinHolder": [{
	        "id": {integer},
	        "bulletinNumber": {string},
	        "bulletinDateMonth": {integer},
	        "componentNumber": {integer},
	        "componentDescription": {string},
	        "nhtsaItemNumber": "{integer}",
	        "modelYearId": {integer},
	        "summaryText": {string}
	    }]
	}

| Property      | Description                                              	| Visibility                |
|:--------------|:----------------------------------------------------------|:------------------------- |
| id	         | The service bulletin ID				                   	| Edmunds, Partners, Public |
| bulletinNumber	         | The service bulletin number				                   	| Edmunds, Partners, Public |
| bulletinDateMonth	         | The service bulletin date				                   	| Edmunds, Partners, Public |
| componentNumber	         | The component number that this bulletin is about				                   	| Edmunds, Partners, Public |
| componentDescription	         | The description of the component				                   	| Edmunds, Partners, Public |
| nhtsaItemNumber	         | The NHTSA item number				                   	| Edmunds, Partners, Public |
| modelYearId	         | The model year ID affected by this bulletin				                   	| Edmunds, Partners, Public |
| summaryText	         | The bulletin				                   	| Edmunds, Partners, Public |


