---
layout: api-documentation
title : 'Find Media by tags'
title_active_left_menu: 'Media (Both photos and videos)'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Find Media by tags'
spec: all_media
version: v2
api: media
dropdown-link: 'api/media/v2?tag={tag}'

level: 4
description_edpoint: 'Find Media by tags'
title_md : Parameters
number: 2

---


###Parameters

| Parameter     | Description                           | Possible Values            | Default Value | Required |
|:--------------|:--------------------------------------|:---------------------------|:------------- |:-------- |
| {tag}         | The tag of the media item             |                            |               | Yes      |
| category      | The category of the media item        | interior, exterior, detail |               | No       |
| provider      | The provider of the media item        |                            |               | No       |
| view          | The response view                     | basic, full                | basic         | No       |
| pagenum       | The page number                       |                            | 1             | No       |
| pagesize      | The page size                         |                            | 10            | No       |
