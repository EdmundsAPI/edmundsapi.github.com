---
layout: api-documentation
title : 'Get Dealer Details and Location'
title_active_left_menu: 'Details and Location'
title_parent: Api documentation

amount_version: 125
title-endpoint: 'Find Dealership Franchises by Id'
spec: details_and_location
version: v5
api: dealer
dropdown-link: 'api/dealer/v5/dealership/{id}/franchises'

level: 4
description_edpoint: 'Find Dealership Franchises'
title_md : Sample Request
number: 4

---

### Sample Request

Find Franchise with ID **860087**

#### Basic request

#### URL

    https://api.edmunds.com/api/dealer/v5/dealership/860087/franchises?api_key={api_key}

#### Response

    {
      "id": 860087,
      "rooftopId": 860087,
      "name": "Max Auto Sales",
      "logicalName": "MaxAutoSales_860087",
      "rooftopLogicalName": "MaxAutoSales_860087",
      "parentDealershipName": "Hampton Automotive",
      "showroomPhotos": [
        {
          "photoUrl": "https://edmunds-consumer-hosted-photos.s3.amazonaws.com/dealer/MaxAutoSales_860087/showroom/size_1440x1080/9a8ec571-285d-4e32-b304-b49084ad9a97",
          "contentType": "",
          "order": 1,
          "description": "Street view of some of our trucks for sale in front of our building.",
          "tags": [
            "EXTERIOR",
            "INVENTORY",
            "USED"
          ]
        },
        ...
      ],
      "logoUrl": "https://edmunds-consumer-hosted-photos.s3.amazonaws.com/dealer/MaxAutoSales_860087/showroom/size_300x300/f16720c1-9d5d-480d-ad3a-b4eaf7a839c8",
      "dealerWebSites": [
        "https://maxautosalesla.com/"
      ],
      "address": {
        "apartment": "",
        "city": "Lafayette",
        "stateCode": "LA",
        "stateName": "Louisiana",
        "street": "4895 Johnston St",
        "zip": "70503",
        "county": "Lafayette",
        "country": "USA"
      },
      "workHours": {
        "monday": {
          "open": "8:30 AM",
          "close": "5:30 PM"
        },
        "tuesday": {
          "open": "8:30 AM",
          "close": "5:30 PM"
        },
        ...
      },
      "videos": [
        {
          "url": "https://youtu.be/7RjdxfrTKqY",
          "embedCode": "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/7RjdxfrTKqY\" frameborder=\"0\" allowfullscreen></iframe>",
          "thumbnailUrl": "http://img.youtube.com/vi/7RjdxfrTKqY/0.jpg",
          "description": "https://www.youtube.com/watch?v=7RjdxfrTKqY",
          "order": 0,
          "videoSource": "Youtube",
          "embedSrc": "https://www.youtube.com/embed/7RjdxfrTKqY"
        }
      ],
      "about": "Best used cars in Lafayette. We offer traditional and In house financing for customers with challenged credit. 6 month warranty available. We are Lafayette, Louisiana's longest running A+ rated Better Business Bureau accredited used car dealership. All of our used cars are mechanic inspected, road tested, tuned up, and detailed.",
      "location": {
        "lat": 30.184431,
        "lon": -92.067247
      },
      "distinguishingFeatures": [
        {
          "category": "UNIQUE_AMENITY",
          "description": [
            "Maintains our own service department with a team of 3 full time mechanics.",
            "In business for over 25 years."
          ]
        },
        ...
      ],
      "amenities": [
        "Complimentary Coffee",
        "Television",
        "Vending Machines",
        "Customer Lounge Area",
        "After Hours Drop-Off"
      ],
      "socialLinks": [
        {
          "title": "YOUTUBE",
          "url": "https://www.youtube.com/channel/UC-gT4ylqZIbFHnvSQlJw0sA/featured"
        },
        ...
      ],
      "productFeatures": {
        "active": true,
        "directDealer": false,
        "lpStatus": false,
        "ppStatus": false,
        "upStatus": false,
        "verified": true,
        "types": [
          
        ]
      },
      "phoneNumbers": {
        "basic": {
          "areaCode": "337",
          "prefix": "989",
          "postfix": "0078"
        }
      },
      "dealerType": "ROOFTOP",
      "publishDate": "2020-11-15T10:55:07.034Z",
      "groupId": "1805516",
      "groupName": "Hampton Automotive",
      "showroomPage": "/dealerships/all/louisiana/lafayette/MaxAutoSales_860087",
      "salesReviewCount": 0,
      "salesRating": 0.0,
      "franchises": [
        {
          "id": 860088,
          "rooftopId": 860087,
          "name": "Max Auto Sales",
          "logicalName": "MaxAutoSales_860088",
          "rooftopLogicalName": "MaxAutoSales_860087",
          "parentDealershipName": "Hampton Automotive",
          "make": "Used",
          "address": {
            "apartment": "",
            "city": "Lafayette",
            "stateCode": "LA",
            "stateName": "Louisiana",
            "street": "4895 Johnston St",
            "zip": "70503",
            "county": "Lafayette",
            "country": "USA"
          },
          "phones": [
            "3379890078"
          ],
          "location": {
            "lat": 30.184431,
            "lon": -92.067247
          },
          "productFeatures": {
            "active": true,
            "directDealer": false,
            "lpStatus": false,
            "ppStatus": false,
            "upStatus": false,
            "verified": true,
            "types": [
              "UCI"
            ],
            "productLineItems": [
              {
                "id": 2979786,
                "group": "IMT_BASIC",
                "product": "UCI"
              },
              ...
            ]
          },
          "phoneNumbers": {
            "basic": {
              "areaCode": "337",
              "prefix": "989",
              "postfix": "0078"
            }
          },
          "dealerType": "DEALERFRANCHISE",
          "sortOrders": {
            "tier": 5
          },
          "publishDate": "2020-11-15T11:33:35.062Z",
          "groupId": "",
          "groupName": "",
          "newUsedType": "USED",
          "showroomPage": "/dealerships/all/louisiana/lafayette/MaxAutoSales_860087",
          "salesReviewCount": 0,
          "salesRating": 0.0
        }
      ],
      "dealerServices": [
        
      ],
      "email": ""
    }