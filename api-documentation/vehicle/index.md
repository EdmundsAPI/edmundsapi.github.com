---
layout: api-documentation

title : Vehicle API
title_active_left_menu: Vehicle API
title_parent: Api documentation

level: 1
---

### Overview

The Vehicle API is comprised of a collection of resources that provide access to an array of automotive datasets _related directly to the automotive vehicle_. First, you need to know the _five components_ that fully describe an **automotive vehicle**: 

_vehicle make –> vehicle model –> vehicle model year –> vehicle trim –> vehicle style_

For example: 

_Honda Accord 2013 EX 2.4-liter 4-cylinder CVT Automatic w/Navigation_

_(Honda) –> (Accord) –> (2013) –> (EX) –> (2.4-liter 4-cylinder CVT Automatic w/Navigation)_

**_(make) –> (model) –> (model year) –> (trim) –> (style)_**

You will see many references throughout the documentation for vehicle (or car) _Model Year ID_ and _Style ID_. Most of the endpoints offered throughout the API require one of these IDs. Getting familiar with them is essential to taking full advantage of the Edmunds API. 

If you haven't yet, this might be a good time to read the [API Overview](/api-documentation/overview/) page to familiarize yourself with some of the core concepts required to using the API.

### Quick Start

Let's get right to it, shall we? Here's a few REST calls that should get you started using the API with ease. You could copy and paste these calls into your browser, add your *API key* to them and then press ENTER! Better yet, you could use our [API Console](http://edmunds.mashery.com/io-docs) to make ***live API calls*** of your own. Once you're comfortable with these calls, you should think about downloading our [Javascript SDK](https://github.com/EdmundsAPI/sdk-javascript). It will make your development life with the Edmunds API much easier :)

#### Example 1: Get a list of all car makes

	https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key={your API key}

#### Example 2: Get a list of all new car makes

	https://api.edmunds.com/api/vehicle/v2/makes?state=new&fmt=json&api_key={your API key}

#### Example 3: Get model, model year, style and trim data for Honda

	https://api.edmunds.com/api/vehicle/v2/honda/models?fmt=json&api_key={your API key}

#### Example 4: Get model, model year, style and trim data for 2001 Honda

	https://api.edmunds.com/api/vehicle/v2/honda/models?year=2001&fmt=json&api_key={your API key}

#### Example 5: Get the total number of all new Acura models in the Edmunds data

	https://api.edmunds.com/api/vehicle/v2/acura/models/count?state=new&fmt=json&api_key={your API key}

#### Example 6: Get a list of styles for 2001 Honda Accord

	https://api.edmunds.com/api/vehicle/v2/honda/accord/2001?fmt=json&api_key={your API key}

#### Example 7: Get a list of Maintenance Schedules for 2001 Honda Accord

	https://api.edmunds.com/v1/api/maintenance/actionrepository/findbymodelyearid?modelyearid=100537293&fmt=json&api_key={your API key}

#### Example 8: Get all photos for 2001 Honda Accord EX 4dr Sedan (2.3L 4cyl 4A)

	https://api.edmunds.com/v1/api/vehiclephoto/service/findphotosbystyleid?styleId=100001210&fmt=json&api_key={your API key}

#### Example 9: Get the TMV® for 2001 Honda Accord EX 4dr Sedan (2.3L 4cyl 4A) w/ Outstanding condition and 25,000 miles in the 90069 area

	https://api.edmunds.com/v1/api/tmv/tmvservice/calculateusedtmv?styleid=100001210&condition=Outstanding&mileage=25000&zip=90069&fmt=json&api_key={your API key}

### API Uses

* Get all vehicle specs
* Get all maintenance schedules for a particular car model year
* Price out a used vehicle to determine the trade-in value
* Determine the True Cost to Own® of a specific car style
* Decode a VIN
* Get vehicle photos
* Get consumer ratings and reviews

### Available Resources

| Specification					| Service					| Pricing					| Review						| Media				|
|:------------------------------|:--------------------------|:--------------------------|:------------------------------|:------------------|
| Make							| Maintenance Schedule		| True Market Value® 		| Edmunds Grade Ratings			| Vehicle Photos	|
| Model							| Recalls					| True Cost to Own®			| Consumer Ratings and Reviews	|					|
| Model Year and trim			| Service Bulletin			| Incentives and Rebated 	| 								|					|
| Style							| Local Labor Rates			| 					 		| 								|					|
| Colors and Options			|							|							|								|					|
| Engine and Transmission		|							|							|								|					|
| Equipment						|							|							|								|					|
| Configuration					|							|							|								|					|
| VIN and SquishVin				|							|							|								|					|

These resources are accessible on the left. 

