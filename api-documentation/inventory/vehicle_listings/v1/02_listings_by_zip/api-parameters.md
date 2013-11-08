---
layout: api-documentation
title : 'Vehicle Inventory Listings by Zipcode'
title_active_left_menu: 'Vehicle Listings'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Inventory Listings by Zipcode'
spec: vehicle_listings
version: v1
api: inventory
dropdown-link: 'api/inventory/v1/getall'


level: 4
description_edpoint: 'Get Inventory Listings by Zipcode'
title_md : Parameters
number: 2

---


###Parameters

| Parameter  	| Description                           | Possible Values   	| Default Value | Required |
|:--------------|:--------------------------------------|:----------------------|:------------- |:-------- |
| zipcode		| Dealership ZIP Code					|						| 		        | Yes      |
| range			| The search radius in miles			|						| 50 	        | Yes      |
| make			| Car make								| Available at the [Spec: Make](/api-documentation/vehicle/spec_make/v2/01_list_of_makes/api-description.html) endpoint | 		        | Yes      |
| fmt        	| Response format                       | json              	| json          | Yes      |
| types    		| The state of the cars		          	| ALL, NEW, USED, CPO 	| NEW           | No       |
| sort			| The desired sort (i.e. price:asc)     | (see overview) 		|           	| No       |
| pageNumber	| Pagination start index				| 						| 1		        | No       |
| pageSize   	| Pagination results size 				| 						| 25	        | No       |
| basicFilter	| Narrow down response by *key:"value"* | (see overview)		| 		        | No       |
| model			| Car model								|						| 		        | No       |
| years			| Car year. Multiples separated by ':'	|						| 		        | No       |
| submodel		| Car submodel							|						| 		        | No       |
| priceRange	| Car price range ($15k to $55k)		|						| 		        | No       |
| dealerId 		| The dealership ID						| 						| 		        | No	   |
