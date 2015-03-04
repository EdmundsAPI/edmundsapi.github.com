---
layout: api-documentation
title : 'Find Repairshops by zipcode'
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Repairshops by zipcode'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/repairshops'

level: 4
description_edpoint: 'Find Repairshops by zipcode'
title_md : Parameters
number: 2

---


###Parameters

| Parameter     | Description                            | Possible Values             | Default Value | Required |
|:--------------|:---------------------------------------|:----------------------------|:--------------|:---------|
| zipcode       | Five-digits zip code                   |                             |               | Yes      |
| radius        | The radius of repairshops search       |                             | 100           | No       |
| make          | The make nice name                     |                             |               | No       |
| keyword       | Comma-separated list of keywords       |                             |               | No       |
| view          | The response view                      | basic, full                 | basic         | No       |
| pagenum       | The page number                        |                             | 1             | No       |
| pagesize      | The page size                          |                             | 10            | No       |
| sortby        | The sorting strategy                   | distance, name              | distance      | No       |
| api_key       | The API key                            |                             |               | Yes      |
| fmt           | Response format                        | json                        | json          | Yes      |