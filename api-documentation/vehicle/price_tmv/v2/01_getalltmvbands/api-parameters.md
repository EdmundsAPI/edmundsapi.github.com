---
layout: api-documentation
title : 'Get All TMV® Bands'
title_active_left_menu: 'Price: True Market Value'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get All TMV® Bands'
spec: price_tmv
version: v2
api: vehicle
dropdown-link: 'api/v2/usedtmv/getalltmvbands'


level: 4
description_edpoint: 'Get All TMV® Bands'
title_md : Parameters
number: 2

---

### Parameters

| Parameter          | Description                       | Possible Values   | Default Value | Required |
|:-------------------|:----------------------------------|:----------------- |:------------- |:-------- |
| zip                | Zip Code                          |                   |               | No       |
| colorid            | Color Id   | See [**Colors And Options Spec**](/api-documentation/vehicle/spec_colors_and_options/v3/) | | No |
| optionid           | Option Id  | See [**Colors And Options Spec**](/api-documentation/vehicle/spec_colors_and_options/v2/) | | No |
| optionids          | Option Ids | See [**Colors And Options Spec**](/api-documentation/vehicle/spec_colors_and_options/v2/) | | No |
| styleid            | Style Id   | See [**Styles Spec**](/api-documentation/vehicle/spec_style/v3/) | | No |
| mileage            | Mileage                           |                   |               | No       |
| priceband          | Price Band                        | false, true       |               | No       |
| typical            | Typical                           | false, true       |               | No       |
| validationstrategy | Validation Strategy               |                   |               | No       |
| version            | Version                           |                   |               | No       |
| groupby            | A field name for grouping results |                   |               | No       |
| view               | Response view                     | full, basic       |               | No       |
| api_key            | Vehicle API key                   |                   |               | Yes      |