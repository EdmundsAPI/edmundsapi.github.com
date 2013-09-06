---
layout: api-documentation
title : 'Get All Options for a Car Style'
title_active_left_menu: "Spec: Colors and Options"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get All Options for a Car Style'
spec: spec_colors_and_options
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{style ID}/options'


level: 4
description_edpoint: 'Get All Options for a Car Style'
title_md : Sample Request
number: 4

---

###Sample Request

Get all options available for car style ID **200477947**

#### URL

	https://api.edmunds.com/api/vehicle/v2/styles/200477947/options?fmt=json&api_key={api key}
	
#### Response
	
	{
	  "options": [
	    {
	      "id": "200478145",
	      "name": "5.7L V8 HEMI MDS VVT Engine (S Rwd)",
	      "equipmentType": "OPTION",
	      "availability": "S Rwd",
	      "manufactureOptionName": "5.7L V8 HEMI MDS VVT Engine",
	      "manufactureOptionCode": "EZH",
	      "equipment": [
	        {
	          "id": "200478100",
	          "name": "5A",
	          "equipmentType": "TRANSMISSION",
	          "availability": "OPTIONAL",
	          "automaticType": "Shiftable automatic",
	          "transmissionType": "AUTOMATIC",
	          "numberOfSpeeds": "5"
	        },
	        {
	          "id": "200478098",
	          "name": "5.7L V8 Engine (EZH)",
	          "equipmentType": "ENGINE",
	          "availability": "OPTIONAL",
	          "compressionRatio": 10.5,
	          "cylinder": 8,
	          "size": 5.7,
	          "displacement": 5654,
	          "configuration": "V",
	          "fuelType": "regular unleaded",
	          "horsepower": 363,
	          "torque": 394,
	          "totalValves": 16,
	          "manufacturerEngineCode": "EZH",
	          "type": "gas",
	          "code": "8VNAG5.7",
	          "compressorType": "NA"
	        }
	      ],
	      "category": "Package"
	    },
	    {
	      "id": "200478181",
	      "name": "Luxury Group",
	      "equipmentType": "OPTION",
	      "availability": "S",
	      "manufactureOptionName": "Luxury Group",
	      "manufactureOptionCode": "AFF",
	      "equipment": [
	        {
	          "id": "200478191",
	          "name": "Radio Memory",
	          "equipmentType": "AUDIO_SYSTEM",
	          "availability": "OPTIONAL",
	          "attributes": [
	            {
	              "name": "Name",
	              "value": "Radio Memory"
	            },
	            {
	              "name": "Workflowstatus",
	              "value": "Published"
	            },
	            {
	              "name": "Audio System Memory Feature",
	              "value": "includes audio system"
	            }
	          ]
	        }
	      ],
	      "category": "Package"
	    },
	    {
	      "id": "200478112",
	      "name": "Jazz Blue Pearl Coat",
	      "equipmentType": "COLOR",
	      "manufactureOptionName": "Jazz Blue Pearl Coat",
	      "manufactureOptionCode": "PBX",
	      "category": "Exterior",
	      "colorChips": {
	        "primary": {
	          "r": 0,
	          "g": 24,
	          "b": 88,
	          "hex": "001858"
	        }
	      }
	    },
	    {
	      "id": "200478111",
	      "name": "Granite Crystal Metallic Clear Coat",
	      "equipmentType": "COLOR",
	      "manufactureOptionName": "Granite Crystal Metallic Clear Coat",
	      "manufactureOptionCode": "PAU",
	      "category": "Exterior",
	      "colorChips": {
	        "primary": {
	          "r": 72,
	          "g": 72,
	          "b": 72,
	          "hex": "484848"
	        }
	      }
	    },
	    {
	      "id": "200478105",
	      "name": "Bright White Clear Coat",
	      "equipmentType": "COLOR",
	      "manufactureOptionName": "Bright White Clear Coat",
	      "manufactureOptionCode": "PW7",
	      "category": "Exterior",
	      "colorChips": {
	        "primary": {
	          "r": 255,
	          "g": 255,
	          "b": 255,
	          "hex": "FFFFFF"
	        }
	      }
	    },
	    {
	      "id": "200478152",
	      "name": "Quick Order Package 22G",
	      "equipmentType": "OPTION",
	      "availability": "S",
	      "manufactureOptionName": "Quick Order Package 22G",
	      "manufactureOptionCode": "22G",
	      "equipment": [

	      ],
	      "category": "Package"
	    },
	    {
	      "id": "200478103",
	      "name": "Deep Cherry Red Crystal Pearl Coat",
	      "equipmentType": "COLOR",
	      "manufactureOptionName": "Deep Cherry Red Crystal Pearl Coat",
	      "manufactureOptionCode": "PRP",
	      "category": "Exterior",
	      "colorChips": {
	        "primary": {
	          "r": 157,
	          "g": 57,
	          "b": 66,
	          "hex": "9D3942"
	        }
	      }
	    },
	    {
	      "id": "200478109",
	      "name": "Billet Silver Metallic Clear Coat",
	      "equipmentType": "COLOR",
	      "manufactureOptionName": "Billet Silver Metallic Clear Coat",
	      "manufactureOptionCode": "PSC",
	      "category": "Exterior",
	      "colorChips": {
	        "primary": {
	          "r": 92,
	          "g": 100,
	          "b": 103,
	          "hex": "5C6467"
	        }
	      }
	    },
	    {
	      "id": "200478182",
	      "name": "SafetyTec",
	      "equipmentType": "OPTION",
	      "availability": "Base\/S",
	      "manufactureOptionName": "SafetyTec",
	      "manufactureOptionCode": "AC5",
	      "equipment": [

	      ],
	      "category": "Package"
	    },
	    {
	      "id": "200478164",
	      "name": "Engine Block Heater",
	      "equipmentType": "OPTION",
	      "availability": "All",
	      "manufactureOptionName": "Engine Block Heater",
	      "manufactureOptionCode": "NHK",
	      "equipment": [

	      ],
	      "category": "Mechanical"
	    },
	    {
	      "id": "200478165",
	      "name": "Dual-Pane Panoramic Sunroof",
	      "equipmentType": "OPTION",
	      "availability": "All",
	      "manufactureOptionName": "Dual-Pane Panoramic Sunroof",
	      "manufactureOptionCode": "GWJ",
	      "equipment": [

	      ],
	      "category": "Exterior"
	    },
	    {
	      "id": "200478107",
	      "name": "Gloss Black",
	      "equipmentType": "COLOR",
	      "manufactureOptionName": "Gloss Black",
	      "manufactureOptionCode": "PX8",
	      "category": "Exterior",
	      "colorChips": {
	        "primary": {
	          "r": 22,
	          "g": 22,
	          "b": 22,
	          "hex": "161616"
	        }
	      }
	    },
	    {
	      "id": "200478106",
	      "name": "Ivory Tri-Coat Pearl",
	      "equipmentType": "COLOR",
	      "manufactureOptionName": "Ivory Tri-Coat Pearl",
	      "manufactureOptionCode": "PWD",
	      "category": "Exterior",
	      "colorChips": {
	        "primary": {
	          "r": 253,
	          "g": 254,
	          "b": 249,
	          "hex": "FDFEF9"
	        }
	      }
	    },
	    {
	      "id": "200478172",
	      "name": "Uconnect 8.4N AM\/FM\/CD\/DVD\/SD\/NAVUSB",
	      "equipmentType": "OPTION",
	      "availability": "Base\/S\/\/SRT8 Core",
	      "manufactureOptionName": "Uconnect 8.4N AM\/FM\/CD\/DVD\/SD\/NAVUSB",
	      "manufactureOptionCode": "RB6",
	      "equipment": [
	        {
	          "id": "200478192",
	          "name": "Uconnect 8.4N AM\/FM\/DVD\/SD\/NAV\/USB",
	          "equipmentType": "AUDIO_SYSTEM",
	          "availability": "OPTIONAL",
	          "attributes": [
	            {
	              "name": "Name",
	              "value": "Uconnect 8.4N AM\/FM\/DVD\/SD\/NAV\/USB"
	            },
	            {
	              "name": "Workflowstatus",
	              "value": "Published"
	            },
	            {
	              "name": "In Dash Cd",
	              "value": "single CD\/DVD"
	            },
	            {
	              "name": "Digital Audio Input",
	              "value": "auxiliary audio input and iPod integration"
	            },
	            {
	              "name": "Memory Card Slot",
	              "value": "memory card slot"
	            },
	            {
	              "name": "Mp3 Player",
	              "value": "CD MP3 Playback"
	            },
	            {
	              "name": "Usb Connection",
	              "value": "USB connection"
	            },
	            {
	              "name": "Dvd Audio",
	              "value": "DVD-Audio"
	            },
	            {
	              "name": "Radio",
	              "value": "AM\/FM"
	            }
	          ]
	        }
	      ],
	      "category": "Interior"
	    },
	    {
	      "id": "200478168",
	      "name": "Uconnect 8.4N CD\/DVD\/MP3\/NAV",
	      "equipmentType": "OPTION",
	      "availability": "Base\/S\/\/SRT8 Core",
	      "manufactureOptionName": "Uconnect 8.4N CD\/DVD\/MP3\/NAV",
	      "manufactureOptionCode": "RB5",
	      "equipment": [
	        {
	          "id": "200478190",
	          "name": "Uconnect 8.4N AM\/FM\/DVD\/MP3\/NAV",
	          "equipmentType": "AUDIO_SYSTEM",
	          "availability": "OPTIONAL",
	          "attributes": [
	            {
	              "name": "Name",
	              "value": "Uconnect 8.4N AM\/FM\/DVD\/MP3\/NAV"
	            },
	            {
	              "name": "Workflowstatus",
	              "value": "Published"
	            },
	            {
	              "name": "In Dash Cd",
	              "value": "single CD\/DVD"
	            },
	            {
	              "name": "Digital Audio Input",
	              "value": "auxiliary audio input and iPod integration"
	            },
	            {
	              "name": "Mp3 Player",
	              "value": "CD MP3 Playback"
	            },
	            {
	              "name": "Usb Connection",
	              "value": "USB connection"
	            },
	            {
	              "name": "Dvd Audio",
	              "value": "DVD-Audio"
	            },
	            {
	              "name": "Radio",
	              "value": "AM\/FM"
	            },
	            {
	              "name": "Satellite Radio",
	              "value": "Sirius XM"
	            }
	          ]
	        }
	      ],
	      "category": "Interior"
	    },
	    {
	      "id": "200478157",
	      "name": "Quick Order Package 29G",
	      "equipmentType": "OPTION",
	      "availability": "S",
	      "manufactureOptionName": "Quick Order Package 29G",
	      "manufactureOptionCode": "29G",
	      "equipment": [

	      ],
	      "category": "Package"
	    },
	    {
	      "id": "200478113",
	      "name": "Phantom Black Tri-Coat Pearl",
	      "equipmentType": "COLOR",
	      "manufactureOptionName": "Phantom Black Tri-Coat Pearl",
	      "manufactureOptionCode": "PXT",
	      "category": "Exterior",
	      "colorChips": {
	        "primary": {
	          "r": 0,
	          "g": 0,
	          "b": 0,
	          "hex": "000000"
	        }
	      }
	    },
	    {
	      "id": "200478139",
	      "name": "Black Painted Roof",
	      "equipmentType": "OPTION",
	      "availability": "S\/SRT8",
	      "manufactureOptionName": "Black Painted Roof",
	      "manufactureOptionCode": "MXS",
	      "equipment": [

	      ],
	      "category": "Exterior"
	    },
	    {
	      "id": "200478118",
	      "name": "Black (Leather)",
	      "equipmentType": "COLOR",
	      "manufactureOptionName": "Black",
	      "manufactureOptionCode": "X9",
	      "category": "Interior",
	      "colorChips": {
	        "primary": {
	          "r": 0,
	          "g": 0,
	          "b": 0,
	          "hex": "000000"
	        }
	      },
	      "fabricType": "leather"
	    },
	    {
	      "id": "200478136",
	      "name": "Light Group",
	      "equipmentType": "OPTION",
	      "availability": "All except Base\/SRT8\/SRT8 Core",
	      "manufactureOptionName": "Light Group",
	      "manufactureOptionCode": "ADA",
	      "equipment": [

	      ],
	      "category": "Package"
	    }
	  ],
	  "optionsCount": 20
	}