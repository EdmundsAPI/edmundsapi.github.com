---
layout: api-documentation
title : 'Spec: Style'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get A List of Styles'
spec: spec_style
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/styles'


level: 4
description_edpoint: 'Get A List of Styles'
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
          "makeId": {integer},
          "year": {integer},
          "makeName": {string},
          "makeNiceName": {string},
          "makeNiceId": {string},
          "modelId": {string},
          "modelName": {string},
          "modelNiceName": {string},
          "modelNiceId": {string},
          "modelYearId": {integer},
          "modelLinkCode": {string},
          "standardEngine": {object},
          "standardTransmission": {object},
          "transmissionType": {string},
          "engineType": {string},
          "engineCompressorType": {string},
          "engineFuelType": {string},
          "engineCylinder": {integer},
          "engineSize": {double},
          "numberOfSeats": {integer},
          "withBluetooth": {boolean},
          "withNavigationSystem": {boolean},
          "withHeatedSeats": {boolean},
          "price": {object},
          "trim": {object},
          "categories": {object},
          "categoryValues": {list of strings},
          "niceCategoryValues": {list of strings},
          "modelYear": {object},
          "attributeGroups": {list of objects},
          "squishVins": {list of objects},
          "subModels": {list of objects},
          "name": {string},
          "niceName": {string},
          "niceId": {string},
          "publicationState": {string},
          "standardEquipment": {list of objects},
          "optionalEquipment": {list of objects},
          "usedEquipment": {list of objects},
          "options": {list of objects},
          "configurableEquipment": {list of objects},
          "regionRestrictions": {object},
          "typicallyEquippedSpecifications": {list of objects},
          "edTypeCategories": {list of objects}
        },
        ...
      ]
    }

| Property                        | Description                                                      | Visibility                |
|:--------------------------------|:-----------------------------------------------------------------|:------------------------- |
| totalNumber                     | Total number of results                                          | Edmunds, Partners, Public |
| totalPages                      | Total number of pages based on <code>pagesize</code> query param | Edmunds, Partners, Public |
| results                         | Result list                                                      | Edmunds, Partners, Public |
| id                              | The Car Style Id                                                 | Edmunds, Partners, Public |
| year                            | The Car Style Year                                               | Edmunds, Partners, Public |
| makeId                          | The Car Make Id (e.g. 200000130)                                 | Edmunds, Partners, Public |
| makeName                        | The Car Make Name (e.g. Mercedes-Benz)                           | Edmunds, Partners, Public |
| makeNiceName                    | The Car Make Nice Name d (e.g. mercedes-benz)                    | Edmunds, Partners, Public |
| makeNiceId                      | The Car Make Nice Id e (e.g. mercedesbenz)                       | Edmunds, Partners, Public |
| modelId                         | The Car Model Id (e.g. Mercedes_Benz_E_Class)                    | Edmunds, Partners, Public |
| modelName                       | The Car Model Name (e.g. E-Class)                                | Edmunds, Partners, Public |
| modelNiceName                   | The Car Model Nice Name (e.g. eclass)                            | Edmunds, Partners, Public |
| modelNiceId                     | The Car Model Nice Id (e.g. e-class)                             | Edmunds, Partners, Public |
| modelYearId                     | The Car Style Model Year Id                                      | Edmunds, Partners, Public |
| modelLinkCode                   | The Car Style Model Link Code                                    | Edmunds, Partners, Public |
| standardEngine                  | The Car Style Standard Engine                                    | Edmunds, Partners, Public |
| standardTransmission            | The Car Style Standard Transmission                              | Edmunds, Partners, Public |
| transmissionType                | The Car Style Transmission Type                                  | Edmunds, Partners, Public |
| engineType                      | The Car Style Engine Type                                        | Edmunds, Partners, Public |
| engineCompressorType            | The Car Style Engine Compressor Type                             | Edmunds, Partners, Public |
| engineFuelType                  | The Car Style Engine Fuel Type                                   | Edmunds, Partners, Public |
| engineCylinder                  | The Car Style Engine Cylinder                                    | Edmunds, Partners, Public |
| engineSize                      | The Car Style Engine Size                                        | Edmunds, Partners, Public |
| numberOfSeats                   | The Car Style Number Of Seats                                    | Edmunds, Partners, Public |
| withBluetooth                   | The Car Style With Bluetooth                                     | Edmunds, Partners, Public |
| withNavigationSystem            | The Car Style With Navigation System                             | Edmunds, Partners, Public |
| withHeatedSeats                 | The Car Style With Heated Seats                                  | Edmunds, Partners, Public |
| price                           | The Car Style Price                                              | Edmunds, Partners, Public |
| trim                            | The Car Style Trim                                               | Edmunds, Partners, Public |
| categories                      | The Car Style Categories                                         | Edmunds, Partners, Public |
| categoryValues                  | The Car Style Category Values                                    | Edmunds, Partners, Public |
| niceCategoryValues              | The Car Style NiceCategory Values                                | Edmunds, Partners, Public |
| modelYear                       | The Car Style Model Year                                         | Edmunds, Partners, Public |
| attributeGroups                 | The Car Style Attribute Groups                                   | Edmunds, Partners, Public |
| squishVins                      | The Car Style Squish Vins                                        | Edmunds, Partners, Public |
| subModels                       | The Car Style Sub Models                                         | Edmunds, Partners, Public |
| name                            | The Car Style Name                                               | Edmunds, Partners, Public |
| niceName                        | The Car Style Nice Name                                          | Edmunds, Partners, Public |
| niceId                          | The Car Style Nice Id                                            | Edmunds, Partners, Public |
| publicationState                | The Car Style Publication State                                  | Edmunds, Partners, Public |
| standardEquipment               | The Car Style Standard Equipment                                 | Edmunds, Partners, Public |
| optionalEquipment               | The Car Style Optional Equipment                                 | Edmunds, Partners, Public |
| usedEquipment                   | The Car Style Used Equipment                                     | Edmunds, Partners, Public |
| options                         | The Car Style Options                                            | Edmunds, Partners, Public |
| configurableEquipment           | The Car Style Configurable Equipment                             | Edmunds, Partners, Public |
| regionRestrictions              | The Car Style Region Restrictions                                | Edmunds, Partners, Public |
| typicallyEquippedSpecifications | The Car Style Typically Equipped Specifications                  | Edmunds, Partners, Public |
| edTypeCategories                | The Car Style Edmunds Type Categories                            | Edmunds, Partners, Public |

