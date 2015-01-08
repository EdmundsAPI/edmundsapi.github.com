---
layout: api-documentation
title : 'Find Videos by Style ID'
title_active_left_menu: 'Videos'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Find Videos by Style ID'
spec: videos
version: v2
api: media
dropdown-link: 'api/media/v2/styles/{styleId}/videos'

level: 4
description_edpoint: 'Find Videos by Style ID'
title_md : Sample Request
number: 4

---


###Sample Request

Find Videos for Style with ID **200692674**

#### Basic request

#### URL

    https://api.edmunds.com/api/media/v2/styles/200692674/videos?api_key={api key}

#### Response

    {
        "videos": [
            {
                "videoType": "EDITORIAL",
                "tags": [
                    "bmw",
                    "bmw-4-series",
                    "2014-bmw-4-series"
                ],
                "provider": "MODELREVIEWS",
                "sources": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "http://video.edmunds.com/57837993001/201402/706/57837993001_3228710722001_2014-bmw-4-series-modelreviews-21914-9998.mp4"
                        },
                        "extension": "MP4",
                        "videoId": 3228720641001,
                        "brightcoveVideoId": 3228720752001
                    }
                ]
            }
        ],
        "videosCount": 1,
        "links": [
            {
                "rel": "first",
                "href": "/api/media/v2/styles/200692674/videos?pagesize=10&pagenum=1&api_key={api key}"
            },
            {
                "rel": "last",
                "href": "/api/media/v2/styles/200692674/videos?pagesize=10&pagenum=1&api_key={api key}"
            }
        ]
    }


#### Full request

#### URL

    https://api.edmunds.com/api/media/v2/styles/200692674/videos?view=full&api_key={api key}

#### Response

    {
        "videos": [
            {
                "videoType": "EDITORIAL",
                "tags": [
                    "bmw",
                    "bmw-4-series",
                    "2014-bmw-4-series"
                ],
                "provider": "MODELREVIEWS",
                "uploadDate": 1392859956000,
                "sources": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "http://video.edmunds.com/57837993001/201402/706/57837993001_3228710722001_2014-bmw-4-series-modelreviews-21914-9998.mp4"
                        },
                        "extension": "MP4",
                        "videoId": 3228720641001,
                        "brightcoveVideoId": 3228720752001
                    }
                ],
                "thumbnails": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "/bmw/4-series/2014/ft/2014_bmw_4-series_actf34_ft_1227132_98.jpg"
                        },
                        "extension": "JPG",
                        "size": {
                            "width": 98,
                            "height": 65
                        }
                    },
                    ...
                    {
                        "link": {
                            "rel": "self",
                            "href": "/bmw/4-series/2014/ft/2014_bmw_4-series_actf34_ft_1227132_1280.jpg"
                        },
                        "extension": "JPG",
                        "size": {
                            "width": 1280,
                            "height": 854
                        }
                    }
                ]
            }
        ],
        "videosCount": 1,
        "links": [
            {
                "rel": "first",
                "href": "/api/media/v2/styles/200692674/videos?view=full&pagesize=10&pagenum=1&api_key={api key}"
            },
            {
                "rel": "last",
                "href": "/api/media/v2/styles/200692674/videos?view=full&pagesize=10&pagenum=1&api_key={api key}"
            }
        ]
    }
