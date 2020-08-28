---
layout: api-documentation
title : 'Get Engines for a Car Style'
title_active_left_menu: "Spec: Engine and Transmission"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Engines for a Car Style'
spec: spec_engine_and_transmission
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{style ID}/engines'


level: 4
description_edpoint: 'Get Engines for a Car Style'
title_md : Sample Request
number: 4

---

### Sample Request

Get all engines available for car style ID **200477947**

#### URL

	https://api.edmunds.com/api/vehicle/v2/styles/200477947/engines?fmt=json&api_key={api key}
	
#### Response
	
    {
      "engines": [
        {
          "id": "200478098",
          "name": "5.7L V8 Engine (EZH)",
          "equipmentType": "ENGINE",
          "availability": "OPTIONAL",
          "options": [
            {
              "id": "200478145",
              "name": "5.7L V8 HEMI MDS VVT Engine (S Rwd)",
              "description": "5.7L V8 16V VVT engine rated at 363 hp @ 5200 rpm and 394 lb.-ft. of torque @ 4200 rpm; 5-speed automatic transmission; 160 mph primary speedometer; 215mm rear axle; 4 wheel independent performance suspension; Anti-lock 4-wheel performance disc brakes; Gross vehicle weight of 5350 lbs.",
              "equipmentType": "OPTION",
              "availability": "S Rwd",
              "attributes": [
                {
                  "name": "Front Suspension Classification",
                  "value": "independent"
                },
                {
                  "name": "Independent Suspension",
                  "value": "four-wheel"
                },
                {
                  "name": "Rear Suspension Classification",
                  "value": "independent"
                },
                {
                  "name": "Antilock Braking System",
                  "value": "4-wheel ABS"
                },
                {
                  "name": "Gross Vehicle Weight",
                  "value": "5350"
                }
              ],
              "manufactureOptionName": "5.7L V8 HEMI MDS VVT Engine",
              "manufactureOptionCode": "EZH",
              "category": "Package",
              "price": {
                "baseMSRP": 2200.0,
                "baseInvoice": 1958.0,
                "estimateTmv": false
              }
            }
          ],
          "compressionRatio": 10.5,
          "cylinder": 8,
          "size": 5.7,
          "displacement": 5654.0,
          "configuration": "V",
          "fuelType": "regular unleaded",
          "horsepower": 363,
          "torque": 394,
          "totalValves": 16,
          "manufacturerEngineCode": "EZH",
          "type": "gas",
          "code": "8VNAG5.7",
          "compressorType": "NA"
        },
        {
          "id": "200478096",
          "name": "3.6L V6 Engine (300S Only)",
          "equipmentType": "ENGINE",
          "availability": "STANDARD",
          "compressionRatio": 10.2,
          "cylinder":6,"size": 3.6,
          "displacement": 3604.0,
          "configuration": "V",
          "fuelType": "flex-fuel (unleaded/E85)",
          "horsepower": 300,
          "torque": 264,
          "totalValves": 24,
          "manufacturerEngineCode": "ERB",
          "type": "flex-fuel (FFV)",
          "code": "6VNAF3.6",
          "compressorType": "NA"
        }
      ],
      "enginesCount":2
    }
