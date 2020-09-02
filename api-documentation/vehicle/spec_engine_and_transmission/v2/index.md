---
layout: api-documentation
title : 'Spec: Engine and Transmission'
title_active_left_menu: "Spec: Engine and Transmission"
title_parent: Api documentation

amount_version: 1
spec: spec_engine_and_transmission
version: v2
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

<div class="info-message">
 This resource provides engine and transmission details for a specific vehicle. Both engine and transmission are in essence a vehicle <a href="{{ PATH }}/api-documentation/vehicle/spec_equipment/v2/">equipment</a>.
</div>

### Endpoints

* [Get the Engine Detail by ID](/api-documentation/vehicle/spec_engine_and_transmission/v2/01_engine_id/api-description.html)
* [Get the Vehicle Engines for a Particular Vehicle Style](/api-documentation/vehicle/spec_engine_and_transmission/v2/02_engines_by_style/api-description.html)
* [Get the Vehicle Transmissions for a Particular Vehicle Style](/api-documentation/vehicle/spec_engine_and_transmission/v2/03_transmissions_by_style/api-description.html)

### Engine Details

	{
		"id": {string},
		"name": {string},
		"equipmentType": "ENGINE",
		"availability": {string},
		"compressionRatio": {float},
		"cylinder": {integer},
		"size": {float},
		"displacement": {integer},
		"configuration": {string},
		"fuelType": {string},
		"horsepower": {integer},
		"torque": {integer},
		"totalValves": {integer},
		"manufacturerEngineCode": {string},
		"type": {string},
		"code": {string},
		"compressorType": {string}
	}

### Transmission Details

	{
		"id": {integer},
    	"name": {string},
		"equipmentType": "TRANSMISSION",
		"availability": {string},
    	"automaticType": {string},
    	"transmissionType": {string},
    	"numberOfSpeeds": {integer}
	}
	
