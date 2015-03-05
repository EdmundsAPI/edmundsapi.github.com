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
* [OAuth 2.0](#sec-2)
* [Quick Start](#sec-3)
* [Edmunds Inventory Link](#sec-4)
* [Visibility Tiers](#sec-5)
* [API Uses](#sec-6)
* [Available Resources](#sec-7)

<a name='sec-1'> </a>

---

### Overview

The Inventory API provides access to the *vehicle inventories* (or *cars for sale*) available at dealerships with a relationship with Edmunds.com. Due to the nature of this data, it's only available to **API Partners** and **Edmunds Developers**. If you're interested in becoming an API Partner, please [email us](mailto:api%40edmunds.com?subject=API%20Partner%20Inquiry&body=Please%20fill%20out%20the%20following.%0A%0AName%20and%20position%3A%0A%0ACompany%3A%0A%0AApplication%20Description%2C%20including%20links%20to%20demo%20or%20live%20app%3A%0A%0AHow%20you%20plan%20to%20use%20Edmunds%20data%3A%0A%0ADo%20you%20currently%20work%20with%20any%20dealerships%20and%2For%20OEMs%3F%20If%20so%2C%20who%3A%20).

If you haven't yet, this might be a good time to read the [API Overview](/api-documentation/overview/) page to familiarize yourself with some of the core concepts required to using the API.<a name='sec-2'> </a>

[Back to top](#top)

### OAuth 2.0

The Inventory API requires **[OAuth 2.0](http://aaronparecki.com/articles/2012/07/29/1/oauth2-simplified)** for both *authentication* and *authorization*. Here is how you would get an OAuth access token:

	curl -i -H 'Content-Type: application/x-www-form-urlencoded' 'https://api.edmunds.com/inventory/token' -X POST -d 'client_id=<api key>' -d 'client_secret=<shared secret>' -d 'grant_type=client_credentials'
	
You will find both your *api key* and *shared secret* in your [dashboard](http://edmunds.mashery.com/apps/mykeys).

If you've been given access by the Edmunds API Team, you should receive an _access\_token_ back. The _access\_token_ is valid for **one hour** after which you'll need to get a new one.

Now that you have your _access\_token_ for the hour, you can start making calls to the Inventory API resources this way:

	curl -i -H 'Authorization: Bearer <access_token>' 'http://api.edmunds.com/{endpoint}'
	
Alternative, you can add the the _access\_token_ to the query string:

	curl -i 'http://api.edmunds.com/{endpoint}?access_token=<access_token>'
	
We **do not recommend** the second approach since it's not secure.<a name='sec-3'> </a>

[Back to top](#top)

### Quick Start

Let's get right to it, shall we? Here's a few REST calls that should get you started using the API with ease. Better yet, you could use our [API Console](http://edmunds.mashery.com/io-docs) to make ***live API calls*** of your own.

#### Example 1: Get a listed call for sale by its VIN

> https://api.edmunds.com/api/inventory/v1/vin?vin={VIN}&fmt=json

#### Example 2: Get available *NEW* cars for sale at a specific dealership

> https://api.edmunds.com/api/inventory/v1/getall?types=NEW&dealerId=26711

<a name='sec-4'> </a>

[Back to top](#top)

### Edmunds Inventory Link

The inventory detail page on Edmunds.com has the following URL structure:

> http://www.edmunds.com/inventory/vin.html?make={vehicle make}&inventoryId={vehicle inventory ID}&zip={vehicle zip code}&radius={the radius to search}

The information you need to compile this URL is available in the API response of all endpoints in this resource. This piece of information is **important** when you want to send traffic back to Edmunds.com so your users can transact on that inventory.

<a name='sec-5'> </a>

[Back to top](#top)

### Visibility Tiers

Due to the nature of the inventory data, not all of it is available to the public, or even to strategic partners. Every endpoint has a section called **Response Format** in which each datapoint returned is described and its visibility called out. Our visibility tiers are as follows:

1. **Edmunds:** This datapoint is visible to Edmunds developers
2. **Partners:** This datapoint is visible to strategic partners. Your API Key has to be assigned as such.
3. **Public:** This datapoint is visible to public partners (those who have their rate limit raised and apps verified for compliance with our TOS.) Your API Key has to be assigned as such.

<a name='sec-6'> </a>

[Back to top](#top)

### API Uses

* Get all inventories within a certain zip code and radius
* Get inventory by VIN
* Get inventories by franchise id
* Get inventories by style id

<a name='sec-7'> </a>

[Back to top](#top)

### Available Resources

The Inventory API has two resources:

| Resource Name     | Description                           |
|:------------------|:--------------------------------------|
| [Inventory by VIN](/api-documentation/inventory/vin_lookup/v2/) | If the VIN you supply matches a vehicle that's for sale at one of the dealerships Edmunds.com, Inc. works with, you will get a response back. Otherwise, you will get an error. |
| [Inventory by Dealer ID or ZIP Code](/api-documentation/inventory/vehicle_listings/v2/) | Get a list of inventories. |

[Back to top](#top)
