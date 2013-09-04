---
layout: api-documentation
title : 'Get Dealer Details and Location'
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 1
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


###Parameters

| Parameter  	| Description                           | Possible Values   	| Default Value | Required |
|:--------------|:--------------------------------------|:----------------------|:------------- |:-------- |
| zipcode	 	| The area ZIP Code						| 						| 		        | Yes      |
| fmt        	| Response format                       | json              	| json          | Yes      |
| makeName	 	| The car's make 						| 						| 		        | No       |
| model		 	| The car's model						| 						| 		        | No       |
| styleid	 	| The car's Style ID					| 						| 		        | No       |
| radius	 	| The radius of the search				| 						| 50	        | No       |