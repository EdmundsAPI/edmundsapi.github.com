---
layout: api-documentation
title : 'Find Media by tags'
title_active_left_menu: 'Media (Both photos and videos)'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Find Media by tags'
spec: all_media
version: v2
api: media
dropdown-link: 'api/media/v2?tag={tag}'

level: 4
description_edpoint: 'Find Media by tags'
title_md : Response format
number: 3

---


### Response format

#### JSON Response w/ view=basic (default)

    {
        "photos": {
            "items": [
                {
                    "title": {string},
                    "category": {string},
                    "tags": [
                        {string}
                    ],
                    "provider": {string},
                    "sources": [
                        {
                            "link": {
                                "rel": {string},
                                "href": {string}
                            },
                            "extension": {string},
                            "size": {
                                "width": {integer},
                                "height": {integer}
                            },
                        },
                        ...
                    ],
                    "color": {string},
                    "submodels": [
                        {string}
                    ],
                    "shotTypeAbbreviation": {string},
                },
                ...
            ],
            "count": {integer},
            "links": [
                {
                    "rel": {string},
                    "href": {string}
                },
                ...
            ]
        },
        "videos": {
            "items": [
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
                        }
                        ...
                    ],
                },
                ...
            ],
            "count": {integer},
            "links": [
                {
                    "rel": {string},
                    "href": {string}
                },
                ...
            ]
        },
        "totalCount": {integer}
    }


| Property                      | Description                                                     | Visibility                |
|:------------------------------|:----------------------------------------------------------------|:--------------------------|
| title                         | The media item title                                            | Edmunds, Partners, Public |
| category                      | The media item category                                         | Edmunds, Partners, Public |
| tags                          | The list of tags                                                | Edmunds, Partners, Public |
| provider                      | The media item provider                                         | Edmunds, Partners, Public |
| link                          | The list of URLs for media items                                | Edmunds, Partners, Public |
| extension                     | The media item extension                                        | Edmunds, Partners, Public |
| size                          | The size of photo                                               | Edmunds, Partners, Public |
| shotTypeAbbreviation          | Shot type abbreviation for photo                                | Edmunds, Partners, Public |
| color                         | The vehicle color                                               | Edmunds, Partners, Public |
| submodels                     | The list of submodels                                           | Edmunds, Partners, Public |
| count                         | The photos or videos count                                      | Edmunds, Partners, Public |
| videoType                     | The video type                                                  | Edmunds, Partners, Public |
| thumbnails                    | The list of thumbnails for this video                           | Edmunds, Partners, Public |
| videoId                       | The video ID                                                    | Edmunds, Partners, Public |
| brightcoveVideoId             | The video ID in Brightcove                                      | Edmunds, Partners, Public |
| links                         | The pagination links                                            | Edmunds, Partners, Public |


#### JSON Response w/ view=full

    {
        "photos": {
            "items": [
                {
                    "title": {string},
                    "category": {string},
                    "tags": [
                        {string}
                    ],
                    "provider": {string},
                    "uploadDate": {long},
                    "sources": [
                        {
                            "link": {
                                "rel": {string},
                                "href": {string}
                            },
                            "extension": {string},
                            "size": {
                                "width": {integer},
                                "height": {integer}
                            },
                        },
                        ...
                    ],
                    "color": {string},
                    "submodels": [
                        {string}
                    ],
                    "shotTypeAbbreviation": {string},
                    "vdpOrder": {integer},
                    "authors": [
                        {string}
                    ],
                    "originalSize": {
                        "width": {integer},
                        "height": {integer}
                    }
                },
                ...
            ],
            "count": {integer},
            "links": [
                {
                    "rel": {string},
                    "href": {string}
                },
                ...
            ]
        },
        "videos": {
            "items": [
                {
                    "videoType": {string},
                    "title": {string},
                    "category": {string},
                    "tags": [
                        {string},
                    ],
                    "provider": {string},
                    "uploadDate": {long},
                    "sources": [
                        {
                            "link": {
                                "rel": {string},
                                "href": {string}
                            },
                            "extension": {string}
                        }
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
            "count": {integer},
            "links": [
                {
                    "rel": {string},
                    "href": {string}
                },
                ...
            ]
        },
        "totalCount": {integer}
    }


| Property                      | Description                                                     | Visibility                |
|:------------------------------|:----------------------------------------------------------------|:--------------------------|
| title                         | The media item title                                            | Edmunds, Partners, Public |
| category                      | The media item category                                         | Edmunds, Partners, Public |
| tags                          | The list of tags                                                | Edmunds, Partners, Public |
| provider                      | The media item provider                                         | Edmunds, Partners, Public |
| link                          | The list of URLs for media items                                | Edmunds, Partners, Public |
| extension                     | The media item extension                                        | Edmunds, Partners, Public |
| size                          | The size of photo                                               | Edmunds, Partners, Public |
| shotTypeAbbreviation          | Shot type abbreviation for photo                                | Edmunds, Partners, Public |
| uploadDate                    | The date of publishing                                          | Edmunds, Partners, Public |
| color                         | The vehicle color                                               | Edmunds, Partners, Public |
| submodels                     | The list of submodels                                           | Edmunds, Partners, Public |
| vdpOrder                      | VDP order for EMIMS documents                                   | Edmunds, Partners, Public |
| authors                       | The author's names for this photo                               | Edmunds, Partners, Public |
| originalSize                  | The size of original photo                                      | Edmunds, Partners, Public |
| count                         | The photos or videos count                                      | Edmunds, Partners, Public |
| videoType                     | The video type                                                  | Edmunds, Partners, Public |
| thumbnails                    | The list of thumbnails for this video                           | Edmunds, Partners, Public |
| videoId                       | The video ID                                                    | Edmunds, Partners, Public |
| brightcoveVideoId             | The video ID in Brightcove                                      | Edmunds, Partners, Public |
| links                         | The pagination links                                            | Edmunds, Partners, Public |




