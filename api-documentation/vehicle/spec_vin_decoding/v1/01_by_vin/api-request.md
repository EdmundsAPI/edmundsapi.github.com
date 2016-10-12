---
layout: api-documentation
title : 'Get Vehicle Details Through VIN Decoding'
title_active_left_menu: "Spec: VIN Decoding"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Vehicle Details Through VIN Decoding'
spec: spec_vin_decoding
version: v1
api: vehicle
dropdown-link: 'v1/api/toolsrepository/vindecoder'


level: 4
description_edpoint: 'Get Vehicle Details Through VIN Decoding'
title_md : Sample Request
number: 4

---

### Sample Request

Get details for VIN **1N4AL3AP4DC295509**

#### URL

	https://api.edmunds.com/v1/api/toolsrepository/vindecoder?vin=1N4AL3AP4DC295509&fmt=json&api_key={api key}
	
#### Response
	
	{
	  "styleHolder": [
	    {
	      "makeId": 200000201,
	      "year": 2013,
	      "makeName": "Nissan",
	      "makeNiceName": "nissan",
	      "modelId": "Nissan_Altima",
	      "modelName": "Altima",
	      "modelNiceName": "altima",
	      "modelYearId": 100537289,
	      "transmissionType": "AUTOMATIC",
	      "engineCompressorType": "NA",
	      "engineFuelType": "regular unleaded",
	      "engineCylinder": 4,
	      "engineSize": 2.5,
	      "trim": {

	      },
	      "squishVins": [
	        {
	          "squishVin": "1N4AL3APDN",
	          "engineNames": [
	            "4INAG2.5"
	          ],
	          "squishVinTransmissions": [
	            {
	              "transmissionType": "CVT",
	              "numberOfSpeeds": 0
	            }
	          ]
	        },
	        {
	          "squishVin": "1N4AL3APDC",
	          "engineNames": [
	            "4INAG2.5"
	          ],
	          "squishVinTransmissions": [
	            {
	              "transmissionType": "CVT",
	              "numberOfSpeeds": 0
	            }
	          ]
	        }
	      ],
	      "styleIds": [
	        101404650,
	        200444018,
	        200418417,
	        200418415,
	        200418416
	      ]
	    }
	  ]
	}