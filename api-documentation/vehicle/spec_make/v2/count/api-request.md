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
title_md : Sample Request
number: 4
---

###Sample Request 1

Get the total amount of car makes/brands in the system

#### URL

	http://api.edmunds.com/api/vehicle/v2/makes/count?fmt=json&api_key=xxxxx
	
#### Response

	{
		"makesCount": 60
	}
	
###Sample Request 2

Get the total number of car makes/brands in the system that labeled __NEW__

#### URL

	http://api.edmunds.com/api/vehicle/v2/makes/count?fmt=json&state=new&api_key=xxxxx

#### Response

	{
		"makesCount": 60
	}