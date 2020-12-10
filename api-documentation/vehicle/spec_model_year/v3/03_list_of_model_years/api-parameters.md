---
layout: api-documentation
title : 'Get A List of Model Years'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get A List of Model Years'
spec: spec_model_year
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/modelYears'


level: 4
description_edpoint: 'Get A List of Model Years'
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
| modelId           | The car model Id (e.g. Mercedes_Benz_E_Class)         | See [List of Models by Make](/api-documentation/vehicle/spec_model/v3/01_list_of_models/api-description.html) | | No |
| modelNiceId       | The car model Nice Id (e.g. e-class)                  | See [List of Models by Make](/api-documentation/vehicle/spec_model/v3/01_list_of_models/api-description.html) | | No |
| modelNiceName     | The car model Nice Name (e.g. eclass)                 | See [List of Models by Make](/api-documentation/vehicle/spec_model/v3/01_list_of_models/api-description.html) | | No |
| styles.id         | The car style id (e.g. 12226)                         |                     |               | No       |
| publicationStates | Publication states                                    | NEW, USED, NEW_USED, PRE_PRODUCTION, FUTURE |               | No       |
| year              | The car year                                          | 1990 - current year |               | No       |
| pageNum           | Page number                                           |                     | 1             | No       |
| pageSize          | Page size                                             |                     | 10            | No       |
| sortby            | The desired sort (e.g. id:DESC, name:ASC)             |                     |               | No       |
| distinct          | A field name for returning unique values of the field |                     |               | No       |
| fields            | List of Fields in Response                            |                     |               | No       |
| api_key           | Vehicle API key                                       |                     |               | Yes      |