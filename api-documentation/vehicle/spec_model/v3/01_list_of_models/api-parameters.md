---
layout: api-documentation
title : 'Spec: Model'
title_active_left_menu: 'Spec Model'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get A List of Models'
spec: spec_model
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/models'


level: 4
description_edpoint: 'Get A List of Models'
title_md : Parameters
number: 2
---

### Parameters

| Parameter         | Description                                           | Possible Values     | Default Value | Required |
|:------------------|:------------------------------------------------------|:-----------------   |:------------- |:-------- |
| makeId            | The car make Id (e.g. 200000130)                      | See [Spec: Make](/api-documentation/vehicle/spec_make/v3/03_list_of_makes/api-description.html) | | No  |
| makeName          | The car make Name (e.g. Mercedes-Benz)                | See [Spec: Make](/api-documentation/vehicle/spec_make/v3/03_list_of_makes/api-description.html) | | No  |
| makeNiceId        | The car make Nice Id (e.g. mercedes-benz)             | See [Spec: Make](/api-documentation/vehicle/spec_make/v3/03_list_of_makes/api-description.html) | | No  |
| makeNiceName      | The car make Nice Name (e.g. mercedesbenz)            | See [Spec: Make](/api-documentation/vehicle/spec_make/v3/03_list_of_makes/api-description.html) | | No  |
| niceId            | The car model Nice Id (e.g. e-class)                  |                     |               | No       |
| niceName          | The car model Nice Name (e.g. eclass)                 |                     |               | No       |
| styles.id         | The car style id (e.g. 12226)                         |                     |               | No       |
| publicationStates | Publication states                                    | NEW, USED, NEW_USED, PRE_PRODUCTION, FUTURE |               | No       |
| modelYears.year   | The car year                                          | 1990 - current year |               | No       |
| pageNum           | Page number                                           |                     | 1             | No       |
| pageSize          | Page size                                             |                     | 10            | No       |
| sortby            | The desired sort (e.g. id:DESC, name:ASC)             |                     |               | No       |
| distinct          | A field name for returning unique values of the field |                     |               | No       |
| groupby           | A field name for grouping results (e.g. make)         |                     |               | No       |
| fields            | List of Fields in Response                            |                     |               | No       |
| api_key           | Vehicle API key                                       |                     |               | Yes      |