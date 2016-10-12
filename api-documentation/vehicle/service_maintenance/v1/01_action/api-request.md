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
title_md : Sample Request
number: 4

---

### Sample Request

Get the maintenance details with ID **563663**
	
### URL

	https://api.edmunds.com/v1/api/maintenance/action/563663?fmt=json&api_key={api key}
	
### Response

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