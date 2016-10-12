---
layout: api-documentation
title : 'Get Total Count of Car Makes/Brands'
title_active_left_menu: 'Spec: Make'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'makes/count'
spec: spec_make
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/makes/count'


level: 4
description_edpoint: 'Get Total Count of Car Makes'
title_md : Parameters
number: 2
---

### Parameters

| Parameter  | Description                           | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------------|:----------------- |:------------- |:-------- |
| state      | The state of the car makes            | new, used, future |               | No       |
| year       | The year of the car makes             | 1990-current year |               | No       |
| view       | the level of details in the response  | basic, full		 | basic         | No       |
| fmt        | Response format                       | json              | json          | Yes      |
| api_key    | Vehicle API key                       |                   |               | Yes      |
