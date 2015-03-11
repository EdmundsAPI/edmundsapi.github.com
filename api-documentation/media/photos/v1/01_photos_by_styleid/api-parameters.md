---
layout: api-documentation
title : 'Get Car Photos By Car Style ID'
title_active_left_menu: 'Photos'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Car Photos By Car Style ID'
spec: photos
version: v1
api: media
dropdown-link: 'v1/api/vehiclephoto/service/findphotosbystyleid'

level: 4
description_edpoint: 'Get Car Photos By Car Style ID'
title_md : Parameters
number: 2

---

###Parameters

| Parameter  | Description                           | Possible Values   | Default Value | Required |
|:-----------|:--------------------------------------|:----------------- |:------------- |:-------- |
| styleId    | The car style ID	| See the [Spec: Style](/api-documentation/vehicle/spec_style/v2/) resource | | Yes |
| comparator | Sort results by photo shot type       | simple			 |               | Yes      |
| fmt        | Response format                       | json              | json          | Yes      |
| api_key    | Vehicle API key                       |                   |               | Yes      |
