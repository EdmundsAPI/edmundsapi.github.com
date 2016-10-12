---
layout: api-documentation
title : 'Get configured vehicle w/ Options by style ID and Zip Code'
title_active_left_menu: "Spec: Configuration"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get configured vehicle w/ Options by style ID and Zip Code'
spec: spec_configuration
version: v1
api: vehicle
dropdown-link: 'v1/api/configurator/withOptions'


level: 4
description_edpoint: 'Get configured vehicle w/ Options by style ID and Zip Code'
title_md : Parameters
number: 2

---

### Parameters

| Parameter  | Description                             | Possible Values   | Default Value | Required |
|:-----------|:----------------------------------------|:------------------|:------------- |:-------- |
| zip        | ZIP Code			                       |                   |               | Yes      |
| styleid    | The vehicle style ID | See the [Spec: Model](/api-documentation/vehicle/spec_model/v2/) and [Spec: Model/Year](/api-documentation/vehicle/spec_model_year/v2/) endpoints | | Yes |
| selected | The selected option ID | See [Description Tab](/api-documentation/vehicle/spec_configuration/v1/02_configured/api-description.html) | | Yes |
| optionid   | The option ID that needs to be selected |                   |               | No       |
| fmt        | Response format                         | json              | json          | Yes      |
| api_key    | Vehicle API key                         |                   |               | Yes      |
