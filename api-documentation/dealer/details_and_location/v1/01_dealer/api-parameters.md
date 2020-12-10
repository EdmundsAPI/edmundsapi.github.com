---
layout: api-documentation
title : 'Get Dealer Details and Location'
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 125
title-endpoint: 'Get Dealer Details and Location'
spec: details_and_location
version: v1
api: dealer
dropdown-link: 'v1/api/dealer'

level: 4
description_edpoint: 'Get Dealer Details and Location'
title_md : Parameters
number: 2

---


### Parameters

| Parameter  	| Description                           | Possible Values   	| Default Value | Required |
|:--------------|:--------------------------------------|:----------------------|:------------- |:-------- |
| zipcode	 	| The area ZIP Code						| 						| 		        | Yes      |
| fmt        	| Response format                       | json              	| json          | Yes      |
| makeName | The car's make | [List of Makes](/api-documentation/vehicle/spec_make/v2/01_list_of_makes/api-description.html) | | No |
| model | The car's model | [List of Models by Make](/api-documentation/vehicle/spec_model/v2/01_list_of_models/api-description.html) | | No |
| styleid | The car's Style ID | See [Spec: Model](/api-documentation/vehicle/spec_model/v2/), [Spec: Model/Year](/api-documentation/vehicle/spec_model_year/v2/), or [Spec: Style](/api-documentation/vehicle/spec_style/v2/) | | No |
| radius	 	| The radius of the search				| 						| 50	        | No       |