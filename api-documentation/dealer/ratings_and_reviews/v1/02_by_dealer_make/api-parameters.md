---
layout: api-documentation
title : 'Get Dealer Ratings and Reviews by Dealer Make and Zipcode'
title_active_left_menu: 'Ratings and Reviews'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Dealer Ratings and Reviews by Dealer Make and Zipcode'
spec: ratings_and_reviews
version: v1
api: dealer
dropdown-link: 'v1/api/drrrepository/getdrrbyzipcodeandmake'


level: 4
description_edpoint: 'Get Dealer Ratings and Reviews by Dealer Make and Zipcode'
title_md : Parameters
number: 2

---


### Parameters

| Parameter  	| Description                           | Possible Values   	| Default Value | Required |
|:--------------|:--------------------------------------|:----------------------|:------------- |:-------- |
| make		 	| The car make							| Available at the [Spec: Make](/api-documentation/vehicle/spec_make/v2/01_list_of_makes/api-description.html) endpoint | 		        | Yes      |
| zipcode	 	| The area ZIP Code						| 						| 		        | Yes      |
| fmt        	| Response format                       | json              	| json          | Yes      |
| radius	 	| The radius of the search				| 						| 50	        | No       |
| limit		 	| Pagination (offset, size). The parameter has been deprecated, please use pagenum and pagesize instead | | 0, 30 | No       |
| pagenum	 	| The page number of the paginated result | 					| 1	        | No       |
| pagesize	 	| The maximum number of returned reviews (sales and service) | 	| 30        | No       |