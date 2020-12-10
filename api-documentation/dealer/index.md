---
layout: api-documentation

title : Dealer API
title_active_left_menu: Dealer API
title_parent: Api documentation

level: 1
---

<a name="top"> </a>

### Page Content

* [Overview](#sec-1)
* [Quick Start](#sec-2)
* [API Uses](#sec-3)
* [Available Resources](#sec-4)

<p><a name='sec-1'> </a></p>

---


### Overview

The Dealer API is comprised of a collection of resources that provide access to an array of datasets _related directly to the automotive dealership_.

**Please note** that *dealer inventories* aren't available in this API. They are available in the [Inventory API](/api-documentation/inventory/).

If you haven't yet, this might be a good time to read the [API Overview](/api-documentation/overview/) page to familiarize yourself with some of the core concepts required to using the API.<a name='sec-2'> </a>

[Back to top](#top)

### Quick Start

Let's get right to it, shall we? Here's a few REST calls that should get you started using the API with ease. You could copy and paste these calls into your browser, add your *API key* to them and then press ENTER! Once you're comfortable with these calls, you should think about downloading our [Javascript SDK](https://github.com/EdmundsAPI/sdk-javascript). It will make your development life with the Edmunds API much easier :)

#### Example 1: Get a list of all dealerships within 10 miles from 90019 that sell or service Hondas

> https://api.edmunds.com/api/dealer/v2/dealers?zipcode=90019&make=honda&radius=10&fmt=json&api_key={your API key}

#### Example 2: Get a dealership 5 most recent sales and service consumer ratings and reviews by the dealer ID

> https://api.edmunds.com/v1/api/drrrepository/getdrrbydealerid?dealerid=26643&limit=0%2C5&fmt=json&api_key={your API key}

<a name='sec-3'> </a>

[Back to top](#top)

### API Uses

* Get all dealerships within a certain zip code and radius
* Get all dealerships by the kinds of cars they sell
* Get consumer ratings and reviews of a dealership by its Edmunds ID
* Get consumer ratings and reviews of dealerships by their car makes and the zip code they're in

<a name='sec-4'> </a>

[Back to top](#top)

### Available Resources

The Dealer API has two resources:

| Resource Name  	| Description                           |
|:------------------|:--------------------------------------|
| [Dealer Ratings and Reviews](/api-documentation/dealer/ratings_and_reviews/v1/) | This is where you can get dealerships' ratings and reviews that are collected on Edmunds.com's website, apps and tools. |
| [Dealer Details](/api-documentation/dealer/details_and_location/v2/) | This is where you can get dealerships' name, location, operating hours, contact information, etc. by zip code and optionally the cars they sell. |
| [Dealer Franchises Details](/api-documentation/dealer/details_and_location/v5/) | This is where you can get dealerships' name, location, operating hours, contact information,franchises etc. by zip code and optionally the cars they sell. |

[Back to top](#top)
