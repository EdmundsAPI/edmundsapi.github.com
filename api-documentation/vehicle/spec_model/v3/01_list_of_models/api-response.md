---
layout: api-documentation
title : 'Spec: Model'
title_active_left_menu: 'Spec Model'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get A List of Models'
spec: spec_model
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/models'


level: 4
description_edpoint: 'Get A List of Models'
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
          "id": {string},
          "makeId": {integer},
          "makeName": {string},
          "makeNiceName": {string},
          "makeNiceId": {string},
          "name": {string},
          "niceName": {string},
          "adTargetId": {string},
          "niceId": {string},
          "modelLinkCode": {string},
          "make": {object},
          "modelYears": {list of objects},
          "attributeGroups": {object},
          "categories": {object},
          "categoryValues": {list of strings},
          "publicationStates": {list of strings}
        },
        ...
      ]
    }

| Property          | Description                                                      | Visibility                |
|:------------------|:-----------------------------------------------------------------|:------------------------- |
| totalNumber       | Total number of results                                          | Edmunds, Partners, Public |
| totalPages        | Total number of pages based on <code>pagesize</code> query param | Edmunds, Partners, Public |
| results           | Result list                                                      | Edmunds, Partners, Public |
| id                | The Car Model Id                                                 | Edmunds, Partners, Public |
| makeId            | The Car Make Id (e.g. 200000130)                                 | Edmunds, Partners, Public |
| makeName          | The Car Make Name (e.g. Mercedes-Benz)                           | Edmunds, Partners, Public |
| makeNiceName      | The Car Make Nice Name d (e.g. mercedes-benz)                    | Edmunds, Partners, Public |
| makeNiceId        | The Car Make Nice Id e (e.g. mercedesbenz)                       | Edmunds, Partners, Public |
| name              | The Car Model Name (e.g. E-Class)                                | Edmunds, Partners, Public |
| niceName          | The Car Model Nice Name (e.g. eclass)                            | Edmunds, Partners, Public |
| adTargetId        | The Car Ad Target Id (e.g. eclass)                               | Edmunds, Partners, Public |
| niceId            | The Car Model Nice Id (e.g. e-class)                             | Edmunds, Partners, Public |
| make              | The Car Make Info                                                | Edmunds, Partners, Public |
| modelYears        | The Car Model Years Info                                         | Edmunds, Partners, Public |
| modelLinkCode     | The Car Model Link Code                                          | Edmunds, Partners, Public |
| attributeGroups   | The Car Attribute Groups                                         | Edmunds, Partners, Public |
| categories        | The Car Categories                                               | Edmunds, Partners, Public |
| categoryValues    | The Car Category Values                                          | Edmunds, Partners, Public |
| publicationStates | The Car Publication States                                       | Edmunds, Partners, Public |

The properties within the <code>make</code> object are:

    {
      "id": {integer},
      "href": {string}
    },

| Property | Description                                                | Visibility                |
|:---------|:-----------------------------------------------------------|:------------------------- |
| id       | Make Id                                                    | Edmunds, Partners, Public |
| href     | Link to v3 [**makes**](/api-documentation/vehicle/spec_make/v3/03_list_of_makes/api-description.html) endpoint in order to get additional data  | Edmunds, Partners, Public |

The properties within the <code>modelYears</code> object are:

    {
      "id": {integer},
      "name": {string},
      "year": {integer},
      "publicationStates": {list of strings},
      "href": {string}
    }

| Property          | Description                                                    | Visibility                |
|:------------------|:---------------------------------------------------------------|:------------------------- |
| id                | Model Year Id                                                  | Edmunds, Partners, Public |
| name              | Model Year Name (e.g "2019")                                   | Edmunds, Partners, Public |
| year              | Model Year (e.g. 2019)                                         | Edmunds, Partners, Public |
| publicationStates | Model Year Publication States (e.g. USED)                      | Edmunds, Partners, Public |
| href              | Link to v3 [**modelYears**](/api-documentation/vehicle/spec_model_year/v3/03_list_of_model_years/api-description.html) endpoint in order to get additional data | Edmunds, Partners, Public |

The properties within the <code>categories</code> and <code>types</code> objects are:

    {
      "{categoryName1}": [{string value1}, {string value2}, ...],
      "{categoryName2}": [{string value1}, {string value2}, ...],
      ...
    }

| Property     | Description                                                | Visibility                |
|:-------------|:-----------------------------------------------------------|:------------------------- |
| categoryName | Category Name (e.g. Market, Vehicle type)                  | Edmunds, Partners, Public |

The properties within the <code>attributeGroups</code> object are:

    {
      ...
      "attributeGroups": {
        "{attributeGroupName}": {
          "id": {integer},
          "name": {string},
          "properties": {
            "{propertyName1}": {string},
            "{propertyName2}": {string},
            ...
          },
          "attributes": {
            "{propertyName1}": {
              "id": {integer},
              "name": {string},
              "value": {string}
            },
            "{propertyName2}": {
              "id": {integer},
              "name": {string},
              "value": {string}
            },
            ...
          }
        }
      },
      ...
    }

| Property             | Description                                                       | Visibility                |
|:---------------------|:------------------------------------------------------------------|:------------------------- |
| {attributeGroupName} | Attribute Group Name                                              | Edmunds, Partners, Public |
| id                   | Attribute Group Id                                                | Edmunds, Partners, Public |
| name                 | Attribute Group Name                                              | Edmunds, Partners, Public |
| properties           | A Set of Properties of Attribute Group (key - value)              | Edmunds, Partners, Public |
| attributes           | A Detailed Set of Properties of Attribute Group (id, name, value) | Edmunds, Partners, Public |
