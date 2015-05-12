---
layout: api-documentation
title : 'Vehicle Inventory Listings'
title_active_left_menu: 'Vehicle Listings'
title_parent: Api documentation

amount_version: 2
spec: vehicle_listings
version: v2
api: inventory
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version
---

<div class="info-message">
	These resources provide a list of cars.
</div>

### Endpoints

* [Get Cars Available for Sale by ZIP Code](/api-documentation/inventory/vehicle_listings/v2/01_inventories_by_zip/api-description.html)
* [Get Cars Available for Sale by Stock Number](/api-documentation/inventory/vehicle_listings/v2/02_inventories_by_stock_number/api-description.html)
* [Get Cars Available for Sale by Dealership ID](/api-documentation/inventory/vehicle_listings/v2/03_inventories_by_franchise_id/api-description.html)
* [Get Cars Available for Sale by Style ID](/api-documentation/inventory/vehicle_listings/v2/04_inventories_by_style_id/api-description.html)

#### Example 1: Get Cars for ZIP code **90404**

> https://api.edmunds.com/api/inventory/v2/inventories?zipcode=90404&fmt=json

#### Example 2: Get Cars by Style ID **200466220**

> https://api.edmunds.com/api/inventory/v2/styles/200466220?fmt=json

#### Example 3: Get Cars of Dealership with ID **837209**

> https://api.edmunds.com/api/inventory/v2/franchises/837209?fmt=json

### Available engine cylinders count
* 0 (for electric vehicle)
* 3
* 4
* 5
* 6
* 8
* 10
* 12
* 16

### Available fuel types
* gasoline
* diesel
* electric
* natural-gas

### Available engine types
* gas
* flex-fuel
* hybrid
* diesel
* natural-gas

### Available transmission types
* automatic
* manual
* automated-manual
* direct-drive

### Available body types
* sedan
* suv
* pickup
* hatchback
* minivan
* coupe
* station-wagon
* truck
* convertible
* van

### Available colors
* black
* blue
* brown
* cream
* gold
* gray
* green
* orange
* purple
* red
* silver
* white
* yellow
