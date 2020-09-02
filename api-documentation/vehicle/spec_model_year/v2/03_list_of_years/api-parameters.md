---
layout: api-documentation
title : 'Get a List of Car Model Years for a Specific Car Make/Model'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get Model Year Details for a Car Make/Model'
spec: spec_model_year
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/years'


level: 4
description_edpoint: 'Get Model Year Details for a Car Make/Model'
title_md : Parameters
number: 2
---

### Parameters

| Parameter  	| Description                | Possible Values   | Default Value | Required |
|:--------------|:---------------------------|:----------------- |:------------- |:-------- |
| {make} 	 	| The car make 				 | See [Spec: Make](/api-documentation/vehicle/spec_make/v2/01_list_of_makes/api-description.html) | | Yes |
| {model} | The car model | See [List of Models by Make](/api-documentation/vehicle/spec_model/v2/01_list_of_models/api-description.html) | | Yes |
| state			| The state of the car makes | new, used, future | 	             | No       |
| submodel      | The submodel of the car model | see [Vehicle API](/api-documentation/vehicle/) | | No |
| category      | The category of the car model | see [Vehicle API](/api-documentation/vehicle/) | | No |
| view			| Response detail level      | basic, full       | basic         | No       |
| fmt			| Response format            | json              | json          | Yes      |
| api_key    	| Vehicle API key            |                   |               | Yes      |