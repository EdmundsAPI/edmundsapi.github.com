---
layout: api-documentation
title : 'Get Transmissions for a Car Style'
title_active_left_menu: "Spec: Engine and Transmission"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Transmissions for a Car Style'
spec: spec_engine_and_transmission
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/styles/{style ID}/transmissions'


level: 4
description_edpoint: 'Get Transmissions for a Car Style'
title_md : Sample Request
number: 4

---

### Sample Request

Get all engines available for car style ID **200477947**

#### URL

	https://api.edmunds.com/api/vehicle/v2/styles/200477947/transmissions?fmt=json&api_key={api key}
	
#### Response
	
	
    {
      "transmissions": [
        {
          "id": "200478100",
          "name": "5A",
          "equipmentType": "TRANSMISSION",
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
          "automaticType": "Shiftable automatic",
          "transmissionType": "AUTOMATIC",
          "numberOfSpeeds": "5"
        },
        {
          "id": "200478101",
          "name": "8A",
          "equipmentType": "TRANSMISSION",
          "availability": "STANDARD",
          "automaticType": "Shiftable automatic",
          "transmissionType": "AUTOMATIC",
          "numberOfSpeeds": "8"
        }
      ],
      "transmissionsCount": 2
    }
