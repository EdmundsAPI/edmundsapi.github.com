---
layout: api-documentation
title : 'Get Letter Grade Rating by Car Make/Model/Year'
title_active_left_menu: "Content: Letter Grade Rating"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Letter Grade Rating by Car Make/Model/Year'
spec: content_letter_grade
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/grade/{make}/{model}/{year}'


level: 4
description_edpoint: 'Get Letter Grade Rating by Car Make/Model/Year'
title_md : Parameters
number: 2

---

###Parameters

| Parameter  | Description                           | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------------|:----------------- |:------------- |:-------- |
| submodel   | The car submodel (aka category)       | see [Vehicle API](/api-documentation/vehicle/)                 |               | Yes      |
| fmt        | Response format                       | json              | json          | Yes      |
| api_key    | vehicle api key                       |                   |               | Yes      |