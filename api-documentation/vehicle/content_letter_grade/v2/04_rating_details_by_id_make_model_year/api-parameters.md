---
layout: api-documentation
title : 'Get Rating Details for the Given Make/Model/Year by ID'
title_active_left_menu: "Content: Letter Grade Rating"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Rating Details for the Given Make/Model/Year by ID'
spec: content_letter_grade
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/{year}/grade/{reviewId}'


level: 4
description_edpoint: 'Get Rating Details for the Given Make/Model/Year by ID'
title_md : Parameters
number: 2

---

###Parameters

| Parameter  | Description                           | Possible Values                                              | Default Value | Required |
|:-----------|:--------------------------------------|:------------------------------------------------------------ |:------------- |:-------- |
| {make}     | The car make                          | See [Spec: Make](/api-documentation/vehicle/spec_make/v2/)   |               | Yes      |
| {model}    | The car model                         | See [Spec: Model](/api-documentation/vehicle/spec_model/v2/) |               | Yes      |
| {year}     | The car year                          | 1990-current year                                            |               | Yes      |
| reviewId   | The review ID                         |                                                              |               | Yes      |
| fmt        | Response format                       | json                                                         | json          | Yes      |
| api_key    | Vehicle API key                       |                                                              |               | Yes      |