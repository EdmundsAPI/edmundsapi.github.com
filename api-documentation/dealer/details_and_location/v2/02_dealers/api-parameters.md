---
layout: api-documentation
title : 'Find Rooftop Dealers by zipcode'
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 125
title-endpoint: 'Find Rooftop Dealers by zipcode'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/dealers'

level: 4
description_edpoint: 'Find Rooftop Dealers by zipcode'
title_md : Parameters
number: 2

---


### Parameters

| Parameter     | Description                           | Possible Values               | Default Value     | Required |
|:--------------|:--------------------------------------|:------------------------------|:------------------|:---------|
| zipcode       | Five-digits zip code                  |                               |                   | Yes      |
| radius        | The radius of dealers search          |                               | 100               | No       |
| make          | The make nice name                    |                               |                   | No       |
| state         | The state of vehicles                 | new, used                     | both              | No       |
| keyword       | Comma-separated list of keywords      |                               |                   | No       |
| view          | The response view                     | basic, full                   | basic             | No       |
| pagenum       | The page number                       |                               | 1                 | No       |
| pagesize      | The page size                         |                               | 10                | No       |
| sortby        | The sorting strategy                  | distance, name                | distance          | No       |
| api_key       | The API key                           |                               |                   | Yes      |
| fmt           | Response format                       | json                          | json              | Yes      |