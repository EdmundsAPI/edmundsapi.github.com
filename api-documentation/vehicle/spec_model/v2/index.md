---
layout: api-documentation
title : 'Spec: Model'
title_active_left_menu: 'Spec: Model'
title_parent: Api documentation

amount_version: 1
spec: spec_model
version: v2
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

<div class="info-message">
A vehicle <em>model</em> is specific vehicle brand identified by a name or number (and which is usually further classified by trim or style level). You can get a list of car models for a specific car make and their relevant data via the following endpoints (accessible from the drop-down menu above):
</div>

### Endpoints

* [**Get Details on a Specific Car Model**](/api-documentation/vehicle/spec_model/v2/02_model_details/api-description.html): Returns relevant information Model Year information for a specific car Make and Model. The information can also be narrowed down with filters.

* [**Get a List of Car Models for a Specific Car Make**](/api-documentation/vehicle/spec_model/v2/01_list_of_models/api-description.html): You can get the entire list of car makes or use some basic filters to return the array of car makes you're interested in.

* [**Get Total Count of Models for a Car Make**](/api-documentation/vehicle/spec_model/v2/03_models_count/api-description.html): Get the total number of models of a specific car make. You can use filters to get subtotals (e.g. give me the total number of __new__ models or models available in 1999).

These three endpoints provide all the necessary data points.

### Examples

#### Example 1: Get model year and style details for all Lexus 1995 models
	
> https://api.edmunds.com/api/vehicle/v2/lexus/models?fmt=json&year=1995&api_key={api key}
	
#### Example 2: Get model year and style details for all ***used*** Honda Accords

> https://api.edmunds.com/api/vehicle/v2/honda/accord?fmt=json&state=used&api_key={api key}
	
#### Example 3: Get the total number of car models for Acura that are listed as ***new***

> https://api.edmunds.com/api/vehicle/v2/acura/models/count?fmt=json&state=new&api_key={api key}


