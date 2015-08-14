---
layout: api-documentation
title : 'Get safety ratings by Make/Model/Year'
title_active_left_menu: 'Service: Safety'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get safety ratings by Make/Model/Year'
spec: service_safety
version: v2
api: vehicle
dropdown-link: '/api/vehicle/v2/{make}/{model}/{year}/safety'


level: 4
description_edpoint: 'Get safety ratings by Make/Model/Year'
title_md : Parameters
number: 2

---

###Parameters

| Parameter  | Description           | Possible Values   | Default Value | Required |
|:-----------|:----------------------|:----------------- |:------------- |:-------- |
| {make}     | The car make          |                   |               | Yes      |
| {model}    | The car model         |                   |               | Yes      |
| {year}     | The car year          |                   |               | Yes      |
| fmt        | Response format       | json              | json          | Yes      |
| api_key    | Vehicle API key       |                   |               | Yes      |
