---
layout: api-documentation
title : 'Find Franchises count'
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Franchises count'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/franchises/count'

level: 4
description_edpoint: 'Find Franchises count'
title_md : Parameters
number: 2

---


###Parameters

| Parameter     | Description                         | Possible Values             | Default Value | Required |
|:--------------|:------------------------------------|:----------------------------|:--------------|:---------|
| zipcode       | Five-digits zip code                |                             |               | Yes      |
| radius        | The radius of franchises search     |                             | 100           | No       |
| make          | The make nice name                  |                             |               | No       |
| state         | The state of vehicles               | new, used                   | both          | No       |
| keyword       | Comma-separated list of keywords    |                             |               | No       |
