---
layout: api-documentation

title : Vehicle API
title_active_left_menu: Vehicle API
title_parent: Api documentation

level: 1
---

### Overview

The Vehicle API is comprised of a collection of resources that provide access to an array of automotive datasets _related directly to the automotive vehicle_. First, you need to know the five components that fully describe an **automotive vehicle**: 

_vehicle make –> vehicle model –> vehicle model year –> vehicle trim –> vehicle style_

For example: 

_Honda Accord 2013 EX 2.4-liter 4-cylinder CVT Automatic w/Navigation_
_(Honda) –> (Accord) –> (2013) –> (EX) –> (2.4-liter 4-cylinder CVT Automatic w/Navigation)_

You will see many references throughout the documentation for _vehicle/car Model Year ID_ and _vehicle/car Style ID_. Most of the endpoints offered through the API require one of these IDs. Getting familiar with them is essential to taking full advantage of the Edmunds API.

### Available Resources

Endpoints, which are the REST API access points, are bundled together based on function and context into what we call _Resources_. Here's a list of the available Vehicle API resources:

#### Vehicle Specification Resources

* Vehicle Make Resource
* Vehicle Model Resource
* Vehicle Model Year Resource
* Vehicle Style Resource
* Vehicle Colors and Options Resource
* Vehicle Configuration Resource


#### Vehicle Pricing Resources

* True Market Value® Resource
* True Cost to Own® Resource
* Incentives and Rebates Resource


#### Vehicle Media Resources

* Vehicle Photos Resource


#### Vehicle Service Resources

* Vehicle Maintenance Resource
* Vehicle Recalls Resource
* Vehicle Service Bulletin Resource
* Vehicle Notes Resource
* Local Labor Rates Resource


#### Vehicle Reviews Resources

* Car Ratings Resource
* Consumer Ratings and Reviews Resource


These resources are accessible on the left. 

### Quick Start

A few things to keep in mind before we begin:

* Make sure you have registered and obtain your Vehicle API Key. If you haven't, [now is a good time to do it](http://edmunds.mashery.com/member/register).
* You've made a couple of [live API calls](http://edmunds.mashery.com/io-docs) using the [API Console](http://edmunds.mashery.com/io-docs). This is good because it gets you familiarized with the endpoints and API responses.

OK, now let's get a list of all new car makes. This is probably the first call you would be making in the API.

### API Uses

* Get all vehicle specs
* Get all maintenance schedules for a particular car model year
* Price out a used vehicle to determine the trade-in value
* Determine the True Cost to Own® of a specific car style
* Decode a VIN
* Get vehicle photos
* Get consumer ratings and reviews

