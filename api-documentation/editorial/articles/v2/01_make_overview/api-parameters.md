---
layout: api-documentation
title : 'Get make overview'
title_active_left_menu: 'Articles'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get make overview'
spec: articles
version: v2
api: editorial
dropdown-link: 'api/editorial/v2/{make}'


level: 4
description_edpoint: 'Get make overview'
title_md : Parameters
number: 2

---


###Parameters

| Parameter     | Description                           | Possible Values   	| Default Value | Required                                                  |
|:--------------|:--------------------------------------|:----------------------|:------------- |:----------------------------------------------------------|
| {make}        | The car make                          | See [Spec: Make](/api-documentation/vehicle/spec_make/v2/) |            | Yes                   |
| view          | Response detail level                 | basic, full           | basic         | No                                                        |
| fmt           | Response format                       | json                  | json          | Yes                                                       |
| api_key       | Your Edmunds/Editorial API key        |                       |               | Yes                                                       |
