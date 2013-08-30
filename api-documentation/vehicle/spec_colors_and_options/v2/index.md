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

The vehicle style is at the core of the Edmunds API. In this resource, you will be able to look up the vehicle styles belonging to a specific make/model/year vehicle or by the style ID itself. The data you get back includes the engine, transmission, colors, options, trim and squishVin details for that style.

### Static Datasets

In the response objects you will get back, you will come across things like <code>equipmentType</code> and <code>optionType</code>. To understand those better, here's a list of all possible values for both properties:

#### optionType

* INTERIOR
* EXTERIOR
* MECHANICAL
* PACKAGE
* ADDITIONAL_FEES