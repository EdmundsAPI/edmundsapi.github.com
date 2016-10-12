---
layout: api-documentation
title : 'Get Service Notes by Car Style ID'
title_active_left_menu: 'Service: Notes'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Service Notes by Car Style ID'
spec: service_notes
version: v1
api: vehicle
dropdown-link: 'v1/api/maintenance/stylesnotes/{style ID}'


level: 4
description_edpoint: 'Get Service Notes by Car Style ID'
title_md : Parameters
number: 2

---

### Parameters

| Parameter  | Description                           | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------------|:----------------- |:------------- |:-------- |
| {style ID} | The vehicle style ID                  | See the [Spec: Style](/api-documentation/vehicle/spec_style/v2/) resource | | Yes     |
| fmt        | Response format                       | json              | json          | Yes      |
| api_key    | Vehicle API key                       |                   |               | Yes      |
