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
title_md : Sample Request
number: 4

---


###Sample Request

Find Videos for **Honda Civic**

#### Basic request

#### URL

    https://api.edmunds.com/api/media/v2/honda/civic/videos?api_key={api key}

#### Response

    {
        "videos": [
            {
                "videoType": "EDITORIAL",
                "tags": [
                    "honda",
                    "honda-civic",
                    "2013-honda-civic"
                ],
                "provider": "MODELREVIEWS",
                "sources": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "http://video.edmunds.com/57837993001/57837993001_2400167874001_2013-honda-civic-modelreviews-521131-9998.mp4"
                        },
                        "extension": "MP4",
                        "videoId": 2400161700001,
                        "brightcoveVideoId": 2400161702001
                    }
                ]
            },
            {
                "videoType": "EDITORIAL",
                "tags": [
                    "honda"
                ],
                "provider": "MODELREVIEWS",
                "sources": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "http://video.edmunds.com/57837993001/57837993001_1458696811001_honda-civic-modelreviews-217121-9998.mp4"
                        },
                        "extension": "MP4",
                        "videoId": 1458688712001,
                        "brightcoveVideoId": 1458690121001
                    }
                ]
            }
        ],
        "videosCount": 2,
        "links": [
            {
                "rel": "first",
                "href": "/api/media/v2/honda/civic/videos?pagesize=10&pagenum=1&api_key={api key}"
            },
            {
                "rel": "last",
                "href": "/api/media/v2/honda/civic/videos?pagesize=10&pagenum=1&api_key={api key}"
            }
        ]
    }


#### Full request

#### URL

    https://api.edmunds.com/api/media/v2/honda/civic/videos?view=full&api_key={api key}

#### Response

    {
        "videos": [
            {
                "videoType": "EDITORIAL",
                "tags": [
                    "honda",
                    "honda-civic",
                    "2013-honda-civic"
                ],
                "provider": "MODELREVIEWS",
                "uploadDate": 1369181743000,
                "sources": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "http://video.edmunds.com/57837993001/57837993001_2400167874001_2013-honda-civic-modelreviews-521131-9998.mp4"
                        },
                        "extension": "MP4",
                        "videoId": 2400161700001,
                        "brightcoveVideoId": 2400161702001
                    }
                ],
                "thumbnails": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "/honda/civic/2013/modelreviews/2013_honda_civic_f34_modelreviews_521131_98.jpg"
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
                            "href": "/honda/civic/2013/modelreviews/2013_honda_civic_f34_modelreviews_521131_1280.jpg"
                        },
                        "extension": "JPG",
                        "size": {
                            "width": 1280,
                            "height": 854
                        }
                    }
                ]
            },
            {
                "videoType": "EDITORIAL",
                "tags": [
                    "honda"
                ],
                "provider": "MODELREVIEWS",
                "uploadDate": 1369181743000
                "sources": [
                    {
                        "link": {
                            "rel": "self",
                            "http://video.edmunds.com/57837993001/57837993001_1458696811001_honda-civic-modelreviews-217121-9998.mp4"
                        },
                        "extension": "MP4",
                        "videoId": 1458688712001,
                        "brightcoveVideoId": 1458690121001
                    }
                ],
                "thumbnails": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "/honda/civic/modelreviews/honda_civic_actf34_modelreviews_217121_98.jpg"
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
        "videosCount": 2,
        "links": [
            {
                "rel": "first",
                "href": "/api/media/v2/honda/civic/videos?view=full&pagesize=10&pagenum=1&api_key={api key}"
            },
            {
                "rel": "last",
                "href": "/api/media/v2/honda/civic/videos?view=full&pagesize=10&pagenum=1&api_key={api key}"
            }
        ]
    }
