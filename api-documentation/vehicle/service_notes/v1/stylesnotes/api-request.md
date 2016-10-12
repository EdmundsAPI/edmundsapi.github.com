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
title_md : Sample Request
number: 4

---

### Sample Request

Get maintenance notes for style ID **101353967**

### URL

	https://api.edmunds.com/v1/api/maintenance/stylesnotes/101353967?fmt=json&api_key={api key}
	
### Response

	{
	    "maintenanceStyleNotesHolder": [{
	        "note1": "Lexus provides your first scheduled maintenance service at no charge. The service is performed at 30 days or 1,000 miles, whichever occurs first. For SUVs, the service is performed at 6 months or 5,000 miles, whichever occurs first.",
	        "note2": "Lexus also provides your second scheduled maintenance service at no charge. The service is performed at six months or 5,000 miles, whichever occurs first. For SUVs, the service is performed at 12 months or 10,000 miles, whichever occurs first.",
	        "style": "/api/vehicle/style/101353967"
	    }]
	}