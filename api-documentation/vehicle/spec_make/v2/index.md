---
layout: api-documentation
title : 'Vehicle API: Make Specification Resource v2'
title_active_left_menu: Spec Make
title_parent: Api documentation

amount_version: 2
spec: spec_make
version: v2
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---


### Car Makes Simplified 

We made getting a list of car makes, or brands, as simple as possible compared to what it was in version 1. We no longer have many endpoints to choose from (YAY!). In this version, you can get a list of car makes and their relevant data through the following endpoints (accessible from the dropdown above):

1. **Get Total Count of Car Makes/Brands**: Get the total number of car makes. You can use filters to get subtotals (e.g. give me the total number of __new__ cars)

2. **Get a list of car makes**: You can get the entire list of car makes or use some basic filters to return the array of car makes you're interested in.

3. **Get details on a specific car make**: Same as the first endpoint but this one returns relevant information for a specific car make. The information can also be narrowed down with filters.

These three endpoints provide all the necessary data points.

### Example 1: Get relevant information for all car makes/brands that were active in 1995
	
	// The API call
	http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&year=1995&api_key={vehicle api key}
	
### Example 2: Get information on __New__ Hondas

	// The API call
	http://api.edmunds.com/api/vehicle/v2/honda?fmt=json&state=new&api_key={vehicle api key}
	
### Example 3: Get the total number of car makes/brands that are listed as __New__

	// The API call
	http://api.edmunds.com/api/vehicle/v2/makes/count?fmt=json&state=new&api_key={vehicle api key}