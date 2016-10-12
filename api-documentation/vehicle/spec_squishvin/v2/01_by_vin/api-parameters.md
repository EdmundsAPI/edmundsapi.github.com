---
layout: api-documentation
title : 'Get Vehicle Details by Squish VIN'
title_active_left_menu: "Spec: Squish VIN"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Vehicle Details by Squish VIN'
spec: spec_squishvin
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/squishvins/{squish VIN}/'


level: 4
description_edpoint: 'Get Vehicle Details by Squish VIN'
title_md : Parameters
number: 2

---

### Parameters

| Parameter   | Description                           | Possible Values   | Default Value | Required |
|:------------|:--------------------------------------|:----------------- |:------------- |:-------- |
| {squish VIN}| The first 11 digits of the VIN minus the 9th digit which is a check digit | | | Yes  |
| fmt         | Response format                       | json              | json          | Yes      |
| api_key     | Vehicle API key                       |                   |               | Yes      |