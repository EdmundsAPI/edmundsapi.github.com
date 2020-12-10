---
layout: api-documentation
title : 'Spec: Make'
title_active_left_menu: 'Spec: Make'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get A List of Makes'
spec: spec_make
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/makes'


level: 4
description_edpoint: 'Get A List of Makes'
title_md : Parameters
number: 2
---

### Parameters

| Parameter         | Description                                           | Possible Values     | Default Value | Required |
|:------------------|:------------------------------------------------------|:-----------------   |:------------- |:-------- |
| id                | The car make Id (e.g. 200000130)                      |                     |               | No       |
| name              | The car make Name (e.g. Mercedes-Benz)                |                     |               | No       |
| niceId            | The car make Nice Id (e.g. mercedes-benz)             |                     |               | No       |
| niceName          | The car make Nice Name (e.g. mercedesbenz)            |                     |               | No       |
| pageNum           | Page number                                           |                     | 1             | No       |
| pageSize          | Page size                                             |                     | 10            | No       |
| sortby            | The desired sort (e.g. id:DESC, name:ASC)             |                     |               | No       |
| fields            | List of Fields in Response                            |                     |               | No       |
| api_key           | Vehicle API key                                       |                     |               | Yes      |