---
layout: api-documentation
title : 'Spec: Equipment'
title_active_left_menu: "Spec: Equipment"
title_parent: Api documentation

amount_version: 23
spec: spec_equipment
version: v2
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

<div class="info-message">
 <p>The vehicle equipment is everything that exists within a car, including the options, engine, transmission, colors, seat configuration, brake system, air conditioning, and more.</p>

<p><i><b>Please note</b> that this results for vehicles that are 2000 or older will be available in mid September, 2013.</i></p>
</div>

### Endpoints

* [Get Vehicle Equipment for a Car Style](/api-documentation/vehicle/spec_equipment/v2/01_by_style/api-description.html)

### Equipment Response Formats

This resource returns a list of equipment that comes either standard or optional with a car. The response describes the equipment in **four different ways**:

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
			},
			"secondary": {
				"r": {integer},
				"g": {integer},
				"b": {integer},
				"hex": {string}
			}
		}
	}

When you parse an equipment object, make sure you look for the <code>equipmentType</code> value first to see how to process it. If it's anything other than **COLOR**, **ENGINE** or **TRANSMISSION**, then treat it as a *typical equipment*.

### Static Datasets

The response objects will include keys like <code>equipmentType</code> and <code>availability</code>. To understand those better, here's a list of all possible values for both properties:

#### equipmentType

* AUDIO_SYSTEM
* COLOR
* ENGINE
* MANUFACTURER
* MIRRORS
* OPTION
* OTHER
* TELEMATICS
* TIRES

#### availability

* Standard
* Optional

#### Equipment Names

* 1ST_ROW_SEATS
* 2ND_ROW_SEATS
* 3RD_ROW_SEATS
* 4TH_ROW_SEATS
* 5TH_ROW_SEATS
* AIR_CONDITIONING
* AIRBAGS
* AUDIO_SYSTEM
* BRAKE_SYSTEM
* CARGO_DIMENSIONS
* COLLISION_SAFETY_SYSTEM
* COLOR
* CONVERTIBLE_ROOF
* DIFFERENTIAL
* DOORS
* DRIVE_TYPE
* DRIVER_SEAT
* ENGINE
* EXTERIOR_DIMENSIONS
* EXTERIOR_LIGHTS
* FRONT_PASSENGER_SEAT
* INSTRUMENTATION
* INTERIOR_DIMENSIONS
* MANUFACTURER
* MIRRORS
* MOBILE_CONNECTIVITY
* NAVIGATION_SYSTEM
* PARKING_AID
* POWER_OUTLETS
* SEATBELTS
* SEATING_CONFIGURATION
* SECURITY
* SPARE_TIRE/WHEEL
* SPECIFICATIONS   // *for MPG and fuel capacity information*
* STEERING
* STEERING_WHEEL
* STORAGE
* SUNROOF
* SUSPENSION
* TECHNOLOGY_FEATURE
* TELEMATICS
* TIRES
* TRAILER_TOWING_EQUIPMENT
* TRANSMISSION
* TRUCK_BED
* TRUNK
* VIDEO_SYSTEM
* WARRANTY
* WHEELS
* WINDOWS
