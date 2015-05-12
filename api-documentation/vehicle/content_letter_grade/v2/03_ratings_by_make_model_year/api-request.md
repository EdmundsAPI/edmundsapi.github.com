---
layout: api-documentation
title : 'Get All Rating Details Reviews for the Given Make/Model/Year'
title_active_left_menu: "Content: Letter Grade Rating"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get All Rating Details Reviews for the Given Make/Model/Year'
spec: content_letter_grade
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/{year}/grade'


level: 4
description_edpoint: 'Get All Rating Details Reviews for the Given Make/Model/Year'
title_md : Sample Request
number: 4

---

###Sample Request

Get Rating Details Reviews for **2013 Honda Accord**

#### URL

    https://api.edmunds.com/api/vehicle/v2/honda/accord/2013/grade?fmt=json&api_key={api_key}

#### Response

    {
        "reviews": [
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
                "id": 1,
                "year": 2013,
                "grade": "A",
                "date": "8/28/2012",
                "summary": "Honda's 2013 Accord is more than the sum of its parts -- smooth and comfortable yet never out of its element. Honda has once again hit its stride with a midsize sedan that does everything well and feels like something we'd be happy to drive every day for years."
            }
        ],
        "reviewsCount": 1
    }
