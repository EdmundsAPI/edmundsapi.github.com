---
layout: api-documentation
title : 'Spec: Model/Year'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 2
spec: spec_model_year
version: v2
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

<div class="info-message">
 A vehicle <em>model year</em> for a vehicle model is the <em>calendar year</em> designation assigned by the manufacturer to the annual version of that model. You can get a list of car model years for a specific car make and model via the following endpoints (accessible from the drop-down menu above):
</div>

### Endpoints

* [**Get a List of Car Model Years for a Specific Car Make/Model**](/api-documentation/vehicle/spec_model_year/v2/03_list_of_years/api-description.html): You can get the entire list of car model years or use some basic filters to return the array of car model years you're interested in for a specific car make/model.

* [**Get Details on a Specific Car Make/Model/Year**](/api-documentation/vehicle/spec_model_year/v2/02_year_details/api-description.html): Returns relevant information for a specific car make/model/year, including the **car styles and trims**. The information can also be narrowed down with filters.

* [**Get Total Count of Model Years for a Car Make/Model**](/api-documentation/vehicle/spec_model_year/v2/03_years_count/api-description.html): Get the total number of model years of a specific car make/model. You can use filters to get subtotals (e.g. give me the total number of **used** **1999** model years for a car make/model).

These three endpoints provide all the necessary data points.

### Examples

#### Example 1: Get model years and style details for all 2011 Lexus RX-350s
	
> https://api.edmunds.com/api/vehicle/v2/lexus/rx350/years?fmt=json&year=2011&api_key={api key}
	
#### Example 2: Get style details for all 2009 Honda Accords

> https://api.edmunds.com/api/vehicle/v2/honda/accord/2009?fmt=json&api_key={api key}
	
#### Example 3: Get the total number of car model years for Acura MDXs that are listed as ***new***

> https://api.edmunds.com/api/vehicle/v2/acura/mdx/years/count?fmt=json&state=new&api_key={api key}


