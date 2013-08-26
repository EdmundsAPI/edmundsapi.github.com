---
layout: api-documentation
title : 'Get Total Count of Car Models for Specific Car Make'
title_active_left_menu: 'Spec: Model'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Total Count of Car Models for Specific Car Make'
spec: spec_model
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/models/count'


level: 4
description_edpoint: 'Get Total Count of Car Models for Specific Car Make'
title_md : Parameters
number: 2
---

###Parameters

| Parameter  | Description                           | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------------|:----------------- |:------------- |:-------- |
| state      | The state of the car model            | new, used, future |               | No       |
| view       | the level of details in the response  | basic, full		 | basic         | No       |
| fmt        | Response format                       | json              | json          | Yes      |
| api_key    | vehicle api key                       |                   |               | Yes      |
