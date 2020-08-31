---
layout: api-documentation
title : 'Spec: Model/Year'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 23
spec: spec_model_year
version: v3
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

<div class="info-message">
  You can get model years with styles for a specific Car Make/Model with pagination:
</div>

### Endpoints

* [**Get years with styles for a Car Make/Model**](/api-documentation/vehicle/spec_model_year/v3/01_list_of_years/api-description.html): Get the model years of a specific car make/model. You can use filters to get subtotals (e.g. give me the **used** **1999** model years for a car make/model and its styles).

* [**Get Details on a Specific Car Make/Model/Year**](/api-documentation/vehicle/spec_model_year/v3/02_year_details/api-description.html): Returns relevant information for a specific car make/model/year, including the **car styles and trims**. The information can also be narrowed down with filters.

### Examples

#### Example 1: Get model years and style details for all 2011 Lexus RX-350s

> https://api.edmunds.com/api/vehicle/v3/lexus/rx350/years?year=2011&api_key={api key}

#### Example 2: Get style details for all 2009 Honda Accords

> https://api.edmunds.com/api/vehicle/v3/honda/accord/2009?api_key={api key}



