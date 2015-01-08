---
layout: api-documentation
title : 'Find Videos by tags'
title_active_left_menu: 'Videos'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Find Videos by tags'
spec: videos
version: v2
api: media
dropdown-link: 'api/media/v2/videos?tag={tag}'

level: 4
description_edpoint: 'Find Videos by tags'
title_md : Parameters
number: 2

---


###Parameters

| Parameter     | Description                           | Possible Values                                                 | Default Value | Required |
|:--------------|:--------------------------------------|:----------------------------------------------------------------|:------------- |:-------- |
| {tag}         | The tag of the videos                 |                                                                 |               | Yes      |
| category      | The category of the videos            | interior, exterior, detail                                      |               | No       |
| provider      | The provider of the videos            |                                                                 |               | No       |
| view          | The response view                     | basic, full                                                     | basic         | No       |
| pagenum       | The page number                       |                                                                 | 1             | No       |
| pagesize      | The page size                         |                                                                 | 10            | No       |



