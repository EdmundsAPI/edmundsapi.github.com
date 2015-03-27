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
title_md : Response format
number: 3

---


### Response format

#### JSON Response w/ view=basic (default)

    {
        "inventories": [
            {
                "id": {string},
                "type": {string},
                "vin": {string},
                "stockNumber": {string},
                "mileage": {integer},
                "make": {
                    "name": {string},
                    "niceName": {string}
                },
                "model": {
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
                },
                "media": {
                    "photos": {
                        "thumbnails": {
                            "count": {long},
                            "links": [
                                {
                                    "rel": {string},
                                    "href": {string},
                                    "size": {string}
                                },
                                ...
                            ]
                        },
                        "small": {
                            "count": {long},
                            "links": [
                                {
                                    "rel": {string},
                                    "href": {string}
                                },
                                ...
                            ]
                        },
                        "large": {
                             "count": {long},
                            "links": [
                                {
                                    "rel": {string},
                                    "href": {string}
                                },
                                ...
                            ]
                        }
                    }
                },
                "prices": {
                    "msrp": {integer},
                    "tmv": {integer},
                    "guaranteedPrice": {integer},
                    "invoice": {integer},
                    "monthlyPayment": {integer}
                },
                "dealer": {
                    "dealerId": {string},
                    "name": {string},
                    "franchiseId": {string},
                    "address": {
                        "street": {string},
                        "city": {string},
                        "stateCode": {string},
                        "stateName": {string},
                        "county": {string},
                        "country": {string},
                        "latitude": {double},
                        "longitude": {double},
                        "zipcode": {string}
                    },
                    "contactInfo": {
                        "phone": {string},
                        "website": {string}
                    },
                    "premier": {boolean}
                }
            },
            ...
        ],
        "inventoriesCount": {integer},
        "links": [
            {
                "rel": {string},
                "href": {string}
            },
            ...
        ]
    }


| Property                   | Description                                               | Visibility                |
|:---------------------------|:----------------------------------------------------------|:--------------------------|
| id                         | The inventory ID                                          | Edmunds, partners, Public |
| type                       | Is this car NEW, USED or CPO                              | Edmunds, partners         |
| vin                        | The vehicle VIN                                           | Edmunds, Partners, Public |
| stockNumber                | The stock number of the car                               | Edmunds, Partners, Public |
| mileage                    | The number of miles this car has on it                    | Edmunds, Partners, Public |
| make                       | The car make                                              | Edmunds, Partners, Public |
| model                      | The car model                                             | Edmunds, Partners, Public |
| year                       | The car year                                              | Edmunds, Partners, Public |
| style                      | The style of this car                                     | Edmunds, Partners, Public |
| msrp                       | The MSRP of this car                                      | Edmunds, Partners         |
| tmv                        | TMV price for this car                                    | Edmunds, Partners         |
| guaranteedPrice            | Edmunds.com's guaranteed price                            | Edmunds, Partners         |
| invoice                    | The invoice price on this car                             | Edmunds, Partners         |
| monthlyPayment             | The Lease Promise monthly payment                         | Edmunds, Partners         |
| dealerId                   | The dealer ID                                             | Edmunds, Partners         |
| franchiseId                | The franchise ID                                          | Edmunds, Partners         |
| contactInfo                | The franchise contact information                         | Edmunds, Partners         |
| address                    | The franchise address                                     | Edmunds, Partners         |
| premier                    | Is this dealership a premier dealer?                      | Edmunds                   |
| inventoriesCount           | The inventories count                                     | Edmunds, Partners, Public |
| links                      | The pagination links                                      | Edmunds, Partners, Public |


