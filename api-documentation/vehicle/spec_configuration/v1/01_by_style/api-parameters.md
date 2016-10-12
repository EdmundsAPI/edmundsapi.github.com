---
layout: api-documentation
title : 'Get the default configuration for vehicle with style ID and Zip Code'
title_active_left_menu: "Spec: Configuration"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get the default configuration for vehicle with style ID and Zip Code'
spec: spec_configuration
version: v1
api: vehicle
dropdown-link: 'v1/api/configurator/default'


level: 4
description_edpoint: 'Get the default configuration for vehicle with style ID and Zip Code'
title_md : Parameters
number: 2

---

### Parameters

| Parameter  | Description                           | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------------|:----------------- |:------------- |:-------- |
| zip        | ZIP Code			                     |                   |               | Yes      |
| styleid    | The vehicle style ID | See the [Spec: Model](/api-documentation/vehicle/spec_model/v2/) and [Spec: Model/Year](/api-documentation/vehicle/spec_model_year/v2/) endpoints | | Yes |
| fmt        | Response format                       | json              | json          | Yes      |
| api_key    | Vehicle API key                       |                   |               | Yes      |