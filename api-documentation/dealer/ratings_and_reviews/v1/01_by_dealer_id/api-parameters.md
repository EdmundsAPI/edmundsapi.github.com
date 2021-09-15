---
layout: api-documentation
title : 'Get Dealer Ratings and Reviews by Dealer ID'
title_active_left_menu: 'Ratings and Reviews'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Dealer Ratings and Reviews by Dealer ID'
spec: ratings_and_reviews
version: v1
api: dealer
dropdown-link: 'v1/api/drrrepository/getdrrbydealerid'


level: 4
description_edpoint: 'Get Dealer Ratings and Reviews by Dealer ID'
title_md : Parameters
number: 2

---


### Parameters

| Parameter  	| Description                           | Possible Values   	| Default Value | Required |
|:--------------|:--------------------------------------|:----------------------|:------------- |:-------- |
| dealerid	 	| The dealership ID						| 						| 		        | Yes      |
| fmt        	| Response format                       | json              	| json          | Yes      |
| limit		 	| Pagination (offset, size). The parameter has been deprecated, please use pagenum and pagesize instead | | 0, 30 | No       |
| pagenum	 	| The page number of the paginated result | 					| 1	        | No       |
| pagesize	 	| The maximum number of returned reviews (sales and service) | 	| 30        | No       |