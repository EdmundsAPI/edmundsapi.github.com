---
layout: api-documentation
title : 'Photos'
title_active_left_menu: 'Photos'
title_parent: Api documentation

amount_version: 2
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

* [Get photos by style id](/api-documentation/media/photos/v2/02_photos_by_style_id/api-description.html)
* [Get photos by make/model/year](/api-documentation/media/photos/v2/04_photos_by_make_model_year/api-description.html)

### Examples

#### Example 1: Get photos by make/model/year

> https://api.edmunds.com/api/media/v2/honda/civic/2013/photos?api_key={api_key}

#### Example 2: Get photos by style ID

> https://api.edmunds.com/api/media/v2/styles/200692674/photos?api_key={api_key}

### Media Base URL

The photos returned from this endpoint come in URL stub format, for example '/audi/s7/2013/oem/2013_audi_s7_sedan_prestige_fq_oem_6_1600.jpg'. The base URL for media/photos is <code>http://media.ed.edmunds-media.com</code> or <code>https://media.ed.edmunds-media.com</code> so the above Audi photo can be found at [http://media.ed.edmunds-media.com/audi/s7/2013/oem/2013_audi_s7_sedan_prestige_fq_oem_6_1600.jpg](http://media.ed.edmunds-media.com/audi/s7/2013/oem/2013_audi_s7_sedan_prestige_fq_oem_6_1600.jpg) or [https://media.ed.edmunds-media.com/audi/s7/2013/oem/2013_audi_s7_sedan_prestige_fq_oem_6_1600.jpg](https://media.ed.edmunds-media.com/audi/s7/2013/oem/2013_audi_s7_sedan_prestige_fq_oem_6_1600.jpg).

### Photo's width/height

| Width      | Height    |
|:-----------|:----------|
| 87         | 58        |
| 98         | 65        |
| 131        | 87        |
| 150        | 100       |
| 175        | 117       |
| 185        | 123       |
| 196        | 131       |
| 276        | 184       |
| 300        | 200       |
| 360        | 220       |
| 396        | 264       |
| 400        | 267       |
| 423        | 282       |
| 500        | 333       |
| 560        | 360       |
| 600        | 400       |
| 600        | 263       |
| 650        | 420       |
| 717        | 478       |
| 815        | 543       |
| 1024       | 1024      |
| 1280       | 855       |
| 1600       | 1067      |
| 2048       | 1364      |


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
