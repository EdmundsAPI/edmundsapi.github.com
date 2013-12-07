---
layout: api-documentation

title : Inventory API
title_active_left_menu: Inventory API
title_parent: Api documentation

level: 1
---

### Overview

The Inventory API provides access to the *vehicle inventories* (or *cars for sale*) available at dealerships with a relationship with Edmunds.com. Due to the nature of this data, it's only available to **API Partners** and **Edmunds Developers**. If you're interested in becoming an API Partner, please [email us](mailto:api%40edmunds.com?subject=API%20Partner%20Inquiry&body=Please%20fill%20out%20the%20following.%0A%0AName%20and%20position%3A%0A%0ACompany%3A%0A%0AApplication%20Description%2C%20including%20links%20to%20demo%20or%20live%20app%3A%0A%0AHow%20you%20plan%20to%20use%20Edmunds%20data%3A%0A%0ADo%20you%20currently%20work%20with%20any%20dealerships%20and%2For%20OEMs%3F%20If%20so%2C%20who%3A%20).

If you haven't yet, this might be a good time to read the [API Overview](/api-documentation/overview/) page to familiarize yourself with some of the core concepts required to using the API.

### OAuth 2.0

The Inventory API requires **[OAuth 2.0](http://aaronparecki.com/articles/2012/07/29/1/oauth2-simplified)** for both *authentication* and *authorization*. Here is how you would get an OAuth access token:

	curl -i -H 'Content-Type: application/x-www-form-urlencoded' 'https://api.edmunds.com/inventory/token' -X POST -d 'client_id=<api key>' -d 'client_secret=<shared secret>' -d 'grant_type=client_credentials'
	
You will find both your *api key* and *shared secret* in your [dashboard](http://edmunds.mashery.com/apps/mykeys).

If you've been given access by the Edmunds API Team, you should receive an _access\_token_ back. The _access\_token_ is valid for **one hour** after which you'll need to get a new one.

Now that you have your _access\_token_ for the hour, you can start making calls to the Inventory API resources this way:

	curl -i -H 'Authorization: Bearer <access_token>' 'http://api.edmunds.com/{endpoint}'
	
Alternative, you can add the the _access\_token_ to the query string:

	curl -i 'http://api.edmunds.com/{endpoint}?access_token=<access_token>'
	
We **do not recommend** the second approach since it's not secure.

### Quick Start

Let's get right to it, shall we? Here's a few REST calls that should get you started using the API with ease. Better yet, you could use our [API Console](http://edmunds.mashery.com/io-docs) to make ***live API calls*** of your own.

#### Example 1: Get a listed call for sale by its VIN

> https://api.edmunds.com/api/inventory/v1/vin?vin={VIN}&fmt=json

#### Example 2: Get available *NEW* cars for sale at a specific dealership

> https://api.edmunds.com/api/inventory/v1/getall?types=NEW&dealerId=26711

### API Uses

* Get all dealerships within a certain zip code and radius
* Get all dealerships by the kinds of cars they sell
* Get consumer ratings and reviews of a dealership by its Edmunds ID
* Get consumer ratings and reviews of dealerships by their car makes and the zip code they're in

### Available Resources

The Inventory API has two resources:

| Resource Name  	| Description                           |
|:------------------|:--------------------------------------|
| [Inventory by VIN](/api-documentation/inventory/vin_lookup/v1/) | If the VIN you supply matches a vehicle that's for sale at one of the dealerships Edmunds.com, Inc. works with, you will get a response back. Otherwise, you will get an error. |
| [Inventory by Dealer ID or ZIP Code](/api-documentation/inventory/vehicle_listings/v1/) | Get a list of inventories for sale at a dealership by Dealer ID or by ZIP Code. |
