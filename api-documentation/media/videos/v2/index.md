---
layout: api-documentation
title : 'Videos'
title_active_left_menu: 'Videos'
title_parent: Api documentation

amount_version: 1
spec: videos
version: v2
api: media
dropdown-link: 'Select an Endpoint'

level: 2
overview: page_version
---

<div class="info-message">
    Get videos.
</div>

### Endpoints

* [Get videos by tags](/api-documentation/media/videos/v2/01_videos_by_tags/api-description.html)
* [Get videos by style id](/api-documentation/media/videos/v2/02_videos_by_style_id/api-description.html)
* [Get videos by make/model](/api-documentation/media/videos/v2/03_videos_by_make_model/api-description.html)
* [Get videos by make/model/year](/api-documentation/media/videos/v2/04_videos_by_make_model_year/api-description.html)

###Examples

#### Example 1: Get videos by tags
    
> https://api.edmunds.com/api/media/v2/videos?tag=acura&api_key={api_key}

#### Example 2: Get videos by make/model/year

> https://api.edmunds.com/api/media/v2/acura/ilx/2013/videos?api_key={api_key}

#### Example 3: Get videos by make/model

> https://api.edmunds.com/api/media/v2/honda/civic/videos?api_key={api_key}

#### Example 4: Get videos by style ID

> https://api.edmunds.com/api/media/v2/styles/200692674/videos?api_key={api_key}