The properties within the <code>standardEngine</code>,<code>standardTransmission</code>, <code>standardEquipment</code>, <code>optionalEquipment</code>, <code>usedEquipment</code>, <code>options</code> objects are:

    {
      "id": {string},
      "href": {string}
    }

| Property | Description                                                     | Visibility                |
|:---------|:----------------------------------------------------------------|:------------------------- |
| id       | Equipment Id (e.g. 786_200520063 - {modelYearId}_{equipmentId}) | Edmunds, Partners, Public |
| href     | Link to v3 [**equipments**](/api-documentation/vehicle/spec_equipment/v3/01_list_of_equipments/api-description.html) endpoint in order to get additional data | Edmunds, Partners, Public |

The properties within the <code>squishVin</code> object are:

    {
      "squishVin": {string},
      "engineNames": {list of strings},
      "squishVinTransmissions": [
        {
          "transmissionType": {string},
          "numberOfSpeeds": {integer}
        }
      ]
    }

| Property               | Description                  | Visibility                |
|:-----------------------|:-----------------------------|:------------------------- |
| squishVin              | Squish VIN (More information you can find here: [**Edmunds Squish VIN**](/api-documentation/vehicle/spec_squishvin/v2/)) | Edmunds, Partners, Public |
| engineNames            | Engine Names (e.g. 4INAG1.5) | Edmunds, Partners, Public |
| squishVinTransmissions | Squish VIN Transmission Info | Edmunds, Partners, Public |
| transmissionType       | Transmission Type (e.g. MT)  | Edmunds, Partners, Public |
| numberOfSpeeds         | Number of speeds             | Edmunds, Partners, Public |

The properties within the <code>trim</code> object are:

    {
      "name": {string},
      "niceName": {string},
      "slug": {string}
    }

| Property | Description                                                | Visibility                |
|:---------|:-----------------------------------------------------------|:------------------------- |
| name     | Trim Name (e.g. 2500 170 WB Cargo)                         | Edmunds, Partners, Public |
| niceName | Trim Nice Name (e.g. 2500170wbcargo)                       | Edmunds, Partners, Public |
| slug     | Trim Slug (e.g. 2500-170-wb-cargo)                         | Edmunds, Partners, Public |

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

The properties within the <code>configurableEquipment</code> object are:

    {
      "id": {string},
      "priceSpecifications": [
        {
          "adjustedPrice": {price object},
          "optionPriceUpdateSpec": {boolean},
          "antecedent": {
            "optionId": {string}
          },
          "consequent": {
            "colorId": {string}
          }
        },
        ...
      ],
      "includesOptionIds": {list of strings}
    }

| Property              | Description                                      | Visibility                |
|:----------------------|:-------------------------------------------------|:------------------------- |
| id                    | Configurable Equipment Id (e.g. )                | Edmunds, Partners, Public |
| priceSpecifications   | A list of Price Specifications                   | Edmunds, Partners, Public |
| adjustedPrice         | Price info (object structure you can find above) | Edmunds, Partners, Public |
| optionPriceUpdateSpec | Option Price Update Specification                | Edmunds, Partners, Public |
| antecedent            | Previous option/color Id                         | Edmunds, Partners, Public |
| consequent            | Next option/color Id                             | Edmunds, Partners, Public |
| includesOptionIds     | A List of Includes Option Ids                    | Edmunds, Partners, Public |