#### JSON Response w/ view=full

    {
        "inventories": [
            {
                "id": {string},
                "type": {string},
                "vin": {string},
                "stockNumber": {string},
                "mileage": {integer},
                "make": {
                    "name": {string},
                    "niceName": {string}
                },
                "model": {
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
                    "trim": {string},
                    "link": {
                        "rel": {string},
                        "href": {string}
                    }
                },
                "media": {
                    "photos": {
                        "thumbnails": {
                            "count": {long},
                            "links": [
                                {
                                    "rel": {string},
                                    "href": {string},
                                    "size": {string}
                                },
                                ...
                            ]
                        },
                        "small": {
                            "count": {long},
                            "links": [
                                {
                                    "rel": {string},
                                    "href": {string}
                                },
                                ...
                            ]
                        },
                        "large": {
                             "count": {long},
                            "links": [
                                {
                                    "rel": {string},
                                    "href": {string}
                                },
                                ...
                            ]
                        },
                        "other": {
                            "count": {long},
                            "links": [
                                {
                                    "rel": {string},
                                    "href": {string}
                                }
                            ]
                        }
                    },
                    "videos": {
                        "count": {long},
                        "links": [
                            {
                                "rel": {string},
                                "href": {string}
                            }
                        ]
                    }
                },
                "colors": [
                    {
                        "id": {string},
                        "name": {string},
                        "availability": {string},
                        "equipmentType": {string},
                        "manufactureOptionName": {string},
                        "manufactureOptionCode": {string},
                        "category": {string},
                        "colorChips": {
                            "primary": {
                                "r": {integer},
                                "g": {integer},
                                "b": {integer},
                                "hex": {string}
                            }
                        },
                        "fabricTypes": [
                            {
                                "name": {string},
                                "value": {string}
                            }
                        ]
                    },
                    ...
                ],
                "mpg": {
                    "highway": {string},
                    "city": {string}
                },
                "prices": {
                    "msrp": {integer},
                    "tmv": {integer},
                    "guaranteedPrice": {integer},
                    "invoice": {integer},
                    "monthlyPayment": {integer}
                },
                "programs": {
                    "leasePromise": {
                        "active": {boolean},
                        "downPayment": {double},
                        "mileageFee": {double},
                        "dueAtSigning": {double},
                        "annualMileage": {integer},
                        "term": {integer},
                        "startDate": {long},
                        "endDate": {long},
                        "disclosure": {string}
                    },
                    "pricePromise": {
                        "active": {boolean},
                        "expireDate": {long},
                        "disclaimer": {string}
                    }
                },
                "equipment": [
                    {
                        "id": {string},
                        "name": {string},
                        "equipmentType": {string},
                        "availability": {string},
                        "attributes":[
                            {
                            "name": {string},
                            "value": {string}
                            },
                            ...
                        ]
                    },
                ],
                "features": [
                    {string}
                ],
                "dealer": {
                    "dealerId": {string},
                    "name": {string},
                    "franchiseId": {string},
                    "address": {
                        "street": {string},
                        "city": {string},
                        "stateCode": {string},
                        "stateName": {string},
                        "county": {string},
                        "country": {string},
                        "latitude": {double},
                        "longitude": {double},
                        "zipcode": {string}
                    },
                    "contactInfo": {
                        "phone": {string},
                        "website": {string}
                    },
                    "premier": {boolean},
                    "link": {
                        "rel": {string},
                        "href": {string}
                    }
                }
            },
            ...
        ],
        "inventoriesCount": {integer},
        "links": [
            {
                "rel": {string},
                "href": {string}
            },
            ...
        ]
    }

| Property                   | Description                                                                                                     | Visibility                |
|:---------------------------|:----------------------------------------------------------------------------------------------------------------|:--------------------------|
| id                         | The inventory ID                                                                                                | Edmunds, partners, Public |
| type                       | Is this car NEW, USED or CPO                                                                                    | Edmunds, partners         |
| vin                        | The vehicle VIN                                                                                                 | Edmunds, Partners, Public |
| stockNumber                | The stock number of the car                                                                                     | Edmunds, Partners, Public |
| mileage                    | The number of miles this car has on it                                                                          | Edmunds, Partners, Public |
| make                       | The car make                                                                                                    | Edmunds, Partners, Public |
| model                      | The car model                                                                                                   | Edmunds, Partners, Public |
| year                       | The car year                                                                                                    | Edmunds, Partners, Public |
| style                      | The style of this car                                                                                           | Edmunds, Partners, Public |
| photos                     | The link to the car photos                                                                                      | Edmunds, Partners, Public |
| videos                     | The link to the car videos                                                                                      | Edmunds, Partners, Public |
| equipmentType              | The type of the equipment. See [Equipment](/api-documentation/vehicle/spec_equipment/v2/) overview page         | Edmunds, Partners, Public |
| availability               | The availability of the equipment. See [Equipment](/api-documentation/vehicle/spec_equipment/v2/) overview page | Edmunds, Partners, Public |
| manufactureOptionName      | Manufacturer name                                                                                               | Edmunds, Partners, Public |
| manufactureOptionCode      | Manufacturer code                                                                                               | Edmunds, Partners, Public |
| colorChips                 | Color RGB and HEX values for primary and secondary colors                                                       | Edmunds, Partners, Public |
| fabricTypes                | The fabric types                                                                                                | Edmunds, Partners, Public |
| category                   | The color category (exterior or interior)                                                                       | Edmunds, Partners, Public |
| mpg                        | The highway and city MPG details                                                                                | Edmunds, Partners, Public |
| msrp                       | The MSRP of this car                                                                                            | Edmunds, Partners         |
| tmv                        | TMV price for this car                                                                                          | Edmunds, Partners         |
| guaranteedPrice            | Edmunds.com's guaranteed price                                                                                  | Edmunds, Partners         |
| invoice                    | The invoice price on this car                                                                                   | Edmunds, Partners         |
| monthlyPayment             | The Lease Promise monthly payment                                                                               | Edmunds, Partners         |
| pricePromise               | The Price Promise program details                                                                               | Edmunds, Partners         |
| leasePromise               | The Lease Promise program details                                                                               | Edmunds, Partners         |
| features                   | Features this car has                                                                                           | Edmunds, Partners, Public |
| equipment                  | The car equipment. See [Equipment](/api-documentation/vehicle/spec_equipment/v2/) overview page                 | Edmunds, Partners, Public |
| dealerId                   | The dealer ID                                                                                                   | Edmunds, Partners         |
| franchiseId                | The franchise ID                                                                                                | Edmunds, Partners         |
| contactInfo                | The franchise contact information                                                                               | Edmunds, Partners         |
| address                    | The franchise address                                                                                           | Edmunds, Partners         |
| premier                    | Is this dealership a premier dealer?                                                                            | Edmunds                   |
| inventoriesCount           | The inventories count                                                                                           | Edmunds, Partners, Public |
| links                      | The pagination links                                                                                            | Edmunds, Partners, Public |

**Note:** *Public* visibility is only available to public API keys that have been approved for access by Edmunds.com
