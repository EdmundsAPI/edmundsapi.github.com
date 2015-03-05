---
layout: api-documentation
title : 'Find Inventories by Franchise ID'
title_active_left_menu: 'Vehicle Listings'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Inventories by Franchise ID'
spec: vehicle_listings
version: v2
api: inventory
dropdown-link: '/api/inventory/v2/franchises/{franchiseId}'

level: 4
description_edpoint: 'Find Inventories by Franchise ID'
title_md : Sample Request
number: 4

---


###Sample Request

Find inventories for Dealership with ID **649665**.

#### Basic request

#### URL

     https://api.edmunds.com/api/inventory/v2/franchises/649665?fmt=json

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

                "prices": {
                    "msrp": 25375,
                    "tmv": 23814,
                    "invoice": 1500
                },
                "dealer": {
                    "dealerId": "1046",
                    "name": "California Superstores Valencia",
                    "franchiseId": "649665",
                    "premier": false
                }
            },
            ...
            {
                "id": "BCAB31729795ECEB6E982C88C74626C0",
                "type": "NEW",
                "vin": "1C3CCCAB9FN535057",
                "stockNumber": "350011",
                "mileage": 14,
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
                "prices": {
                    "msrp": 25740,
                    "tmv": 24155,
                    "guaranteedPrice": 1500
                },
                "dealer": {
                    "dealerId": "1046",
                    "name": "California Superstores Valencia",
                    "franchiseId": "649665",
                    "premier": true
                }
            }
        ],
        "inventoriesCount": 34,
        "links": [
            {
                "rel": "first",
                "href": "/api/inventory/v2/franchises/649665?pagesize=10&pagenum=1&fmt=json"
            },
            {
                "rel": "next",
                "href": "/api/inventory/v2/franchises/649665?pagesize=10&pagenum=2&fmt=json"
            },
            {
                "rel": "last",
                "href": "/api/inventory/v2/franchises/649665?pagesize=10&pagenum=4&fmt=json"
            }
        ]
    }


#### Full request

#### URL

    https://api.edmunds.com/api/inventory/v2/franchises/649665?view=full&fmt=json

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
                        "link": {
                            "rel": "_self",
                            "href": "/api/media/v2/styles/200674795/photos"
                        },
                        "count": 32
                    },
                    "videos": {
                        "link": {
                            "rel": "_self",
                            "href": "/api/media/v2/styles/200674795/videos"
                        },
                        "count": 0
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
                    "premier": false,
                    "link": {
                        "rel": "_self",
                        "href": "/api/dealer/v2/franchises/649665"
                    }
                }
            },
            ...
            {
                "id": "BCAB31729795ECEB6E982C88C74626C0",
                "type": "NEW",
                "vin": "1C3CCCAB9FN535057",
                "stockNumber": "350011",
                "mileage": 14,
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
                        "link": {
                            "rel": "_self",
                            "href": "/api/media/v2/styles/200674795/photos"
                        },
                        "count": 32
                    },
                    "videos": {
                        "link": {
                            "rel": "_self",
                            "href": "/api/media/v2/styles/200674795/videos"
                        },
                        "count": 0
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
                    "msrp": 25740,
                    "tmv": 24155,
                    "guaranteedPrice": 1500
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
                    "premier": true
                }
            }
        ],
        "inventoriesCount": 34,
        "links": [
            {
                "rel": "first",
                "href": "/api/inventory/v2/franchises/649665?view=full&pagesize=10&pagenum=1&fmt=json"
            },
            {
                "rel": "next",
                "href": "/api/inventory/v2/franchises/649665?view=full4&pagesize=10&pagenum=2&fmt=json"
            },
            {
                "rel": "last",
                "href": "/api/inventory/v2/franchises/649665?view=full&pagesize=10&pagenum=4&fmt=json"
            }
        ]
     }
