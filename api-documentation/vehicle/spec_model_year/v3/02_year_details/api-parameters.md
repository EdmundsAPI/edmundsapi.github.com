---
layout: api-documentation
title : 'Get Style Details for a Car Make/Model/Year'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get Style Details for a Car Make/Model/Year v3'
spec: spec_model_year
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/{make}/{model}/{year}'


level: 4
description_edpoint: 'Get Style Details for a Car Make/Model/Year'
title_md : Parameters
number: 2

---

### Parameters

| Parameter      | Description                  | Possible Values                  | Default Value | Required |
|:--------------|:---------------------------   |:-------------------------------- |:------------- |:-------- |
| {make}        | The car make                  | See [Spec: Make](/api-documentation/vehicle/spec_make/v2/01_list_of_makes/api-description.html) | | Yes |
| {model}       | The car model                 | See [List of Models by Make](/api-documentation/vehicle/spec_model/v2/01_list_of_models/api-description.html) | | Yes |
| {year}        | The car year                  | 1990 - current year              |               | Yes      |
| state         | The state of the car model    | NEW, USED, PRE_PROD, NEW_USED    |               | No       |
| api_key       | Vehicle API key               |                                  |               | Yes      |