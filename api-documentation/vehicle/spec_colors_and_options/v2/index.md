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

<div class="info-message">
 This resource provides access to vehicle options and colors. For vehicle options, the data returns will always include an array of <a href="{{ PATH }}/api-documentation/vehicle/spec_equipment/v2/">equipment</a> that exist within each option. The <a href="{{ PATH }}/api-documentation/vehicle/spec_equipment/v2/">equipment format for colors</a> is different from the typical equipment format. <a href="{{ PATH }}/api-documentation/vehicle/spec_equipment/v2/">Learn more</a>
</div>

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
