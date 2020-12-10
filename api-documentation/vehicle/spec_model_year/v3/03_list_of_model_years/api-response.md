---
layout: api-documentation
title : 'Get A List of Model Years'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 23
title-endpoint: 'Get A List of Model Years'
spec: spec_model_year
version: v3
api: vehicle
dropdown-link: 'api/vehicle/v3/modelYears'


level: 4
description_edpoint: 'Get A List of Model Years'
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
          "makeName": {string},
          "makeNiceName": {string},
          "makeNiceId": {string},
          "modelId": {string},
          "modelName": {string},
          "modelNiceName": {string},
          "modelNiceId": {string},
          "modelLinkCode": {string},
          "styles": {list of objects},
          "newDefaultStyle": {object},
          "usedDefaultStyle": {object},
          "submodels":  {list of objects},
          "newDefaultSubmodel": {object},
          "usedDefaultSubmodel": {object},
          "midYear": {boolean},
          "year": {integer},
          "model": {object},
          "name": {string},
          "attributeGroups": {object},
          "categories": {object}, 
          "types": {object},
          "categoryValues": {list of strings},
          "publicationStates": {list of strings},
          "minBaseMSRP": {double},
          "tmvCorePercents": {list of objects},
          "edTypeCategories": {list of objects}
        },
        ...
      ]
    }

| Property          | Description                                                      | Visibility                |
|:------------------|:-----------------------------------------------------------------|:------------------------- |
| totalNumber       | Total number of results                                          | Edmunds, Partners, Public |
| totalPages        | Total number of pages based on <code>pagesize</code> query param | Edmunds, Partners, Public |
| results           | Result list                                                      | Edmunds, Partners, Public |
| id                | The Car Model Year Id                                            | Edmunds, Partners, Public |
| makeId            | The Car Make Id (e.g. 200000130)                                 | Edmunds, Partners, Public |
| makeName          | The Car Make Name (e.g. Mercedes-Benz)                           | Edmunds, Partners, Public |
| makeNiceName      | The Car Make Nice Name d (e.g. mercedes-benz)                    | Edmunds, Partners, Public |
| makeNiceId        | The Car Make Nice Id e (e.g. mercedesbenz)                       | Edmunds, Partners, Public |
| modelId           | The Car Model Id (e.g. Mercedes_Benz_E_Class)                    | Edmunds, Partners, Public |
| modelName         | The Car Model Name (e.g. E-Class)                                | Edmunds, Partners, Public |
| modelNiceName     | The Car Model Nice Name (e.g. eclass)                            | Edmunds, Partners, Public |
| modelNiceId       | The Car Model Nice Id (e.g. e-class)                             | Edmunds, Partners, Public |
| modelLinkCode     | The Car Model Link Code                                          | Edmunds, Partners, Public |
| styles            | The Car Styles                                                   | Edmunds, Partners, Public |
| newDefaultStyle   | The Car New Default Style                                        | Edmunds, Partners, Public |
| usedDefaultStyle  | The Car Used Default Style                                       | Edmunds, Partners, Public |
| midYear           | The Car Mid Year                                                 | Edmunds, Partners, Public |
| year              | The Car Year                                                     | Edmunds, Partners, Public |
| model             | The Car Model                                                    | Edmunds, Partners, Public |
| name              | The Car Name (e.g. 1999)                                         | Edmunds, Partners, Public |
| attributeGroups   | The Car Attribute Groups                                         | Edmunds, Partners, Public |
| categories        | The Car Categories                                               | Edmunds, Partners, Public |
| types             | The Car Types                                                    | Edmunds, Partners, Public |
| categoryValues    | The Car Category Values                                          | Edmunds, Partners, Public |
| publicationStates | The Car Publication States                                       | Edmunds, Partners, Public |
| minBaseMSRP       | The Car Min Base MSRP (vehicle's price without options)          | Edmunds, Partners, Public |
| tmvCorePercents   | The Car Tmv Core Percents                                        | Edmunds, Partners, Public |
| edTypeCategories  | The Car Edmunds Type Categories                                  | Edmunds, Partners, Public |

The properties within the <code>styles</code>, <code>newDefaultStyle</code> and <code>usedDefaultStyle</code> objects are:

    {
      "id": {integer},
      "href": {string}
    }

| Property | Description                                                | Visibility                |
|:---------|:-----------------------------------------------------------|:------------------------- |
| id       | Style Id                                                   | Edmunds, Partners, Public |
| href     | Link to v3 [**styles**](/api-documentation/vehicle/spec_style/v3/01_list_of_styles/api-description.html) endpoint in order to get additional data | Edmunds, Partners, Public |

The properties within the <code>submodels</code>, <code>newDefaultSubmodel</code> and <code>usedDefaultSubmodel</code> objects are:

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

The properties within the <code>model</code> object are:

    {
      "id": {string},
      "name": {string},
      "niceName": {string},
      "href": {string}
    }

| Property | Description                                                | Visibility                |
|:---------|:-----------------------------------------------------------|:------------------------- |
| id       | Model Id (e.g. Mercedes_Benz_E_Class)                      | Edmunds, Partners, Public |
| name     | Model Name (e.g E-Class)                                   | Edmunds, Partners, Public |
| niceName | Model Nice Name (e.g. eclass)                              | Edmunds, Partners, Public |
| href     | Link to v3 [**models**](/api-documentation/vehicle/spec_model/v3/01_list_of_models/api-description.html) endpoint in order to get additional data | Edmunds, Partners, Public |

The properties within the <code>categories</code> and <code>types</code> objects are:

    {
      "{categoryOrTypeName1}": [{string value1}, {string value2}, ...],
      "{categoryOrTypeName2}": [{string value1}, {string value2}, ...],
      ...   
    }

| Property           | Description                                                                                | Visibility                |
|:-------------------|:-------------------------------------------------------------------------------------------|:------------------------- |
| categoryOrTypeName | Category or Type Name (e.g. Market, Vehicle type as Categories) (e.g. engineType as Types) | Edmunds, Partners, Public |

The properties within the <code>tmvCorePercents</code> object are:

    {
      "id": {integer},
      "tmvCorePercent": {double},
      "trim": {string}
      "bodyType": {string}
      "driveType": {string}
      "fuelType": {string}
      "numCylinders": {integer},
      "tmvModelName": {string}
    }

| Property       | Description                              | Visibility                |
|:---------------|:-----------------------------------------|:------------------------- |
| id             | TMV Core Percents Id                     | Edmunds, Partners, Public |
| tmvCorePercent | TMV Core Percent (e.g. 0.9477800636)     | Edmunds, Partners, Public |
| trim           | Trim Name (e.g. EX-L)                    | Edmunds, Partners, Public |
| bodyType       | Body Type Name (e.g. 4dr Hatchback)      | Edmunds, Partners, Public |
| driveType      | Drive Type Name (e.g. front wheel drive) | Edmunds, Partners, Public |
| fuelType       | Fuel Type Name (e.g. gas)                | Edmunds, Partners, Public |
| numCylinders   | Number of Cylinders                      | Edmunds, Partners, Public |
| tmvModelName   | TMV Model Name (e.g. Civic)              | Edmunds, Partners, Public |

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
