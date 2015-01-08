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
title_md : Sample Request
number: 4

---


###Sample Request

Find Media by tag **mazda**

#### Basic request

#### URL

    https://api.edmunds.com/api/media/v2?tag=mazda&api_key={api key}

#### Response

    {
        "photos": {
            "items": [
                {
                    "title": "2007 Mazda MAZDA6 s 3.0L V6 Engine",
                    "category": "EXTERIOR",
                    "tags": [
                        "mazda",
                        "mazda-mazda6",
                        "2007-mazda-mazda6"
                    ],
                    "provider": "OEM",
                    "sources": [
                        {
                            "link": {
                                "rel": "self",
                                "href": "/mazda/mazda6/2007/oem/2007_mazda_mazda6_4dr-hatchback_s-grand-touring_e_oem_1_98.jpg"
                            },
                            "extension": "JPG",
                            "size": {
                                "width": 98,
                                "height": 65
                            },
                        },
                        ...
                        {
                            "link": {
                                "rel": "self",
                                "href": "/mazda/mazda6/2007/oem/2007_mazda_mazda6_4dr-hatchback_s-grand-touring_e_oem_1_1280.jpg"
                            },
                            "extension": "JPG",
                            "size": {
                                "width": 1280,
                                "height": 854
                            }
                        }
                    ],
                    "color": "Volcanic Red",
                    "submodels": [
                    ],
                    "shotTypeAbbreviation": "E"
                },
                ...
                {
                    "title": "2007 Mazda MAZDA6 s Grand Touring 4dr Hatchback Exterior",
                    "category": "EXTERIOR",
                    "tags": [
                        "mazda",
                        "mazda-mazda6",
                        "2007-mazda-mazda6"
                    ],
                    "provider": "OEM",
                    "sources": [
                        {
                            "link": {
                                "rel": "self",
                                "href": "/mazda/mazda6/2007/oem/2007_mazda_mazda6_4dr-hatchback_s-grand-touring_fq_oem_1_98.jpg"
                            },
                            "extension": "JPG",
                            "size": {
                                "width": 98,
                                "height": 65
                            }
                        },
                        ...
                    ],
                    "color": "Volcanic Red",
                    "submodels": [
                    ],
                    "shotTypeAbbreviation": "FQ"
                }
            ],
            "count": 15495,
            "links": [
                {
                    "rel": "first",
                    "href": "/api/media/v2/photos?tag=mazda&pagesize=10&pagenum=1&api_key={api key}"
                },
                {
                    "rel": "next",
                    "href": "/api/media/v2/photos?tag=mazda&pagesize=10&pagenum=2&api_key={api key}"
                },
                {
                    "rel": "last",
                    "href": "/api/media/v2/photos?tag=mazda&pagesize=10&pagenum=1550&api_key={api key}"
                }
            ]
        },
        "videos": {
            "items": [
                {
                    "videoType": "EDITORIAL",
                    "tags": [
                        "mazda",
                        "mazda-3",
                        "2014-mazda-3"
                    ],
                    "provider": "MODELREVIEWS",
                    "sources": [
                        {
                            "link": {
                                "rel": "self",
                                "href": "http://video.edmunds.com/57837993001/201312/255/57837993001_2956914722001_2014-mazda-3-modelreviews-1220131-9998.mp4"
                            },
                            "extension": "MP4",
                            "videoId": 2956907218001,
                            "brightcoveVideoId": 2956907231001
                        }
                    ]
                },
                ...
                {
                    "videoType": "EDITORIAL",
                    "tags": [
                        "mazda",
                        "mazda-6",
                        "2013-mazda-6"
                    ],
                    "provider": "MODELREVIEWS",
                    "sources": [
                        {
                            "link": {
                                "rel": "self",
                                "href": "http://video.edmunds.com/57837993001/57837993001_2480309103001_2013-mazda-6-modelreviews-614131-9998.mp4"
                            },
                            "extension": "MP4"
                            "videoId": 2480281558001,
                            "brightcoveVideoId": 2480310235001
                        }
                    ]
                }
            ],
            "count": 5,
            "links": [
                {
                    "rel": "first",
                    "href": "/api/media/v2/videos?tag=mazda&pagesize=10&pagenum=1&api_key={api key}"
                },
                {
                    "rel": "next",
                    "href": "/api/media/v2/videos?tag=mazda&pagesize=10&pagenum=2&api_key={api key}"
                },
                {
                    "rel": "last",
                    "href": "/api/media/v2/videos?tag=mazda&pagesize=10&pagenum=45&api_key={api key}"
                }
            ]
        },
        "totalCount": 15497
    }

#### Full request

