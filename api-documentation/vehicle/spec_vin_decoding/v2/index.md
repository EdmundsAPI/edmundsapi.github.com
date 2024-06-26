---
layout: api-documentation
title : 'Spec: VIN Decoding'
title_active_left_menu: "Spec: VIN Decoding"
title_parent: Api documentation

amount_version: 1
spec: spec_vin_decoding
version: v2
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

<div class="info-message">
 Decode the supplied VIN to its most basic vehicle specs (i.e. make, model, year, style, trim, engine and transmission details.)
</div>

**Please note** that this resource is ***not*** a *VIN Lookup*. Manufacturers can do the VIN lookup on their own vehicles, but since we cover all manufacturers and makes and models, we can reliably *look up* a vehicle by just its VIN. So what we do is reduce the VIN to a **Squish VIN**, or VIN prefix, which is basically **the first 11 digits of the VIN minus the 9th digit which is a check digit**.

To learn more about VINs, please see [Vehicle Identification Numbers](https://help.edmunds.com/entries/23782847-Vehicle-Identification-Numbers-VINs), [Making Sense of Your VIN](http://www.edmunds.com/driving-tips/making-sense-of-your-vin.html), and [More VIN Information](http://www.edmunds.com/car-buying/vin-check.html).

### Endpoints

* [Decode the Supplied VIN to its Most Basic Vehicle Specs](/api-documentation/vehicle/spec_vin_decoding/v2/02_by_vin/api-description.html)
