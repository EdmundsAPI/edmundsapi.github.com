---
layout: api-documentation
title : 'Get Car Equipment Details for a Car Style'
title_active_left_menu: "Spec: Equipment"
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get Car Equipment Details for a Car Style'
spec: spec_equipment
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{style ID}/equipment'


level: 4
description_edpoint: 'Get Car Equipment Details for a Car Style'
title_md : Parameters
number: 2

---

| Parameter      | Description                           | Possible Values    | Default Value | Required |
|:---------------|:--------------------------------------|:-----------------  |:------------- |:-------- |
| {style ID}     | The vehicle style ID | See the [Spec: Model](/api-documentation/vehicle/spec_model/v2/) and [Spec: Model/Year](/api-documentation/vehicle/spec_model_year/v2/) endpoints | | Yes |
| availability	 | Equipment availability on this car    | optional, standard |               | No       |
| equipmentType | Equipment type | See [Spec: Equipment Overview](/api-documentation/vehicle/spec_equipment/v2/index.html) | | No |
| name | Equipment name | See [Spec: Equipment Overview](/api-documentation/vehicle/spec_equipment/v2/index.html) | | No |
| fmt        	 | Response format                       | json               | json          | Yes      |
| api_key    	 | Vehicle API key                       |                    |               | Yes      |