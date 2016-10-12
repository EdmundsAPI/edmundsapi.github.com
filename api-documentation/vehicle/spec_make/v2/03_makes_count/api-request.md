---
layout: api-documentation
title : 'Get Total Count of Car Makes/Brands'
title_active_left_menu: 'Spec: Make'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'makes/count'
spec: spec_make
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/makes/count'


level: 4
description_edpoint: 'Get Total Count of Car Makes'
title_md : Sample Request
number: 4
---

### Sample Request 1

Get the total amount of car makes in the system

#### URL

	https://api.edmunds.com/api/vehicle/v2/makes/count?fmt=json&api_key={api key}

#### Response

	{
		"makesCount": 61
	}

### Sample Request 2

Get the total number of _NEW_ car makes and the breakdown of their models and the model counts

#### URL

	https://api.edmunds.com/api/vehicle/v2/makes/count?fmt=json&view=full&state=new&api_key={api key}

#### Response

	{
	   "makes":[
	      {
	         "modelsCount":15,
	         "niceName":"hyundai"
	      },
	      {
	         "modelsCount":23,
	         "niceName":"chevrolet"
	      },
	      {
	         "modelsCount":7,
	         "niceName":"volvo"
	      },
	      {
	         "modelsCount":6,
	         "niceName":"jeep"
	      },
	      {
	         "modelsCount":9,
	         "niceName":"mazda"
	      },
	      {
	         "modelsCount":2,
	         "niceName":"mclaren"
	      },
	      {
	         "modelsCount":9,
	         "niceName":"mitsubishi"
	      },
	      {
	         "modelsCount":8,
	         "niceName":"kia"
	      },
	      {
	         "modelsCount":20,
	         "niceName":"audi"
	      },
	      {
	         "modelsCount":2,
	         "niceName":"ferrari"
	      },
	      {
	         "modelsCount":20,
	         "niceName":"bmw"
	      },
	      {
	         "modelsCount":9,
	         "niceName":"acura"
	      },
	      {
	         "modelsCount":8,
	         "niceName":"ram"
	      },
	      {
	         "modelsCount":13,
	         "niceName":"cadillac"
	      },
	      {
	         "modelsCount":5,
	         "niceName":"buick"
	      },
	      {
	         "modelsCount":1,
	         "niceName":"fisker"
	      },
	      {
	         "modelsCount":3,
	         "niceName":"chrysler"
	      },
	      {
	         "modelsCount":1,
	         "niceName":"lotus"
	      },
	      {
	         "modelsCount":6,
	         "niceName":"mini"
	      },
	      {
	         "modelsCount":23,
	         "niceName":"ford"
	      },
	      {
	         "modelsCount":15,
	         "niceName":"volkswagen"
	      },
	      {
	         "modelsCount":13,
	         "niceName":"infiniti"
	      },
	      {
	         "modelsCount":3,
	         "niceName":"fiat"
	      },
	      {
	         "modelsCount":5,
	         "niceName":"scion"
	      },
	      {
	         "modelsCount":9,
	         "niceName":"dodge"
	      },
	      {
	         "modelsCount":7,
	         "niceName":"bentley"
	      },
	      {
	         "modelsCount":1,
	         "niceName":"smart"
	      },
	      {
	         "modelsCount":4,
	         "niceName":"jaguar"
	      },
	      {
	         "modelsCount":4,
	         "niceName":"rollsroyce"
	      },
	      {
	         "modelsCount":12,
	         "niceName":"honda"
	      },
	      {
	         "modelsCount":1,
	         "niceName":"tesla"
	      },
	      {
	         "modelsCount":12,
	         "niceName":"gmc"
	      },
	      {
	         "modelsCount":23,
	         "niceName":"toyota"
	      },
	      {
	         "modelsCount":8,
	         "niceName":"subaru"
	      },
	      {
	         "modelsCount":3,
	         "niceName":"maserati"
	      },
	      {
	         "modelsCount":22,
	         "niceName":"nissan"
	      },
	      {
	         "modelsCount":18,
	         "niceName":"lexus"
	      },
	      {
	         "modelsCount":1,
	         "niceName":"saab"
	      },
	      {
	         "modelsCount":4,
	         "niceName":"suzuki"
	      },
	      {
	         "modelsCount":5,
	         "niceName":"lincoln"
	      },
	      {
	         "modelsCount":5,
	         "niceName":"porsche"
	      },
	      {
	         "modelsCount":5,
	         "niceName":"landrover"
	      },
	      {
	         "modelsCount":16,
	         "niceName":"mercedesbenz"
	      },
	      {
	         "modelsCount":6,
	         "niceName":"astonmartin"
	      },
	      {
	         "modelsCount":2,
	         "niceName":"lamborghini"
	      },
	      {
	         "modelsCount":3,
	         "niceName":"maybach"
	      }
	   ],
	   "makesCount":46
	}

