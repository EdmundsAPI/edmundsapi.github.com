---
layout: api-documentation

title : Inventory API
title_active_left_menu: Inventory API
title_parent: Api documentation

level: 1
---

<a name="top"> </a>

### Page Content

* [Overview](#sec-1)
* [Quick Start](#sec-2)
* [Edmunds Inventory Link](#sec-3)
* [API Uses](#sec-4)
* [Available Resources](#sec-5)

<a name='sec-1'> </a>

---

### Overview

The Inventory API provides access to the *vehicle inventories* (or *cars for sale*) available at dealerships with a relationship with Edmunds.com. Due to the nature of this data, it's only available to **API Partners** and **Edmunds Developers**. If you're interested in becoming an API Partner, please <a href="http://developer.edmunds.com/contact_us.html" onclick="window.open(this.href,  null, 'height=1155, width=680, toolbar=0, location=0, status=1, scrollbars=1, resizable=1'); return false">contact us</a>.

If you haven't yet, this might be a good time to read the [API Overview](/api-documentation/overview/) page to familiarize yourself with some of the core concepts required to using the API.<a name='sec-2'> </a>

[Back to top](#top)

### Quick Start

Let's get right to it, shall we? Here's a few REST calls that should get you started using the API with ease.

#### Example 2: Get available *NEW* cars for sale at a specific dealership

> https://api.edmunds.com/api/inventory/v1/getall?types=NEW&dealerId=26711

<a name='sec-3'> </a>

[Back to top](#top)

### Edmunds Inventory Link

The inventory detail page on Edmunds.com has the following URL structure:

> http://www.edmunds.com/inventory/vin.html?make={vehicle make}&inventoryId={vehicle inventory ID}&zip={vehicle zip code}&radius={the radius to search}

The information you need to compile this URL is available in the API response of all endpoints in this resource. This piece of information is **important** when you want to send traffic back to Edmunds.com so your users can transact on that inventory.

<a name='sec-4'> </a>

[Back to top](#top)

### API Uses

* Get all inventories within a certain zip code and radius
* Get inventories by franchise id
* Get inventories by style id

<a name='sec-5'> </a>

[Back to top](#top)

### Available Resources

The Inventory API has two resources:

| Resource Name     | Description                           |
|:------------------|:--------------------------------------|
| [Inventory by VIN](/api-documentation/inventory/vin_lookup/v1/) | If the VIN you supply matches a vehicle that's for sale at one of the dealerships Edmunds.com, Inc. works with, you will get a response back. Otherwise, you will get an error. |
| [Inventory by Dealer ID or ZIP Code](/api-documentation/inventory/vehicle_listings/v2/) | Get a list of inventories. |

[Back to top](#top)
