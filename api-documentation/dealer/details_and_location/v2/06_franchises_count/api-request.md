---
layout: api-documentation
title : 'Find Franchises count'
title_active_left_menu: Details and Location
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Franchises count'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/franchises/count'

level: 4
description_edpoint: 'Find Franchises count'
title_md : Sample Request
number: 4

---

###Sample Request

Find Franchises count of the **12345** area

#### URL

    https://api.edmunds.com/api/dealer/v2/franchises/count?zipcode=12345&api_key={api_key}&fmt=json

#### Response

    {
        "franchisesCount": 1527
    }
    
