---
layout: api-documentation
title : 'Get Edmunds Articles by Category and/or car make/model/year'
title_active_left_menu: 'Articles'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Edmunds Articles by Category and/or car make/model/year'
spec: articles
version: v1
api: editorial
dropdown-link: 'v1/content'


level: 4
description_edpoint: 'Get Edmunds Articles by Category and/or car make/model/year'
title_md : Response format
number: 3

---


### Response format

    [
        {
            "summary": {string},
            "link": {url},
            "title": {string},
            "category": {array},
            "published": {date},
            "content": {string},
            "vehicles": {array}
        }
    ]

| Property                      | Description                                               | Visibility                |
|:------------------------------|:----------------------------------------------------------|:--------------------------|
| summary                       | Article summary                                           | Edmunds, Partners, public |
| link                          | Link back to edmunds.com permanent link                   | Edmunds, Partners, public |
| title                         | The title of the article                                  | Edmunds, Partners, public |
| category                      | The categories under which this article is listed         | Edmunds, Partners, public |
| published                     | The date this article was published                       | Edmunds, Partners, public |
| content                       | The article                                               | Edmunds, Partners, public |
| vehicles                      | The list of cars bound to an article                      | Edmunds, Partners, public |


