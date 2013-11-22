---
layout: api-documentation
title : 'Spec: Squish VIN'
title_active_left_menu: "Spec: Squish VIN"
title_parent: Api documentation

amount_version: 1
spec: spec_squishvin
version: v1
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---
<div class="info-message">
 Look up vehicle specs (i.e. make, model, year, style, trim, engine and transmission details) by its squish VIN.
</div>

A squish VIN is basically **the first 11 digits of the VIN minus the 9th digit which is a check digit**. It's the value used to decode a VIN into a vehicle style ID.

To learn more about VINs, please see [Vehicle Identification Numbers](https://help.edmunds.com/entries/23782847-Vehicle-Identification-Numbers-VINs), [Making Sense of Your VIN](http://www.edmunds.com/driving-tips/making-sense-of-your-vin.html), and [More VIN Information](http://www.edmunds.com/car-buying/vin-check.html).

### Endpoints

* [Decode a Squish VIN into its Most Basic Vehicle Specs](/api-documentation/vehicle/spec_squishvin/v1/01_by_vin/api-description.html)
