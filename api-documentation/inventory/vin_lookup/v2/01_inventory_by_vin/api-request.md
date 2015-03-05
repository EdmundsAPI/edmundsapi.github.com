---
layout: api-documentation
title : 'Find Inventory by VIN'
title_active_left_menu: 'VIN Lookup'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Inventory by VIN'
spec: vin_lookup
version: v2
api: inventory
dropdown-link: 'api/inventory/v2/vins/{vin}'

level: 4
description_edpoint: 'Find Inventory by VIN'
title_md : Sample Request
number: 4

---


###Sample Request

Look up inventory for VIN **4JGDF7DE1EA414724**.

#### Basic request

#### URL

     https://api.edmunds.com/api/inventory/v2/vins/4JGDF7DE1EA414724?fmt=json

#### Response

    {
        "id": "DA3D3308BAFE9C494442798C4DE48E8A",
        "type": "NEW",
        "vin": "4JGDF7DE1EA414724",
        "stockNumber": "MB637",
        "mileage": 10,
        "make": {
            "name": "Mercedes-Benz",
            "niceName": "mercedes-benz"
        },
        "model": {
            "name": "GL-Class",
            "niceName": "gl-class"
        },
        "year": {
            "id": 200484923,
            "year": 2014
        },
        "style": {
            "id": 200484926,
            "name": "GL550 4MATIC 4dr SUV AWD (4.7L 8cyl Turbo 7A)",
            "submodel": {
                "body": "SUV",
                "modelName": "GL-Class SUV",
                "niceName": "suv"
            },
            "trim": "GL550 4MATIC"
        },
        "prices": {
            "msrp": 95185,
            "tmv": 83837,
            "guaranteedPrice": 83837
        },
        "dealer": {
            "dealerId": "837208",
            "name": "Mercedes-Benz of Rochester",
            "franchiseId": "837209",
            "contactInfo": {
                "phone": "(888) 429-7040",
                "website": http://www.mbofrochester.com/index.htm
            },
            "premier": true
        }
    }


#### Full request

#### URL

     https://api.edmunds.com/api/inventory/v2/vins/4JGDF7DE1EA414724?view=full&fmt=json

