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
title_md : Sample Request
number: 4

---

### Sample Request

Get Honda Civic 2025 overview.

#### URL

    https://api.edmunds.com/api/editorial/v3/honda/civic/2025?view=basic&api_key={API key}&fmt=json

#### Response

    {
      "id": "/honda/civic/2025/review",
      "title": "2025 Honda Civic Review",
      "subtitle": "The quintessential small car gets a hybrid, but loses a body style",
      "updated": "2025-02-13T00:00:00.000Z",
      "published": "2024-06-19T00:00:00.000Z",
      "metaDescription": "Read Edmunds' expert review of the 2025 Honda Civic.",
      "review": {
        "summary": {object},
        "summarySnippet": {object},
        "pros": {object},
        "cons": {object},
        "weRecommend": {object}
      },
      "misc": {
        "title": "2025 Honda Civic Review",
        "summary": {string},
        "whatsNew": {object}
      },
      "rating": {
        "driving4_0": {
          "id": "ratings-driving4_0",
          "title": "",
          "summary": "",
          "photo": [],
          "rating": [
            {
              "id": "drivingExperience4_0",
              "text": null,
              "rating": 7.6
            }
          ]
        },
        "overall4_0": {
          "id": "ratings-overall4_0",
          "title": "",
          "summary": "",
          "photo": [],
          "rating": [
            {
              "id": "overall4_0",
              "text": null,
              "rating": 7.9
            }
          ]
        }
      },
      "overallRating": null,
      "overallRatingTen": null,
      "photos": [
        {object},
        ...
      ]
    }

Rating section names vary by vehicle and editorial rating schema. For example, some vehicles return sections such as "driving4_0" and "overall4_0", while others return sections such as "driving", "comfort", "tech" and "value".
