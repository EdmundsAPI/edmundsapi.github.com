---
layout: api-documentation
title : 'Find Inventories by Stock Number'
title_active_left_menu: 'Vehicle Listings'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Inventories by Stock Number'
spec: vehicle_listings
version: v2
api: inventory
dropdown-link: '/api/inventory/v2/stocks/{stockId}'

level: 4
description_edpoint: 'Find Inventories by Stock Number'
title_md : Parameters
number: 2

---


###Parameters

| Parameter     | Description                                       | Possible Values                                 | Default Value           | Required                         |
|:--------------|:--------------------------------------------------|:------------------------------------------------|:------------------------|:---------------------------------|
| stockId       | The stock number of the car                       |                                                 |                         | Yes                              |
| pagenum       | The page number                                   |                                                 | 1                       | No                               |
| pagesize      | The page size                                     | numeric value (the max is 50)                   | 10                      | No                               |
| view          | The response view                                 | basic, full, custom                             | basic                   | No                               |
| fmt           | Response format                                   | json                                            | json                    | Yes                              |