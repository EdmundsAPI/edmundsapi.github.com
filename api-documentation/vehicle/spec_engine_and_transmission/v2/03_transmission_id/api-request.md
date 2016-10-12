---
layout: api-documentation
title : 'Get Transmission Details by ID'
title_active_left_menu: "Spec: Engine and Transmission"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Transmission Details by ID'
spec: spec_engine_and_transmission
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/transmission/{id}'


level: 4
description_edpoint: 'Get Transmission Details by ID'
title_md : Sample Request
number: 4

---

### Sample Request

Get transmission details for ID **200478100**

#### URL

	https://api.edmunds.com/api/vehicle/v2/transmissions/200478100?fmt=json&api_key={api key}
	
#### Response
	
	{
	  "id": "200478100",
	  "name": "5A",
	  "equipmentType": "TRANSMISSION",
	  "availability": "OPTIONAL",
	  "automaticType": "Shiftable automatic",
	  "transmissionType": "AUTOMATIC",
	  "numberOfSpeeds": "5"
	}
