---
layout: api-documentation
title : 'Get Vehicle Details Through VIN Decoding'
title_active_left_menu: "Spec: VIN Decoding"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Vehicle Details Through VIN Decoding'
spec: spec_vin_decoding
version: v1
api: vehicle
dropdown-link: 'v1/api/toolsrepository/vindecoder'


level: 4
description_edpoint: 'Get Vehicle Details Through VIN Decoding'
title_md : Response format
number: 3

---

### Response format

#### JSON Response

	{
	  "styleHolder": [
	    {
	      "makeId": {integer},
	      "year": {integer},
	      "makeName": {string},
	      "makeNiceName": {string},
	      "modelId": {string},
	      "modelName": {string},
	      "modelNiceName": {string},
	      "modelYearId": {integer},
	      "transmissionType": {string},
	      "engineCompressorType": {string},
	      "engineFuelType": {string},
	      "engineCylinder": {integer},
	      "engineSize": {float},
	      "trim": {object},
	      "squishVins": {array},
	      "styleIds": {array}
	    }
	  ]
	}


| Property      				| Description                         					| Visibility                |
|:------------------------------|:------------------------------------------------------|:------------------------- |
| makeId		    			| The car make ID										| Edmunds, Partners, Public |
| year		    				| The car year											| Edmunds, Partners, Public |
| makeName						| The car make name										| Edmunds, Partners, Public |
| makeNiceName	  				| The car make nicename									| Edmunds, Partners, Public |
| modelId		    			| The car model ID										| Edmunds, Partners, Public |
| modelName						| The car model name									| Edmunds, Partners, Public |
| modelNiceName	    			| The car model nicename								| Edmunds, Partners, Public |
| modelYearId	    			| The car model year ID									| Edmunds, Partners, Public |
| transmissionType			    | The car transmission details. See [transmission specs](/api-documentation/vehicle/spec_engine_and_transmission/v2/)		| Edmunds, Partners, Public |
| engineCompressorType			| The car engine details. See [engine specs](/api-documentation/vehicle/spec_engine_and_transmission/v2/)					| Edmunds, Partners, Public |
| engineFuelType			    | The car engine details. See [engine specs](/api-documentation/vehicle/spec_engine_and_transmission/v2/)					| Edmunds, Partners, Public |
| engineCylinder			    | The car engine details. See [engine specs](/api-documentation/vehicle/spec_engine_and_transmission/v2/)					| Edmunds, Partners, Public |
| engineSize			    	| The car engine details. See [engine specs](/api-documentation/vehicle/spec_engine_and_transmission/v2/)					| Edmunds, Partners, Public |
| trim			    			| The car trim																												| Edmunds, Partners, Public |
| squishVins			    	| The VIN's corresponding squishVINs. See [SquishVIN specs](/api-documentation/vehicle/spec_squishvin/v2/)					| Edmunds, Partners, Public |
| styleIds			    		| A list of style IDs that match this VIN																					| Edmunds, Partners, Public |