#### URL

    https://api.edmunds.com/api/media/v2?tag=mazda&view=full&api_key={api key}

#### Response

    {
        "photos": {
            "items": [
                {
                    "title": "2007 Mazda MAZDA6 s 3.0L V6 Engine",
                    "category": "EXTERIOR",
                    "tags": [
                        "mazda",
                        "mazda-mazda6",
                        "2007-mazda-mazda6"
                    ],
                    "provider": "OEM",
                    "sources": [
                        {
                            "link": {
                                "rel": "self",
                                "href": "/mazda/mazda6/2007/oem/2007_mazda_mazda6_4dr-hatchback_s-grand-touring_e_oem_1_98.jpg"
                            },
                            "extension": "JPG",
                            "size": {
                                "width": 98,
                                "height": 65
                            },
                        },
                        ...
                        {
                            "link": {
                                "rel": "self",
                                "href": "/mazda/mazda6/2007/oem/2007_mazda_mazda6_4dr-hatchback_s-grand-touring_e_oem_1_1280.jpg"
                            },
                            "extension": "JPG",
                            "size": {
                                "width": 1280,
                                "height": 854
                            }
                        }
                    ],
                    "color": "Volcanic Red",
                    "submodels": [
                    ],
                    "shotTypeAbbreviation": "E"
                },
                ...
                {
                    "title": "2007 Mazda MAZDA6 s Grand Touring 4dr Hatchback Exterior",
                    "category": "EXTERIOR",
                    "tags": [
                        "mazda",
                        "mazda-mazda6",
                        "2007-mazda-mazda6"
                    ],
                    "provider": "OEM",
                    "sources": [
                        {
                            "link": {
                                "rel": "self",
                                "href": "/mazda/mazda6/2007/oem/2007_mazda_mazda6_4dr-hatchback_s-grand-touring_fq_oem_1_98.jpg"
                            },
                            "extension": "JPG",
                            "size": {
                                "width": 98,
                                "height": 65
                            }
                        },
                        ...
                    ],
                    "color": "Volcanic Red",
                    "submodels": [
                    ],
                    "shotTypeAbbreviation": "FQ"
                }
            ],
            "count": 15495,
            "links": [
                {
                    "rel": "first",
                    "href": "/api/media/v2/photos?tag=mazda&pagesize=10&pagenum=1&api_key={api key}"
                },
                {
                    "rel": "next",
                    "href": "/api/media/v2/photos?tag=mazda&pagesize=10&pagenum=2&api_key={api key}"
                },
                {
                    "rel": "last",
                    "href": "/api/media/v2/photos?tag=mazda&pagesize=10&pagenum=1550&api_key={api key}"
                }
            ]
        },
        "videos": {
            "items": [
                {
                    "videoType": "EDITORIAL",
                    "tags": [
                        "mazda",
                        "mazda-3",
                        "2014-mazda-3"
                    ],
                    "provider": "MODELREVIEWS",
                    "uploadDate": 1387588750000,
                    "sources": [
                        {
                            "link": {
                                "rel": "self",
                                "href": "http://video.edmunds.com/57837993001/201312/255/57837993001_2956914722001_2014-mazda-3-modelreviews-1220131-9998.mp4"
                            },
                            "extension": "MP4",
                            "videoId": 2956907218001,
                            "brightcoveVideoId": 2956907231001
                        }
                    ],
                "thumbnails": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "/mazda/3/2014/modelreviews/2014_mazda_3_prf_modelreviews_1220131_98.jpg"
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
                            "href": "/mazda/3/2014/modelreviews/2014_mazda_3_prf_modelreviews_1220131_1280.jpg"
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
                        "mazda",
                        "mazda-6",
                        "2013-mazda-6"
                    ],
                    "provider": "MODELREVIEWS",
                    "uploadDate": 1345146659000,
                    "sources": [
                        {
                            "link": {
                                "rel": "self",
                                "href": "http://video.edmunds.com/57837993001/57837993001_2480309103001_2013-mazda-6-modelreviews-614131-9998.mp4"
                            },
                            "extension": "MP4"
                            "videoId": 2480281558001,
                            "brightcoveVideoId": 2480310235001
                        }
                    ],
                "thumbnails": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "/mazda/6/2014/fd/2014_mazda_6_actf34_fd_1002127_98.jpg"
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
            "count": 5,
            "links": [
                {
                    "rel": "first",
                    "href": "/api/media/v2/videos?tag=mazda&view=full&pagesize=10&pagenum=1&api_key={api key}"
                },
                {
                    "rel": "last",
                    "href": "/api/media/v2/videos?tag=mazda&view=full&pagesize=10&pagenum=1&api_key={api key}"
                }
            ]
        },
        "totalCount": 15497
    }
