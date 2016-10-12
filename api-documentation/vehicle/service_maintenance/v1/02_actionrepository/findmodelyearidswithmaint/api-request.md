---
layout: api-documentation
title : 'Find Car Model Year IDs with Maintenance Schedules'
title_active_left_menu: 'Service: Maintenance'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Find Car Model Year IDs with Maintenance Schedules'
spec: service_maintenance
version: v1
api: vehicle
dropdown-link: 'v1/api/maintenance/actionrepository/findmodelyearidswithmaintenanceschedule'


level: 4
description_edpoint: 'Find Car Model Year IDs with Maintenance Schedules'
title_md : Sample Request
number: 4

---

### Sample Request

Get a list of model year IDs with available maintenance schedule information.

### URL
	
	https://api.edmunds.com/v1/api/maintenance/actionrepository/findmodelyearidswithmaintenanceschedule?fmt=json&api_key={api key}
	
### Response

	{
	    "longListHolder": [100533909, 100531910, 100531911, 100531909, 200421953, 100531912, 100531913, 100533889, 100533949, 100533929, 100531950, 100533970, 100533969, 100531869, 100531850, 100531851, 100534009, 102, 100531889, 103, 100, 101, 99, 100533989, 100533791, 130, 100531789, 100533809, 200422135, 100531829, 100531813, 100531812, 100531811, ........, 100531810, 100533849, 100531729, 100533829, 208, 200422049, 100531749, 100533869, 100534149, 100532169, 100532170, 100534169, 100532189, 100532191, 100532190, 100534190, 100532192, 100532209, 294, 298, 100532109, 100532110, 200439761, 373, 100516863, 200443618, 100516841, 100516840, 100516843, 100516842, 100516824, 100516825, 100516822, 100516823, 100516820, 100516821, 100516807, 100516806, 100516805, 100516804, 100516803, 100516802, 100516801, 100516800, 100516780, 200443680, 200428111, 200428110, 200443884, 200459033, 200428282]
	}
