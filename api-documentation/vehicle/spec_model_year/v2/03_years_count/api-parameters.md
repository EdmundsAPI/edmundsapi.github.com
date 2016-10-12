---
layout: api-documentation
title : 'Get Total Count of Car Model Years'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Total Count of Car Model Years'
spec: spec_model_year
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/years/count'


level: 4
description_edpoint: 'Get Total Count of Car Model Years'
title_md : Parameters
number: 2
---

### Parameters

| Parameter  | Description                     | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------|:----------------- |:------------- |:-------- |
| {make} | The car make | See [Spec: Make](/api-documentation/vehicle/spec_make/v2/01_list_of_makes/api-description.html) | | Yes |
| {model} | The car model | See [List of Models by Make](/api-documentation/vehicle/spec_model/v2/01_list_of_models/api-description.html) | | Yes	|
| state      | The state of the car make/model | new, used, future |               | No       |
| view       | Response detail level           | basic, full	   | basic         | No       |
| fmt        | Response format                 | json              | json          | Yes      |
| api_key    | Vehicle API key                 |                   |               | Yes      |
