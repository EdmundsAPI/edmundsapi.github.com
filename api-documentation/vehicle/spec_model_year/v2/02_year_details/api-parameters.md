---
layout: api-documentation
title : 'Get Style Details for a Car Make/Model/Year'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Style Details for a Car Make/Model/Year'
spec: spec_model_year
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/{year}'


level: 4
description_edpoint: 'Get Style Details for a Car Make/Model/Year'
title_md : Parameters
number: 2

---

###Parameters

| Parameter  	| Description                | Possible Values   | Default Value | Required |
|:--------------|:---------------------------|:----------------- |:------------- |:-------- |
| state			| The state of the car model | new, used, future | 	             | No       |
| submodel      | The submodel of the car model | see [Vehicle API](/api-documentation/vehicle/) | | No |
| category      | The category of the car model | see [Vehicle API](/api-documentation/vehicle/) | | No |
| view			| Response detail level      | basic, full       | basic         | No       |
| fmt			| Response format            | json              | json          | Yes      |
| api_key    	| Vehicle API key            |                   |               | Yes      |