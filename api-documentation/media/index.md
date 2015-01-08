---
layout: api-documentation

title : Media API
title_active_left_menu: Media API
title_parent: Api documentation

level: 1
---

<a name="top"> </a>

### Page Content

* [Overview](#sec-1)
* [Quick Start](#sec-2)
* [API Uses](#sec-3)

<p><a name='sec-1'> </a></p>

---

### Overview

The Media API provides access to inventories photo and video content.

If you haven't yet, this might be a good time to read the [API Overview](/api-documentation/overview/) page to familiarize yourself with some of the core concepts required to using the API.<a name='sec-2'> </a>

[Back to top](#top)

### Quick Start

Let's get right to it, shall we? Here's a few REST calls that should get you started using the API with ease. You could copy and paste these calls into your browser, add your *API key* to them and then press ENTER! Better yet, you could use our [API Console](http://edmunds.mashery.com/io-docs) to make ***live API calls*** of your own. Once you're comfortable with these calls, you should think about downloading our [Javascript SDK](https://github.com/EdmundsAPI/sdk-javascript). It will make your development life with the Edmunds API much easier :)

#### Example 1: Get a list of media items by tag *Acura*

> https://api.edmunds.com/api/media/v2?tag=acura&api_key={your API key}

#### Example 2: Get photos for Honda Civic 2013

> https://api.edmunds.com/api/media/v2/honda/civic/2013/photos?api_key={your API key}

#### Example 3: Get videos for style with id *200692674*

> https://api.edmunds.com/api/media/v2/styles/200692674/videos?api_key={your API key}

<a name='sec-3'> </a>

[Back to top](#top)

### API Uses

Here are some common uses of the Media API:

* Get all media items by tags
* Get photos by tags
* Get videos by style id
* Get photos by vehicle model
* Get videos by vehicle make/mode/year

<a name='sec-4'> </a>

[Back to top](#top)