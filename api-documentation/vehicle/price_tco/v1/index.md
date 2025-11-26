---
layout: api-documentation
title : 'Price: True Cost to Own'
title_active_left_menu: 'Price: True Cost to Own'
title_parent: Api documentation

amount_version: 1
spec: price_tco
version: v1
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

<div class="info-message">
Edmunds.com's True Cost to Own® (TCO®) is proprietary data that helps you estimate the <b>total five-year cost</b> of buying and owning a vehicle — including some items you may not have taken into consideration. A benefit of using our TCO® API is that you can easily compare the five-year totals for different vehicles and make a more informed choice.
</div>

The [components of TCO®](/api-documentation/vehicle/price_tco_cats/v1/) are depreciation, interest on financing, taxes and fees, insurance premiums, fuel, maintenance, repairs and any federal tax credit that may be available. In order to estimate certain mileage-dependent costs, we assume that vehicles will be driven **15,000 miles per year**. For a used vehicle, we calculate the years the vehicle has been driven using the nominal difference between the current calendar year and the vehicle's model year, and assume that it was driven 15,000 miles during each of those years.

Note that TCO® is a comparative tool, not a predictive tool — your actual five-year cost of owning a particular vehicle will vary depending on your personal circumstances, such as your driving history and the number of miles you drive.

You can also send your users to the following URL for more information on the True Cost to Own value: 

> http://www.edmunds.com/{make}/{model}/{year}/tco.html?style={style ID}&zip={zipcode}

### Endpoints

* [Get the True Cost to Own® Total for a New Car](/api-documentation/vehicle/price_tco/v1/01_newcar_tco/api-description.html)
* [Get the Total Cash Price for a New Car](/api-documentation/vehicle/price_tco/v1/03_newcar_totalcash/api-description.html)
* [Get Car Makes with TCO® Values](/api-documentation/vehicle/price_tco/v1/05_makes_with_tco/api-description.html)
* [Get Car Models with a TCO® Value](/api-documentation/vehicle/price_tco/v1/06_models_with_tco/api-description.html)

### How We Calculate True Cost to Own®

The True Cost to Own® calculations use the following set of assumptions:

* Ownership expenses are estimated for a five-year period
* You will drive 15,000 miles per year
* You are financing the vehicle using traditional financing, not lease financing
* You have an above-average credit rating for the purpose of determining your finance rate
* You are making a 10% down payment on the vehicle at purchase
* Your loan term is 60 months

Using proprietary formulas, we calculate the five-year costs for the seven cost categories that make up the TCO® (depreciation, insurance, financing, taxes & fees, fuel, maintenance and repairs). We also take into account any applicable federal tax credit.

**Please note** that the TCO® value is only available for up to 5 years. Vehicles that are older than five years **will not** have an accurate TCO® values.

### Explanation of True Cost to Own® Terms

#### Total Cash Price

For new vehicles, the Total Cash Price displayed is the vehicle's True Market Value® (TMV®) price plus typically equipped options, destination charge, base tax and fees assessed by your state, and, if applicable, gas guzzler tax; less any widely available manufacturer-to-customer cash rebates. (However, we do not account for other types of cash rebates or incentives because of the variability of those offers and their eligibility requirements.) For used vehicles, the Total Cash Price shown is the sum of the vehicle's Private Party TMV® price in "clean" condition plus typically equipped options, and base tax and fees assessed by your state.

#### Depreciation

This is the amount by which the value of a vehicle declines from its purchase price to its estimated resale value. The purchase price employed is the vehicle's Total Cash Price, minus any taxes and fees included in that amount. We estimate the resale value assuming the vehicle will be in "clean" condition, will be driven 15,000 miles per year, and will be sold to a private party.

#### Insurance

This is the estimated average annual insurance premium in your state. The premium has been determined based on annual premium data for defined driver profiles and coverages (liability, comprehensive and collision) from a major national insurer. While this information is specific to vehicle make, model, model year and body type, your personal information is not taken into consideration and could greatly alter the actual premium quoted by an insurer. Factors that will affect your rate include your age, marital status, credit history, driving record, and the garaging address of your vehicle.

#### Financing

This is the interest expense on a loan in the amount of the Total Cash Price, assuming a 10% down payment and a loan term of 60 months. The interest rate used is the prevailing rate that banks and other direct automotive lenders are currently charging consumers in your geographic region who have above average credit scores.

Note: Even if you do not finance your vehicle, the inclusion of financing cost in determining True Cost to Own® is still appropriate because it reflects the estimated "opportunity cost" (i.e., the amount you may earn) if you invest the Purchase Price instead of using it to purchase the vehicle.

#### Taxes & Fees

This consists of the base sales (or use) taxes, license and registration fees in your state, and gas guzzler tax if applicable. These taxes and fees are often based on a percentage of the purchase price, and generally decrease as the vehicle ages and loses its value.

Note: the state sales/use tax rate that we use includes the average local and county taxes assessed in that state.

#### Fuel

This expense is based on the revised EPA mileage ratings, assuming consumption consists of 45% highway and 55% city driving and that the vehicle is equipped with the transmission that is standard equipment for that vehicle. Cost estimates are based on the current one-year moving average of self-service prices in your state, using regular unleaded gasoline for vehicles whose manufacturers require regular; premium unleaded gasoline for vehicles whose manufacturers recommend or require premium; or diesel fuel for diesel vehicles.

#### Maintenance

This is the estimated expense of the two types of maintenance: scheduled and unscheduled. Scheduled maintenance is the performance of factory-recommended items at periodic mileage and/or calendar intervals. Unscheduled maintenance includes wheel alignment and the replacement of items such as the battery, brakes, headlamps, hoses, exhaust system parts, taillight/turn signal bulbs, tires and wiper blades/inserts. Estimated tire replacement costs are supplied to Edmunds.com by The Tire Rack, Inc.

#### Repairs

This is the estimated expense for repairs not covered by the vehicle manufacturer's warranties over the five years from the date of purchase, assuming 15,000 miles are driven annually. We estimate this expense based on the cost of a typical "zero deductible" extended warranty for the vehicle, minus the estimated amount of that cost that consists of the warranty provider's overhead and profit.

#### Federal Tax Credits

This is the tax credit that is provided for under the Energy Policy Act of 2005. A tax credit is subtracted directly from the total amount of federal tax you owe. The tax credit is for electric fuel vehicles.

The credit is only available to the original purchaser of a new, qualifying vehicle, and is subject to certain "phase out" rules that we take into consideration when computing TCO®. If a qualifying vehicle is leased to a consumer, the leasing company may claim the credit.

### Special Requirements

When you display our True Cost to Own® (TCO®) data for any vehicles, we ask for the following:

1) When data is displayed, it is captioned or titled one of the following:

* Edmunds.com True Cost to Own®
* Edmunds.com TCO®

2) When a data is displayed, the date it was generated though the API should also be displayed, since TCO® prices are “perishable.”

3) That you include the following explanation of what that number is:

*Edmunds.com's True Cost to Own® (TCO®) is Edmunds.com’s estimate of the cost of buying and owning a vehicle for the first five years assuming 15,000 miles driven per year.  TCO® includes depreciation, interest on financing, insurance premiums, taxes and fees, fuel, maintenance, repairs, and takes into account any federal tax credit that may be available.*

4) That you include the following legal notice:

*TCO® data are copyrighted by Edmunds.com, Inc., which reserves all rights. Edmunds®, Edmunds.com True Cost to Own® and TCO® are registered trademarks of Edmunds.com, Inc. Edmunds.com, Inc. is not affiliated with this website or app.*
