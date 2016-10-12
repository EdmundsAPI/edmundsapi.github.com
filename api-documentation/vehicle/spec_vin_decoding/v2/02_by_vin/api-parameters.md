---
layout: api-documentation
title : 'Get Vehicle Details Through VIN Decoding'
title_active_left_menu: "Spec: VIN Decoding"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Vehicle Details Through VIN Decoding v2'
spec: spec_vin_decoding
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/vins/{vin}'


level: 4
description_edpoint: 'Get Vehicle Details Through VIN Decoding'
title_md : Parameters
number: 2

---

### Parameters

| Parameter        | Description                           | Possible Values   | Default Value | Required |
|:-----------------|:--------------------------------------|:----------------- |:------------- |:-------- |
| {vin}            | The car VIN                           |                   |               | Yes      |
| manufacturerCode | The car manufacturer code             |                   |               | No       |
| fmt              | Response format                       | json              | json          | Yes      |
| api_key          | Vehicle API key                       |                   |               | Yes      |