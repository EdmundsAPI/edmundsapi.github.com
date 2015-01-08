---
layout: api-documentation
title : 'Find Photos by Make/Model'
title_active_left_menu: 'Photos'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Find Photos by Make/Model'
spec: photos
version: v2
api: media
dropdown-link: 'api/media/v2/{make}/{model}/photos'

level: 4
description_edpoint: 'Find Photos by Make/Model'
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
| width         | The width of the photos               | see [Photos](/api-documentation/media/photos/v2/) overview page |               | No       |
| height        | The height of the photos              | see [Photos](/api-documentation/media/photos/v2/) overview page |               | No       |
| shottype      | Shot type abbreviation for photo      | see [Photos](/api-documentation/media/photos/v2/) overview page |               | No       |
| view          | The response view                     | basic, full                                                     | basic         | No       |
| pagenum       | The page number                       |                                                                 | 1             | No       |
| pagesize      | The page size                         |                                                                 | 10            | No       |



