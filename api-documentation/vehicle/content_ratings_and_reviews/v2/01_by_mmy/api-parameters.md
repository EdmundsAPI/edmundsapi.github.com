---
layout: api-documentation
title : 'Get Car Consumer Ratings and Reviews by Car Make/Model/Year'
title_active_left_menu: 'Content Ratings and Reviews'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Car Consumer Ratings and Reviews by Car Make/Model/Year'
spec: content_ratings_and_reviews
version: v2
api: vehicle
dropdown-link: 'api/vehiclereviews/v2/{make}/{model}/{year}'


level: 4
description_edpoint: 'Get Car Consumer Ratings and Reviews by Car Make/Model/Year'
title_md : Parameters
number: 2

---

###Parameters

| Parameter  | Description                           | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------------|:----------------- |:------------- |:-------- |
| fmt        | Response format                       | json              | json          | Yes      |
| api_key    | vehicle api key                       |                   |               | Yes      |
| sortby     | Sort the reviews by any string of the format field or field:direction, where field = created, thumbsUp, or avgRating and direction = ASC (ascending) or DESC (descending). Default: created:DESC                       | json              | json          | No	    |
| pagenum    | The page number of the paginated result. Default: 1       | json              | json          | No      |
| pagesize   | The maximum number of returned reviews. Default: 10       | json              | json          | No      |
