---
layout: api-documentation
title : 'Find Photos by Style ID'
title_active_left_menu: 'Photos'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Photos by Style ID'
spec: photos
version: v2
api: media
dropdown-link: 'api/media/v2/styles/{styleId}/photos'

level: 4
description_edpoint: 'Find Photos by Style ID'
title_md : Parameters
number: 2

---


###Parameters

| Parameter     | Description                           | Possible Values                                                 | Default Value | Required |
|:--------------|:--------------------------------------|:----------------------------------------------------------------|:------------- |:-------- |
| {styleId}     | The vehicle style ID                  |                                                                 |               | Yes      |
| category      | The category of the photos            | interior, exterior, detail                                      |               | No       |
| provider      | The provider of the photos            |                                                                 |               | No       |
| width         | The width of the photos               | see [Photos](/api-documentation/media/photos/v2/) overview page |               | No       |
| height        | The height of the photos              | see [Photos](/api-documentation/media/photos/v2/) overview page |               | No       |
| shottype      | Shot type abbreviation for photo      | see [Photos](/api-documentation/media/photos/v2/) overview page |               | No       |
| view          | The response view                     | basic, full                                                     | basic         | No       |
| pagenum       | The page number                       |                                                                 | 1             | No       |
| pagesize      | The page size                         |                                                                 | 10            | No       |
| api_key       | The API key                           |                                                                 |               | Yes      |
| fmt           | Response format                       | json                                                            | json          | Yes      |


