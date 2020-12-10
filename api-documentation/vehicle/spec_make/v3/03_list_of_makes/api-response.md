---
layout: api-documentation
title : 'Spec: Make'
title_active_left_menu: 'Spec: Make'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get A List of Makes'
spec: spec_make
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/makes'


level: 4
description_edpoint: 'Get A List of Makes'
title_md : Response format
number: 3
---

### Response format

#### JSON Response

    {
      "totalNumber": {integer},
      "totalPages": {integer},
      "results": [
        {
          "id": {integer},
          "name": {string},
          "niceName": {string},
          "adTargetId": {string},
          "niceId": {string},
          "useInUsed": {string},
          "useInNew": {string},
          "useInPreProduction": {string},
          "useInFuture": {string},
          "models": {list of objects}
        },
        ...
      ]
    }

| Property           | Description                                                                     | Visibility                |
|:-------------------|:--------------------------------------------------------------------------------|:------------------------- |
| totalNumber        | Total number of results                                                         | Edmunds, Partners, Public |
| totalPages         | Total number of pages based on <code>pagesize</code> query param                | Edmunds, Partners, Public |
| results            | Result list                                                                     | Edmunds, Partners, Public |
| id                 | The Car Make Id                                                                 | Edmunds, Partners, Public |
| name               | The Car Make Name (e.g. Mercedes-Benz)                                          | Edmunds, Partners, Public |
| niceName           | The Car Make Nice Name d (e.g. mercedes-benz)                                   | Edmunds, Partners, Public |
| niceId             | The Car Make Nice Id e (e.g. mercedesbenz)                                      | Edmunds, Partners, Public |
| adTargetId         | The Car Ad Target Id (e.g. mercedesbenz)                                        | Edmunds, Partners, Public |
| useInUsed          | The Car Use In <code>USED</code> publication state (e.g. "N" as "No")           | Edmunds, Partners, Public |
| useInNew           | The Car Use In <code>NEW</code> publication state (e.g. "Y" as "Yes")           | Edmunds, Partners, Public |
| useInPreProduction | The Car Use In <code>PRE_PRODUCTION</code> publication state (e.g. "N" as "No") | Edmunds, Partners, Public |
| useInFuture        | The Car Use In <code>FUTURE</code> publication state (e.g. "Y" as "Yes")        | Edmunds, Partners, Public |
| models             | The Car Models Info                                                             | Edmunds, Partners, Public |

The properties within the <code>models</code> object are:

    {
      "id": {string},
      "name": {string},
      "niceName": {string},
      "href": {string}
    }

| Property | Description                                                | Visibility                |
|:---------|:-----------------------------------------------------------|:------------------------- |
| id       | Model Id                                                   | Edmunds, Partners, Public |
| name     | Model Name (e.g. E-Class)                                  | Edmunds, Partners, Public |
| niceName | Model Nice Name (e.g. eclass)                              | Edmunds, Partners, Public |
| href     | Link to v3 [**models**](/api-documentation/vehicle/spec_model/v3/01_list_of_models/api-description.html) endpoint in order to get additional data  | Edmunds, Partners, Public |
