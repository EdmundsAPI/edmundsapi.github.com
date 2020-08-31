---
layout: api-documentation
title : 'Spec: Make'
title_active_left_menu: 'Spec: Make'
title_parent: Api documentation

amount_version: 23
spec: spec_make
version: v2
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

<div class="info-message">

A vehicle <i>make</i> is either the name of its manufacturer or, if the manufacturer has more than one operating unit, the name of that unit. We made it super easy to get a list of car makes. In this version, you can get a list of car makes and their relevant data through the following endpoints (accessible from the drop-down menu above):

</div>

### Endpoints

* [**Get Details on a Specific Car Make**](/api-documentation/vehicle/spec_make/v2/02_make_details/api-description.html): Same as the first endpoint but this one returns relevant information for a specific car make. The information can also be narrowed down with filters.

* [**Get a List of Car Makes**](/api-documentation/vehicle/spec_make/v2/01_list_of_makes/api-description.html): You can get the entire list of car makes or use some basic filters to return the array of car makes you're interested in.

These three endpoints provide all the necessary data.

### Examples

#### Example 1: Get relevant information for all car makes that were active in 1995

> http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&year=1995&api_key={vehicle api key}

#### Example 2: Get information on _USED_ Hondas

> http://api.edmunds.com/api/vehicle/v2/honda?fmt=json&state=used&api_key={vehicle api key}