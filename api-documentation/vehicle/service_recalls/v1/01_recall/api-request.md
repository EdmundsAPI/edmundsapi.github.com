---
layout: api-documentation
title : 'Get Vehicle Recalls by ID'
title_active_left_menu: 'Service: Recalls'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Vehicle Recalls by ID'
spec: service_recalls
version: v1
api: vehicle
dropdown-link: 'v1/api/maintenance/recall/{id}'


level: 4
description_edpoint: 'Get Vehicle Recalls by ID'
title_md : Sample Request
number: 4

---

### Sample Request

Get recall details by ID **169008**

### URL

	https://api.edmunds.com/v1/api/maintenance/recall/169008?fmt=json&api_key={api key}
	
### Response

	{
	    "recallHolder": [{
	        "id": 169008,
	        "recallNumber": "02V313000",
	        "componentDescription": "POWER TRAIN:AUTOMATIC TRANSMISSION",
	        "manufacturerRecallNumber": "02S43",
	        "manufacturedTo": "2002-11-10",
	        "numberOfVehiclesAffected": "25",
	        "influencedBy": "MFR",
	        "defectConsequence": "THIS COULD RESULT  RESULTING IN INCORRECT GEAR INDICATION.",
	        "defectCorrectiveAction": "DEALERS WILL ADD A STRAP TO THE SHIFT CABLE ADJUSTER TO PREVENT THE SHIFT CABLE FROM BECOMING DISLODGED.   FORD HAS NOT YET PROVIDED AN OWNER NOTIFICATION SCHEDULE FOR THIS CAMPAIGN.   OWNERS WHO DO NOT RECEIVE THE FREE REMEDY  WITHIN A REASONABLE TIME SHOULD CONTACT FORD AT 1-866-436-7332.",
	        "defectDescription": "ON CERTAIN SPORT UTILITY VEHICLES, THE TRANSMISSION SHIFT CABLE CAN BECOME DISLODGED FROM THE SHIFT CABLE BRACKET.",
	        "modelYear": "/api/vehicle/modelyearrepository/findbyid?id=100502677"
	    }]
	}
