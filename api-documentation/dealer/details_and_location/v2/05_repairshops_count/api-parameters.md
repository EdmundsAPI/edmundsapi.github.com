---
layout: api-documentation
title : 'Find Repairshops count'
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 125
title-endpoint: 'Find Repairshops count'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/repairshops/count'

level: 4
description_edpoint: 'Find Repairshops count'
title_md : Parameters
number: 2

---


### Parameters

| Parameter     | Description                         | Possible Values             | Default Value | Required |
|:--------------|:------------------------------------|:----------------------------|:--------------|:---------|
| zipcode       | Five-digits zip code                |                             |               | Yes      |
| radius        | The radius of repairshops search    |                             | 100           | No       |
| make          | The make nice name                  |                             |               | No       |
| api_key       | The API key                         |                             |               | Yes      |
| fmt           | Response format                     | json                        | json          | Yes      |