---
layout: api-documentation
title : 'Get Car Style Details by Car Make/Model/Year'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Car Style Details by Car Make/Model/Year'
spec: spec_style
version: v2
api: vehicle
dropdown-link: 'api/vehicle/{version}/{make}/{model}/{year}/styles'


level: 4
description_edpoint: 'Get Car Style Details by Car Make/Model/Year'
title_md : Parameters
number: 2

---

| Parameter  | Description                           | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------------|:----------------- |:------------- |:-------- |
| state		 | Response format            			 | new, used, future | 	             | No       |
| year       | The year of the car models 			 | 1990-current year |               | No       |
| view		 | Response detail level      			 | basic, full       | basic         | No       |
| fmt        | Response format                       | json              | json          | Yes      |
| api_key    | vehicle api key                       |                   |               | Yes      |