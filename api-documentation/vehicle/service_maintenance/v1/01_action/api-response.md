---
layout: api-documentation
title : 'Get Maintenance Action by ID'
title_active_left_menu: 'Service: Maintenance'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Maintenance Action by ID'
spec: service_maintenance
version: v1
api: vehicle
dropdown-link: 'v1/api/maintenance/action/{id}'


level: 4
description_edpoint: 'Get Maintenance Action by ID'
title_md : Response format
number: 3

---

### Response format
	
	{
	    "actionHolder": [{
	        "id": 563663,
	        "engineCode": "8VNAG4.6",
	        "transmissionCode": "ALL",
	        "intervalMileage": 0,
	        "intervalMonth": 1,
	        "frequency": 4,
	        "action": "Check operation",
	        "item": "Lighting",
	        "itemDescription": "The vehicle\u0027s electrical illumination.",
	        "laborUnits": 0.0,
	        "partUnits": 0.0,
	        "driveType": "ALL",
	        "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100502677"
	    }]
	}

| Property      		| Description                                              	| Visibility                |
|:----------------------|:----------------------------------------------------------|:------------------------- |
| id	         		| The maintenance ID					                   	| Edmunds, Partners, Public |
| engineCode       		| The engine code that this maintenance applies to         	| Edmunds, Partners, Public |
| transmissionCode 		| The transmission code this maintenance applies to        	| Edmunds, Partners, Public |
| intervalMileage  		| The mileage intervals where this maintenance applies     	| Edmunds, Partners, Public |
| intervalMonth	       	| The number of months where this maintenance applies      	| Edmunds, Partners, Public |
| frequency        		| The frequency ID (see overview)					       	| Edmunds, Partners, Public |
| action         		| The name of the maintenance action	                   	| Edmunds, Partners, Public |
| item	         		| The item to which this maintenance applies               	| Edmunds, Partners, Public |
| itemDescription  		| The description of this item			                   	| Edmunds, Partners, Public |
| laborUnits       		| The cost of labor for this unit		                   	| Edmunds, Partners, Public |
| partUnits        		| The cost of the item					                   	| Edmunds, Partners, Public |
| driveType        		| The drivenWheels value				                   	| Edmunds, Partners, Public |
| modelYear        		| The model year ID					                   		| Edmunds, Partners, Public |
