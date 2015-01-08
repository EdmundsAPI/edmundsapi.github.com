---
layout: api-documentation
title : 'Photos'
title_active_left_menu: 'Photos'
title_parent: Api documentation

amount_version: 1
spec: photos
version: v2
api: media
dropdown-link: 'Select an Endpoint'

level: 2
overview: page_version
---

<div class="info-message">
    Get photos.
</div>

### Endpoints

* [Get photos by tags](/api-documentation/media/photos/v2/01_photos_by_tags/api-description.html)
* [Get photos by style id](/api-documentation/media/photos/v2/02_photos_by_style_id/api-description.html)
* [Get photos by make/model](/api-documentation/media/photos/v2/03_photos_by_make_model/api-description.html)
* [Get photos by make/model/year](/api-documentation/media/photos/v2/04_photos_by_make_model_year/api-description.html)

###Examples

#### Example 1: Get photos by tags
    
> https://api.edmunds.com/api/media/v2/photos?tag=bmw&api_key={api_key}

#### Example 2: Get photos by make/model/year

> https://api.edmunds.com/api/media/v2/honda/civic/2013/photos?api_key={api_key}

#### Example 3: Get photos by make/model

> https://api.edmunds.com/api/media/v2/acura/ilx/photos?api_key={api_key}

#### Example 4: Get photos by style ID

> https://api.edmunds.com/api/media/v2/styles/200692674/photos?api_key={api_key}


###Photo's width/height

| Width      | Height    |
|:---------- |:----------|
| 87         | 55        |
| 98         | 65        |
| 131        | 87        |
| 150        | 100       |
| 175        | 110       |
| 185        | 123       |
| 196        | 131       |
| 276        | 184       |
| 300        | 200       |
| 396        | 264       |
| 400        | 267       |
| 423        | 282       |
| 500        | 315       |
| 600        | 400       |
| 717        | 478       |
| 815        | 544       |
| 1280       | 854       |
| 1600       | 1067      |


### Photo Shot Types (i.e. *shotTypeAbbreviation*)

Our photos are diverse in terms of the perspective from which they were taken. Here's a list of the all available shot types, which you will find in the API response as the value of the property **shotTypeAbbreviation**:

| Shot Type             | Description                                                                               |
|:----------------------|:------------------------------------------------------------------------------------------|
| FQ                    | Front Quarter view of entire vehicle, usually from the driver's side                      |
| RQ                    | Rear Quarter view of entire vehicle, from either the driver or passenger's side           |
| I                     | Forward Interior Shot showing dash, seats and windshield                                  |
| RI                    | Interior Shot showing rear seats. Can also be taken from outside of vehicle.              |
| S                     | Profile view of entire vehicle; usually left-hand side                                    |
| CARGO                 | Shot of vehicle's trunk, bed, or other primary cargo area                                 |
| E                     | Shot of vehicle's entire engine bay, usually from directly above                          |
| W                     | Shot of vehicle's entire wheel, usually the front-left                                    |
| D                     | Shot of vehicle's entire dashboard, usually taken from the rear-int                       |
| CC                    | Shot of vehicle's center console, usually taken from the rear-int                         |
| F                     | Front end of vehicle. Shot includes rest of body as well, but not in primary focus        |
| R                     | Rear end of vehicle. Shot includes rest of body as well, but not in primary focus         |
| DETAIL                | Detail can be anything interior that has a specific need for attention                    |
| B                     | Close-up of an exterior emblem on the vehicle body. Trim/Engine/Packages, etc.            |
| O                     | Any exterior shot that does not fit into any other type                                   |
| PROFILE               | Additional profile/side view of entire vehicle, from driver or passenger's side           |
