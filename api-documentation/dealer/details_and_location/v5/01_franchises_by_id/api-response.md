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
title_md : Response format
number: 3

---


### Response format

#### JSON Response

    {
      "id": {integer},
      "rooftopId": {integer},
      "name": {string},
      "logicalName": {string},
      "rooftopLogicalName": {string},
      "parentDealershipName": {string},
      "showroomPhotos": {list of objects},
      "logoUrl": {string},
      "dealerWebSites": {list of strings},
      "languages": {list of strings},
      "address": {object},
      "workHours": {object},
      "videos": {list of objects},
      "about": {string},
      "location": {object},
      "distinguishingFeatures": {list of objects},
      "amenities": {list of strings},
      "socialLinks": {list of objects},
      "productFeatures": {object},
      "phoneNumbers": {object},
      "dealerType": {string},
      "publishDate": {string},
      "groupId": {string},
      "groupName": {string},
      "ppCommitments": {list of objects},
      "showroomPage": {string},
      "salesReviewCount": {integer},
      "salesRating": {double},
      "franchises": {list of objects},
      "dealerServices": {list of objects},
      "email": {string}
    }

| Property               | Description                     | Visibility                |
|:-----------------------|:--------------------------------|:--------------------------|
| id                     | Dealer Id                       | Edmunds, Partners, Public |
| rooftopId              | Dealer Rooftop Id               | Edmunds, Partners, Public |
| name                   | Dealer Name                     | Edmunds, Partners, Public |
| logicalName            | Dealer Logical Name             | Edmunds, Partners, Public |
| rooftopLogicalName     | Dealer Rooftop Logical Name     | Edmunds, Partners, Public |
| parentDealershipName   | Dealer Parent Dealership Name   | Edmunds, Partners, Public |
| showroomPhotos         | Dealer Showroom Photos          | Edmunds, Partners, Public |
| logoUrl                | Dealer Logo Url                 | Edmunds, Partners, Public |
| dealerWebSites         | Dealer Dealer Web Sites         | Edmunds, Partners, Public |
| languages              | Dealer Languages                | Edmunds, Partners, Public |
| address                | Dealer Address                  | Edmunds, Partners, Public |
| workHours              | Dealer Work Hours               | Edmunds, Partners, Public |
| videos                 | Dealer Videos                   | Edmunds, Partners, Public |
| about                  | Dealer About                    | Edmunds, Partners, Public |
| location               | Dealer Location                 | Edmunds, Partners, Public |
| distinguishingFeatures | Dealer Distinguishing Features  | Edmunds, Partners, Public |
| amenities              | Dealer Amenities                | Edmunds, Partners, Public |
| socialLinks            | Dealer Socia lLinks             | Edmunds, Partners, Public |
| productFeatures        | Dealer Product Features         | Edmunds, Partners, Public |
| phoneNumbers           | Dealer Phone Numbers            | Edmunds, Partners, Public |
| dealerType             | Dealer Dealer Type              | Edmunds, Partners, Public |
| publishDate            | Dealer Publish Date             | Edmunds, Partners, Public |
| groupId                | Dealer Group Id                 | Edmunds, Partners, Public |
| groupName              | Dealer Group Name               | Edmunds, Partners, Public |
| ppCommitments          | Dealer Pp Commitments           | Edmunds, Partners, Public |
| showroomPage           | Dealer Showroom Page            | Edmunds, Partners, Public |
| salesReviewCount       | Dealer Sales Review Count       | Edmunds, Partners, Public |
| salesRating            | Dealer Sales Rating             | Edmunds, Partners, Public |
| franchises             | Dealer Franchises               | Edmunds, Partners, Public |
| dealerServices         | Dealer Dealer Services          | Edmunds, Partners, Public |
| email                  | Dealer Email                    | Edmunds, Partners, Public |

The properties within the <code>showroomPhotos</code> object are:

    {
      "photoUrl": {string},
      "contentType": {string},
      "order": {integer},
      "description": {string},
      "tags": {list of strings}
    }

| Property    | Description                                       | Visibility                |
|:------------|:--------------------------------------------------|:------------------------- |
| photoUrl    | Photo Url                                         | Edmunds, Partners, Public |
| contentType | Content Type                                      | Edmunds, Partners, Public |
| order       | Photo Order Number (relevant for multiple photos) | Edmunds, Partners, Public |
| description | Photo Description                                 | Edmunds, Partners, Public |
| tags        | Photo Tags                                        | Edmunds, Partners, Public |

The properties within the <code>address</code> object are:

    {
      "apartment": {string},
      "city": {string},
      "stateCode": {string},
      "stateName": {string},
      "street": {string},
      "zip": {string},
      "county": {string},
      "country": {string}
    }

