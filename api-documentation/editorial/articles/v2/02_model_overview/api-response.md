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
title_md : Response format
number: 3

---


### Response format

#### JSON Response w/ view=basic (default)

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
      "make": {
        "name": {string},
        "niceName": {string}
      },
      "model": {
        "name": {string},
        "niceName": {string}
      },
      "years": [
        {
          "id": {integer},
          "year": {integer}
        },
        ...
      ]
    }

| Property                      | Description                                               | Visibility                |
|:------------------------------|:----------------------------------------------------------|:--------------------------|
| make                          | The car make details (name and niceName)                  | Edmunds, Partners, public |
| models                        | The car models details (name and niceName)                | Edmunds, Partners, public |
| years                         | The car year details (id and year)                        | Edmunds, Partners, public |
| introduction                  | The article introduction                                  | Edmunds, Partners, public |
| description                   | The article content                                       | Edmunds, Partners, public |
| tags                          | The list of article tags                                  | Edmunds, Partners, public	|
| link                          | The URL to Edmunds site                                   | Edmunds, Partners, public |

#### JSON Response w/ view=full

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
      "make": {
        "id": {integer},
        "name": {string},
        "niceName": {string},
        "link": {
          "rel": {string},
          "href": {string}
        }
      },
      "model": {
        "id": {string},
        "name": {string},
        "niceName": {string}
      },
      "years": [
        {
          "id": {integer},
          "year": {integer},
          "link": {
            "rel": {string},
            "href": {string}
          }
        },
        ...
      ]
    }

| Property                      | Description                                               | Visibility                |
|:------------------------------|:----------------------------------------------------------|:--------------------------|
| make                          | The car make details (id, name and niceName, link)        | Edmunds, Partners, public |
| models                        | The car models details (id, name and niceName)            | Edmunds, Partners, public |
| years                         | The car year details (id and year, link)                  | Edmunds, Partners, public |
| introduction                  | The article introduction                                  | Edmunds, Partners, public |
| description                   | The article content                                       | Edmunds, Partners, public |
| tags                          | The list of article tags                                  | Edmunds, Partners, public	|
| link                          | The URL to Edmunds site                                   | Edmunds, Partners, public |