#### Response

    {
        "id": "DA3D3308BAFE9C494442798C4DE48E8A",
        "type": "NEW",
        "vin": "4JGDF7DE1EA414724",
        "stockNumber": "MB637",
        "mileage": 10,
        "make": {
            "name": "Mercedes-Benz",
            "niceName": "mercedes-benz"
        },
        "model": {
            "name": "GL-Class",
            "niceName": "gl-class"
        },
        "year": {
            "id": 200484923,
            "year": 2014
        },
        "style": {
            "id": 200484926,
            "name": "GL550 4MATIC 4dr SUV AWD (4.7L 8cyl Turbo 7A)",
            "submodel": {
                "body": "SUV",
                "modelName": "GL-Class SUV",
                "niceName": "suv"
            },
            "trim": "GL550 4MATIC",
            "link": {
                "rel": "_self",
                "href": "/api/vehicle/v2/styles/200484926"
            }
        },
        "media": {
            "photos": {
                "link": {
                    "rel": "_self",
                    "href": "/api/media/v2/styles/200484926/photos"
                },
                "count": 44
            },
            "videos": {
                "link": {
                    "rel": "_self",
                    "href": "/api/media/v2/styles/200484926/videos"
                },
                "count": 0
            }
        },
        "colors": [
            {
                "id": "200485356",
                "name": "Black",
                "availability": "USED",
                "manufactureOptionName": "Black",
                "manufactureOptionCode": "201",
                "category": "Interior",
                "colorChips": {
                    "primary": {
                        "r": 0,
                        "g": 0,
                        "b": 0,
                        "hex": "000000"
                    }
                },
                "fabricTypes": [
                    {
                        "name": "FABRIC_TYPE_1",
                        "value": "leather"
                    }
                ]
            },
            {
                "id": "200485328",
                "name": "Obsidian Black Metallic",
                "availability": "USED",
                "manufactureOptionName": "Obsidian Black Metallic",
                "manufactureOptionCode": "197",
                "category": "Exterior",
                "colorChips": {
                    "primary": {
                        "r": 33,
                        "g": 24,
                        "b": 16,
                        "hex": "211810"
                    }
                }
            }
        ],
        "mpg": {
            "highway": "18",
            "city": "13"
        },
        "prices": {
            "msrp": 95185,
            "tmv": 83837,
            "guaranteedPrice": 83837
        },
        "programs": {
            "leasePromise": {
                "active": true
            },
            "pricePromise": {
                "active": true,
                "expireDate": 1425110400000,
                "disclaimer": "Excludes all federal, state and local taxes, and all title, license and registration fees. Dealer is under no obligation to include or offer any additional equipment, products or services."
            }
        },
        "equipment": [
            {
                "id": "200485119",
                "name": "550",
                "equipmentType": "ENGINE",
                "availability": "STANDARD",
                "compressionRatio": 10.5,
                "cylinder": 8,
                "size": 4.7,
                "displacement": 4663,
                "configuration": "V",
                "fuelType": "premium unleaded (required)",
                "horsepower": 429,
                "torque": 516,
                "totalValves": 32,
                "manufacturerEngineCode": "M278",
                "type": "gas",
                "code": "8VTTG4.7",
                "compressorType": "twin turbocharger"
            },
            {
                "id": "200479953",
                "name": "7A",
                "equipmentType": "TRANSMISSION",
                "availability": "STANDARD",
                "automaticType": "Shiftable automatic",
                "transmissionType": "AUTOMATIC",
                "numberOfSpeeds": "7"
            },
            ...
            {
                "id": "200485143",
                "name": "Rear Seat Entertainment Pre-Wiring ",
                "description": "Pre-wiring for rear seat entertainment system; 3-position memory for front passenger seat; 4-way power lumbar support for front passenger seat",
                "equipmentType": "OPTION",
                "availability": "All",
                "price": {
                    "baseMSRP": 170,
                    "baseInvoice": 158,
                    "estimateTmv": false
                },
                "manufactureOptionName": "Rear Seat Entertainment Pre-Wiring",
                "manufactureOptionCode": "866",
                "category": "Interior",
                "attributes": [
                ],
                "equipment": [
                ]
            }
        ],
        "features": [
            "Passenger Seat: Multi Level Heating",
            "1 Subwoofers",
            "Front And Rear Parking Sensors",
            "Seat Material: Leather",
            "Remote Anti Theft Alarm System",
            "Side Airbags: Dual Front",
            "Keyless Ignition",
            "In Dash Cd: 6 Cd/dvd",
            "Child Seat Anchors",
            "Sunroof: Power Glass",
            "1st Row Seats: Bucket",
            "One Touch Power Sunroof",
            "Usb Connection",
            "Driver's Seat: Multi Level Heating",
            "3rd Row Seats: 50 50 Split Bench",
            "Folding 3rd Row: Power Folding Split Bench",
            "Automatic Climate Control",
            "Parking Assist: Driver Assisted",
            "Tire Pressure Monitoring",
            "Harman/kardon Speakers",
            "Cruise Control",
            "Pre Wired For Phone",
            "Auxiliary Audio Input And Usb With External Media Control",
            "Satellite Radio W/real Time Traffic",
            "Video Monitor: Front",
            "Cargo Tie Downs",
            "Dvd Player",
            "Stability Control",
            "Traction Control",
            "Real Time Traffic",
            "Sunroof: Power Glass",
            "Adaptive Cruise Control",
            "Side Window Sunshade: Manual",
            "One Touch Power Sunroof",
            "Trailer Hitch"
        ],
        "dealer": {
            "dealerId": "837208",
            "name": "Mercedes-Benz of Rochester",
            "franchiseId": "837209",
            "contactInfo": {
                "phone": "(888) 429-7040",
                "website": http://www.mbofrochester.com/index.htm
            },
            "premier": true,
            "link": {
                "rel": "_self",
                "href": "/api/dealer/v2/franchises/837209"
            }
        }
    }
