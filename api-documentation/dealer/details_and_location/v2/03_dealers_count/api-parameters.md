---
layout: api-documentation
title : 'Find Rooftop Dealers count'
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Rooftop Dealers count'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/dealers/count'

level: 4
description_edpoint: 'Find Rooftop Dealers count'
title_md : Parameters
number: 2

---


###Parameters

| Parameter     | Description                         | Possible Values             | Default Value | Required |
|:--------------|:------------------------------------|:----------------------------|:--------------|:---------|
| zipcode       | Five-digits zip code                |                             |               | Yes      |
| radius        | The radius of dealers search        |                             | 100           | No       |
| make          | The make nice name                  |                             |               | No       |
| state         | The state of vehicles               | new, used                   | both          | No       |
| keyword       | Comma-separated list of keywords    |                             |               | No       |
| api_key       | The API key                         |                             |               | Yes      |
| fmt           | Response format                     | json                        | json          | Yes      |