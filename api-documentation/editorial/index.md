---
layout: api-documentation

title : Editorial API
title_active_left_menu: Editorial API
title_parent: Api documentation

level: 1
---

### Overview

The Editorial API offers access to Edmunds.com's award-winning editorial content, including articles, editor reviews and road tests. This shouldn't be confused with *consumer-generated* [vehicle rating and reviews](/api-documentation/vehicle/ratings_and_reviews/v1/) and [dealership ratings and reviews](/api-documentation/dealer/ratings_and_reviews/v1/). The content in the Editorial API is created and managed by the Edmunds.com editorial team.

If you haven't yet, this might be a good time to read the [API Overview](/api-documentation/overview/) page to familiarize yourself with some of the core concepts required to using the API.

### Quick Start

Let's get right to it, shall we? Here's a few REST calls that should get you started using the API with ease. You could copy and paste these calls into your browser, add your *API key* to them and then press ENTER! Better yet, you could use our [API Console](http://edmunds.mashery.com/io-docs) to make ***live API calls*** of your own. Once you're comfortable with these calls, you should think about downloading our [Javascript SDK](https://github.com/EdmundsAPI/sdk-javascript). It will make your development life with the Edmunds API much easier :)

#### Example 1: Get the latest *five* articles in the ***car news*** category

> https://api.edmunds.com/v1/content/?category=car+news&limit=0%2C5&fmt=json&api_key={your API key}

#### Example 2: Get the latest *ten* articles on ***Lexus RX-350 2013***

> https://api.edmunds.com/v1/content/?make=lexus&model=rx-350&year=2013&limit=0%2C10&fmt=json&api_key={your API key}

#### Example 3: Get the *Edmunds Editor Review* of the ***BMW X5 2013***

> https://api.edmunds.com/v1/content/editorreviews?make=bmw&model=x5&year=2013&fmt=json&api_key={your API key}

### Special Requirements

Edmunds.com’s Editorial Content consists of articles (“Articles”) that are the copyright property of Edmunds.com, Inc., and we have special requirements for the use of the Articles.

#### The following **meta tag** should be added to all of your pages that display an Article:

	<link href="/{URL SUPPLIED WITH THE ARTICLE}" rel="canonical" />
    <!-- The URL SUPPLIED WITH THE ARTICLE is the URL of the content you’re displaying on your site. The URL is provided in the response object you’ll receive when you make a REST call request. -->
    <!-- The meta tag needs to exist in the <head> section of your page. -->
 
Each Article you elect to display **must be displayed in the form it is provided**, i.e., it may not be edited, supplemented or abridged.
 
The “date published” and/or “date revised” that accompanies each Article may not be removed or altered, and should be displayed above the Article.

Each Article should be accredited as follows: **"From Edmunds.com"** at the top of the article (i.e., below the article’s title and above the “date published”), in a font size not smaller than the font size that you use for the text of the Article.

The following notice should be affixed to the end of each Article: **"Copyright Edmunds.com, Inc. All rights reserved. First published on www.edmunds.com and reprinted with permission. Edmunds and the Edmunds.com car logo are registered trademarks of Edmunds.com, Inc."**

Each Article should be refreshed not less often than once every 30 days, in order to obtain updates and revisions by Edmunds.com.

### Available Resources

The Editorial API has two resources:

| Resource Name  	| Description                           |
|:------------------|:--------------------------------------|
| [Articles](/api-documentation/editorial/articles/v1/) | Articles written by the Edmunds staff. These can be found either by article category and/or by the vehicle's make/model/year. |
| [Editor Reviews](/api-documentation/editorial/editor_reviews/v1/) | Edmunds Editor Reviews including pros, cons, "Edmunds Says", and more. Reviews are found by car make/model/year. |

### Available Article Categories

* auto finance
* awards
* best cars lists
* car news
* car buying
* car leasing
* car technology
* driving
* editor reviews
* extended warranties
* fuel economy
* how-to advice
* insurance
* maintenance & repair
* road tests
* selling
* top 10 lists
* vehicle safety
* warranties

### Granular Editor Review Components

When using the **Editor Reviews** resource, you will get the review broken into smaller chunks that makes it easy for you to take what you want out of it. The full review will also be included.

* Pros
* Cons
* Edmunds Says
* Safety
* Powertrain
* What's New
* Driving and Handling
* Video Review
* Full Review


### API Uses

* Get all articles in a specific category
* Get all articles for a specific make/model/year
* Get all articles for a specific make/model/year **and** specific category
* Get the Edmunds Editor Review of a specific make/model/year
