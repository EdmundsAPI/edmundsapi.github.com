---
layout: api-documentation
title : 'Find Rooftop Dealers count'
title_active_left_menu: Details and Location
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Find Rooftop Dealers count'
spec: details_and_location
version: v2
api: dealer
dropdown-link: 'api/dealer/v2/dealers/count'

level: 4
description_edpoint: 'Find Rooftop Dealers count'
title_md : Sample Request
number: 4

---

###Sample Request

Find **Ford** Rooftop Dealers count of the **33756** area

#### URL

    https://api.edmunds.com/api/dealer/v2/dealers/count?zipcode=33756&make=ford&api_key={api key}

#### Response

    {
        "dealersCount": 43
    }
    
