---
layout: api-documentation
title : 'Get Service Bulletin by ID'
title_active_left_menu: 'Service: Service Bulletin'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Service Bulletin by ID'
spec: service_bulletin
version: v1
api: vehicle
dropdown-link: 'v1/api/maintenance/servicebulletin/{id}'


level: 4
description_edpoint: 'Get Service Bulletin by ID'
title_md : Sample Request
number: 4

---

### Sample Request

Get the service bulletin details by ID **190059**

### URL

	https://api.edmunds.com/v1/api/maintenance/servicebulletin/190059?fmt=json&api_key={api key}
	
### Response

	{
	    "serviceBulletinHolder": [{
	        "id": 190059,
	        "bulletinNumber": "TSB-08-19-3",
	        "bulletinDateMonth": "905",
	        "componentNumber": 106220,
	        "componentDescription": "POWER TRAIN:AXLE ASSEMBLY:AXLE SHAFT:SEAL",
	        "nhtsaItemNumber": "10028736",
	        "modelYearId": 100502677,
	        "summaryText": "FORD: SOME VEHICLES MAY EXHIBIT OIL SEPARATION FROM THE INTERNAL LUBE FOUND IN THE UNITIZED CARTRIDGE SEAL. OIL SEPARATION APPEARS TO BE AND IS OFTEN MISDIAGNOSED, AS AN AXLE LUBE LEAK.   ( NHTSA ITEM NUMBER - 10028736 )"
	    }]
	}