---
layout: api-documentation
title : 'Get Dealer Details and Location'
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 125
title-endpoint: 'Find Dealership Franchises by Id'
spec: details_and_location
version: v5
api: dealer
dropdown-link: 'api/dealer/v5/dealership/{id}/franchises'

level: 4
description_edpoint: 'Find Dealership Franchises'
title_md : Parameters
number: 2

---


### Parameters

| Parameter     | Description                               | Possible Values | Default Value | Required |
|:--------------|:------------------------------------------|:----------------|:--------------|:---------|
| {id}          | The Dealership ID                         |                 |               | Yes      |
| make          | Make names (e.g. honda, landrover)        | See [**Spec: Make**](/api-documentation/vehicle/spec_make/v3/) |  | No |
| lat           | Latitude                                  |                 |               | No       |
| lon           | Longitude                                 |                 |               | No       |
| zip           | Zip Code to Find Franchises located next to it (search based on radius query param) | | | No  |
| radius        | Search Radius (miles)                     |                 | 50            | No       |
| sortby        | The desired sort (e.g. id:DESC, name:ASC) |                 |               | No       |
| fields        | List of Fields in Response                |                 |               | No       |
| api_key       | The API key                               |                 |               | Yes      |

<div class="info-message">
    The endpoint will return all franchises for the dealership if <code>lat/lon</code> and <code>zip</code> query parameters are undefined.  
    <br>
    <code>lat/lon</code> and <code>zip</code> query parameters are mutually exclusive
</div>









