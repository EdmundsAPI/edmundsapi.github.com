---
layout: api-documentation
title : 'Get Transmissions for a Car Style'
title_active_left_menu: "Spec: Engine and Transmission"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Transmissions for a Car Style'
spec: spec_engine_and_transmission
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{style ID}/transmissions'


level: 4
description_edpoint: 'Get Transmissions for a Car Style'
title_md : Parameters
number: 2

---

###Parameters

| Parameter  | Description                           | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------------|:----------------- |:------------- |:-------- |
| availability | Transmission availability on this car | optional, standard|               | No       |
| name		 | Transmission name   				   	 | (see overview) 	 |               | No       |
| fmt        | Response format                       | json              | json          | Yes      |
| api_key    | vehicle api key                       |                   |               | Yes      |