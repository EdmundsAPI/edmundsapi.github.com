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
title_md : Response format
number: 3

---


### Response format

#### JSON Response

    {
      "id": {string},
      "title": {string},
      "subtitle": {string},
      "updated": {string},
      "published": {string},
      "metaDescription": {string},
      "review": {
        "summary": {object},
        "summarySnippet": {object},
        "pros": {object},
        "cons": {object},
        "trimTested": {object},
        "trimFeatures": {object},
        "trimFeaturesSnippet": {object},
        "ltrtLink": {object},
        "ltrtText": {object},
        "authorPath": {object},
        "weRecommend": {object},
        "weRecommendSnippet": {object}
      },
      "misc": {
        "id": {string},
        "title": {string},
        "summary": {string},
        "safetyFeatures": {object},
        "promoBlurb": {object},
        "calloutQuote": {object},
        "whatsNew": {object}
      },
      "rating": {
        "{ratingSection}": {
          "id": {string},
          "title": {string},
          "summary": {string},
          "photo": [
            {object},
            ...
          ],
          "rating": [
            {
              "id": {string},
              "text": {string},
              "rating": {number}
            },
            ...
          ]
        },
        ...
      },
      "overallRating": {number|null},
      "overallRatingTen": {number|null},
      "photos": [
        {object},
        ...
      ]
    }

| Property                      | Description                                               | Visibility                |
|:------------------------------|:----------------------------------------------------------|:--------------------------|
| id                            | The editorial content identifier                          | Edmunds, Partners, public |
| title                         | The editorial review title                                | Edmunds, Partners, public |
| subtitle                      | The editorial review subtitle                             | Edmunds, Partners, public |
| updated                       | The last updated date                                     | Edmunds, Partners, public |
| published                     | The published date                                        | Edmunds, Partners, public |
| metaDescription               | The editorial review summary                              | Edmunds, Partners, public |
| review                        | The editorial review content sections, including summary, pros, cons and recommendations | Edmunds, Partners, public |
| misc                          | Additional editorial content sections, including safety features, promo blurb, callout quote and what's new | Edmunds, Partners, public |
| rating                        | The current editorial rating object. Rating section names vary by vehicle and editorial rating schema. | Edmunds, Partners, public |
| overallRating                 | The overall rating value, when available                  | Edmunds, Partners, public |
| overallRatingTen              | The overall rating on a ten-point scale, when available   | Edmunds, Partners, public |
| photos                        | The editorial review photos                               | Edmunds, Partners, public |
