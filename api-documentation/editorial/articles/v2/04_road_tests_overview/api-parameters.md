---
layout: api-documentation
title : 'Get road tests overview'
title_active_left_menu: 'Articles'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get road tests overview'
spec: articles
version: v2
api: editorial
dropdown-link: 'api/editorial/v2/{make}/{model}/{year}/roadtests'


level: 4
description_edpoint: 'Get road tests overview'
title_md : Parameters
number: 2

---


###Parameters

| Parameter     | Description                           | Possible Values   	| Default Value | Required                                                  |
|:--------------|:--------------------------------------|:----------------------|:------------- |:----------------------------------------------------------|
| {make}        | The car make                          | See [Spec: Make](/api-documentation/vehicle/spec_make/v2/) |              | Yes                   |
| {model}       | The car model                         | See [Spec: Model](/api-documentation/vehicle/spec_model/v2/) |            | Yes                   |
| {year}        | The car year                          | See [Spec: Year](/api-documentation/vehicle/spec_model_year/v2/) |              | Yes                   |
| view          | Response detail level                 | basic, full           | basic         | No                                                        |
| fmt           | Response format                       | json                  | json          | Yes                                                       |
| api_key       | Your Edmunds/Editorial API key        |                       |               | Yes                                                       |
