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
title_md : Sample Request
number: 4

---

###Sample Request

Get safety ratings for **Acura ILX 2013**

#### Basic request

### URL

    https://api.edmunds.com/api/vehicle/v2/acura/ilx/2013/safety?fmt=json&api_key={api_key}

### Response

    {
        "nhtsa": {
            "overall": "5",
            "categories": [
                {
                    "category": "Frontal Barrier Crash Rating",
                    "overall": "4",
                    "options": [
                        {
                            "name": "Driver",
                            "value": "5"
                        },
                        {
                            "name": "Passenger",
                            "value": "4"
                        }
                    ]
                },
                {
                    "category": "Side Crash Rating",
                    "overall": "5"
                },
                {
                    "category": "Rollover",
                    "options": [
                        {
                            "name": "Rollover rating",
                            "value": "4"
                        },
                        {
                            "name": "Dynamic Test Result",
                            "value": "no tip"
                        },
                        {
                            "name": "Risk of Rollover",
                            "value": "10.7"
                        }
                    ]
                },
                {
                    "category": "Combined Side Barrier and Pole Ratings",
                    "options": [
                        {
                            "name": "Front Seat Rating",
                            "value": "5"
                        },
                        {
                            "name": "Rear Seat Rating",
                            "value": "5"
                        }
                    ]
                },
                {
                    "category": "Side Barrier Rating",
                    "overall": "5",
                    "options": [
                        {
                            "name": "Driver",
                            "value": "5"
                        },
                        {
                            "name": "Passenger",
                            "value": "5"
                        },
                        {
                            "name": "Side Pole Rating",
                            "value": "4"
                        }
                    ]
                }
            ]
        },
        "iihs": [
            {
                "category": "Side impact test",
                "value": "Good"
            },
            {
                "category": "Roof Strength Test",
                "value": "Good"
            },
            {
                "category": "Rear crash protection/head restraint",
                "value": "Good"
            }
        ],  
        "make": {
            "id": 200002038,
            "name": "Acura",
            "niceName": "acura"
        },
        "model": {
            "id": "Acura_ILX",
            "name": "ILX",
            "niceName": "ilx"
        },
        "year": {
            "id": 100538929,
            "year": 2013
        },
        "style": {
            "id": 101418219,
            "name": "4dr Sedan (2.0L 4cyl 5A)",
            "submodel": {
                "body": "Sedan",
                "modelName": "ILX Sedan",
                "niceName": "sedan"
            },
            "trim": "Base"
        }
    }


#### Full request

### URL

    https://api.edmunds.com/api/vehicle/v2/acura/ilx/2013/safety?view=full&fmt=json&api_key={api_key}

### Response

    {
        "nhtsa": {
            "overall": "5",
            "categories": [
                {
                    "category": "Frontal Barrier Crash Rating",
                    "overall": "4",
                    "options": [
                        {
                            "name": "Driver",
                            "value": "5"
                        },
                        {
                            "name": "Passenger",
                            "value": "4"
                        }
                    ]
                },
                {
                    "category": "Side Crash Rating",
                    "overall": "5"
                },
                {
                    "category": "Rollover",
                    "options": [
                        {
                            "name": "Rollover rating",
                            "value": "4"
                        },
                        {
                            "name": "Dynamic Test Result",
                            "value": "no tip"
                        },
                        {
                            "name": "Risk of Rollover",
                            "value": "10.7"
                        }
                    ]
                },
                {
                    "category": "Combined Side Barrier and Pole Ratings",
                    "options": [
                        {
                            "name": "Front Seat Rating",
                            "value": "5"
                        },
                        {
                            "name": "Rear Seat Rating",
                            "value": "5"
                        }
                    ]
                },
                {
                    "category": "Side Barrier Rating",
                    "overall": "5",
                    "options": [
                        {
                            "name": "Driver",
                            "value": "5"
                        },
                        {
                            "name": "Passenger",
                            "value": "5"
                        },
                        {
                            "name": "Side Pole Rating",
                            "value": "4"
                        }
                    ]
                }
            ]
        },
        "iihs": [
            {
                "category": "Side impact test",
                "value": "Good"
            },
            {
                "category": "Roof Strength Test",
                "value": "Good"
            },
            {
                "category": "Rear crash protection/head restraint",
                "value": "Good"
            }
        ],  
        "features": [
            "Traction control",
            "Front and rear head airbags",
            "Dusk sensing headlamps",
            "Engine immobilizer",
            "Tire pressure monitoring",
            "Turn signal mirrors",
            "Dual front side-mounted airbags",
            "2 front headrests",
            "Stability control",
            "Electronic brakeforce distribution",
            "Front seatbelt pretensioners",
            "Auto delay off headlamps",
            "Rear center 3-point belt",
            "Child seat anchors",
            "4-wheel ABS",
            "Ventilated front disc / solid rear disc brakes",
            "Passenger head restraint whiplash protection system",
            "Emergency braking assist",
            "Rear height adjustable headrests",
            "3 rear headrests",
            "Emergency interior trunk release",
            "Passenger airbag occupant sensing deactivation",
            "Rear door child safety locks",
            "Daytime running lights"
        ],
        "make": {
            "id": 200002038,
            "name": "Acura",
            "niceName": "acura"
        },
        "model": {
            "id": "Acura_ILX",
            "name": "ILX",
            "niceName": "ilx"
        },
        "year": {
            "id": 100538929,
            "year": 2013
        },
        "style": {
            "id": 101418219,
            "name": "4dr Sedan (2.0L 4cyl 5A)",
            "submodel": {
                "body": "Sedan",
                "modelName": "ILX Sedan",
                "niceName": "sedan"
            },
            "trim": "Base"
        }
    }
    