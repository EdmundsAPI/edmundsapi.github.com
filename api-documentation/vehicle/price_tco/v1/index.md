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

True Cost of Own® (TCO®) is a calculated value derived from the Edmunds pricing system that describes the additional costs an automotive buyer may not have included when considering his or her vehicle purchase. These extra costs are broken up into [six categories](/api-documentation/pricing_tco_cats/v1/): *depreciation, interest on your loan, taxes and fees, insurance premiums, fuel costs, maintenance, and repairs*.

### Special Requirements

When you display our True Cost to Own® (TCO®) data for any vehicles, we ask for the following:

* When data is displayed, it is captioned or titled one of the following: 
** Edmunds.com True Cost to Own®
** Edmunds.com TCO®

* When a data is displayed, the date it was generated though the API should also be displayed, since TCO® prices are “perishable.”

* That you include the following explanation of what that number is:

	*Edmunds.com's True Cost to Own® (TCO®) is Edmunds.com’s estimate of the cost of buying and owning a vehicle for the first five years assuming 15,000 miles driven per year.  TCO® includes depreciation, interest on financing, insurance premiums, taxes and fees, fuel, maintenance and repairs.*

* That you include the following legal notice:

	*TCO® data are copyrighted by Edmunds.com, Inc., which reserves all rights. Edmunds®, Edmunds.com True Cost to Own® and TCO® are registered trademarks of Edmunds.com, Inc. Edmunds.com, Inc. is not affiliated with this website or app.*

**For legal reasons, we cannot expose the granular data (i.e. depreciation, taxes and fees, insurance, fuel, ...etc) that makes up the True Cost to Own value. If you want to get access to that data, please email us at api \[at\] edmunds \[dot\] com.**

You can also send your users to the following URL for more information on the True Cost to Own value: 

	http://www.edmunds.com/{make}/{model}/{year}/tco.html?style={style ID}&zip={zipcode}


