---
layout: api-documentation

title : Editorial API
title_active_left_menu: Editorial API
title_parent: Api documentation

level: 1
---

<a name="top"> </a>

### Page Content

* [Overview](#sec-1)
* [Quick Start](#sec-2)
* [Special Requirements](#sec-3)
* [Available Resources](#sec-4)
* [API Uses](#sec-5)

<a name='sec-1'> </a>

---

### Overview

The Editorial API offers access to Edmunds.com's award-winning editorial content, including articles, editor reviews and road tests. This shouldn't be confused with *consumer-generated* [vehicle rating and reviews](/api-documentation/vehicle/content_ratings_and_reviews/v2/) and [dealership ratings and reviews](/api-documentation/dealer/ratings_and_reviews/v1/). The content in the Editorial API is created and managed by the Edmunds.com editorial team.

If you haven't yet, this might be a good time to read the [API Overview](/api-documentation/overview/) page to familiarize yourself with some of the core concepts required to using the API.<a name='sec-2'> </a>

[Back to top](#top)

### Quick Start

Let's get right to it, shall we? Here's a few REST calls that should get you started using the API with ease. You could copy and paste these calls into your browser, add your *API key* to them and then press ENTER! . It will make your development life with the Edmunds API much easier :)

#### Example 1: Get the *Edmunds Expert Content* of the ***Honda Civic 2018***

> https://api.edmunds.com/api/editorial/v3/makes/honda/models/civic/years/2020/expertcontent?api_key={API key}

#### Example 2: Get the *Edmunds model/year overview* of the ***Honda Civic 2025***

> https://api.edmunds.com/api/editorial/v3/honda/civic/2025?api_key={API key}

<a name='sec-3'> </a>

[Back to top](#top)

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

Each Article should be refreshed not less often than once every 30 days, in order to obtain updates and revisions by Edmunds.com.<a name='sec-4'> </a>

[Back to top](#top)

### Available Resources

The Editorial API has two resources:

| Resource Name                                                     | Description                                                                   |
|:------------------------------------------------------------------|:------------------------------------------------------------------------------|
| [Articles](/api-documentation/editorial/articles/v3/)             | Current editorial review and rating content by the vehicle's make/model/year. |
| [Expert Content](/api-documentation/editorial/expert_content/v3/) | Get expert content for make/model/year.                                       |

<a name='sec-5'> </a>

[Back to top](#top)

### API Uses

* Get current editorial review and rating content for a specific make/model/year
* Get the Expert content of a specific make/model/year

[Back to top](#top)
