---
layout: api-documentation
title : 'Get Car Equipment Details for a Car Style'
title_active_left_menu: "Spec: Equipment"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Car Equipment Details for a Car Style'
spec: spec_equipment
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{style ID}/equipment'


level: 4
description_edpoint: 'Get Car Equipment Details for a Car Style'
title_md : Parameters
number: 2

---

| Parameter      | Description                           | Possible Values    | Default Value | Required |
|:---------------|:--------------------------------------|:-----------------  |:------------- |:-------- |
| availability	 | Equipment availability on this car    | optional, standard |               | No       |
| name			 | Equipment name   				   	 | (see overview) 	  |               | No       |
| fmt        	 | Response format                       | json               | json          | Yes      |
| api_key    	 | Vehicle API key                       |                    |               | Yes      |