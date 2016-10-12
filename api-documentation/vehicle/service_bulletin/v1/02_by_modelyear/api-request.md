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
title_md : Sample Request
number: 4

---

### Sample Request

Get the service bulletins for model year ID **100502677**

### URL

	https://api.edmunds.com/v1/api/maintenance/servicebulletinrepository/findbymodelyearid?modelyearid=100502677&fmt=json&api_key={api key}
	
### Response

	{
	    "serviceBulletinHolder": [{
	        "id": 190058,
	        "bulletinNumber": "TSB-08-19-3",
	        "bulletinDateMonth": "905",
	        "componentNumber": 106200,
	        "componentDescription": "POWER TRAIN:AXLE ASSEMBLY:AXLE SHAFT",
	        "nhtsaItemNumber": "10028736",
	        "modelYearId": 100502677,
	        "summaryText": "FORD: SOME VEHICLES MAY EXHIBIT OIL SEPARATION FROM THE INTERNAL LUBE FOUND IN THE UNITIZED CARTRIDGE SEAL. OIL SEPARATION APPEARS TO BE AND IS OFTEN MISDIAGNOSED, AS AN AXLE LUBE LEAK.   ( NHTSA ITEM NUMBER - 10028736 )"
	    }, {
	        "id": 190059,
	        "bulletinNumber": "TSB-08-19-3",
	        "bulletinDateMonth": "905",
	        "componentNumber": 106220,
	        "componentDescription": "POWER TRAIN:AXLE ASSEMBLY:AXLE SHAFT:SEAL",
	        "nhtsaItemNumber": "10028736",
	        "modelYearId": 100502677,
	        "summaryText": "FORD: SOME VEHICLES MAY EXHIBIT OIL SEPARATION FROM THE INTERNAL LUBE FOUND IN THE UNITIZED CARTRIDGE SEAL. OIL SEPARATION APPEARS TO BE AND IS OFTEN MISDIAGNOSED, AS AN AXLE LUBE LEAK.   ( NHTSA ITEM NUMBER - 10028736 )"
	    }, {
	        "id": 168231,
	        "bulletinNumber": "0706",
	        "bulletinDateMonth": "705",
	        "componentNumber": 980000,
	        "componentDescription": "OTHER",
	        "nhtsaItemNumber": "10021944",
	        "modelYearId": 100502677,
	        "summaryText": "EXTENDED WARRANTY COVERAGE ON IGNITION COIL ASSEMBLIES.   ( NHTSA ITEM NUMBER - 10021944 )"
	    }, {
	        "id": 158006,
	        "bulletinNumber": "05213",
	        "bulletinDateMonth": "601",
	        "componentNumber": 91200,
	        "componentDescription": "FUEL SYSTEM, OTHER:STORAGE:FUEL GAUGE SYSTEM",
	        "nhtsaItemNumber": "10019379",
	        "modelYearId": 100502677,
	        "summaryText": "MALFUNCTION INDICATOR LAMP ON WITH PCM DIAGNOSTIC TROUBLE CODE P0463 AND/OR IC DIAGNOSTIC TROUBLE CODE B1201 - FUEL GAUGE DROPS TO EMPTY OR SLOW TO UPDATE AFTER REFUELING.   ( NHTSA ITEM NUMBER - 10019379 )"
	    }, {
	        "id": 158257,
	        "bulletinNumber": "0637",
	        "bulletinDateMonth": "601",
	        "componentNumber": 190000,
	        "componentDescription": "TIRES",
	        "nhtsaItemNumber": "10019384",
	        "modelYearId": 100502677,
	        "summaryText": "LOW TIRE INDICATOR ON - TPMS SYSTEM SENSOR WAKE UP.   ( NHTSA ITEM NUMBER - 10019384 )"
	    }]
	}