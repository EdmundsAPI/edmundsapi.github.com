---
layout: api-documentation
title : 'Get model/year overview'
title_active_left_menu: 'Articles'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get model/year overview'
spec: articles
version: v3
api: editorial
dropdown-link: 'api/editorial/v3/{make}/{model}/{year}'


level: 4
description_edpoint: 'Get model/year overview'
title_md : Parameters
number: 2

---


### Parameters

| Parameter     | Description                           | Possible Values   	| Default Value | Required                                                  |
|:--------------|:--------------------------------------|:----------------------|:------------- |:----------------------------------------------------------|
| {make}        | The car make                          | See [Spec: Make](/api-documentation/vehicle/spec_make/v3/) |              | Yes                   |
| {model}       | The car model                         | See [Spec: Model](/api-documentation/vehicle/spec_model/v3/) |            | Yes                   |
| {year}        | The car year                          | See [Spec: Year](/api-documentation/vehicle/spec_model_year/v3/) |              | Yes                   |
| view          | Response detail level                 | basic, full           | basic         | No                                                        |
| submodel      | Submodel nice ID used to filter the editorial content and ratings | Examples vary by model year and can include sedan, hatchback, si, type-r |       | No                                                        |
| fmt           | Response format                       | json                  | json          | Yes                                                       |
| api_key       | Your Edmunds/Editorial API key        |                       |               | Yes                                                       |
