---
layout: api-documentation
title : 'Find Inventories by Stock Number'
title_active_left_menu: 'Vehicle Listings'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Inventories by Stock Number'
spec: vehicle_listings
version: v2
api: inventory
dropdown-link: '/api/inventory/v2/stocks/{stockId}'

level: 4
description_edpoint: 'Find Inventories by Stock Number'
title_md : Sample Request
number: 4

---


### Sample Request

Find inventories by Stock Number **350175**.

#### Basic request

#### URL

     https://api.edmunds.com/api/inventory/v2/stocks/350175?fmt=json

#### Response

    {
        "inventories": [
            {
                "id": "0F0483EBB9EDF30081DBF3F5698CFEB8",
                "type": "NEW",
                "vin": "1C3CCCAB8FN559978",
                "stockNumber": "350175",
                "mileage": 16,
                "make": {
                    "name": "Chrysler",
                    "niceName": "chrysler"
                },
                "model": {
                    "name": "200",
                    "niceName": "200"
                },
                "year": {
                    "id": 200490591,
                    "year": 2015
                },
                "style": {
                    "id": 200674795,
                    "name": "Limited 4dr Sedan (2.4L 4cyl 9A)",
                    "submodel": {
                        "body": "Sedan",
                        "modelName": "200 Sedan",
                        "niceName": "sedan"
                    },
                    "trim": "Limited"
                },
                "media": {
                    "photos": {
                        "thumbnails": {
                            "count": 2,
                            "links": [
                                {
                                    "rel": "_self",
                                    "href": "https://pictures.dealer.com/c/californiasuperstoresvalenciacllc/0209/c646513ccc02f8d1fb99db71bf9a363ex.jpg",
                                    "size": "LARGE"
                                },
                                {
                                    "rel": "_self",
                                    "href": "https://pictures.dealer.com/c/californiasuperstoresvalenciacllc/0209/c646513ccc02f8d1fb99db71bf9a363ex.jpg",
                                    "size": "MEDIUM"
                                }
                            ]
                        }
                    }
                },
                "prices": {
                    "msrp": 25375,
                    "tmv": 23814,
                    "invoice": 1500
                },
                "dealer": {
                    "dealerId": "1046",
                    "name": "California Superstores Valencia",
                    "address": {
                        "street": "23820 Creekside Rd",
                        "city": "Valencia",
                        "stateCode": "CA",
                        "stateName": "California",
                        "county": "Los Angeles",
                        "country": "USA",
                        "latitude": 34.418535,
                        "longitude": -118.552833,
                        "zipcode": "91355"
                    },
                    "franchiseId": "649665",
                    "premier": false
                }
            },
            ...
            {
                "id": "D3B7C6560AAB510D03D43A6C7F46F5FB",
                "type": "NEW",
                "vin": "5FNYF3H53FB008722",
                "stockNumber": "350175",
                "mileage": 3,
                "make": {
                    "name": "Honda",
                    "niceName": "honda"
                },
                "model": {
                    "name": "Pilot",
                    "niceName": "pilot"
                },
                "year": {
                    "id": 200698679,
                    "year": 2015
                },
                "style": {
                    "id": 200698682,
                    "name": "EX-L 4dr SUV (3.5L 6cyl 5A)",
                    "submodel": {
                        "body": "SUV",
                        "modelName": "Pilot SUV",
                        "niceName": "suv"
                    },
                    "trim": "EX-L"
                },
                "media": {
                    "photos": {
                        "thumbnails": {
                            "count": 2,
                            "links": [
                                {
                                    "rel": "_self",
                                    "href": "https://pictures.dealer.com/c/californiasuperstoresvalenciacllc/0257/6fa45b963920bced0a1b3bce3c14c39cx.jpg",
                                    "size": "LARGE"
                                },
                                {
                                    "rel": "_self",
                                    "href": "https://pictures.dealer.com/c/californiasuperstoresvalenciacllc/0257/6fa45b963920bced0a1b3bce3c14c39cx.jpg",
                                    "size": "MEDIUM"
                                }
                            ]
                        }
                    }
                },
                "prices": {
                    "msrp": 36200,
                    "tmv": 32165,
                    "invoice": 33599.37,
                    "guaranteedPrice": 30099.37
                },
                "dealer": {
                    "dealerId": "1484",
                    "name": "Honda World",
                    "franchiseId": "27711",
                    "address": {
                        "street": "13600 Beach Blvd",
                        "city": "Westminster",
                        "stateCode": "CA",
                        "stateName": "California",
                        "county": "Orange",
                        "country": "USA",
                        "latitude": 33.764925,
                        "longitude": 117.989609,
                        "zipcode": "92683"
                    },
                    "contactInfo": {
                        "phone": "(877) 999-3173",
                        "website": http://www.ochondaworld.com/
                    },
                    "premier": true
                }
            }
        ],
        "inventoriesCount": 3,
        "links": [
            {
                "rel": "first",
                "href": "/api/inventory/v2/stocks/350175?pagesize=10&pagenum=1&fmt=json"
            },
            {
                "rel": "last",
                "href": "/api/inventory/v2/stocks/350175?pagesize=10&pagenum=16&fmt=json"
            }
        ]
    }


