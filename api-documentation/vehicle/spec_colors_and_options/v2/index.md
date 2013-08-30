---
layout: api-documentation
title : 'Spec: Colors and Options'
title_active_left_menu: "Spec: Colors and Options"
title_parent: Api documentation

amount_version: 2
spec: spec_colors_and_options
version: v2
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

This resource provides access to vehicle options and colors. For vehicle options, the data returns will always include an array of [equipment](//api-documentation/vehicle/spec_equipment/v2/) that exist within each option. Equipment comes in four distinct formats:

#### 1) Typical equipment description:

	{
		"id": {integer},
		"name": {string},
		"equipmentType": {string},
		"availability": {string},
		"attributes": [{
			"name": {string},
			"value": {string}
		}]
    }

#### 2) Engine description:

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

#### 3) Transmission description:

	{
		"id": {integer},
		"name": {string},
		"equipmentType": "TRANSMISSION",
		"availability": {string},
		"automaticType": {string},
		"transmissionType": {string},
		"numberOfSpeeds": {integer}
	}

#### 4) Color description

	{
		"id": {string},
		"name": {string},
		"equipmentType": "COLOR",
		"manufactureOptionName": {string},
		"manufactureOptionCode": {string},
		"category": {string},
		"colorChips": {
			"primary": {
				"r": {integer},
				"g": {integer},
				"b": {integer},
				"hex": {string}
			}
		}
	}

When you parse an equipment object, make sure you look for the <code>equipmentType</code> value first to see how to process it. If it's anything other than **COLOR**, **ENGINE** or **TRANSMISSION**, then treat it as a *typical equipment*. 

### Option Types

Option types are always one of these values:

* INTERIOR
* EXTERIOR
* MECHANICAL
* PACKAGE
* ADDITIONAL_FEES
