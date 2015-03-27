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
title_md : Response format
number: 3

---


### Response format

#### JSON Response w/ view=basic (default)

    {
      "make": {
        "name": {string},
        "niceName": {string}
      },
      "model": {
        "name": {string},
        "niceName": {string}
      },
      "year": {
        "id": {integer},
        "year": {integer}
      },
      "articles": [
        {
          "tags": [
            {string}
          ],
          "description": {string},
          "introduction": {string},
          "link": {
            "rel": {string},
            "href": {string}
          },
          "style": {
            "id": {integer},
            "name": {string},
            "submodel": {
              "body": {string},
              "modelName": {string},
              "niceName": {string}
            }
          },
          "title": {string},
          "authors": [
            {
              "name": {string}
            },
            ...
          ]
        },
        ...
      ],
      "articlesCount": {integer}
    }

| Property                      | Description                                               | Visibility                |
|:------------------------------|:----------------------------------------------------------|:--------------------------|
| make                          | The car make details (name and niceName)                  | Edmunds, Partners, public |
| models                        | The car models details (name and niceName)                | Edmunds, Partners, public |
| years                         | The car year details (id and year)                        | Edmunds, Partners, public |
| articles                      | The articles (contains author, comment and style with sub models)                | Edmunds, Partners, public |
| articlesCount                 | Number of articles                                        | Edmunds, Partners, public |

#### JSON Response w/ view=full

    {
      "make": {
        "id": {integer},
        "name": {string},
        "niceName": {string}
      },
      "model": {
        "id": {string},
        "name": {string},
        "niceName": {string}
      },
      "year": {
        "id": {integer},
        "year": {integer}
      },
      "articles": [
        {
          "tags": [
            {string},
            ...
          ],
          "description": {string},
          "introduction": {string},
          "link": {
            "rel": {string},
            "href": {string}
          },
          "style": {
            "id": {integer},
            "name": {string},
            "submodel": {
              "body": {string},
              "modelName": {string},
              "niceName": {string}
            }
          },
          "title": {string},
          "authors": [
            {
              "name": {string}
            },
            ...
          ],
          "comments": [
            {
              "authors": [
                {
                  "name": {string},
                  "email": {string}
                },
                ...
              ],
              "body": {string},
              "publishDate": {integer}
            },
            ...
          ],
          "specifications": [
            {
              "group": {string},
              "attributes": [
                {
                  "name": {string},
                  "value": {string}
                },
                ...
              ]
            },
            ...
          ]
        },
        ...
      ],
      "articlesCount": {integer}
    }

| Property                      | Description                                               | Visibility                |
|:------------------------------|:----------------------------------------------------------|:--------------------------|
| make                          | The car make details (id, name and niceName, link)        | Edmunds, Partners, public |
| models                        | The car models details (id, name and niceName, link)      | Edmunds, Partners, public |
| years                         | The car year details (id and year, link)                  | Edmunds, Partners, public |
| articles                      | The articles (contains author, comment, style with sub models and specifications)                | Edmunds, Partners, public |
| articlesCount                 | Number of articles                                        | Edmunds, Partners, public |
