---
layout: api-documentation
title : 'Vehicle Inventory VIN Lookup'
title_active_left_menu: 'VIN Lookup'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Inventory by VIN'
spec: vin_lookup
version: v1
api: inventory
dropdown-link: 'api/inventory/v1/lookup'


level: 4
description_edpoint: 'Get Inventory by VIN'
title_md : Parameters
number: 2

---


### Parameters

| Parameter  	| Description                           | Possible Values   	| Default Value | Required |
|:--------------|:--------------------------------------|:----------------------|:------------- |:-------- |
| vin	 		| The car's VIN							| 						| 		        | Yes      |
| zipcode 		| The zip code in which the car is available | 						| 		        | Yes      |
| range	 		| The radius for search					| 						| 		        | Yes      |
| fmt        	| Response format                       | json              	| json          | Yes      |