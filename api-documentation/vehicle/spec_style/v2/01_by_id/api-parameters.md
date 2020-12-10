---
layout: api-documentation
title : 'Get Car Style Details by Car Style ID'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get Car Style Details by Car Style ID'
spec: spec_style
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{id}'


level: 4
description_edpoint: 'Get Car Style Details by Car Style ID'
title_md : Parameters
number: 2

---

### Parameters

| Parameter  | Description                           | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------------|:----------------- |:------------- |:-------- |
| {id}		 | The Style ID | See the [Spec: Model](/api-documentation/vehicle/spec_model/v2/) and [Spec: Model/Year](/api-documentation/vehicle/spec_model_year/v2/) endpoints | | Yes |
| view       | The level of detail in the response  | basic, full		 | basic         | No       |
| fmt        | Response format                       | json              | json          | Yes      |
| api_key    | vehicle api key                       |                   |               | Yes      |
