---
layout: api-documentation
title : 'Find Rooftop Dealers by zipcode'
title_active_left_menu: Details and Location
title_parent: Api documentation

amount_version: 125
title-endpoint: 'Find Rooftop Dealers by zipcode'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/dealers/'

level: 4
description_edpoint: 'Find Rooftop Dealers by zipcode'
title_md : Response format
number: 3

---


### Response format

    {
        "dealers":[
            {
                "dealerId": {string},
                "type": {string},
                "name": {string},
                "niceName": {string},
                "states": {array},
                "active": {boolean},
                "address": {
                    "street": {string},
                    "apartment": {string},
                    "city": {string},
                    "stateCode": {string},
                    "stateName": {string},
                    "county": {string},
                    "country": {string},
                    "latitude": {double},
                    "longitude": {double},
                    "zipcode": {string}
                },
                "operations": {
                    "Wednesday": {string},
                    "Thursday": {string},
                    "Tuesday": {string},
                    "Saturday": {string},
                    "Friday": {string},
                    "Monday": {string},
                    "Sunday": {string}
                },
                "reviews": {
                    "sales": {
                        "overallRating": {integer},
                        "count": {integer},
                        "recommendedCount": {integer},
                        "notRecommendedCount": {integer}
                    },
                    "service": {
                        "overallRating": {integer},
                        "count": {integer},
                        "recommendedCount": {integer},
                        "notRecommendedCount": {integer}
                    }
                },
                "contactInfo": {
                    "phone": {string},
                    "website": {string}
                }
                "distance": {double}
            },
            ...
        ],
        "dealersCount": {integer},
        "links": [
            {
                "rel": {string},
                "href": {string}
            },
            ...
        ]
    }

| Property                      | Description                                                     | Visibility                |
|:------------------------------|:----------------------------------------------------------------|:--------------------------|
| dealerId                      | The dealer location ID                                          | Edmunds, Partners, Public |
| type                          | The dealer location type                                        | Edmunds, Partners, Public |
| name                          | The dealer name                                                 | Edmunds, Partners, Public |
| niceName                      | The dealer logical name                                         | Edmunds, Partners, Public |
| states                        | The list of vehicle states the dealer works with                | Edmunds, Partners, Public |
| active                        | Indicates that the dealer is active                             | Edmunds, Partners, Public |
| address                       | The address for the dealer                                      | Edmunds, Partners, Public |
| operations                    | The list of operations                                          | Edmunds, Partners, Public |
| contactInfo                   | The dealer contact info                                         | Edmunds, Partners, Public |
| distance                      | The distance between dealer and specified by zipcode location   | Edmunds, Partners, Public |
| reviews                       | The dealer sales and service review counters                    | Edmunds, Partners, Public |
| dealersCount                  | The dealers count                                               | Edmunds, Partners, Public |
| links                         | The pagination links                                            | Edmunds, Partners, Public |
