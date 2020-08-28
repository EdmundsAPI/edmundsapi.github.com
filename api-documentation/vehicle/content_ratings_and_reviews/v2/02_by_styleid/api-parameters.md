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
title_md : Parameters
number: 2

---

### Parameters

| Parameter  | Description                           | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------------|:----------------- |:------------- |:-------- |
| {styleId}  | The vehicle style ID | See the [Spec: Style](/api-documentation/vehicle/spec_style/v2/) resource | | Yes |
| fmt        | Response format                       | json              | json          | Yes      |
| api_key    | Vehicle API key                       |                   |               | Yes      |
| sortby     | Sort the reviews by any string of the format field or field:direction, where field = created, thumbsUp, or avgRating and direction = ASC (ascending) or DESC (descending). | | created:DESC | No |
| pagenum    | The page number of the paginated result  | | 1          | No      |
| pagesize   | The maximum number of returned reviews   | | 10        | No      |
