---
layout: api-documentation
title : 'Get model overview'
title_active_left_menu: 'Articles'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get model overview'
spec: articles
version: v2
api: editorial
dropdown-link: 'api/editorial/v2/{make}/{model}'


level: 4
description_edpoint: 'Get model overview'
title_md : Parameters
number: 2

---


### Parameters

| Parameter     | Description                           | Possible Values   	| Default Value | Required                                                  |
|:--------------|:--------------------------------------|:----------------------|:------------- |:----------------------------------------------------------|
| {make}        | The car make                          | See [Spec: Make](/api-documentation/vehicle/spec_make/v2/) |            | Yes                   |
| {model}       | The car model                         | See [Spec: Model](/api-documentation/vehicle/spec_model/v2/) |            | Yes                   |
| view          | Response detail level                 | basic, full           | basic         | No                                                        |
| fmt           | Response format                       | json                  | json          | Yes                                                       |
| api_key       | Your Edmunds/Editorial API key        |                       |               | Yes                                                       |
