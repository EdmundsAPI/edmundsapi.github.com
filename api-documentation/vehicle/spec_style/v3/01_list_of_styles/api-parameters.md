---
layout: api-documentation
title : 'Spec: Style'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get A List of Styles'
spec: spec_style
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/styles'


level: 4
description_edpoint: 'Get A List of Styles'
title_md : Parameters
number: 2
---

### Parameters

| Parameter                   | Description                                           | Possible Values     | Default Value | Required |
|:----------------------------|:------------------------------------------------------|:-----------------   |:------------- |:-------- |
| id                          | The car style id (e.g. 12226)                         | See [Spec: Make](/api-documentation/vehicle/spec_make/v3/03_list_of_makes/api-description.html) | | No  |
| makeId                      | The car make Id (e.g. 200000130)                      | See [Spec: Make](/api-documentation/vehicle/spec_make/v3/03_list_of_makes/api-description.html) | | No  |
| makeName                    | The car make Name (e.g. Mercedes-Benz)                | See [Spec: Make](/api-documentation/vehicle/spec_make/v3/03_list_of_makes/api-description.html) | | No  |
| makeNiceId                  | The car make Nice Id (e.g. mercedes-benz)             | See [Spec: Make](/api-documentation/vehicle/spec_make/v3/03_list_of_makes/api-description.html) | | No  |
| makeNiceName                | The car make Nice Name (e.g. mercedesbenz)            | See [Spec: Make](/api-documentation/vehicle/spec_make/v3/03_list_of_makes/api-description.html) | | No  |
| modelId                     | The car model Id (e.g. e-class)                       |                     |               | No       |
| modelNiceId                 | The car model Nice Id (e.g. e-class)                  |                     |               | No       |
| modelNiceName               | The car model Nice Name (e.g. eclass)                 |                     |               | No       |
| modelYear.publicationStates | Model Year Publication states                         | NEW, USED, NEW_USED, PRE_PRODUCTION, FUTURE |               | No       |
| publicationState            | The car style publication states                      | NEW, USED, NEW_USED, PRE_PRODUCTION, FUTURE |               | No       |
| year                        | The car style year                                    |                     |               | No       |
| subModels.niceId            | Sub Model Nice Id (e.g. sedan)                        |                     |               | No       |
| subModels.niceName          | Sub Model Nice Name (e.g. sedan)                      |                     |               | No       |
| trim.slug                   | The car style trim nice name (e.g. high-altitude)     |                     |               | No       |
| pageNum                     | Page number                                           |                     | 1             | No       |
| pageSize                    | Page size                                             |                     | 10            | No       |
| sortby                      | The desired sort (e.g. id:DESC, name:ASC)             |                     |               | No       |
| fields                      | List of Fields in Response                            |                     |               | No       |
| api_key                     | Vehicle API key                                       |                     |               | Yes      |