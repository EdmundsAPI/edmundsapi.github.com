---
layout: api-documentation
title : 'Get Dealer Details and Location'
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 2
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'Select an Endpoint'

level: 2
overview: page_version
---

<div class="info-message">
    Get dealership details and location information by providing the ZIP Code of the area you're interested in.
</div>

### Endpoints

* [Get Rooftop Dealer by ID](/api-documentation/dealer/details_and_location/v2/01_dealer_by_id/api-description.html)
* [Get Rooftop Dealers by ZIP code with a specific radius and/or specific car make](/api-documentation/dealer/details_and_location/v2/02_dealers/api-description.html)
* [Get Rooftop Dealers count by ZIP code with a specific radius and/or specific car make](/api-documentation/dealer/details_and_location/v2/03_dealers_count/api-description.html)
* [Get Franchise by ID](/api-documentation/dealer/details_and_location/v2/04_franchise_by_id/api-description.html)
* [Get Franchises by ZIP code with a specific radius and/or specific car make](/api-documentation/dealer/details_and_location/v2/05_franchises/api-description.html)
* [Get Franchises count by ZIP code with a specific radius and/or specific car make](/api-documentation/dealer/details_and_location/v2/06_franchises_count/api-description.html)
* [Get Repairshop by ID](/api-documentation/dealer/details_and_location/v2/07_repairshop_by_id/api-description.html)
* [Get Repairshops by ZIP code with a specific radius and/or specific car make](/api-documentation/dealer/details_and_location/v2/08_repairshops/api-description.html)
* [Get Repairshops count by ZIP code with a specific radius and/or specific car make](/api-documentation/dealer/details_and_location/v2/09_repairshops_count/api-description.html)

###Examples

#### Example 1: Get Rooftop Dealer details by ID
    
> https://api.edmunds.com/api/dealer/v2/dealers/884056?api_key={api_key}
    
#### Example 2: Get Franchises for ZIP code **33756** and make **acura**

> https://api.edmunds.com/api/dealer/v2/franchises?zipcode=33756&make=acura&api_key={api_key}
    
#### Example 3: Get Repairshops count for ZIP code **90404**

> https://api.edmunds.com/api/dealer/v2/repairshops/count?zipcode=90404&api_key={api_key}
