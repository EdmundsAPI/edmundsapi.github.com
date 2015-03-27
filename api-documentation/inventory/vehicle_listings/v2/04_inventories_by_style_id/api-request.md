---
layout: api-documentation
title : 'Find Inventories by Style ID'
title_active_left_menu: 'Vehicle Listings'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Inventories by Style ID'
spec: vehicle_listings
version: v2
api: inventory
dropdown-link: '/api/inventory/v2/franchises/{styleId}'

level: 4
description_edpoint: 'Find Inventories by Style ID'
title_md : Sample Request
number: 4

---


###Sample Request

Find inventories in the Santa Monica area (90404) with Style ID **200674795**.

#### Basic request

#### URL

     https://api.edmunds.com/api/inventory/v2/styles/200674795?zipcode=90404&fmt=json

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
                    "msrp": 25740,
                    "tmv": 24155,
                    "guaranteedPrice": 1500
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
                    "premier": true
                }
            }
        ],
        "inventoriesCount": 259,
        "links": [
            {
                "rel": "first",
                "href": "/api/inventory/v2/styles/200674795?zipcode=90404&pagesize=10&pagenum=1&fmt=json"
            },
            {
                "rel": "next",
                "href": "/api/inventory/v2/styles/200674795?zipcode=90404&pagesize=10&pagenum=2&fmt=json"
            },
            {
                "rel": "last",
                "href": "/api/inventory/v2/styles/200674795?zipcode=90404&pagesize=10&pagenum=26&fmt=json"
            }
        ]
    }


#### Full request

#### URL

    https://api.edmunds.com/api/inventory/v2/styles/200674795?zipcode=90404&view=full&fmt=json

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
                    "premier": true
                }
            }
        ],
        "inventoriesCount": 259,
        "links": [
            {
                "rel": "first",
                "href": "/api/inventory/v2/styles/200674795?zipcode=90404&view=full&pagesize=10&pagenum=1&fmt=json"
            },
            {
                "rel": "next",
                "href": "/api/inventory/v2/styles/200674795?zipcode=90404&view=full4&pagesize=10&pagenum=2&fmt=json"
            },
            {
                "rel": "last",
                "href": "/api/inventory/v2/styles/200674795?zipcode=90404&view=full&pagesize=10&pagenum=26&fmt=json"
            }
        ]
     }