#### Full request

#### URL

    https://api.edmunds.com/api/inventory/v2/stocks/350175?view=full&fmt=json

#### Response

    {
        "inventories": [
            {
                "id": "0F0483EBB9EDF30081DBF3F5698CFEB8",
                "type": "NEW",
                "vin": "1C3CCCAB8FN559978",
                "stockNumber": "350175",
                "mileage": 16,
                "make": {
                    "name": "Chrysler",
                    "niceName": "chrysler"
                },
                "model": {
                    "name": "200",
                    "niceName": "200"
                },
                "year": {
                    "id": 200490591,
                    "year": 2015
                },
                "style": {
                    "id": 200674795,
                    "name": "Limited 4dr Sedan (2.4L 4cyl 9A)",
                    "submodel": {
                        "body": "Sedan",
                        "modelName": "200 Sedan",
                        "niceName": "sedan"
                    },
                    "trim": "Limited",
                    "link": {
                        "rel": "_self",
                        "href": "/api/vehicle/v2/styles/200674795"
                    }
                },
                "media": {
                    "photos": {
                        "thumbnails": {
                            "count": 2,
                            "links": [
                                {
                                    "rel": "_self",
                                    "href": "https://pictures.dealer.com/c/californiasuperstoresvalenciacllc/0209/c646513ccc02f8d1fb99db71bf9a363ex.jpg",
                                    "size": "LARGE"
                                },
                                {
                                    "rel": "_self",
                                    "href": "https://pictures.dealer.com/c/californiasuperstoresvalenciacllc/0209/c646513ccc02f8d1fb99db71bf9a363ex.jpg",
                                    "size": "MEDIUM"
                                }
                            ]
                        }
                        "other": {
                            "count": 32,
                            "links": [
                                {
                                    "rel": "related",
                                    "href": "/api/media/v2/styles/200674795/photos"
                                }
                            ]
                        }
                    },
                    "videos": {
                        "count": 0,
                        "links": [
                            {
                                "rel": "related",
                                "href": "/api/media/v2/styles/200674795/videos"
                            }
                        ]
                    }
                },
                "colors": [
                    {
                        "id": "200674986",
                        "name": "Black",
                        "availability": "USED",
                        "manufactureOptionName": "Black",
                        "manufactureOptionCode": "A5X2",
                        "category": "Interior",
                        "colorChips": {
                            "primary": {
                                "r": 206,
                                "g": 200,
                                "b": 184,
                                "hex": "CEC8B8"
                            }
                        },
                        "fabricTypes": [
                            {
                                "name": "FABRIC_TYPE_1",
                                "value": "premium cloth"
                            }
                        ]
                    },
                    {
                        "id": "200674971",
                        "name": "Velvet Red Pearl Coat",
                        "availability": "USED",
                        "manufactureOptionName": "Velvet Red Pearl Coat",
                        "manufactureOptionCode": "PRV",
                        "category": "Exterior",
                        "colorChips": {
                            "primary": {
                                "r": 79,
                                "g": 15,
                                "b": 29,
                                "hex": "4F0F1D"
                            }
                        }
                    }
                ],
                "mpg": {
                    "highway": "36",
                    "city": "23"
                },
                "prices": {
                    "msrp": 25375,
                    "tmv": 23814,
                    "invoice": 1500
                },
                "programs": {
                    "leasePromise": {
                        "active": false
                    },
                    "pricePromise": {
                        "active": false,
                        "disclaimer": "Plus government fees and taxes, any finance charges applicable to a financed purchase, any electronic filing charge, and any emission testing charge. Dealer is under no obligation to include or offer any additional equipment, products or services."
                    }
                },
                "equipment": [
                    {
                        "name": "I-4 cyl",
                        "equipmentType": "ENGINE",
                        "cylinder": 4,
                        "fuelType": "regular unleaded",
                        "type": "gas"
                    },
                    {
                        "name": "9 speed automatic",
                        "equipmentType": "TRANSMISSION",
                        "transmissionType": "AUTOMATIC"
                    },
                    ...
                    {
                        "id": "200713488",
                        "name": "California Emissions",
                        "equipmentType": "OPTION",
                        "availability": "All",
                        "price": {
                            "baseMSRP": 0,
                            "baseInvoice": 0,
                            "estimateTmv": false
                        },
                        "manufactureOptionName": "California Emissions",
                        "manufactureOptionCode": "NAE",
                        "category": "Additional Fees",
                        "attributes": [
                            ],
                        "equipment": [
                        ]
                    }
                ],
                "features": [
                    "Seat Material: Premium Cloth",
                    "Tire Pressure Monitoring",
                    "Remote Anti Theft Alarm System",
                    "Side Airbags: Dual Front",
                    "Keyless Ignition",
                    "Child Seat Anchors",
                    "Cruise Control",
                    "Pre Wired For Phone",
                    "Auxiliary Audio Input And Usb With External Media Control",
                    "Usb Connection",
                    "1st Row Seats: Bucket",
                    "Cargo Tie Downs",
                    "Stability Control",
                    "Traction Control"
                ],
                "dealer": {
                    "dealerId": "1046",
                    "name": "California Superstores Valencia",
                    "franchiseId": "649665",
                    "address": {
                        "street": "23820 Creekside Rd",
                        "city": "Valencia",
                        "stateCode": "CA",
                        "stateName": "California",
                        "county": "Los Angeles",
                        "country": "USA",
                        "latitude": 34.418535,
                        "longitude": -118.552833,
                        "zipcode": "91355"
                    },
                    "premier": false,
                    "link": {
                        "rel": "_self",
                        "href": "/api/dealer/v2/franchises/649665"
                    }
                }
            },
            ...
            {
                "id": "D3B7C6560AAB510D03D43A6C7F46F5FB",
                "type": "NEW",
                "vin": "5FNYF3H53FB008722",
                "stockNumber": "5FNYF3H53FB008722",
                "mileage": 3,
                "make": {
                    "name": "Honda",
                    "niceName": "honda"
                },
                "model": {
                    "name": "Pilot",
                    "niceName": "pilot"
                },
                "year": {
                    "id": 200698679,
                    "year": 2015
                },
                "style": {
                    "id": 200698679,
                    "name": "EX-L 4dr SUV (3.5L 6cyl 5A)",
                    "submodel": {
                        "body": "SUV",
                        "modelName": "Pilot SUV",
                        "niceName": "suv"
                    },
                    "trim": "EX-L",
                    "link": {
                        "rel": "_self",
                        "href": "/api/vehicle/v2/styles/200698682"
                    }
                },
                "media": {
                    "photos": {
                        "thumbnails": {
                            "count": 2,
                            "links": [
                                {
                                    "rel": "_self",
                                    "href": "https://pictures.dealer.com/c/californiasuperstoresvalenciacllc/0257/6fa45b963920bced0a1b3bce3c14c39cx.jpg",
                                    "size": "LARGE"
                                },
                                {
                                    "rel": "_self",
                                    "href": "https://pictures.dealer.com/c/californiasuperstoresvalenciacllc/0257/6fa45b963920bced0a1b3bce3c14c39cx.jpg",
                                    "size": "MEDIUM"
                                }
                            ]
                        },
                        "other": {
                            "count": 32,
                            "links": [
                                {
                                    "rel": "related",
                                    "href": "/api/media/v2/styles/200674795/photos"
                                }
                            ]
                        }
                    },
                    "videos": {
                        "count": 0,
                        "links": [
                            {
                                "rel": "related",
                                "href": "/api/media/v2/styles/200674795/videos"
                            }
                        ]
                    }
                },
                "colors": [
                    {
                        "id": "200698711",
                        "name": "Gray Leather",
                        "availability": "USED",
                        "manufactureOptionName": "Gray",
                        "manufactureOptionCode": "GR",
                        "category": "Interior",
                        "colorChips": {
                            "primary": {
                                "r": 85,
                                "g": 85,
                                "b": 87,
                                "hex": "555557"
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
                        "id": "200698713",
                        "name": "Crystal Black Pearl",
                        "availability": "USED",
                        "manufactureOptionName": "Crystal Black Pearl",
                        "manufactureOptionCode": "BK/BX",
                        "category": "Exterior",
                        "colorChips": {
                            "primary": {
                                "r": 29,
                                "g": 29,
                                "b": 29,
                                "hex": "1D1D1D"
                            }
                        }
                    }
                ],
                "mpg": {
                    "highway": "25",
                    "city": "18"
                },
                "prices": {
                    "msrp": 36200,
                    "tmv": 36200,
                    "invoice": 33599.37,
                    "guaranteedPrice": 30099.37
                },
                "programs": {
                    "leasePromise": {
                        "active": false
                    },
                    "pricePromise": {
                        "active": true,
                        "expireDate": 1425110400000,
                        "disclaimer": "Price Promise Price does NOT include Dealer installed accessories"
                    }
                },
                "equipment": [
                    {
                        "id": "200698692",
                        "name": "3.5L V6 24 Valve Gas Regular Unleaded",
                        "equipmentType": "ENGINE",
                        "availability": "STANDARD",
                        "compressionRatio": 10.5,
                        "cylinder": 6,
                        "size": 3.5,
                        "displacement": 3471,
                        "configuration": "V",
                        "fuelType": "regular unleaded",
                        "horsepower": 250,
                        "torque": 253,
                        "totalValves": 24,
                        "manufacturerEngineCode": "J35A9",
                        "type": "gas",
                        "code": "6VNAG3.5",
                        "compressorType": "NA"
                    },
                    {
                        "id": "200698693",
                        "name": "5A",
                        "equipmentType": "TRANSMISSION",
                        "availability": "STANDARD",
                        "transmissionType": "AUTOMATIC",
                        "numberOfSpeeds": "5"
                    }
                ],
                "features": [
                    "Automatic Climate Control",
                    "Cd Mp3 Playback",
                    "Passenger Seat: Multi Level Heating",
                    "Tire Pressure Monitoring",
                    "1 Subwoofers",
                    "Seat Material: Leather",
                    "Remote Anti Theft Alarm System",
                    "Side Airbags: Dual Front",
                    "Trailer Hitch",
                    "In Dash Cd: Single Cd Player",
                    "Child Seat Anchors",
                    "Cruise Control",
                    "3rd Row Seats: 40 60 Split Bench",
                    "Sunroof: Power Glass",
                    "Folding 3rd Row: Manual Folding Split Bench",
                    "Auxiliary Audio Input And Usb With External Media Control",
                    "One Touch Power Sunroof",
                    "1st Row Seats: Bucket",
                    "Usb Connection",
                    "Cargo Tie Downs",
                    "Stability Control",
                    "Traction Control",
                    "Driver's Seat: Multi Level Heating"
                ],
                "dealer": {
                    "dealerId": "1484",
                    "name": "Honda World",
                    "franchiseId": "27711",
                    "address": {
                        "street": "13600 Beach Blvd",
                        "city": "Westminster",
                        "stateCode": "CA",
                        "stateName": "California",
                        "county": "Orange",
                        "country": "USA",
                        "latitude": 33.764925,
                        "longitude": 117.989609,
                        "zipcode": "92683"
                    },
                    "contactInfo": {
                        "phone": "(877) 999-3173",
                        "website": http://www.ochondaworld.com/
                    },
                    "premier": true,
                    "link": {
                        "rel": "_self",
                        "href": "/api/dealer/v2/franchises/27711"
                    }
                }
            }
        ],
        "inventoriesCount": 3,
        "links": [
            {
                "rel": "first",
                "href": "/api/inventory/v2/stocks/350175?view=full&pagesize=10&pagenum=1&fmt=json"
            },
            {
                "rel": "last",
                "href": "/api/inventory/v2/stocks/350175?view=full&pagesize=10&pagenum=1&fmt=json"
            }
        ]
     }
