---
layout: api-documentation
title : 'Get All Rating Details Reviews for the Given Make/Model/Year'
title_active_left_menu: "Content: Letter Grade Rating"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get All Rating Details Reviews for the Given Make/Model/Year'
spec: content_letter_grade
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/{year}/grade'


level: 4
description_edpoint: 'Get All Rating Details Reviews for the Given Make/Model/Year'
title_md : Parameters
number: 2

---

### Parameters

| Parameter  | Description                           | Possible Values                                              | Default Value | Required |
|:-----------|:--------------------------------------|:------------------------------------------------------------ |:------------- |:-------- |
| {make}     | The car make                          | See [Spec: Make](/api-documentation/vehicle/spec_make/v2/)   |               | Yes      |
| {model}    | The car model                         | See [Spec: Model](/api-documentation/vehicle/spec_model/v2/) |               | Yes      |
| {year}     | The car year                          | 1990-current year                                            |               | Yes      |
| submodel   | The car submodel (aka category)       | See [Vehicle API Overview](/api-documentation/vehicle/)      |               | Yes      |
| fmt        | Response format                       | json                                                         | json          | Yes      |
| api_key    | Vehicle API key                       |                                                              |               | Yes      |