---
layout: api-documentation
title : 'Find Videos by Make/Model'
title_active_left_menu: 'Videos'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Find Videos by Make/Model'
spec: videos
version: v2
api: media
dropdown-link: 'api/media/v2/{make}/{model}/videos'

level: 4
description_edpoint: 'Find Videos by Make/Model'
title_md : Response format
number: 3

---


### Response format

#### JSON Response w/ view=basic (default)

    {
        "videos": [
            {
                "videoType": {string},
                "title": {string},
                "category": {string},
                "tags": [
                    {string},
                ],
                "provider": {string},
                "sources": [
                    {
                        "link": {
                            "rel": {string},
                            "href": {string}
                        },
                        "extension": {string}
                    },
                    ...
                ],
            },
            ...
        ],
        "videosCount": {integer},
        "links": [
            {
                "rel": {string},
                "href": {string}
            },
            ...
        ]
    }


| Property                      | Description                                                     | Visibility                |
|:------------------------------|:----------------------------------------------------------------|:--------------------------|
| title                         | The video title                                                 | Edmunds, Partners, Public |
| category                      | The video category                                              | Edmunds, Partners, Public |
| tags                          | The list of tags                                                | Edmunds, Partners, Public |
| provider                      | The video provider                                              | Edmunds, Partners, Public |
| link                          | The list of URLs for videos                                     | Edmunds, Partners, Public |
| extension                     | The media item extension                                        | Edmunds, Partners, Public |
| size                          | The size of thumbnail                                           | Edmunds, Partners, Public |
| videosCount                   | The videos count                                                | Edmunds, Partners, Public |
| videoType                     | The video type                                                  | Edmunds, Partners, Public |
| videoId                       | The video ID                                                    | Edmunds, Partners, Public |
| brightcoveVideoId             | The video ID in Brightcove                                      | Edmunds, Partners, Public |
| links                         | The pagination links                                            | Edmunds, Partners, Public |


#### JSON Response w/ view=full

    {
        "videos": [
            {
                "videoType": {string},
                "title": {string},
                "category": {string},
                "tags": [
                    {string},
                ],
                "provider": {string},
                "sources": [
                    {
                        "link": {
                            "rel": {string},
                            "href": {string}
                        },
                        "extension": {string}
                    },
                    ...
                ],
                "thumbnails": [
                    {
                        "link": {
                            "rel": {string},
                            "href": {string}
                        },
                        "extension": {string},
                        "size": {
                            "width": {integer},
                            "height": {integer}
                        }
                    },
                    ...
                ]
            },
            ...
        ],
        "videosCount": {integer},
        "links": [
            {
                "rel": {string},
                "href": {string}
            },
            ...
        ]
    }

| Property                      | Description                                                     | Visibility                |
|:------------------------------|:----------------------------------------------------------------|:--------------------------|
| title                         | The video title                                                 | Edmunds, Partners, Public |
| category                      | The video category                                              | Edmunds, Partners, Public |
| tags                          | The list of tags                                                | Edmunds, Partners, Public |
| provider                      | The video provider                                              | Edmunds, Partners, Public |
| link                          | The list of URLs for videos                                     | Edmunds, Partners, Public |
| extension                     | The media item extension                                        | Edmunds, Partners, Public |
| size                          | The size of thumbnail                                           | Edmunds, Partners, Public |
| videosCount                   | The videos count                                                | Edmunds, Partners, Public |
| videoType                     | The video type                                                  | Edmunds, Partners, Public |
| thumbnails                    | The list of thumbnails for this video                           | Edmunds, Partners, Public |
| videoId                       | The video ID                                                    | Edmunds, Partners, Public |
| brightcoveVideoId             | The video ID in Brightcove                                      | Edmunds, Partners, Public |
| links                         | The pagination links                                            | Edmunds, Partners, Public |

