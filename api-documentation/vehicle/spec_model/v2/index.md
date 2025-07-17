---
layout: api-documentation
title : 'Spec: Model'
title_active_left_menu: 'Spec: Model'
title_parent: Api documentation

amount_version: 23
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

These three endpoints provide all the necessary data points.

### Examples
	
#### Example 1: Get model year and style details for all ***used*** Honda Accords

> https://api.edmunds.com/api/vehicle/v2/honda/accord?fmt=json&state=used&api_key={api key}


