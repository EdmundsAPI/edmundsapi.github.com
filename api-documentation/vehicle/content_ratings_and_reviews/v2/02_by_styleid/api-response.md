---
layout: api-documentation
title : 'Get Car Consumer Ratings and Reviews by Car Style ID'
title_active_left_menu: 'Content Ratings and Reviews'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Car Consumer Ratings and Reviews by Car Style ID'
spec: content_ratings_and_reviews
version: v2
api: vehicle
dropdown-link: 'api/vehiclereviews/v2/styles/{styleId}'


level: 4
description_edpoint: 'Get Car Consumer Ratings and Reviews by Car Style ID'
title_md : Response format
number: 4

---

### Response format
    
    {
        "averageRating": {float},
        "links": {array},
        "reviews": {array},
        "reviewsCount": {integer}
    }

The **links** array carries the API calls for either the next set of results or the previous set of results. Each element in the <code>links</code> array follows this format:

    {
        "href": {URI},
        "ref": {string}
    }
    
| Property      | Description                                               | Visibility                |
|:--------------|:----------------------------------------------------------|:------------------------- |
| href          | API stub                                                  | Edmunds, Partners, Public |
| ref           | next, first, prev and last values.                        | Edmunds, Partners, Public |
    
Each element in the <code>reviews</code> array follows this format:

    {
      "id": {integer},
      "legacyId": {integer},
      "make": {string},
      "model": {string},
      "year": {integer},
      "styleId": {integer},
      "title": {string},
      "text": {string},
      "updated": {integer},
      "submodels": {array},
      "created": {timestamp},
      "favoriteFeatures": {string},
      "suggestedImprovements": {string},
      "author": {
        "authorName": {string}
      },
      "ratings": {array},
      "comments": {array},
      "thumbsUpDownCounter": {
        "thumbsDown": {integer},
        "thumbsUp": {integer}
      },
      "moderationStatus": {string}
    }
    
| Property              | Description                                               | Visibility                | 
|:----------------------|:----------------------------------------------------------|:------------------------- | 
| id                    | The review ID                                             | Edmunds, Partners, Public | 
| legacyId              | The review ID in the old system                           | Edmunds, Partners, Public | 
| make                  | The car make                                              | Edmunds, Partners, Public | 
| model                 | The car model                                             | Edmunds, Partners, Public | 
| year                  | The car year                                              | Edmunds, Partners, Public | 
| styleId               | The car style ID                                          | Edmunds, Partners, Public | 
| title                 | The review title                                          | Edmunds, Partners, Public | 
| text                  | The review                                                | Edmunds, Partners, Public | 
| updated               | Timestamp of when review was updated                      | Edmunds, Partners, Public | 
| submodels             | The car submodels this review applies to                  | Edmunds, Partners, Public | 
| created               | The timestamp of when the review was created              | Edmunds, Partners, Public | 
| favoriteFeatures      | Review section on favorite features                       | Edmunds, Partners, Public | 
| suggestedImprovements | Review section on suggested improvements                  | Edmunds, Partners, Public | 
| authorName            | The review author                                         | Edmunds, Partners, Public | 
| ratings               | The ratings (see below)                                   | Edmunds, Partners, Public | 
| comments              | Comments on this review                                   | Edmunds, Partners, Public | 
| thumbsUpDownCounter   | Likes and dislikes totals                                 | Edmunds, Partners, Public | 
| moderationStatus      | For internal use                                          | Edmunds, Partners, Public | 

Each element in the <code>ratings</code> array follows this format:

    {
      "type": "PERFORMANCE",
      "value": {integer}
    },
    {
      "type": "COMFORT",
      "value": {integer}
    },
    {
      "type": "FUEL_ECONOMY",
      "value": {integer}
    },
    {
      "type": "FUN_TO_DRIVE",
      "value": {integer}
    },
    {
      "type": "INTERIOR_DESIGN",
      "value": {integer}
    },
    {
      "type": "EXTERIOR_DESIGN",
      "value": {integer}
    },
    {
      "type": "BUILD_QUALITY",
      "value": {integer}
    },
    {
      "type": "REALIABILITY",
      "value": {integer}
    }

| Property      | Description                                               | Visibility                |
|:--------------|:----------------------------------------------------------|:------------------------- |
| value         | 1-5 rating value                                          | Edmunds, Partners, Public |



    