---
layout: api-documentation
title : 'Spec: Model'
title_active_left_menu: 'Spec: Model'
title_parent: Api documentation

amount_version: 2
spec: spec_model
version: v2
api: vehicle
dropdown-link: 'Select endpoint'


level: 2
overview: page_version

---


### What Can I Do With This Resource?  

A vehicle _model_ is specific vehicle brand identified by a name or number (and which is usually further classified by trim or style level). In this version, you can get a list of car models for a specific car make and their relevant data through the following endpoints (accessible from the drop-down menu above):

1. **Get Total Count of Models for a Car Make**: Get the total number of models of a specific car make. You can use filters to get subtotals (e.g. give me the total number of __new__ models or models available in 1999)

2. **Get Details on a Specific Car Make**: Same as the first endpoint but this one returns relevant information for a specific car make. The information can also be narrowed down with filters.

3. **Get a List of Car Makes**: You can get the entire list of car makes or use some basic filters to return the array of car makes you're interested in.


These three endpoints provide all the necessary data points.

#### Example 1: Get relevant information for all car makes that were active in 1995
	
	// The API call
	http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&year=1995&api_key={vehicle api key}
	
#### Example 2: Get information on _USED_ Hondas

	// The API call
	http://api.edmunds.com/api/vehicle/v2/honda?fmt=json&state=used&api_key={vehicle api key}
	
#### Example 3: Get the total number of car makes that are listed as __New__

	// The API call
	http://api.edmunds.com/api/vehicle/v2/makes/count?fmt=json&state=new&api_key={vehicle api key}


