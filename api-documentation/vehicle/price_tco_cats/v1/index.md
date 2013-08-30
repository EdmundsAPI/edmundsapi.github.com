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

This resource returns the **5-year breakdown values** of all True Cost to Own® (TCO®) categories for a both **new** and **used** vehicles based on their specified *style ID, zip code, and state code*.

**Please note** that the TCO® value is only available for up to 5 years. Vehicles that are older than five years **will not** have an accurate TCO® values.

### The TCO® Categories

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

The categories are as follows:

#### Fuel

The fuel cost in dollars per year.

#### Insurance

The insurance cost in dollars per year. 

#### Maintenance

The maintenance cost in dollars per year.

#### Repairs

Expected repairs cost in dollars per year.

#### Depreciation

The amount of how much the car will depreciate in dollars per year.

#### Taxes and Fees

The taxes and fees expected to be paid in dollars per year.

#### Financing

The finance interest expense in dollars per year.

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


