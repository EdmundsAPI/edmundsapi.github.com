---
layout: api-documentation
title : 'Spec: Colors and Options'
title_active_left_menu: "Spec: Colors and Options"
title_parent: Api documentation

amount_version: 2
spec: spec_colors_and_options
version: v2
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

#### This resource provides access to vehicle options and colors. For vehicle options, the data returns will always include an array of [equipment](/api-documentation/vehicle/spec_equipment/v2/) that exist within each option. The [equipment format for colors](/api-documentation/vehicle/spec_equipment/v2/) is different from the typical equipment format. [Learn more](/api-documentation/vehicle/spec_equipment/v2/)

### Option Types

Option types are always one of these values:

* INTERIOR
* EXTERIOR
* ROOF
* INTERIOR_TRIM
* MECHANICAL
* PACKAGE
* ADDITIONAL_FEES
* UNKNOWN
