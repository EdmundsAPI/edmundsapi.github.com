---
layout: api-documentation

title : Dealer API
title_active_left_menu: Dealer API
title_parent: Api documentation

level: 1
---

### Overview

The Dealer API is comprised of a collection of resources that provide access to an array of datasets _related directly to the automotive dealership_.

**Please note** that *dealer inventories* aren't available in this API. They are available in the [Inventory API](/api-documentation/inventory/).

If you haven't yet, this might be a good time to read the [API Overview](/api-documentation/overview/) page to familiarize yourself with some of the core concepts required to using the API.

### Quick Start

Let's get right to it, shall we? Here's a few REST calls that should get you started using the API with ease. You could copy and paste these calls into your browser, add your *API key* to them and then press ENTER! Better yet, you could use our [API Console](http://edmunds.mashery.com/io-docs) to make ***live API calls*** of your own. Once you're comfortable with these calls, you should think about downloading our [Javascript SDK](https://github.com/EdmundsAPI/sdk-javascript). It will make your development life with the Edmunds API much easier :)

#### Example 1: Get a list of all dealerships within 10 miles from 90019 that sell or service Hondas

	https://api.edmunds.com/v1/api/dealer?zipcode=90019&makeName=honda&radius=10&fmt=json&api_key={your API key}

#### Example 2: Get a dealership 5 most recent sales and service consumer ratings and reviews by the dealer ID

	https://api.edmunds.com/v1/api/drrrepository/getdrrbydealerid?dealerid=26643&limit=0%2C5&fmt=json&api_key={your API key}

#### Example 3: Get model, model year, style and trim data for Honda

	https://api.edmunds.com/v1/api/drrrepository/getdrrbyzipcodeandmake?zipcode=90019&make=bmw&limit=0%2C5&fmt=json&api_key={your API key}

### API Uses

* Get all dealerships within a certain zip code and radius
* Get all dealerships by the kinds of cars they sell
* Get consumer ratings and reviews of a dealership by its Edmunds ID
* Get consumer ratings and reviews of dealerships by their car makes and the zip code they're in

### Available Resources

The Dealer API has two resources:

#### Dealer Details

This is where you can get dealerships' name, location, operating hours, contact information, ...etc. by zip code and optionally the cars they sell.

#### Dealer Ratings and Reviews

This is where you can get dealerships' ratings and reviews that are collected on Edmunds.com's website, apps and tools. 

These resources are accessible on the left.

