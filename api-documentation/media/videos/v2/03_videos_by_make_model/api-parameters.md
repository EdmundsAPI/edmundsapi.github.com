---
layout: api-documentation
title : 'Find Videos by Make/Model'
title_active_left_menu: 'Videos'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Find Videos by Make/Model'
spec: videos
version: v2
api: media
dropdown-link: 'api/media/v2/{make}/{model}/videos'

level: 4
description_edpoint: 'Find Videos by Make/Model'
title_md : Parameters
number: 2

---


###Parameters

| Parameter     | Description                           | Possible Values                                                 | Default Value | Required |
|:--------------|:--------------------------------------|:----------------------------------------------------------------|:------------- |:-------- |
| {make}        | The vehicle make                      |                                                                 |               | Yes      |
| {model}       | The vehicle model                     |                                                                 |               | Yes      |
| category      | The category of the photos            | interior, exterior, detail                                      |               | No       |
| provider      | The provider of the photos            |                                                                 |               | No       |
| view          | The response view                     | basic, full                                                     | basic         | No       |
| pagenum       | The page number                       |                                                                 | 1             | No       |
| pagesize      | The page size                         |                                                                 | 10            | No       |



