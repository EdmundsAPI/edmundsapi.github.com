---
layout: api-documentation
title : 'Price: True Market Value®'
title_active_left_menu: 'Price: True Market Value'
title_parent: Api documentation

amount_version: 2
spec: price_tmv
version: v1
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

<div class="info-message">
 TMV® is the <i>average price</i> that a car sells for within a particular region. TMV® is adjusted for options, the vehicle's color and associated incentives. TMV® figures are <strong>based on the actual sales</strong> of other vehicles of its kind in the given region. The figure is then adjusted further for accuracy using sophisticated calculations designed by mathematicians at Edmunds.com.
</div>

Knowing the TMV® price helps buyers negotiate the price of a new car as well as the value of their trade-in vehicle. Additionally, sellers can use TMV® to set the price of their used car when selling it to a private party.

TMV® is essential information for shoppers because cars sell at very different prices depending on their availability and popularity. Knowing TMV® allows a shopper to make an offer that a dealer will immediately recognize as reasonable. Thus, negotiations will take less time and be more relaxed.

### Endpoints

* [Get TMV® for a New Car by Style ID and ZIP Code](/api-documentation/vehicle/price_tmv/v1/01_calculatenewtmv/api-description.html)
* [Get TMV® by New Car VIN, MSRP, and ZIP Code](/api-documentation/vehicle/price_tmv/v1/03_calculatenewtmv_vin/api-description.html)
* [Get TMV® for a Used Car by Style ID and More](/api-documentation/vehicle/price_tmv/v1/04_calculateusedtmv/api-description.html)
* [Get TMV® for a Used Vehicle with Typically Equipped Options](/api-documentation/vehicle/price_tmv/v1/05_calculatetypicallyequippedusedtmv/api-description.html)
* [Get TMV® for a Certified Vehicle](/api-documentation/vehicle/price_tmv/v1/06_findcertifiedpriceforstyle/api-description.html)

### Special Requirement

When you display our True Market Value® (TMV®) prices for any new or used vehicles, we ask for the following:

1) When a price is displayed, it is captioned or titled one of the following:

* Edmunds.com True Market Value®
* Edmunds.com TMV®

2) When a price is displayed, the date it was generated through the API should also be displayed, since TMV® prices are “perishable.”

3) Unless you are displaying the TMV price for a specific VIN:  That you include the following explanations of what that number is:

* For the presentation of TMV® for new vehicles:

	*The Edmunds.com TMV® (Edmunds.com True Market Value®) price is Edmunds.com’s determination of the current average base dealer price in the area indicated by the Zip Code provided, unadjusted for vehicle color or any options. (If no Zip Code was provided, this price is the national price.)*

* For the presentation of TMV for used vehicles (using the appropriate bracketed words):

	*The Edmunds.com TMV® (Edmunds.com True Market Value®) price is Edmunds.com’s determination of the current average base [“dealer retail”] [“private party”] [“dealer trade-in”] price in the area indicated by the Zip Code provided, unadjusted for color or any options. (If no Zip Code was provided, this price is the national price.)*

4) That you include the following legal notice:

*TMV® prices are copyrighted by Edmunds.com, Inc., which reserves all rights. Edmunds®, Edmunds.com True Market Value® and TMV® are registered trademarks of Edmunds.com, Inc. Edmunds.com, Inc. is not affiliated with this website or app.*


