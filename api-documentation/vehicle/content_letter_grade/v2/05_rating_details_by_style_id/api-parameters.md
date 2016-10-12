---
layout: api-documentation
title : 'Get Rating Details by Style ID'
title_active_left_menu: "Content: Letter Grade Rating"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Rating Details by Style ID'
spec: content_letter_grade
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{styleId}/grade'


level: 4
description_edpoint: 'Get Rating Details by Style ID'
title_md : Parameters
number: 2

---

### Parameters

| Parameter  | Description                           | Possible Values                                                              | Default Value | Required |
|:-----------|:--------------------------------------|:-----------------------------------------------------------------------------|:------------- |:-------- |
| {styleId} | The vehicle style ID                  | See the [Spec: Style](/api-documentation/vehicle/spec_style/v2/) resource    |               | Yes      |
| fmt        | Response format                       | json                                                                         | json          | Yes      |
| api_key    | Vehicle API key                       |                                                                              |               | Yes      |