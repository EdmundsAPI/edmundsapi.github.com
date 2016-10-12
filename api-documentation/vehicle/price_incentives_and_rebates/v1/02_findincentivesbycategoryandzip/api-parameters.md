---
layout: api-documentation
title : 'Get Vehicle Incentives and Rebates by Vehicle Category and Zipcode'
title_active_left_menu: 'Price: Incentives and Rebates'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Vehicle Incentives and Rebates by Vehicle Category and Zipcode'
spec: price_incentives_and_rebates
version: v1
api: vehicle
dropdown-link: 'v1/api/vehicle/incentive/incentiverepository/findincentivesbycategoryandzipcode'


level: 4
description_edpoint: 'Get Vehicle Incentives and Rebates by Vehicle Category and Zipcode'
title_md : Parameters
number: 2

---

### Parameters

| Parameter  | Description                           | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------------|:------------------|:--------------|:---------|
| category	 | Vehicle category | (see [Vehicle API Overview](/api-documentation/vehicle/#static_datasets)) | | Yes |
| zipcode    | The area ZIP code					 | 					 |               | Yes      |
| fmt        | Response format                       | json              | json          | Yes      |
| api_key    | Vehicle API key                       |                   |               | Yes      |