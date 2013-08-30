---
layout: api-documentation
title : 'Spec: Style'
title_active_left_menu: "Spec: Style"
title_parent: Api documentation

amount_version: 2
spec: spec_style
version: v2
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

The vehicle style is at the core of the Edmunds API. In this resource, you will be able to look up the vehicle styles belonging to a specific make/model/year vehicle or by the style ID itself. The data you get back includes the engine, transmission, colors, options, trim and squishVin details for that style.

### Static Datasets

In the response objects you will get back, you will come across things like <code>equipmentType</code> and <code>optionType</code>. To understand those better, here's a list of all possible values for both properties:

#### equipmentType

* 1st Row Seats
* 2nd Row Seats
* 3rd Row Seats
* 4th Row Seats
* 5th Row Seats
* Air Conditioning
* Airbags
* Audio System
* Brake System
* Cargo Dimensions
* Child Safety
* Color
* Collision Safety System
* Convertible Roof
* Crash Test Ratings
* Differential
* Doors
* Drive Type
* Driver Seat
* Engine
* Engine Features
* Exterior Dimensions
* Exterior Lights
* Front Passenger Seat
* Instrumentation
* Interior Dimensions
* Interior Trim
* Mirrors
* Misc. Exterior Features
* Misc. Interior Features
* Mobile Connectivity
* Navigation System
* Option
* Parking Aid
* Power Outlets
* Seatbelts
* Seating Configuration
* Security
* Spare Tire/Wheel
* Specification
* Steering
* Steering Wheel
* Storage
* Sunroof
* Suspension
* Tires
* Traction/Stability Control
* Trailer Towing Equipment
* Transmission
* Transmission Features
* Truck Bed
* Trunk
* Video System
* Wheels
* Windows

#### optionType

* INTERIOR
* EXTERIOR
* MECHANICAL
* PACKAGE
* ADDITIONAL_FEES