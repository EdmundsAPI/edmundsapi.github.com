---
layout: api-documentation
title : 'Get Edmunds Editor Review by Car Make/Model/Year'
title_active_left_menu: 'Editor Reviews'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Edmunds Editor Review by Car Make/Model/Year'
spec: editor_reviews
version: v1
api: editorial
dropdown-link: 'v1/content/editorreviews'


level: 4
description_edpoint: 'Get Edmunds Editor Review by Car Make/Model/Year'
title_md : Parameters
number: 2

---


### Parameters

| Parameter  	| Description                           | Possible Values   					| Default Value | Required          |
|:--------------|:--------------------------------------|:--------------------------------------|:------------- |:------------------|
| make  	 	| The car make | Available in the [Spec: Make](/api-documentation/vehicle/spec_make/v2/01_list_of_makes/api-description.html) endpoint  | | Yes |
| model		 	| The car model                     	| See [List of Models by Make](/api-documentation/vehicle/spec_model/v2/01_list_of_models/api-description.html) | | Yes |
| year  	 	| The car year                      	| 1990-current year                     | 		        | Yes               |
| fmt        	| Response format                       | json              					| json          | Yes               |
| api_key		| Your Edmunds/Editorial API key		| 										|				| Yes				|