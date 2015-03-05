---
layout: api-documentation
title : 'Vehicle Inventory Listings by Zipcode'
title_active_left_menu: 'Vehicle Listings'
title_parent: Api documentation

amount_version: 2
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
| range			| The search radius in miles. The parameter has been deprecated, please use radius instead | e.g. 100 | 50 	| Yes      |
| radius		| The search radius in miles			| e.g. 100              | 50 	        | Yes      |
| make | Car make | Available at the [Spec: Make](/api-documentation/vehicle/spec_make/v2/01_list_of_makes/api-description.html) endpoint | | Yes |
| fmt        	| Response format                       | json              	| json          | Yes      |
| types    		| The state of the cars		          	| ALL, NEW, USED, CPO 	| NEW           | No       |
| sort | The desired sort (i.e. price:asc) | See [Inventory API Overview](/api-documentation/inventory/vehicle_listings/v1/index.html) | | No |
| pageNumber	| The page number of the paginated result. The parameter has been deprecated, please use pagenum instead | | 1 | No |
| pageSize   	| Pagination results size. The parameter has been deprecated, please use pagesize instead   | | 25 | No |
| pagenum	 	| The page number of the paginated result | 					| 1	            | No       |
| pagesize	 	| Pagination results size               |                   	| 25            | No       |
| basicFilter | Narrow down response by *key:"value"* | See [Inventory API Overview](/api-documentation/inventory/vehicle_listings/v1/index.html) | | No |
| model | Car model | [List of Models by Make](/api-documentation/vehicle/spec_model/v2/01_list_of_models/api-description.html) | | No |
| years			| Car year. Multiples separated by ':'	|						| 		        | No       |
| submodel | Car submodel | See [Vehicle API Overview](/api-documentation/vehicle/#static_datasets) | | No |
| priceRange	| Car price range ($15k to $55k)		|						| 		        | No       |
| dealerId 		| The dealership ID						| 						| 		        | No	   |
