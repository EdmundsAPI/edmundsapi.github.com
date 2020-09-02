---
layout: api-documentation
title : 'Get Engine Details by ID'
title_active_left_menu: "Spec: Engine and Transmission"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Engine Details by ID'
spec: spec_engine_and_transmission
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/engines/{id}'


level: 4
description_edpoint: 'Get Engine Details by ID'
title_md : Sample Request
number: 4

---

### Sample Request

Get engine details for ID **200478098**

#### URL

	https://api.edmunds.com/api/vehicle/v2/engines/200478098?fmt=json&api_key={api key}
	
#### Response

	{
	  "id": "200478098",
	  "name": "5.7L V8 Engine (EZH)",
	  "equipmentType": "ENGINE",
	  "availability": "OPTIONAL",
	  "compressionRatio": 10.5,
	  "cylinder": 8,
	  "size": 5.7,
	  "displacement": 5654,
	  "configuration": "V",
	  "fuelType": "regular unleaded",
	  "horsepower": 363,
	  "torque": 394,
	  "totalValves": 16,
	  "manufacturerEngineCode": "EZH",
	  "type": "gas",
	  "code": "8VNAG5.7",
	  "compressorType": "NA"
	}