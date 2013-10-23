---
layout: api-documentation
title : 'Vehicle Inventory by VIN Lookup'
title_active_left_menu: 'VIN Lookup'
title_parent: Api documentation

amount_version: 1
spec: vin_lookup
version: v1
api: inventory
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version
---

<div class="info-message">
	Get an inventory listing by VIN.
</div>

To learn more about car VINs, check out this [Wikipedia page](http://en.wikipedia.org/wiki/Vehicle_Identification_Number). The VINs that are expected are:

1. 17 characters long.
2. The last 5 characters are *numeric*.

This resource is **not** meant to be a *VIN Decoder*. For VIN decoding, please see [this resource](/api-documentation/vehicle/spec_vin_decoding/v1/).