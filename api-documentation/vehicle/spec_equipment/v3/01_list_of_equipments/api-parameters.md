---
layout: api-documentation
title : 'Get Equipments List'
title_active_left_menu: "Spec: Equipment"
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get Equipments List'
spec: spec_equipment
version: v3
api: vehicle
dropdown-link: '/api/vehicle/v3/equipments'


level: 4
description_edpoint: 'Get Equipments List'
title_md : Parameters
number: 2

---

| Parameter             | Description                                         | Possible Values                                          | Default Value | Required |
|:--------------------- |:--------------------------------------------------- |:-------------------------------------------------------- |:------------- |:-------- |
| _id                   | List of combinations of modelYearId and equipmentId | {modelYearId}_{equipmentId}, {modelYearId}_{equipmentId} |               | No       |
| id                    | Equipment Id                                        |                                                          |               | No       |
| styleId               | The vehicle style Id                                | See the [Spec: Model](/api-documentation/vehicle/spec_model/v3/) and [Spec: Model/Year](/api-documentation/vehicle/spec_model_year/v3/) endpoints | | No |
| modelYearId           | Model Year Id                                       |                                                          |               | No       |
| equipmentAvailability | Equipment Availability                              | UNKNOWN, OPTIONAL, STANDARD                              |               | No       |
| equipmentClass        | Equipment Class                                     | See the [Spec: Equipment](/api-documentation/vehicle/spec_equipment/v3/) | | No |
| sortby                | The desired sort (e.g. id:DESC, name:ASC)           |                                                          |               | No       |
| pagenum               | Page number                                         |                                                          | 1             | No       |
| pagesize              | Page size                                           |                                                          | 10            | No       |
| fields                | List of Fields in Response                          |                                                          |               | No       |
| api_key               | Vehicle API key                                     |                                                          |               | Yes      |









