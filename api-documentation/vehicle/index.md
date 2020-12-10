---
layout: api-documentation

title : Vehicle API
title_active_left_menu: Vehicle API
title_parent: Api documentation

level: 1
---
<a name="top"> </a>

### Page Content

* [Overview](#sec-1)
* [Quick Start](#sec-2)
* [Static Datasets](#sec-3)
* [API Uses](#sec-4)
* [Available Resources](#sec-5)

<a name='sec-1'> </a>

---

### Overview

The Vehicle API is comprised of a collection of resources that provide access to an array of automotive datasets _related directly to the automotive vehicle_. First, you need to know the _five components_ that fully describe an **automotive vehicle**: 

> Vehicle Make *&rarr;* Vehicle Model *&rarr;* Vehicle Model Year *&rarr;* Vehicle Trim *&rarr;* Vehicle Style

For example: 

> Honda Accord 2013 EX 2.4-liter 4-cylinder CVT Automatic w/Navigation

Would match to:

> **(Honda)** *&rarr;* (Accord) *&rarr;* **(2013)**       *&rarr;* (EX)   *&rarr;* **(2.4-liter 4-cylinder CVT Automatic w/Navigation)**
>
> **(make)**  *&rarr;* (model)  *&rarr;* **(year)** *&rarr;* (trim) *&rarr;* **(style)**

You will see many references throughout the documentation for vehicle (or car) _Model Year ID_ and _Style ID_. Most of the endpoints offered throughout the API require one of these IDs. Getting familiar with them is essential to taking full advantage of the Edmunds API. 

If you haven't yet, this might be a good time to read the [API Overview](/api-documentation/overview/) page to familiarize yourself with some of the core concepts required to use the API.<a name='sec-2'> </a>

[Back to top](#top)

### Quick Start

Let's get right to it, shall we? Here's a few REST calls that should get you started using the API with ease. You could copy and paste these calls into your browser, add your *API key* to them and then press ENTER! Once you're comfortable with these calls, you should think about downloading our [Javascript SDK](https://github.com/EdmundsAPI/sdk-javascript). It will make your development life with the Edmunds API even easier.

#### Example 1: Get a list of all car makes

> https://api.edmunds.com/api/vehicle/v2/makes?fmt=json&api_key={your API key}

#### Example 2: Get a list of all new car makes

> https://api.edmunds.com/api/vehicle/v2/makes?state=new&fmt=json&api_key={your API key}

#### Example 3: Get model, model year, style and trim data for Honda

> https://api.edmunds.com/api/vehicle/v2/honda/models?fmt=json&api_key={your API key}

#### Example 4: Get model, model year, style and trim data for 2001 Honda

> https://api.edmunds.com/api/vehicle/v2/honda/models?year=2001&fmt=json&api_key={your API key}

#### Example 5: Get the total number of all new Acura models in the Edmunds data

> https://api.edmunds.com/api/vehicle/v2/acura/models/count?state=new&fmt=json&api_key={your API key}

#### Example 6: Get a list of styles for 2001 Honda Accord

> https://api.edmunds.com/api/vehicle/v2/honda/accord/2001?fmt=json&api_key={your API key}

#### Example 7: Get a list of Maintenance Schedules for 2001 Honda Accord

> https://api.edmunds.com/v1/api/maintenance/actionrepository/findbymodelyearid?modelyearid=100537293&fmt=json&api_key={your API key}

#### Example 8: Get the TMV® for 2001 Honda Accord EX 4dr Sedan (2.3L 4cyl 4A) w/ Outstanding condition and 25,000 miles in the 90069 area

> https://api.edmunds.com/v1/api/tmv/tmvservice/calculateusedtmv?styleid=100001210&condition=Outstanding&mileage=25000&zip=90069&fmt=json&api_key={your API key}

<a name='sec-3'> </a>

[Back to top](#top)

### Static Datasets

Some of our datasets are static and don't change often (if at all.) Here's the **most common** static datasets you will need to make API calls and understand API response. More specific datasets (e.g. equipment types, option types, etc) are mentioned in the resources for which they're relevant.

| Vehicle Types				|				|				|				|					|
|:--------------|:--------------|:--------------|:--------------|:------------------|
| &bull; Car	| &bull; Truck	| &bull; SUV	| &bull; Van	| &bull; Minivan	|


| Vehicle Categories (aka submodels)						|							|								|							|
|:----------------------|:--------------------------|:------------------------------|:--------------------------|
| &bull; 4dr Hatchback	| &bull; 2dr Hatchback		| &bull; 2dr SUV 				| &bull; 4dr SUV			|
| &bull; Cargo Minivan	| &bull; Cargo Van			| &bull; Convertible			| &bull; Convertible SUV	|
| &bull; Coup			| &bull; Crew Cab Pickup	| &bull; Extended Cab Pickup 	| &bull; Passenger Minivan	|
| &bull; Passenger Van 	| &bull; Regular Cab Pickup | &bull; Sedan				 	| &bull; Wagon				|

| Vehicle Sizes					|					|				|
|:------------------|:------------------|:--------------|
| &bull; Compact	| &bull; Midsize	| &bull; Large	|

| Fuel Types					|							|					|
|:------------------|:--------------------------|:------------------|
| &bull; Electric	| &bull; Natural-gas-cng	| &bull; gas		|
| &bull; hybrid		| &bull; Flex-fuel-ffv		| &bull; diesel		|
                                 
| Driven Wheels							|							|
|:--------------------------|:--------------------------|
| &bull; all-wheel-drive	| &bull; four-wheel-drive	|
| &bull; front-wheel-drive	| &bull; rear-wheel-drive	|

<a name='sec-4'> </a>

[Back to top](#top)

### API Uses

Here are some common uses of the Vehicle API:

* Get all vehicle specs
* Get all maintenance schedules for a particular car model year
* Price out a used vehicle to determine the trade-in value
* Determine the True Cost to Own® of a specific car style
* Decode a VIN
* Get consumer ratings and reviews

<a name='sec-5'> </a>

[Back to top](#top)

### Available Resources

| Specification					| Service					| Pricing					| Review						| Media				|
|:------------------------------|:--------------------------|:--------------------------|:------------------------------|:------------------|
| [Make](/api-documentation/vehicle/spec_make/v3/) | [Maintenance Schedule](/api-documentation/vehicle/service_maintenance/v1/) | [True Market Value®](/api-documentation/vehicle/price_tmv/v1/) | [Edmunds Grade Ratings](/api-documentation/vehicle/content_letter_grade/v2/) | [Vehicle Photos](/api-documentation/media/photos/v2/) |
| [Model](/api-documentation/vehicle/spec_model/v3/) | [Recalls](/api-documentation/vehicle/service_recalls/v1/) | [True Cost to Own®](/api-documentation/vehicle/price_tco/v1/) | [Consumer Ratings and Reviews](/api-documentation/vehicle/content_ratings_and_reviews/v2/) | |
| [Model Year and trim](/api-documentation/vehicle/spec_model_year/v3/) | | | | |
| [Style](/api-documentation/vehicle/spec_style/v3/) | | | | |
| [Engine and Transmission](/api-documentation/vehicle/spec_engine_and_transmission/v2/) | | | | |
| [Colors and Options](/api-documentation/vehicle/spec_colors_and_options/3/) | | | | |
| [Equipment](/api-documentation/vehicle/spec_equipment/v3/) | | | | |
| [VIN](/api-documentation/vehicle/spec_vin_decoding/v2/) and [SquishVin](/api-documentation/vehicle/spec_squishvin/v2/) | | | | |

All of these resources are accessible in the table of contents on the left.

[Back to top](#top)

