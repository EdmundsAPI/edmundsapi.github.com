---
layout: api-documentation
title : 'Find Videos by tags'
title_active_left_menu: 'Videos'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Find Videos by tags'
spec: videos
version: v2
api: media
dropdown-link: 'api/media/v2/videos?tag={tag}'

level: 4
description_edpoint: 'Find Videos by tags'
title_md : Sample Request
number: 4

---


###Sample Request

Find Videos by tag **acura**

#### Basic request

#### URL

    https://api.edmunds.com/api/media/v2/videos?tag=acura&api_key={api key}

#### Response

    {
        "videos": [
            {
                "videoType": "EDITORIAL",
                "tags": [
                    "acura",
                    "acura-mdx",
                    "2012-acura-mdx"
                ],
                "provider": "MODELREVIEWS",
                "sources": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "http://video.edmunds.com/57837993001/57837993001_1686408683001_2012-acura-mdx-modelreviews-612121-9998.mp4"
                        },
                        "extension": "MP4",
                        "videoId": 1686404100001,
                        "brightcoveVideoId": 1686398377001
                    }
                ]
            },
            ...
            {
                "videoType": "EDITORIAL",
                "tags": [
                    "acura",
                    "acura-ilx",
                    "2013-acura-ilx"
                ],
                "provider": "MODELREVIEWS",
                "sources": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "http://video.edmunds.com/57837993001/57837993001_1789632233001_2013-acura-ilx-modelreviews-816121-9998.mp4"
                        },
                        "extension": "MP4",
                        "videoId": 1789616899001,
                        "brightcoveVideoId": 1789622745001
                    }
                ]
            }
        ],
        "videosCount": 5,
        "links": [
            {
                "rel": "first",
                "href": "/api/media/v2/videos?tag=acura&pagesize=10&pagenum=1&api_key={api key}"
            },
            {
                "rel": "last",
                "href": "/api/media/v2/videos?tag=acura&pagesize=10&pagenum=1&api_key={api key}"
            }
        ]
    }


#### Full request

#### URL

    https://api.edmunds.com/api/media/v2?tag=acura&view=full&api_key={api key}

#### Response

    {
        "videos": [
            {
                "videoType": "EDITORIAL",
                "tags": [
                    "acura",
                    "acura-mdx",
                    "2012-acura-mdx"
                ],
                "provider": "MODELREVIEWS",
                "uploadDate": 1339547067000,
                "sources": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "http://video.edmunds.com/57837993001/57837993001_1686408683001_2012-acura-mdx-modelreviews-612121-9998.mp4"
                        },
                        "extension": "MP4",
                        "videoId": 1686404100001,
                        "brightcoveVideoId": 1686398377001
                    }
                ],
                "thumbnails": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "/acura/mdx/2012/modelreviews/2012_acura_mdx_f34_modelreviews_612121_98.jpg"
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
                            "href": "/acura/mdx/2012/modelreviews/2012_acura_mdx_f34_modelreviews_612121_1280.jpg"
                        },
                        "extension": "JPG",
                        "size": {
                            "width": 1280,
                            "height": 854
                        }
                    }
                ]
            },
            ...
            {
                "videoType": "EDITORIAL",
                "tags": [
                    "acura",
                    "acura-ilx",
                    "2013-acura-ilx"
                ],
                "provider": "MODELREVIEWS",
                "uploadDate": 1345146659000,
                "sources": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "http://video.edmunds.com/57837993001/57837993001_1789632233001_2013-acura-ilx-modelreviews-816121-9998.mp4"
                        },
                        "extension": "MP4",
                        "videoId": 1789616899001,
                        "brightcoveVideoId": 1789622745001
                    }
                ],
                "thumbnails": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "/acura/ilx/2013/modelreviews/2013_acura_ilx_f34_modelreviews_816121_98.jpg"
                        },
                        "extension": "JPG",
                        "size": {
                            "width": 98,
                            "height": 65
                        }
                    },
                    ...
                ]
            }
        ],
        "videosCount": 5,
        "links": [
            {
                "rel": "first",
                "href": "/api/media/v2/videos?tag=acura&view=full&pagesize=10&pagenum=1&api_key={api key}"
            },
            {
                "rel": "last",
                "href": "/api/media/v2/videos?tag=acura&view=full&pagesize=10&pagenum=1&api_key={api key}"
            }
        ]
    }
