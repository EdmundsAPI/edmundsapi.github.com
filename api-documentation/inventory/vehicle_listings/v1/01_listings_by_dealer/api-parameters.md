---
layout: api-documentation
title : 'Vehicle Inventory Listings by Dealer ID'
title_active_left_menu: 'Vehicle Listings'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Inventory Listings by Dealer ID'
spec: vehicle_listings
version: v1
api: inventory
dropdown-link: 'api/inventory/v1/getall'


level: 4
description_edpoint: 'Get Inventory Listings by Dealer ID'
title_md : Parameters
number: 2

---


### Parameters

| Parameter  	| Description                           | Possible Values   	| Default Value | Required |
|:--------------|:--------------------------------------|:----------------------|:------------- |:-------- |
| dealerId 		| The dealership ID						|						| 		        | Yes      |
| types    		| The state of the cars		          	| ALL, NEW, USED, CPO 	| NEW           | Yes      |
| fmt        	| Response format                       | json              	| json          | Yes      |
| sort | The desired sort (i.e. price:asc) | See [Inventory API Overview](/api-documentation/inventory/vehicle_listings/v1/index.html) | | No |
| pageNumber	| Pagination start index				| 						| 1		        | No       |
| pageSize   	| Pagination results size 				| 						| 25	        | No       |
| basicFilter	| Narrow down response by *key:"value"* | See [Inventory API Overview](/api-documentation/inventory/vehicle_listings/v1/index.html) | | No |
