---
layout: api-documentation
title : 'Get safety ratings by Make/Model/Year'
title_active_left_menu: 'Service: Safety'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get safety ratings by Make/Model/Year'
spec: service_safety
version: v2
api: vehicle
dropdown-link: '/api/vehicle/v2/{make}/{model}/{year}/safety'


level: 4
description_edpoint: 'Get safety ratings by Make/Model/Year'
title_md : Response format
number: 3

---

###Response format

    {
        "nhtsa": {
            "overall": {string},
            "categories": [
                {
                    "category": {string},
                    "overall": {string},
                    "options": [
                        {
                            "name": {string},
                            "value": {string}
                        },
                        ...
                    ]
                },
                ...
            ]
        },
        "iihs": [
            {
                "category": {string},
                "value": {string}
            },
            ...
        ],  
        "features": [
            {string},
            ...
        ],
        "make": {
            "id": {long},
            "name": {string},
            "niceName": {string}
        },
        "model": {
            "id": {string},
            "name": {string},
            "niceName": {string}
        },
        "year": {
            "id": {long},
            "year": {integer}
        },
        "style": {
            "id": {long},
            "name": {string},
            "submodel": {
                "body": {string},
                "modelName": {string},
                "niceName": {string}
            },
            "trim": {string}
        }
    }

| Property      | Description                                            | Visibility                |
|:--------------|:-------------------------------------------------------|:--------------------------|
| nthsa         | National Highway Traffic Safety Administration ratings | Edmunds, Partners, Public |
| iihs          | Insurance Institute for Highway Safety ratings         | Edmunds, Partners, Public |
| features      | Features this car has                                  | Edmunds, Partners, Public |
| make          | The car make details (id, name and nicename)           | Edmunds, Partners, Public |
| model         | The car model details (id, name and nicename)          | Edmunds, Partners, Public |
| year          | The car model year ID and four-digit year              | Edmunds, Partners, Public |
| style         | The car styke details (id, name, submodel and trim)    | Edmunds, Partners, Public |                         