---
layout: api-documentation
title : 'Get Style Count by Car Make'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Style Count by Car Make'
spec: spec_style
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/styles/count'


level: 4
description_edpoint: 'Get Style Count by Car Make'
title_md : Sample Request
number: 4

---

Get the styles count for **Lexus**

#### URL

	https://api.edmunds.com/api/vehicle/v2/lexus/styles/count?fmt=json&api_key={api key}
	
#### Response
	
	{
	  "stylesCount": 326
    }
