---
layout: api-documentation
title : 'Get Style Count by Car Make and Model'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Style Count by Car Make and Model'
spec: spec_style
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/styles/count'


level: 4
description_edpoint: 'Get Style Count by Car Make and Model'
title_md : Sample Request
number: 4

---

Get the styles count for **Lexus RX-350**

#### URL

	https://api.edmunds.com/api/vehicle/v2/lexus/rx350/styles/count?fmt=json&api_key={api key}
	
#### Response
	
	{
	  "stylesCount": 18
    }
