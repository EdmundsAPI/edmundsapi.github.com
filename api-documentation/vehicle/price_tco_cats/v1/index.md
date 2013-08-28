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
