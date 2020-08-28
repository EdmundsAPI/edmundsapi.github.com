---
layout: api-documentation
title : 'Content: Letter Grade Rating'
title_active_left_menu: "Content: Letter Grade Rating"
title_parent: Api documentation

amount_version: 1
spec: content_letter_grade
version: v2
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

#### From Edmunds.com:

*The Edmunds Testing Team evaluates some 200 cars each year. Each vehicle is driven on a standardized road test loop and visits our test track for instrumented testing in controlled conditions. Our time behind the wheel is used to develop ratings that describe how a car stacks up against its direct rivals in a particular size and price class.*

For more details, visit [http://www.edmunds.com/new-car-ratings/](http://www.edmunds.com/new-car-ratings/)

### Endpoints

* [Get Edmunds.com Letter Grade Rating by Car Make/Model/Year Info](/api-documentation/vehicle/content_letter_grade/v2/01_by_mmy/api-description.html)
* [Get Rating Details for the Given Make/Model/Year by ID](/api-documentation/vehicle/content_letter_grade/v2/04_rating_details_by_id_make_model_year/api-description.html)
* [Get Rating Details by Style ID](/api-documentation/vehicle/content_letter_grade/v2/05_rating_details_by_style_id/api-description.html)

### Ratings Categories

All tested vehicles are given a score and a grade in the following categories:

| 								| 							| 							| 								| 					|
|:------------------------------|:--------------------------|:--------------------------|:------------------------------|:------------------|
| **Performance**: The score is broken down by the following sub-categories: *acceleration, braking, steering, handling, and drivability*.	| **Comfort**: The score is broken down by the following sub-categories: *seating comfort, ride comfort, and quietness*.		| **Interior**: The score is broken down by the following sub-categories: *ergonomics, ingress/egress, space/room, visibility and cargo/storage*.	| **Value**: The score is broken down by the following sub-categories: *build quality, features, cost, MPG, warranty and ownership*.	| **Fun to Drive**: The score is broken down by the following sub-categories: *driving experience, and personality*.	|

In addition to the ratings categories, the resource returns the following information:

* The date the test was conducted
* The overall grade
* The make/mode/year and style of the vehicle
* Test summary