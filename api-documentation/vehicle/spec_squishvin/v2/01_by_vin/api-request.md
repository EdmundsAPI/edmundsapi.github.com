---
layout: api-documentation
title : 'Get Vehicle Details by Squish VIN'
title_active_left_menu: "Spec: Squish VIN"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Vehicle Details by Squish VIN'
spec: spec_squishvin
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/squishvins/{squish VIN}/'


level: 4
description_edpoint: 'Get Vehicle Details by Squish VIN'
title_md : Sample Request
number: 4

---

### Sample Request

Get details for Squish VIN **1N4AL3APDN**

#### URL

	https://api.edmunds.com/api/vehicle/v2/squishvins/1N4AL3APDN/?fmt=json&api_key={api key}
	
#### Response
	
	{
	  "squishVin": "1N4AL3APDN",
	  "make": {
	    "id": 200000201,
	    "name": "Nissan",
	    "niceName": "nissan"
	  },
	  "model": {
	    "id": "Nissan_Altima",
	    "name": "Altima",
	    "niceName": "altima"
	  },
	  "years": [
	    {
	      "id": 100537289,
	      "year": 2013,
	      "styles": [
	        {
	          "id": 101404650,
	          "name": "2.5 4dr Sedan (2.5L 4cyl CVT)",
	          "submodel": {
	            "body": "Sedan",
	            "modelName": "Altima Sedan",
	            "niceName": "sedan"
	          },
	          "trim": "2.5"
	        },
	        {
	          "id": 200418415,
	          "name": "2.5 S 4dr Sedan (2.5L 4cyl CVT)",
	          "submodel": {
	            "body": "Sedan",
	            "modelName": "Altima Sedan",
	            "niceName": "sedan"
	          },
	          "trim": "2.5 S"
	        },
	        {
	          "id": 200418416,
	          "name": "2.5 SV 4dr Sedan (2.5L 4cyl CVT)",
	          "submodel": {
	            "body": "Sedan",
	            "modelName": "Altima Sedan",
	            "niceName": "sedan"
	          },
	          "trim": "2.5 SV"
	        },
	        {
	          "id": 200444018,
	          "name": "2.5 SL 4dr Sedan (2.5L 4cyl CVT)",
	          "submodel": {
	            "body": "Sedan",
	            "modelName": "Altima Sedan",
	            "niceName": "sedan"
	          },
	          "trim": "2.5 SL"
	        },
	        {
	          "id": 200418417,
	          "name": "2.5 SL 4dr Sedan w\/Prod. End 11\/12 (2.5L 4cyl CVT)",
	          "submodel": {
	            "body": "Sedan",
	            "modelName": "Altima Sedan",
	            "niceName": "sedan"
	          },
	          "trim": "2.5 SL"
	        }
	      ]
	    }
	  ],
	  "engine": {
	    "id": "200391448",
	    "name": "Engine",
	    "availability": "STANDARD",
	    "compressionRatio": 9.6,
	    "cylinder": 4,
	    "size": 2.5,
	    "displacement": 2488,
	    "configuration": "inline",
	    "fuelType": "regular unleaded",
	    "horsepower": 182,
	    "torque": 180,
	    "totalValves": 16,
	    "manufacturerEngineCode": "QR25DE",
	    "type": "gas",
	    "code": "4INAG2.5",
	    "compressorType": "NA"
	  },
	  "transmission": {
	    "id": "200391449",
	    "name": "continuously variableA",
	    "availability": "STANDARD",
	    "automaticType": "Continuously variable",
	    "transmissionType": "AUTOMATIC",
	    "numberOfSpeeds": "continuously variable"
	  },
	  "drivenWheels": "front wheel drive",
	  "numOfDoors": "4",
	  "options": [

	  ],
	  "colors": [
	    {
	      "category": "Exterior",
	      "options": [
	        {
	          "id": "200418380",
	          "name": "Java Metallic",
	          "equipmentType": "COLOR",
	          "colorChips": {
	            "primary": {
	              "r": 83,
	              "g": 74,
	              "b": 67,
	              "hex": "534A43"
	            }
	          }
	        },
	        {
	          "id": "200418373",
	          "name": "Brilliant Silver",
	          "equipmentType": "COLOR",
	          "colorChips": {
	            "primary": {
	              "r": 141,
	              "g": 141,
	              "b": 143,
	              "hex": "8D8D8F"
	            }
	          }
	        },
	        {
	          "id": "200418374",
	          "name": "Cayenne Red",
	          "equipmentType": "COLOR",
	          "colorChips": {
	            "primary": {
	              "r": 174,
	              "g": 37,
	              "b": 21,
	              "hex": "AE2515"
	            }
	          }
	        },
	        {
	          "id": "200418375",
	          "name": "Metallic Slate",
	          "equipmentType": "COLOR",
	          "colorChips": {
	            "primary": {
	              "r": 54,
	              "g": 55,
	              "b": 56,
	              "hex": "363738"
	            }
	          }
	        },
	        {
	          "id": "200418376",
	          "name": "Saharan Stone",
	          "equipmentType": "COLOR",
	          "colorChips": {
	            "primary": {
	              "r": 121,
	              "g": 108,
	              "b": 104,
	              "hex": "796C68"
	            }
	          }
	        },
	        {
	          "id": "200418377",
	          "name": "Storm Blue",
	          "equipmentType": "COLOR",
	          "colorChips": {
	            "primary": {
	              "r": 22,
	              "g": 37,
	              "b": 58,
	              "hex": "16253A"
	            }
	          }
	        },
	        {
	          "id": "200418378",
	          "name": "Super Black",
	          "equipmentType": "COLOR",
	          "colorChips": {
	            "primary": {
	              "r": 1,
	              "g": 1,
	              "b": 1,
	              "hex": "010101"
	            }
	          }
	        },
	        {
	          "id": "200418379",
	          "name": "Pearl White",
	          "equipmentType": "COLOR",
	          "colorChips": {
	            "primary": {
	              "r": 242,
	              "g": 242,
	              "b": 242,
	              "hex": "F2F2F2"
	            }
	          }
	        }
	      ]
	    }
	  ],
	  "manufacturer": "Nissan Motors Corporation",
	  "MPG": {
	    "highway": "38",
	    "city": "27"
	  }
	}