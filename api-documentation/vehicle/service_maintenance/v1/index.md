---
layout: api-documentation
title : 'Service: Maintenance'
title_active_left_menu: 'Service: Maintenance'
title_parent: Api documentation

amount_version: 1
spec: service_maintenance
version: v1
api: vehicle
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

<div class="info-message">
    The maintenance schedule of vehicles as provided by the car manufacturers. This resource allows you to look up the entire maintenance schedule for a particular vehicle's <strong>model year ID</strong> and by the maintenance action ID.
</div>

### Endpoints

* [Get Maintenance Schedule for a Vehicle with Model Year ID](/api-documentation/vehicle/service_maintenance/v1/02_actionrepository/findbymodelyearid/api-description.html)

### Frequency IDs

Each maintenance action is assigned a frequency ID that describe how often it needs to take place. Here's a list of all available frequency IDs and their descriptions:
                                                                                      
| ID        | Description                                                                                                                      |
|:----------|:---------------------------------------------------------------------------------------------------------------------------------|
| 1         | A-service schedule. This is the basic 1-year maintenance service that most cars get.                                             |
| 2         | B-service schedule. This is the extended maintenance service that comes after #1.                                                |
| 3         | This maintenance service **takes place once** at the exact value of the intervalMileage or intervalMonth, whichever comes first. |
| 4         | This maintenance service **takes place every** intervalMileage or intervalMonth value, whichever comes first.                    |
| 5         | This maintenance service **takes place more frequently**.                                                                        |
| 6         | This maintenance service **takes place when the warning light indicates.**                                                       |
| 7         | **Inspection I** as recommended by the vehicle manufacturer.                                                                     |
| 8         | **Inspection II** as recommended by the vehicle manufacturer.                                                                    |
| 9         | **Second Inspection II **                                                                                                        |
