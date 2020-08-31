---
layout: api-documentation
title : 'Get details for a specific car make/brand'
title_active_left_menu: 'Spec: Make'
title_parent: Api documentation

amount_version: 23
title-endpoint: '{make}'
spec: spec_make
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}'


level: 4
description_edpoint: 'Get Details on a Specific Car Make'
title_md : Parameters
number: 2

---

### Parameters

| Parameter  	| Description                | Possible Values   | Default Value | Required |
|:--------------|:---------------------------|:----------------- |:------------- |:-------- |
| {make} | The car make | See [List of Makes](/api-documentation/vehicle/spec_make/v2/01_list_of_makes/api-description.html) | | Yes |
| state			| The state of the car makes | new, used, future | 	             | No       |
| year       	| The year of the car makes	 | 1990-current year |               | No       |
| view			| Response detail level      | basic, full       | basic         | No       |
| fmt			| Response format            | json              | json          | Yes      |
| api_key    	| Vehicle API key            |                   |               | Yes      |