| Property    | Description                           | Visibility                |
|:------------|:--------------------------------------|:------------------------- |
| apartment   | Dealer Apartment                      | Edmunds, Partners, Public |
| city        | Dealer City                           | Edmunds, Partners, Public |
| stateCode   | Dealer State Code (e.g. LA)           | Edmunds, Partners, Public |
| stateName   | Dealer State Name (e.g. Louisiana)    | Edmunds, Partners, Public |
| street      | Dealer Street (e.g. 4895 Johnston St) | Edmunds, Partners, Public |
| zip         | Dealer Zip Code                       | Edmunds, Partners, Public |
| county      | Dealer County (e.g. Lafayette)        | Edmunds, Partners, Public |
| country     | Dealer Country (e.g. USA)             | Edmunds, Partners, Public |

The properties within the <code>workHours</code> object are:

    {
      "{dayName}": {
        "open": {string},
        "close": {string}
      },
      ...
    }

| Property | Description                      | Visibility                |
|:---------|:---------------------------------|:------------------------- |
| dayName  | Day Name (e.g. monday, saturday) | Edmunds, Partners, Public |
| open     | Opening Time (e.g. 8:30 AM)      | Edmunds, Partners, Public |
| close    | Closing Time (e.g. 5:30 PM)      | Edmunds, Partners, Public |

The properties within the <code>videos</code> object are:

    {
      "url": {string},
      "embedCode": {string},
      "thumbnailUrl": {string},
      "description": {string},
      "order": {integer},
      "videoSource": {string},
      "embedSrc": {string}
    }

| Property     | Description                  | Visibility                |
|:-------------|:-----------------------------|:------------------------- |
| url          | Video Url                    | Edmunds, Partners, Public |
| embedCode    | Html <code>iframe</code> Tag | Edmunds, Partners, Public |
| thumbnailUrl | Link to Video Preview Photo  | Edmunds, Partners, Public |
| description  | Video Description Url/Text   | Edmunds, Partners, Public |
| order        | Video Order Number           | Edmunds, Partners, Public |
| videoSource  | Video Source (e.g. Youtube)  | Edmunds, Partners, Public |
| embedSrc     | Embed Link to the Video      | Edmunds, Partners, Public |

The properties within the <code>location</code> object are:

    {
      "lat": {double},
      "lon": {double},
    }

| Property | Description               | Visibility                |
|:---------|:--------------------------|:------------------------- |
| lat      | Dealer Location Latitude  | Edmunds, Partners, Public |
| lon      | Dealer Location Longitude | Edmunds, Partners, Public |

The properties within the <code>distinguishingFeatures</code> object are:

    {
      "category": {string},
      "description": {list of strings}
    }

| Property    | Description                        | Visibility                |
|:------------|:-----------------------------------|:--------------------------|
| category    | Distinguishing Feature Category    | Edmunds, Partners, Public |
| description | Distinguishing Feature Description | Edmunds, Partners, Public |

The properties within the <code>socialLinks</code> object are:

    {
      "title": {string},
      "url": {string}
    }

| Property | Description                                   | Visibility                |
|:---------|:----------------------------------------------|:--------------------------|
| title    | Social Network Name (e.g. YOUTUBE, INSTAGRAM) | Edmunds, Partners, Public |
| url      | Link to Social Network                        | Edmunds, Partners, Public |

The properties within the <code>productFeatures</code> object are:

    {
      "active": {boolean},
      "directDealer": {boolean},
      "lpStatus": {boolean},
      "ppStatus": {boolean},
      "upStatus": {boolean},
      "verified": {boolean},
      "types": {list of strings}
    }

| Property         | Description                                          | Visibility                |
|:-----------------|:-----------------------------------------------------|:--------------------------|
| active           | Product Feature Is Active                            | Edmunds, Partners, Public |
| directDealer     | Is The Product Feature Dealer Direct Edmunds Partner | Edmunds, Partners, Public |
| lpStatus         | Product Feature Lease Promise Status                 | Edmunds, Partners, Public |
| ppStatus         | Product Feature Price Promise Status                 | Edmunds, Partners, Public |
| upStatus         | Product Feature Used Promise Status                  | Edmunds, Partners, Public |
| verified         | Product Feature Verified                             | Edmunds, Partners, Public |
| types            | Product Feature Types                                | Edmunds, Partners, Public |
| productLineItems | Product Feature Product Line Items                   | Edmunds, Partners, Public |

The properties within the <code>productFeatures.productLineItems</code> object are:

    {
      "id": {integer},
      "group": {string},
      "product": {string}
    }

