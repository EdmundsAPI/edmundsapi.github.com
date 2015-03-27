---
layout: api-documentation
title : 'Get Edmunds Articles by Category and/or car make/model/year'
title_active_left_menu: 'Articles'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Edmunds Articles by Category and/or car make/model/year'
spec: articles
version: v1
api: editorial
dropdown-link: 'v1/content'


level: 4
description_edpoint: 'Get Edmunds Articles by Category and/or car make/model/year'
title_md : Parameters
number: 2

---


###Parameters

| Parameter  	| Description                           | Possible Values   	| Default Value | Required                                                  |
|:--------------|:--------------------------------------|:----------------------|:------------- |:----------------------------------------------------------|
| category	 	| The article category          		| See below; e.g. car+news |            | Yes/No (Not required if car make/model/year is supplied)  |
| fmt        	| Response format                       | json, xml         	| json          | Yes                                                       |
| api_key       | Your Edmunds/Editorial API key                     |                       |               | Yes                                                       |
| make  	 	| The car make                  		| See [Spec: Make](/api-documentation/vehicle/spec_make/v2/) | 		        | No                    |
| model		 	| The car model                     	| See [Spec: Model](/api-documentation/vehicle/spec_model/v2/) | 		    | No                    |
| year  	 	| The car year                      	| 1990-current year     | 		        | No                                                        |
| limit		 	| Pagination (offset, size). The parameter has been deprecated, please use pagenum and pagesize instead | | 0, 30    | No                   |
| pagenum	 	| The page number of the paginated result | 					| 1	            | No                                                        |
| pagesize	 	| The maximum number of returned articles | 					| 30            | No                                                        |

### Available Article Categories

* auto finance
* awards
* best cars lists
* car news
* car buying
* car leasing
* car technology
* driving
* editor reviews
* extended warranties
* fuel economy
* how-to advice
* insurance
* maintenance & repair
* road tests
* selling
* top 10 lists
* vehicle safety
* warranties

