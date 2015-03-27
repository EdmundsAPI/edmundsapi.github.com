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
      "models": [
        {
          "name": {string},
          "niceName": {string}
        },
        ...
      ],
      "introduction": {string},
      "description": {string},
      "tags": [
        {string},
        ...
      ],
      "link": {
        "rel": {string},
        "href": {string}
      }
    }

| Property                      | Description                                               | Visibility                |
|:------------------------------|:----------------------------------------------------------|:--------------------------|
| make                          | The car make details (name and niceName)                  | Edmunds, Partners, public |
| models                        | The car models details (name and niceName)                | Edmunds, Partners, public |
| introduction                  | The article introduction                                  | Edmunds, Partners, public |
| description                   | The article content                                       | Edmunds, Partners, public |
| tags                          | The list of article tags                                  | Edmunds, Partners, public	|
| link                          | The URL to Edmunds site                                   | Edmunds, Partners, public |

#### JSON Response w/ view=full

    {
      "make": {
        "id": {integer},
        "name": {string},
        "niceName": {string}
      },
      "models": [
        {
          "id": {string},
          "name": {string},
          "niceName": {string},
          "link": {
            "rel": {string},
            "href": {string}
          }
        },
        ...
      ],
      "introduction": {string},
      "description": {string},
      "tags": [
        {string},
        ...
      ],
      "link": {
        "rel": {string},
        "href": {string}
      }
    }

| Property                      | Description                                               | Visibility                |
|:------------------------------|:----------------------------------------------------------|:--------------------------|
| make                          | The car make details (id, name and niceName)              | Edmunds, Partners, public |
| models                        | The car models details (id, name and niceName, link)      | Edmunds, Partners, public |
| introduction                  | The article introduction                                  | Edmunds, Partners, public |
| description                   | The article content                                       | Edmunds, Partners, public |
| tags                          | The list of article tags                                  | Edmunds, Partners, public	|
| link                          | The URL to Edmunds site                                   | Edmunds, Partners, public |
