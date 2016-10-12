---
layout: api-documentation
title : 'Get Car Style Details by Car Make/Model/Year'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Car Style Details by Car Make/Model/Year'
spec: spec_style
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/{year}/styles'


level: 4
description_edpoint: 'Get Car Style Details by Car Make/Model/Year'
title_md : Parameters
number: 2

---

### Parameters

| Parameter  | Description                          | Possible Values   | Default Value | Required |
|:-----------|:-------------------------------------|:----------------- |:------------- |:-------- |
| {make} | The car make | See [Spec: Make](/api-documentation/vehicle/spec_make/v2/01_list_of_makes/api-description.html) | | Yes |
| {model} | The car model | See [List of Models by Make](/api-documentation/vehicle/spec_model/v2/01_list_of_models/api-description.html) |	| Yes |
| {year} 	 | The car year 				 		| 1990 - current year | 		    | Yes	   |
| state	     | The state of the vehicle style      	| new, used, future | 	            | No       |
| category	 | Vehicle category (see API Overview)	| 					| 	            | No       |
| submodel   | Vehicle submodel						| 					|               | No       |
| view		 | Response detail level      			| basic, full       | basic         | No       |
| fmt        | Response format                     	| json              | json          | Yes      |
| api_key    | Vehicle API key                     	|                   |               | Yes      |