---
layout: api-documentation
title : 'Get details for a specific car make/brand v3'
title_active_left_menu: 'Spec: Make'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'v3/{make}'
spec: spec_make
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/{make}'


level: 4
description_edpoint: 'Get Details on a Specific Car Make v3'
title_md : Parameters
number: 2

---

### Parameters

| Parameter      | Description                | Possible Values               | Default Value | Required |
|:-------------- |:---------------------------|:----------------------------- |:------------- |:-------- |
| {make}         | The car make               | See [List of Makes](/api-documentation/vehicle/spec_make/v2/01_list_of_makes/api-description.html) | | Yes |
| state          | The state of the car makes | NEW, USED, PRE_PROD, NEW_USED |               | No       |
| api_key        | Vehicle API key            |                               |               | Yes      |