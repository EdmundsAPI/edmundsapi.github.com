---
layout: api-documentation
title : 'Spec: Style'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 2
spec: spec_style
version: v2
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

<div class="info-message">
 The vehicle style is at the core of the Edmunds API. In this resource, you will be able to look up the vehicle styles belonging to a specific make/model/year vehicle or by the style ID itself. The data you get back includes the engine, transmission, colors, options, trim and squishVin details for that style. **Chrome Data ID is an endpoint only provided to explicit partners of both Chrome Data (http://www.chromedata.com) and Edmunds.com, please contact us to inquire.
</div>

### What Can I Do With This Resource?

The Style Resource allows you to look up a vehicle's details (e.g. colors, options, engines, transmissions, submodels, MPG, driven wheels, price, categories, etc.) by one of these methods:

* [By supplying the car's make/model nice names and the car year](/api-documentation/vehicle/spec_style/v2/01_by_mmy/api-description.html)
* [By supplying the car's Edmunds style ID](/api-documentation/vehicle/spec_style/v2/02_by_id/api-description.html)
* [By supplying the car's Chrome Data ID**](/api-documentation/vehicle/spec_style/v2/03_chrome/api-description.html)

### Static Datasets

In the response objects you will get back, you will come across properties like <code>equipmentType</code> and <code>optionType</code>. To understand those better, you should familiarize yourself with the [equipment spec](/api-documentation/vehicle/spec_equipment/v2/) and [options spec](/api-documentation/vehicle/spec_colors_and_options/v2/) resources.

### Other Endpoints

* [Get Style Count by Car Make/Model/Year](/api-documentation/vehicle/spec_style/v2/03_count_by_mmy/api-description.html)
* [Get Style Count by Car Make and Model](/api-documentation/vehicle/spec_style/v2/04_count_by_make_model/api-description.html)
* [Get Style Count by Car Make](/api-documentation/vehicle/spec_style/v2/05_count_by_make/api-description.html)
