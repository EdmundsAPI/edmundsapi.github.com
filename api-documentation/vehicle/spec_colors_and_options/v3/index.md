---
layout: api-documentation
title : 'Spec: Colors and Options'
title_active_left_menu: "Spec: Colors and Options"
title_parent: Api documentation

amount_version: 23
spec: spec_colors_and_options
version: v3
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

<div class="info-message">
 This resource provides access to vehicle options and colors. Please note that both options and colors <em><strong>are considered a vehicle equipment</strong></em>. For vehicle options, the data returned will always include an array of <a href="{{ PATH }}/api-documentation/vehicle/spec_equipment/v2/">equipment</a> that exist within each option. The <a href="{{ PATH }}/api-documentation/vehicle/spec_equipment/v2/">equipment format for colors</a> is different from the typical equipment format. <a href="{{ PATH }}/api-documentation/vehicle/spec_equipment/v2/">Learn more</a>
</div>

### Endpoints

* [Get the Vehicle Color Details by its ID](/api-documentation/vehicle/spec_colors_and_options/v3/01_color_id/api-description.html)

### Option Categories

Option categories are always one of these values:

* Interior
* Exterior
* Roof
* Interior Trim
* Mechanical
* Package
* Additional Fees
* Other

### Vehicle Colors

We provide both ***exterior*** and ***interior*** colors for each vehicle style. A vehicle color is associated with a vehicle style directly and *not* a vehicle make or model. You need to know the style of the vehicle first before getting a list of available colors. This also applies to *options, engines, transmissions and equipment* as well.

The colors object format is:

    {
        "id": {string},
        "name": {string},
        "equipmentType": "COLOR",
        "manufactureOptionName": {string},
        "manufactureOptionCode": {string},
        "category": {string},
        "colorChips": {
            "primary": {
                "r": {integer},
                "g": {integer},
                "b": {integer},
                "hex": {string}
            },
            "secondary": {
                "r": {integer},
                "g": {integer},
                "b": {integer},
                "hex": {string}
            }
        }
    }