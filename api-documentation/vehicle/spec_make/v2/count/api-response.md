---
layout: api-documentation
title : 'Get Total Count of Car Makes/Brands'
title_active_left_menu: Spec Make
title_parent: Api documentation

amount_version: 2
title-endpoint: 'makes/count'
spec: spec_make
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/makes/count'


level: 4
description_edpoint: 'Get makes by ID'
title_md : Response format
number: 3
---

###Response format

#### JSON Response

	{
		"makesCount": [integer]
	}


| Property      | Description                         | Visibility                |
|:-------------:|:------------------------------------|:------------------------- |
| makesCount    | The total count of car makes/brands | Edmunds, Partners, Public |