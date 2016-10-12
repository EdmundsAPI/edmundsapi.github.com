---
layout: api-documentation
title : 'Find Photos by Style ID'
title_active_left_menu: 'Photos'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Photos by Style ID'
spec: photos
version: v2
api: media
dropdown-link: 'api/media/v2/styles/{styleId}/photos'

level: 4
description_edpoint: 'Find Photos by Style ID'
title_md : Sample Request
number: 4

---


### Sample Request

Find Photos for Style with ID **200692674**

#### Basic request

#### URL

    https://api.edmunds.com/api/media/v2/styles/200692674/photos?api_key={api_key}&fmt=json

#### Response

    {
        "photos": [
            {
                "title": "2014 BMW 4 Series 435i Coupe Exterior",
                "category": "EXTERIOR",
                "tags": [
                    "bmw",
                    "bmw-4-series",
                    "2014-bmw-4-series"
                ],
                "provider": "OEM",
                "sources": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "/bmw/4-series/2014/oem/2014_bmw_4-series_coupe_435i_fq_oem_2_98.jpg"
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
                            "href": "/bmw/4-series/2014/oem/2014_bmw_4-series_coupe_435i_fq_oem_2_1280.jpg"
                        },
                        "extension": "JPG",
                        "size": {
                            "width": 1280,
                            "height": 854
                        }
                    }
                ],
                "color": "Mineral Grey Metallic",
                "submodels": [
                    "4 Series Coupe"
                ],
                "shotTypeAbbreviation": "FQ"
            },
            ...
            {
                "title": "2014 BMW 4 Series 435i Coupe Cupholders",
                "category": "INTERIOR",
                "tags": [
                    "bmw",
                    "bmw-4-series",
                    "2014-bmw-4-series"
                ],
                "provider": "OEM",
                "sources": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "/bmw/4-series/2014/oem/2014_bmw_4-series_coupe_435i_cup_oem_1_98.jpg"
                        },
                        "extension": "JPG",
                        "size": {
                            "width": 98,
                            "height": 65
                        }
                    },
                    ...
                ],
                "color": "Mineral Grey Metallic",
                "submodels": [
                    "4 Series Coupe"
                ],
                "shotTypeAbbreviation": "CUP"
            }
        ],
        "photosCount": 285,
        "links": [
            {
                "rel": "first",
                "href": "/api/media/v2/styles/200692674/photos?pagesize=10&pagenum=1&api_key={api_key}&fmt=json"
            },
            {
                "rel": "next",
                "href": "/api/media/v2/styles/200692674/photos?pagesize=10&pagenum=2&api_key={api_key}&fmt=json"
            },
            {
                "rel": "last",
                "href": "/api/media/v2/styles/200692674/photos?pagesize=10&pagenum=29&api_key={api_key}&fmt=json"
            }
        ]
    }


#### Full request

#### URL

    https://api.edmunds.com/api/media/v2/styles/200692674/photos?view=full&api_key={api_key}&fmt=json

#### Response

    {
        "photos": [
            {
                "title": "2014 BMW 4 Series 435i Coupe Exterior",
                "category": "EXTERIOR",
                "tags": [
                    "bmw",
                    "bmw-4-series",
                    "2014-bmw-4-series"
                ],
                "provider": "OEM",
                "uploadDate": 1375899187000,
                "sources": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "/bmw/4-series/2014/oem/2014_bmw_4-series_coupe_435i_fq_oem_2_98.jpg"
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
                            "href": "/bmw/4-series/2014/oem/2014_bmw_4-series_coupe_435i_fq_oem_2_1280.jpg"
                        },
                        "extension": "JPG",
                        "size": {
                            "width": 1280,
                            "height": 854
                        }
                    }
                ],
                "color": "Mineral Grey Metallic",
                "submodels": [
                    "4 Series Coupe"
                ],
                "shotTypeAbbreviation": "FQ",
                "vdpOrder": 2,
                "authors": [
                    "BMW North America, Inc."
                ],
                "originalSize": {
                    "width": 2400,
                    "height": 1600
                }
            },
            ...
            {
                "title": "2014 BMW 4 Series 435i Coupe Exterior",
                "category": "EXTERIOR",
                "tags": [
                    "bmw",
                    "bmw-4-series",
                    "2014-bmw-4-series"
                ],
                "provider": "OEM",
                "uploadDate": 1375899182000,
                "sources": [
                    {
                        "link": {
                            "rel": "self",
                            "href": "/bmw/4-series/2014/oem/2014_bmw_4-series_coupe_435i_fq_oem_1_98.jpg"
                        },
                        "extension": "JPG",
                        "size": {
                            "width": 98,
                            "height": 65
                        }
                    },
                    ...
                ],
                "color": "Mineral Grey Metallic",
                "submodels": [
                    "4 Series Coupe"
                ],
                "shotTypeAbbreviation": "FQ",
                "vdpOrder": 1,
                "authors": [
                    "BMW North America, Inc."
                ],
                "originalSize": {
                    "width": 2400,
                    "height": 1600
                }
            }
        ],
        "photosCount": 285,
        "links": [
            {
                "rel": "first",
                "href": "/api/media/v2/styles/200692674/photos?view=full&pagesize=10&pagenum=1&api_key={api_key}&fmt=json"
            },
            {
                "rel": "next",
                "href": "/api/media/v2/styles/200692674/photos?view=full&pagesize=10&pagenum=2&api_key={api_key}&fmt=json"
            },
            {
                "rel": "last",
                "href": "/api/media/v2/styles/200692674/photos?view=full&pagesize=10&pagenum=29&api_key={api_key}&fmt=json"
            }
        ]
    }
