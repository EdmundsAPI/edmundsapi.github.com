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
title_md : Response format
number: 3

---


### Response format

#### JSON Response w/ view=basic (default)

    {
        "articles": [
            {
                "title": {string},
                "tags": [
                    {string}
                ],
                "niceNamedTags": [
                    {string}
                ],
                "description": {string},
                "link": {
                    "rel": {string},
                    "href": {string}
                },
                "authors": [
                    "name": {string},
                    "email": {string}
                ],
                "body": {string}
            },
            ...
        ],
        "articlesCount": {integer},
        "links": [
            {
                "rel": {string},
                "href": {string}
            },
            ...
        ]
    }

| Property                      | Description                                               | Visibility                |
|:------------------------------|:----------------------------------------------------------|:--------------------------|
| title                         | The article title                                         | Edmunds, Partners, public |
| tags                          | The list of article tags                                  | Edmunds, Partners, public |
| niceNamedTags                 | The list of article tags with Nice Name format            | Edmunds, Partners, public |
| description                   | The articles description                                  | Edmunds, Partners, public |
| link                          | The URL to Edmunds site                                   | Edmunds, Partners, public |
| authors                       | The article authors                                       | Edmunds, Partners, public |
| body                          | The article content                                       | Edmunds, Partners, public |
| articlesCount                 | The number of articles                                    | Edmunds, Partners, public |
| links                         | The pagination links                                      | Edmunds, Partners, Public |

#### JSON Response w/ view=full

    {
        "articles": [
            {
                "title": {string},
                "tags": [
                    {string}
                ],
                "niceNamedTags": [
                    {string}
                ],
                "description": {string},
                "link": {
                    "rel": {string},
                    "href": {string}
                },
                "authors": [
                    "name": {string},
                    "email": {string}
                ],
                "body": {string},
                "vehicles": [
                    {
                        "make": {
                            "id": {long},
                            "name": {string},
                            "niceName": {string}
                        },
                        "model": {
                            "id": {string},
                            "name": {string},
                            "niceName": {string}
                        },
                        "year": {
                            "id": {long},
                            "year": {integer}
                        },
                        "style": {
                            "id": {long},
                            "name": {string},
                            "submodel": {
                                "body": {string},
                                "modelName": {string},
                                "niceName": {string}
                            }
                        }
                    }
                ]
            },
            ...
        ],
        "articlesCount": {integer},
        "links": [
            {
                "rel": {string},
                "href": {string}
            },
            ...
        ]
    }

| Property                      | Description                                               | Visibility                |
|:------------------------------|:----------------------------------------------------------|:--------------------------|
| title                         | The article title                                         | Edmunds, Partners, public |
| tags                          | The list of article tags                                  | Edmunds, Partners, public |
| niceNamedTags                 | The list of article tags with Nice Name format            | Edmunds, Partners, public |
| description                   | The articles description                                  | Edmunds, Partners, public |
| link                          | The URL to Edmunds site                                   | Edmunds, Partners, public |
| authors                       | The article authors                                       | Edmunds, Partners, public |
| body                          | The article content                                       | Edmunds, Partners, public |
| articlesCount                 | The number of articles                                    | Edmunds, Partners, public |
| links                         | The pagination links                                      | Edmunds, Partners, Public |
| vehicles                      | The vehicles related to the article                       | Edmunds, Partners, Public |
