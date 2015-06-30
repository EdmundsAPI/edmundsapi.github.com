---
layout: api-documentation
title : 'Get articles by tags'
title_active_left_menu: 'Articles'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get articles by tags'
spec: articles
version: v2
api: editorial
dropdown-link: 'api/editorial/v2/articles?tag={tag}'


level: 4
description_edpoint: 'Get articles by tags'
title_md : Sample Request
number: 4

---

###Sample Request

Get Articles for *BMW 3 Series* with *editorial-review* tag.

#### URL

    https://api.edmunds.com/api/editorial/v2/articles?make=bmw&model=3-series&tag=editor-reviews&view=basic&api_key={API key}&fmt=json

#### Response 1

    {
        "articles": [
            {
                "title": "2014 BMW 328i xDrive Gran Turismo Long-Term Road Test",
                "tags": [
                    "long term road tests",
                    "road tests",
                    "2014 BMW 3 Series Gran Turismo",
                    "BMW 328i xDrive Gran Turismo",
                    "editor reviews"
                ],
                "niceNamedTags": [
                    "bmw-328i-xdrive-gran-turismo",
                    "2014-bmw-3-series-gran-turismo",
                    "long-term-road-tests",
                    "road-tests",
                    "editor-reviews"
                ],
                "description": "We spent a year with the 2014 BMW 328i xDrive Gran Turismo. Although it priced out pretty high for a 3 Series, we generally enjoyed our time with it and found it a versatile alternative to the sedan model. ",
                "link": {
                    "rel": "related",
                    "href": http://www.edmunds.com/bmw/3-series-gran-turismo/2014/long-term-road-test/2014-bmw-328i-xdrive-gran-turismo-one-year-with-the-328i-gt
                },
                "authors": [
                ],
                "body": "<h3>2014 BMW 328i xDrive Gran Turismo: One Year With the 328i GT</h3> It's the end of the road. It was an odd-lookin' thing and, loaded with options up to a cool $55,500, wasn't exactly entry-level luxury. But we liked it well enough. It offered loads of rear legroom and more cargo space than the sedan, and in some respects made more sense than a 3 Series wagon.</p> <p>But we also observed some minor build quality issues and never quite achieved the EPA combined fuel economy estimates. We also had a check-engine hiccup that came and went, and which the dealer chalked up to a freak fault, but the code that was diagnosed is apparently a real problem for some owners. The sloping roof also compromised headroom for our taller drivers"
            },
            ...
        ],
        "articlesCount": 35,
        "links": [
            {
                "rel": "first",
                "href": "/api/editorial/v2/articles?model=3-series&tag=editor-reviews&view=full&make=bmw&view=basic&api_key={api_key}&pagesize=10&pagenum=1"
            },
            {
                "rel": "next",
                "href": "/api/editorial/v2/articles?model=3-series&tag=editor-reviews&view=full&make=bmw&view=basic&api_key={api_key}&pagesize=10&pagenum=2"
            },
            {
                "rel": "last",
                "href": "/api/editorial/v2/articles?model=3-series&tag=editor-reviews&view=full&make=bmw&view=basic&api_key={api_key}&pagesize=10&pagenum=4"
            }
        ]
    }
    
###Sample Request 2

Get Articles for *BMW 3 Series* with *editorial-review* tag.

#### URL

    https://api.edmunds.com/api/editorial/v2/articles?make=bmw&model=3-series&tag=editor-reviews&view=full&api_key={API key}&fmt=json

#### Response

    {
        "articles": [
            {
                "title": "2014 BMW 328i xDrive Gran Turismo Long-Term Road Test",
                "tags": [
                    "long term road tests",
                    "road tests",
                    "2014 BMW 3 Series Gran Turismo",
                    "BMW 328i xDrive Gran Turismo",
                    "editor reviews"
                ],
                "niceNamedTags": [
                    "bmw-328i-xdrive-gran-turismo",
                    "2014-bmw-3-series-gran-turismo",
                    "long-term-road-tests",
                    "road-tests",
                    "editor-reviews"
                ],
                "description": "We spent a year with the 2014 BMW 328i xDrive Gran Turismo. Although it priced out pretty high for a 3 Series, we generally enjoyed our time with it and found it a versatile alternative to the sedan model. ",
                "link": {
                    "rel": "related",
                    "href": http://www.edmunds.com/bmw/3-series-gran-turismo/2014/long-term-road-test/2014-bmw-328i-xdrive-gran-turismo-one-year-with-the-328i-gt
                },
                "authors": [
                ],
                "body": "<h3>2014 BMW 328i xDrive Gran Turismo: One Year With the 328i GT</h3> It's the end of the road. It was an odd-lookin' thing and, loaded with options up to a cool $55,500, wasn't exactly entry-level luxury. But we liked it well enough. It offered loads of rear legroom and more cargo space than the sedan, and in some respects made more sense than a 3 Series wagon.</p> <p>But we also observed some minor build quality issues and never quite achieved the EPA combined fuel economy estimates. We also had a check-engine hiccup that came and went, and which the dealer chalked up to a freak fault, but the code that was diagnosed is apparently a real problem for some owners. The sloping roof also compromised headroom for our taller drivers.",
                "vehicles": [
                    {
                        "make": {
                            "id": 200000081,
                            "name": "BMW",
                            "niceName": "bmw"
                        },
                        "model": {
                            "id": "BMW_3_Series_Gran_Turismo",
                            "name": "3 Series Gran Turismo",
                            "niceName": "3-series-gran-turismo"
                        },
                        "year": {
                            "id": 200461849,
                            "year": 2014
                        },
                        "style": {
                            "id": 200484804,
                            "name": "328i xDrive 4dr Hatchback AWD (2.0L 4cyl Turbo 8A)",
                            "submodel": {
                                "body": "Hatchback",
                                "modelName": "3 Series Gran Turismo Hatchback",
                                "niceName": "hatchback"
                            }
                        }
                    }
                ]
            },
            ...
        ],
        "articlesCount": 35,
        "links": [
            {
                "rel": "first",
                "href": "/api/editorial/v2/articles?model=3-series&tag=editor-reviews&view=full&make=bmw&view=basic&api_key={api_key}&pagesize=10&pagenum=1"
            },
            {
                "rel": "next",
                "href": "/api/editorial/v2/articles?model=3-series&tag=editor-reviews&view=full&make=bmw&view=basic&api_key={api_key}&pagesize=10&pagenum=2"
            },
            {
                "rel": "last",
                "href": "/api/editorial/v2/articles?model=3-series&tag=editor-reviews&view=full&make=bmw&view=basic&api_key={api_key}&pagesize=10&pagenum=4"
            }
        ]
    }
