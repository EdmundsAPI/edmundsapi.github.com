---
layout: api-documentation
title : 'Get TMV® Price for a Certified Vehicle'
title_active_left_menu: 'Price: True Market Value'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get TMV® Price for a Certified Vehicle'
spec: price_tmv
version: v1
api: vehicle
dropdown-link: 'v1/api/tmv/tmvservice/findcertifiedpriceforstyle'


level: 4
description_edpoint: 'Get TMV® Price for a Certified Vehicle'
title_md : Parameters
number: 2

---

### Parameters

| Parameter  | Description                           | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------------|:----------------- |:------------- |:-------- |
| styleid    | The car style ID			             | See the [Spec: Style](/api-documentation/vehicle/spec_style/v2/) resource | | Yes |
| zip        | The ZIP code of the area  	         |               	 |               | Yes      |
| fmt        | Response format                       | json              | json          | Yes      |
| api_key    | Vehicle API key                       |                   |               | Yes      |
