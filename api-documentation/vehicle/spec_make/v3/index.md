---
layout: api-documentation
title : 'Spec: Make'
title_active_left_menu: 'Spec: Make'
title_parent: Api documentation

amount_version: 23
spec: spec_make
version: v3
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

<div class="info-message">

A vehicle <i>make</i> is either the name of its manufacturer or, if the manufacturer has more than one operating unit, the name of that unit. We made it super easy to get a list of car makes. In this version, you can get a list of car makes and their relevant data through the following endpoints (accessible from the drop-down menu above):

</div>

### Endpoints

* [**Get Details on a Specific Car Make**](/api-documentation/vehicle/spec_make/v3/01_make_details/api-description.html): Same as the first endpoint but this one returns relevant information for a specific car make. The information can also be narrowed down with filters.

* [**Get Total Count of Car Makes**](/api-documentation/vehicle/spec_make/v3/02_makes_count/api-description.html): Get the total number of car makes.

* [**Get A List of Makes**](/api-documentation/vehicle/spec_make/v3/03_list_of_makes/api-description.html): Returns a list of makes based on filters. 

These three endpoints provide all the necessary data.

### Examples

#### Example 1: Get information on _USED_ Hondas

> http://api.edmunds.com/api/vehicle/v3/honda?state=USED&api_key={vehicle api key}

#### Example 2: Get the total number of car makes that are listed as __New__

> http://api.edmunds.com/api/vehicle/v3/makes/count?api_key={vehicle api key}

#### Example 3: Get a list of makes with NEW_USED publication state:

> http://api.edmunds.com/api/vehicle/v3/makes?api_key={vehicle api key}&publicationStates=NEW_USED