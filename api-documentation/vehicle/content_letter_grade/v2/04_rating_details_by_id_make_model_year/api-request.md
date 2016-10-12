---
layout: api-documentation
title : 'Get Rating Details for the Given Make/Model/Year by ID'
title_active_left_menu: "Content: Letter Grade Rating"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Rating Details for the Given Make/Model/Year by ID'
spec: content_letter_grade
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/{year}/grade/{reviewId}'


level: 4
description_edpoint: 'Get Rating Details for the Given Make/Model/Year by ID'
title_md : Sample Request
number: 4

---

### Sample Request

Get Rating Details Review for **2013 Honda Accord** and ID 1.

#### URL

    https://api.edmunds.com/api/vehicle/v2/honda/accord/2013/grade/1?fmt=json&api_key={api_key}

#### Response

    {
        "make": {
            "id": 200001444,
            "name": "Honda",
            "niceName": "honda"
        },
        "model": {
            "id": "Honda_Accord",
            "name": "Accord",
            "niceName": "accord"
        },
        "style": {
            "id": 200434856,
            "name": "EX 4dr Sedan (2.4L 4cyl CVT)",
            "submodel": {
                "body": "Sedan",
                "modelName": "Accord Sedan",
                "niceName": "sedan"
            },
            "trim": "EX"
        },
        "year": {
            "id": 100537293,
            "year": 2013
        },
        "id": 1,
        "grade": "A",
        "date": "8/28/2012",
        "summary": "Honda's 2013 Accord is more than the sum of its parts -- smooth and comfortable yet never out of its element. Honda has once again hit its stride with a midsize sedan that does everything well and feels like something we'd be happy to drive every day for years.",
        "ratings": [
            {
                "title": "Performance",
                "grade": "A",
                "score": 8.5,
                "summary": "Accord EX is among the best performing four-cylinder midsize sedans in dynamic tests. Fuel economy is on par for the segment.",
                "subRatings": [
                    {
                        "title": "Acceleration",
                        "grade": "B",
                        "score": 8,
                        "summary": "CVT still feels weak off the line, but its 0-60 and quarter-mile performance is at the top of the segment (among 4-cyl models)."
                    },
                    {
                        "title": "Braking",
                        "grade": "C",
                        "score": 6.5,
                        "summary": "Customarily weak Honda brakes. No significant distance fade in our test, but an uninspiring pedal."
                    },
                    ...
                    {
                        "title": "Driveability",
                        "grade": "A",
                        "score": 9,
                        "summary": "Superb here. Mindlessly easy to drive. Not fun, but not offensive, either. A terrific midsize sedan."
                    }
                ]
            },
            ...
            {
                "title": "Fun To Drive",
                "grade": "B",
                "score": 8,
                "summary": "Better-than-average dynamics help the Accord be more fun than many competitors, but it's still a family car and not a sports car. ",
                "subRatings": [
                    {
                        "title": "Driving Experience",
                        "grade": "B",
                        "score": 7.5,
                        "summary": "CVT is rarely fun, but it gets the job done. The six-speed manual (base transmission) and the Sport package (optional) raise the bar for fun to drive. "
                    },
                    {
                        "title": "Personality",
                        "grade": "A",
                        "score": 9,
                        "summary": "More Honda personality than many Honda products in recent years. Solidly built with good materials, good visibility and a powertrain that's adequately powerful, miserly and utterly smooth."
                    }
                ]
            }
        ]
    }
