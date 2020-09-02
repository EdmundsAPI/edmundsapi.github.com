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
title_md : Response format
number: 3

---

### Response format

#### JSON Response

    {
        "id": {integer},
        "models": {array of objects},
        "name": {string},
        "niceName": {string}
    }

| Property      | Description                                              | Visibility                |
|:--------------|:---------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the car make/brand                    | Edmunds, Partners, Public |
| models        | List of models belonging to this car make (see below)    | Edmunds, Partners, Public |
| name          | The name of this car make                                | Edmunds, Partners, Public |
| niceName      | URL-friendly car make/brand name                         | Edmunds, Partners, Public |

Each element in the <code>models</code> array follows this format:

    {
        "id": {string},
        "name": {string},
        "niceName": {string},
        "states": {array of strings}
        "years": {array of objects}
    }

| Property      | Description                                                               | Visibility                |
|:--------------|:--------------------------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the car model                                          | Edmunds, Partners, Public |
| name          | The name of this car model                                                | Edmunds, Partners, Public |
| niceName      | URL-friendly car model name                                               | Edmunds, Partners, Public |
| states        | The state of this model/year (e.g. NEW, USED, PRE_PROD or NEW_USED)       | Edmunds, Partners, Public |
| years         | List of model/years belonging to this car model (see below)               | Edmunds, Partners, Public |

Each element in the <code>years</code> array follows this format:

    {
        "id": {integer},
        "states": {array of strings},
        "year": {integer}
    }

| Property      | Description                                                               | Visibility                |
|:--------------|:--------------------------------------------------------------------------|:------------------------- |
| id            | The Edmunds ID for the car model/year                                     | Edmunds, Partners, Public |
| states        | The state of this model/year (e.g. NEW, USED, PRE_PROD or NEW_USED)       | Edmunds, Partners, Public |
| year          | The four digit year of this car model                                     | Edmunds, Partners, Public |
