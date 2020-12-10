---
layout: api-documentation
title : 'Get Model Year and Style Details for a Car Make and Model'
title_active_left_menu: 'Spec: Model'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get Model Year and Style Details for a Car Make and Model'
spec: spec_model
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}'


level: 4
description_edpoint: 'Get Model Year and Style Details for a Car Make and Model'
title_md : Parameters
number: 2

---

### Parameters

| Parameter  	| Description                | Possible Values   | Default Value | Required |
|:--------------|:---------------------------|:----------------- |:------------- |:-------- |
| {make} 		| The car make 				 | See [Spec: Make](/api-documentation/vehicle/spec_make/v2/01_list_of_makes/api-description.html) | | Yes |
| {model} | The car model | See [List of Models by Make](/api-documentation/vehicle/spec_model/v2/01_list_of_models/api-description.html)| | Yes |
| state			| The state of the car model | new, used, future | 	             | No       |
| year       	| The year of the car model	 | 1990-current year |               | No       |
| submodel      | The submodel of the car model | see [Vehicle API](/api-documentation/vehicle/) | | No |
| category      | The category of the car model | see [Vehicle API](/api-documentation/vehicle/) | | No |
| view			| Response detail level      | basic, full       | basic         | No       |
| fmt			| Response format            | json              | json          | Yes      |
| api_key    	| Vehicle API key            |                   |               | Yes      |