---
layout: api-documentation
title : 'Get Service Notes by Car Style ID'
title_active_left_menu: 'Service: Notes'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Service Notes by Car Style ID'
spec: service_notes
version: v1
api: vehicle
dropdown-link: 'v1/api/maintenance/stylesnotes/{style ID}'


level: 4
description_edpoint: 'Get Service Notes by Car Style ID'
title_md : Response format
number: 3

---

### Response format

	{
	    "maintenanceStyleNotesHolder": [{
	        "note1": {string},
	        "note2": {string},
	        "style": {URI}
	    }]
	}

| Property      | Description                                              	| Visibility                |
|:--------------|:----------------------------------------------------------|:------------------------- |
| notex         | The maintenance note					                   	| Edmunds, Partners, Public |
| style         | The car style ID							                   	| Edmunds, Partners, Public |