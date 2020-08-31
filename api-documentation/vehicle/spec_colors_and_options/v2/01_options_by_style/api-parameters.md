---
layout: api-documentation
title : 'Get All Options for a Car Style'
title_active_left_menu: "Spec: Colors and Options"
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get All Options for a Car Style'
spec: spec_colors_and_options
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{style ID}/options'


level: 4
description_edpoint: 'Get All Options for a Car Style'
title_md : Parameters
number: 2

---

### Parameters

| Parameter  | Description                           | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------------|:----------------- |:------------- |:-------- |
| {style ID} | The vehicle style ID | See the [Spec: Model](/api-documentation/vehicle/spec_model/v2/) and [Spec: Model/Year](/api-documentation/vehicle/spec_model_year/v2/) endpoints | | Yes |
| category | The option category | See [Colors & Options Overview](/api-documentation/vehicle/spec_colors_and_options/v2/index.html) | | No |
| fmt        | Response format                       | json              | json          | Yes      |
| api_key    | Vehicle API key                       |                   |               | Yes      |