| Property | Description                | Visibility                |
|:---------|:---------------------------|:--------------------------|
| id       | Product Line Items Id      | Edmunds, Partners, Public |
| group    | Product Line Items Group   | Edmunds, Partners, Public |
| product  | Product Line Items Product | Edmunds, Partners, Public |

The properties within the <code>phoneNumbers</code> object are:

    {
      "{phoneNumberType}": {
        "areaCode": {string},
        "prefix": {string},
        "postfix": {string}
      },
      ...
    }

| Property        | Description                    | Visibility                |
|:----------------|:-------------------------------|:--------------------------|
| phoneNumberType | Phone Number Type (e.g. basic) | Edmunds, Partners, Public |
| areaCode        | Phone Number AreaCode          | Edmunds, Partners, Public |
| prefix          | Phone Number Prefix            | Edmunds, Partners, Public |
| postfix         | Phone Number Postfix           | Edmunds, Partners, Public |

The properties within the <code>ppCommitments</code> object are:

    {
      "category": {string},
      "text": {string}
    }

| Property | Description                                    | Visibility                |
|:---------|:-----------------------------------------------|:--------------------------|
| category | Pp Commitment Category (e.g. Personal Service) | Edmunds, Partners, Public |
| text     | Pp Commitment Category Text                    | Edmunds, Partners, Public |

The properties within the <code>ppCommitments</code> object are:

    {
      "category": {string},
      "text": {string}
    }

| Property | Description                                    | Visibility                |
|:---------|:-----------------------------------------------|:--------------------------|
| category | Pp Commitment Category (e.g. Personal Service) | Edmunds, Partners, Public |
| text     | Pp Commitment Category Text                    | Edmunds, Partners, Public |

The properties within the <code>franchises</code> and <code>dealerServices</code> object are:

    {
      "id": {integer},
      "rooftopId": {integer},
      "name": {string},
      "logicalName": {string},
      "rooftopLogicalName": {string},
      "parentDealershipName": {string},
      "make": {string},
      "address": {object},
      "phones": {list of strings},
      "location": {object},
      "productFeatures": {object},
      "phoneNumbers": {object},
      "dealerType": {string},
      "sortOrders": {
        "tier": {integer},
      },
      "publishDate": {string},
      "groupId": {string},
      "groupName": {string},
      "ppCommitments": {list of objects},
      "newUsedType": {string},
      "showroomPage": {string},
      "salesReviewCount": {integer},
      "salesRating": {double},
    }

| Property | Description                                        | Visibility                |
|:---------|:---------------------------------------------------|:--------------------------|
| id                   | Franchise Id                           | Edmunds, Partners, Public |
| rooftopId            | Franchise Rooftop Id                   | Edmunds, Partners, Public |
| name                 | Franchise Name                         | Edmunds, Partners, Public |
| logicalName          | Franchise Logical Name                 | Edmunds, Partners, Public |
| rooftopLogicalName   | Franchise Rooftop Logical Name         | Edmunds, Partners, Public |
| parentDealershipName | Franchise Parent Dealership Name       | Edmunds, Partners, Public |
| make                 | Franchise Make Name                    | Edmunds, Partners, Public |
| address              | Franchise Address (See above)          | Edmunds, Partners, Public |
| phones               | Franchise Phones (See above)           | Edmunds, Partners, Public |
| location             | Franchise Location (See above)         | Edmunds, Partners, Public |
| productFeatures      | Franchise Product Features (See above) | Edmunds, Partners, Public |
| phoneNumbers         | Franchise Phone Numbers (See above)    | Edmunds, Partners, Public |
| dealerType           | Franchise Dealer Type                  | Edmunds, Partners, Public |
| sortOrders           | Franchise Sort Orders                  | Edmunds, Partners, Public |
| sortOrders.tier      | Franchise Sort Orders Tier             | Edmunds, Partners, Public |
| publishDate          | Franchise Publish Date                 | Edmunds, Partners, Public |
| groupId              | Franchise Group Id                     | Edmunds, Partners, Public |
| groupName            | Franchise Group Name                   | Edmunds, Partners, Public |
| ppCommitments        | Franchise Pp Commitments (See above)   | Edmunds, Partners, Public |
| newUsedType          | Franchise New Used Type                | Edmunds, Partners, Public |
| showroomPage         | Franchise Showroom Page                | Edmunds, Partners, Public |
| salesReviewCount     | Franchise Sales Review Count           | Edmunds, Partners, Public |
| salesRating          | Franchise Sales Rating                 | Edmunds, Partners, Public |