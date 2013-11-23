---
layout: api-documentation
title : 'Price: True Cost to Own® Categories'
title_active_left_menu: 'Price: True Cost to Own Categories'
title_parent: Api documentation

amount_version: 1
spec: price_tco_cats
version: v1
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

<div class="info-message">
 This resource returns the <b>5-year breakdown values</b> of all True Cost to Own® (TCO®) categories for a both <b>new</b> and <b>used</b> vehicles based on their specified <i>style ID, zip code, and state code</i>.

<p><b>Please note</b> that the TCO® value is only available for up to 5 years. Vehicles that are older than five years <b>will not</b> have an accurate TCO® values.</p>
</div>

### Endpoints

* [Get True Cost to Own® Details for a New Car](/api-documentation/vehicle/price_tco_cats/v1/01_newcars/api-description.html)
* [Get True Cost to Own® Details for a Used Car](/api-documentation/vehicle/price_tco_cats/v1/02_usedcars/api-description.html)


### The True Cost to Own® Categories

This is a **typical response** of the two endpoints listed in this resource:

	{
	    "fuel": {
	        "values": [3140.0, 3234.0, 3331.0, 3431.0, 3534.0],
	        "total": 16670.0
	    },
	    "insurance": {
	        "values": [],
	        "total": 0.0
	    },
	    "maintenance": {
	        "values": [],
	        "total": 0.0
	    },
	    "repairs": {
	        "values": [],
	        "total": 0.0
	    },
	    "depreciation": {
	        "values": [],
	        "total": 0.0
	    },
	    "taxandfees": {
	        "values": [51.0, 36.0, 36.0, 36.0, 36.0],
	        "total": 195.0
	    },
	    "financing": {
	        "values": [32.0, 26.0, 18.0, 12.0, 4.0],
	        "total": 92.0
	    }
	}
	
These **seven categories** make up the True Cost to Own® value. The values property contains five elements with each element representing the total amount in dollars for the entire year starting with the first year.

For example, in the response above we can understand that for this vehicle, it will cost **$3,140 on fuel for the first year** and **$3,534 in the 5th year**.

### Explanation of True Cost to Own® Categories

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

### Special Requirements

When you display our True Cost to Own® (TCO®) data for any vehicles, we ask for the following:

#### When data is displayed, it is captioned or titled one of the following:

* Edmunds.com True Cost to Own®
* Edmunds.com TCO®

#### When a data is displayed, the date it was generated though the API should also be displayed, since TCO® prices are “perishable.”

#### That you include the following explanation of what that number is:

*Edmunds.com's True Cost to Own® (TCO®) is Edmunds.com’s estimate of the cost of buying and owning a vehicle for the first five years assuming 15,000 miles driven per year.  TCO® includes depreciation, interest on financing, insurance premiums, taxes and fees, fuel, maintenance and repairs.*

#### That you include the following legal notice:

*TCO® data are copyrighted by Edmunds.com, Inc., which reserves all rights. Edmunds®, Edmunds.com True Cost to Own® and TCO® are registered trademarks of Edmunds.com, Inc. Edmunds.com, Inc. is not affiliated with this website or app.*

**For legal reasons, we cannot expose the granular data (i.e. depreciation, taxes and fees, insurance, fuel, ...etc) that makes up the True Cost to Own value. If you want to get access to that data, please email us at api \[at\] edmunds \[dot\] com.**

You can also send your users to the following URL for more information on the True Cost to Own value: 

*http://www.edmunds.com/{make}/{model}/{year}/tco.html?style={style ID}&zip={zipcode}*


