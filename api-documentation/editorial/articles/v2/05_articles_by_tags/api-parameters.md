---
layout: api-documentation
title : 'Get articles by tags'
title_active_left_menu: 'Articles'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get articles by tags'
spec: articles
version: v2
api: editorial
dropdown-link: 'api/editorial/v2/articles?tag={tag}'


level: 4
description_edpoint: 'Get articles by tags'
title_md : Parameters
number: 2

---


###Parameters

| Parameter     | Description                           | Possible Values                                                  | Default Value        | Required                                                                        |
|:--------------|:--------------------------------------|:-----------------------------------------------------------------|:---------------------|:--------------------------------------------------------------------------------|
| {tag}         | The tag of the article                |                                                                  |                      | Yes if parameters make or year are not specified                                |
| make          | The car make                          | See [Spec: Make](/api-documentation/vehicle/spec_make/v2/)       |                      | Yes if parameters tag or year are not specified or parameter model is specified |
| model         | The car model                         | See [Spec: Model](/api-documentation/vehicle/spec_model/v2/)     |                      | No                                                                              |
| year          | The car year                          | See [Spec: Year](/api-documentation/vehicle/spec_model_year/v2/) |                      | Yes if parameters make or tag are not specified                                 |
| view          | Response detail level                 | basic, full                                                      | basic                | No                                                                              |
| pagenum       | The page number                       |                                                                  | 1                    | No                                                                              |
| pagesize      | The page size                         |                                                                  | 10, (the max is 50)  | No                                                                              |
| fmt           | Response format                       | json                                                             | json                 | Yes                                                                             |
| api_key       | Your Edmunds/Editorial API key        |                                                                  |                      | Yes                                                                             |
