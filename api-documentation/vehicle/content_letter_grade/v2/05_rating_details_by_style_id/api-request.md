---
layout: api-documentation
title : 'Get Rating Details by Style ID'
title_active_left_menu: "Content: Letter Grade Rating"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Rating Details by Style ID'
spec: content_letter_grade
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{styleId}/grade'


level: 4
description_edpoint: 'Get Rating Details by Style ID'
title_md : Sample Request
number: 4

---

###Sample Request

Get Rating Details Review for Style **200443446**.

#### URL

    https://api.edmunds.com/api/vehicle/v2/styles/200443446/grade?fmt=json&api_key={api_key}

#### Response

    {
        "make": {
            "id": 200001444,
            "name": "Honda",
            "niceName": "honda"
        },
        "model": {
            "id": "Honda_Civic",
            "name": "Civic",
            "niceName": "civic"
        },
        "style": {
            "id": 200443446,
            "name": "EX 4dr Sedan (1.8L 4cyl 5A)",
            "submodel": {
                "body": "Sedan",
                "modelName": "Civic Sedan",
                "niceName": "sedan"
            },
            "trim": "EX"
        },
        "year": {
            "id": 200442557,
            "year": 2013
        },
        "id": 1,
        "grade": "A",
        "date": "3/26/2013",
        "summary": "The refreshed Civic is particularly notable for its redesigned cabin. The use of soft-touch materials, sound-deadening and suspension mods to smooth the ride are class-leading. Add an extended list of standard equipment and suddenly, the Civic is back at the head of the class.",
        "ratings": [
            {
                "title": "Performance",
                "grade": "B",
                "score": 8,
                "summary": "The Mazda 3 has long been the driver's choice in the compact segment. But this iteration of Civic gives it the most challenge it's seen in some time.",
                "subRatings": [
                    {
                        "title": "Acceleration",
                        "grade": "C",
                        "score": 6,
                        "summary": "The 140-horsepower, 1.8-liter four-cylinder has just enough power for most commuting action. The automatic makes do with 5 gears in an era of 6-speeds, and can't be shifted manually. "
                    },
                    {
                        "title": "Braking",
                        "grade": "C",
                        "score": 6,
                        "summary": "The Civic required 130 feet to reach a stop from 60 mph. That's a bit below average for the compact class. "
                    },
                    ...
                    {
                        "title": "Driveability",
                        "grade": "B",
                        "score": 7.5,
                        "summary": "Around town, the Civic met all of our needs as a comfy daily driver. The sportily tuned steering and suspension added a dash of fun to the mix, even though it's low on usable power."
                    }
                ]
            },
            ...
            {
                "title": "Fun To Drive",
                "grade": "A",
                "score": 8.5,
                "summary": "Steering and suspension tweaks from the previous Civic really show in the sense that they make this Honda fun to drive. It's a quality rare to this breed of car."
                "subRatings": [
                    {
                        "title": "Driving Experience",
                        "grade": "B",
                        "score": 7.5,
                        "summary": "The Civic's steering and suspension are up to the task of keeping things fun. New offerings from Dodge and Kia have noticeably quicker acceleration in the real world."
                    },
                    {
                        "title": "Personality",
                        "grade": "B",
                        "score": 8,
                        "summary": "Lively handling breathes personality into the Civic, keeping it from being just another run-of-the-mill compact sedan. A more powerful engine would be icing on the cake. "
                    }
                ]
            }
        ]
    }