The properties within the <code>regionRestrictions</code> object are:

    {
      "{regionRestrictionId}": [
        {
          "antecedent": {
            "regionId": {string}
          },
          "consequent": {
            "feeEquipmentId": {string},
            "fee": {integer},
            "feeCalculationType": {string}
          }
        }
      ],
      ...
    }

<div class="info-message">
  Leaf Specification object representing a "fee" that can be applied to the various prices (e.g., base MSRP, total configured invoice, etc.) of a given style.  The fee can either be a percentage or a whole number, and will be interpreted differently based on the fee calculation type.
</div>

| Property            | Description                          | Visibility                |
|:--------------------|:-------------------------------------|:------------------------- |
| regionRestrictionId | Region Restriction Id (e.g. "2236")  | Edmunds, Partners, Public |
| antecedent          | Antecedent Region Restriction Id     | Edmunds, Partners, Public |
| regionId            | Region Restriction Id                | Edmunds, Partners, Public |
| consequent          | Consequent Region Restriction        | Edmunds, Partners, Public |
| feeEquipmentId      | Fee Equipment Id                     | Edmunds, Partners, Public |
| fee                 | Fee                                  | Edmunds, Partners, Public |
| feeCalculationType  | Fee Calculation Type (e.g. FLAT_FEE) | Edmunds, Partners, Public |

The properties within the <code>squishVin</code> object are:

    {
      "squishVin": {string},
      "engineNames": {list of strings},
      "squishVinTransmissions": [
        {
          "transmissionType": {string},
          "numberOfSpeeds": {integer}
        }
      ]
    }

| Property               | Description                  | Visibility                |
|:-----------------------|:-----------------------------|:------------------------- |
| squishVin              | Squish VIN (More information you can find here: [**Edmunds Squish VIN**](/api-documentation/vehicle/spec_squishvin/v2/)) | Edmunds, Partners, Public |
| engineNames            | Engine Names (e.g. 4INAG1.5) | Edmunds, Partners, Public |
| squishVinTransmissions | Squish VIN Transmission Info | Edmunds, Partners, Public |
| transmissionType       | Transmission Type (e.g. MT)  | Edmunds, Partners, Public |
| numberOfSpeeds         | Number of speeds             | Edmunds, Partners, Public |

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

The properties within the <code>subModels</code> object are:

    {
      "id": {integer},
      "name": {string},
      "niceId": {string},
      "identifier": {string},
      "ruleType": {string},
    }

| Property   | Description                       | Visibility                |
|:-----------|:----------------------------------|:------------------------- |
| id         | Submodel Id                       | Edmunds, Partners, Public |
| name       | Submodel Name (e.g E-Class Sedan) | Edmunds, Partners, Public |
| niceId     | Submodel Nice Id (e.g. sedan)     | Edmunds, Partners, Public |
| identifier | Submodel Identifier (e.g. Sedan)  | Edmunds, Partners, Public |
| ruleType   | Submodel Rule Type (e.g. body)    | Edmunds, Partners, Public |

The properties within the <code>categories</code> object are:

    {
      "{categoryName1}": [{string value1}, {string value2}, ...],
      "{categoryName2}": [{string value1}, {string value2}, ...],
      ...
    }

| Property     | Description                                                | Visibility                |
|:-------------|:-----------------------------------------------------------|:------------------------- |
| categoryName | Category Name (e.g. Market, Vehicle type)                  | Edmunds, Partners, Public |

The properties within the <code>edTypeCategories</code> object are:

    {
      "id": {integer},
      "name": {string},
      "slug": {string}
    }

| Property | Description                                  | Visibility                |
|:---------|:---------------------------------------------|:------------------------- |
| id       | Edmunds Type Category Id                     | Edmunds, Partners, Public |
| name     | Edmunds Type Category Name (e.g. Coupe)      | Edmunds, Partners, Public |
| slug     | Edmunds Type Category Nice Name (e.g. coupe) | Edmunds, Partners, Public |

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

The properties within the <code>typicallyEquippedSpecifications</code> object are:

    [
      {
        "antecedent": {
          "styleId": {integer}
        },
        "consequent": {
          "elements": [
            {
              "optionId": {string}
            },
            {
              "elements": [
                {
                  "optionId": {string}
                },
                ...
              ]
            }
          ]
        }
      },
      ...
    ]

| Property   | Description                       | Visibility                |
|:-----------|:----------------------------------|:------------------------- |
| styleId    | Style Id                          | Edmunds, Partners, Public |
| optionId   | Option Id                         | Edmunds, Partners, Public |
| elements   | Elements of the next Specification (there can be either an option Id or other elements with its own option Ids and elements. Nested Structure of the object) | Edmunds, Partners, Public |