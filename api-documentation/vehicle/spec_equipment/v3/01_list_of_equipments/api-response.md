---
layout: api-documentation
title : 'Get Equipments List'
title_active_left_menu: "Spec: Equipment"
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get Equipments List'
spec: spec_equipment
version: v3
api: vehicle
dropdown-link: '/api/vehicle/v3/equipments'


level: 4
description_edpoint: 'Get Equipments List'
title_md : Response format
number: 3

---

### Response format

#### JSON Response

    {
      "totalNumber": {integer},
      "totalPages": {integer},
      "results": [
        "id": {string},
        "niceId": {string},
        "modelYearId": {integer},
        "styleId": {integer},
        "price": {object},
        "name": {string},
        "attributeGroups": {object},
        "equipmentClass": {string},
        "equipmentAvailability": {string}
      ]
    }

| Property               | Description                                                      | Visibility                |
|:-----------------------|:-----------------------------------------------------------------|:------------------------- |
| totalNumber            | Total number of results                                          | Edmunds, Partners, Public |
| totalPages             | Total number of pages based on <code>pagesize</code> query param | Edmunds, Partners, Public |
| results                | Result list                                                      | Edmunds, Partners, Public |
| id                     | The equipment ID                                                 | Edmunds, Partners, Public |
| niceId                 | The equipment ID in lowercase                                    | Edmunds, Partners, Public |
| modelYearId            | Model Year ID                                                    | Edmunds, Partners, Public |
| styleId                | Style ID                                                         | Edmunds, Partners, Public |
| price                  | Equipment Price Details                                          | Edmunds, Partners, Public |
| name                   | The equipment name                                               | Edmunds, Partners, Public |
| attributeGroups        | The name/value pairs describing the equipment                    | Edmunds, Partners, Public |
| equipmentClass         | The class of equipment (see overview for possible values)        | Edmunds, Partners, Public |
| equipmentAvailability  | The availability of the equipment (see overview)                 | Edmunds, Partners, Public |

The properties within the <code>price</code> object are:

    {
      "baseMSRP": {double},
      "baseInvoice": {double},
      "deliveryCharges": {double},
      "usedTmvRetail": {double},
      "usedPrivateParty": {double},
      "usedTradeIn": {double},
      "estimateTmv": {boolean}
    }

| Property          | Description                                                                                       | Visibility                |
|:------------------|:--------------------------------------------------------------------------------------------------|:------------------------- |
| baseMSRP          | Base MSRP (vehicle's price without options)                                                       | Edmunds, Partners, Public |
| baseInvoice       | Base Invoice (invoice, which is the price the manufacturer sells the style to the dealership for) | Edmunds, Partners, Public |
| usedTmvRetail     | Used Tmv Retail                                                                                   | Edmunds, Partners, Public |
| usedPrivateParty  | Used Private Party                                                                                | Edmunds, Partners, Public |
| usedTradeIn       | Used Trade In                                                                                     | Edmunds, Partners, Public |
| estimateTmv       | Estimate Tmv                                                                                      | Edmunds, Partners, Public |

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
      }
    }
    ...

| Property             | Description                                                       | Visibility                |
|:---------------------|:------------------------------------------------------------------|:------------------------- |
| {attributeGroupName} | Attribute Group Name                                              | Edmunds, Partners, Public |
| id                   | Attribute Group Id                                                | Edmunds, Partners, Public |
| name                 | Attribute Group Name                                              | Edmunds, Partners, Public |
| properties           | A Set of Properties of Attribute Group (key - value)              | Edmunds, Partners, Public |
| attributes           | A Detailed Set of Properties of Attribute Group (id, name, value) | Edmunds, Partners, Public |
