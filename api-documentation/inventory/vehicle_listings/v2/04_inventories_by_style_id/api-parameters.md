---
layout: api-documentation
title : 'Find Inventories by Style ID'
title_active_left_menu: 'Vehicle Listings'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Inventories by Style ID'
spec: vehicle_listings
version: v2
api: inventory
dropdown-link: '/api/inventory/v2/styles/{styleId}'

level: 4
description_edpoint: 'Find Inventories by Style ID'
title_md : Parameters
number: 2

---


###Parameters

| Parameter     | Description                                       | Possible Values                                                                           | Default Value           | Required                         |
|:--------------|:--------------------------------------------------|:------------------------------------------------------------------------------------------|:------------------------|:---------------------------------|
| styleId       | The car's style ID                                |                                                                                           |                         | Yes                              |
| zipcode       | Dealership ZIP Code                               |                                                                                           |                         | Yes                              |
| radius        | The search radius in miles                        |                                                                                           | 50                      | No                               |
| type          | The car type                                      | new,used,cpo                                                                              |                         | No                               |
| intcolor      | The car's interior color                          | See [VEHICLE INVENTORY LISTINGS](/api-documentation/inventory/vehicle_listings/v2/) page  |                         | No                               |
| extcolor      | The car's exterior color                          | See [VEHICLE INVENTORY LISTINGS](/api-documentation/inventory/vehicle_listings/v2/) page  |                         | No                               |
| intcolorhex   | The car's interior HEX color code                 | Examples: 0C225C, 4A4945, etc.                                                            |                         | No                               |
| extcolorhex   | The car's exterior HEX color code                 | Examples: FFFFFF, 4A4935, etc.                                                            |                         | No                               |
| msrpmin       | The lower limit of cars's MSRP                    |                                                                                           |                         | No                               |
| msrpmax       | The upper limit of car's MSRP                     |                                                                                           |                         | No                               |
| lpmin         | The lower limit of car's Lease Promise Program    |                                                                                           |                         | No                               |
| lpmax         | The upper limit of car's Lease Promise Program    |                                                                                           |                         | No                               |
| pagenum       | The page number                                   |                                                                                           | 1                       | No                               |
| pagesize      | The page size                                     | numeric value (the max is 50)                                                             | 10                      | No                               |
| view          | The response view                                 | basic, full, custom                                                                       | basic                   | No                               |
| fmt           | Response format                                   | json                                                                                      | json                    | Yes                              |