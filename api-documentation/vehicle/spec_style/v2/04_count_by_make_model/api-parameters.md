---
layout: api-documentation
title : 'Get Style Count by Car Make and Model'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Style Count by Car Make and Model'
spec: spec_style
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/styles/count'


level: 4
description_edpoint: 'Get Style Count by Car Make and Model'
title_md : Parameters
number: 2

---

### Parameters

| Parameter  | Description                           | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------------|:----------------- |:------------- |:-------- |
| {make} | The car make | See [Spec: Make](/api-documentation/vehicle/spec_make/v2/01_list_of_makes/api-description.html) | | Yes |
| {model} | The car model | See [List of Models by Make](/api-documentation/vehicle/spec_model/v2/01_list_of_models/api-description.html) |	| Yes |
| state	     | The state of the vehicle style        | new, used, future | 	             | No       |
| fmt        | Response format                       | json              | json          | Yes      |
| api_key    | Vehicle API key                       |                   |               | Yes      |