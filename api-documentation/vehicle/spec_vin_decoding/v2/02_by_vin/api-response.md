---
layout: api-documentation
title : 'Get Vehicle Details Through VIN Decoding'
title_active_left_menu: "Spec: VIN Decoding"
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Vehicle Details Through VIN Decoding v2'
spec: spec_vin_decoding
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/vins/{vin}'


level: 4
description_edpoint: 'Get Vehicle Details Through VIN Decoding'
title_md : Response format
number: 3

---

### Response format

#### JSON Response

	{
	  "vin": {string},
	  "squishVin": {string},
	  "make": {object},
	  "model": {object},
	  "years": {array},
	  "engine": {object},
	  "transmission": {object},
	  "drivenWheels": {string},
	  "numOfDoors": {integer},
	  "options": {option},
	  "colors": {object},
	  "equipment": {array},
	  "manufacturer": {string},
	  "manufacturerCode": {string},
	  "matchingType": {string},
	  "MPG": {
	    "highway": {integer},
	    "city": {integer}
	  }
	}


| Property      				| Description                         					| Visibility                |
|:------------------------------|:------------------------------------------------------|:------------------------- |
| vin                           | The supplied vin                                      | Edmunds, Partners, Public |
| squishVin                     | The car's squishVin                                   | Edmunds, Partners, Public |
| make		    				| The car's make details (id, name and nicename)			| Edmunds, Partners, Public |
| model							| The car's model details (id, name and nicename)			| Edmunds, Partners, Public |
| year	  						| The car's model year details. See [Spec: Model Year](/api-documentation/vehicle/spec_model_year/v2/)		| Edmunds, Partners, Public |
| engine		    			| Engine details. See [engine specs](/api-documentation/vehicle/spec_engine_and_transmission/v2/)	| Edmunds, Partners, Public |
| transmission					| Transmission details. See [transmission specs](/api-documentation/vehicle/spec_engine_and_transmission/v2/)	| Edmunds, Partners, Public |
| drivenWheels	    			| The car drive								| Edmunds, Partners, Public |
| numOfDoors	    			| The number of doors on the car									| Edmunds, Partners, Public |
| options					    | Options details. See [options specs](/api-documentation/vehicle/spec_colors_and_options/v2/)		| Edmunds, Partners, Public |
| colors                        | Color details. See [colors specs](/api-documentation/vehicle/spec_colors_and_options/v2/)					| Edmunds, Partners, Public |
| equipment                     | Standard equipment details. See [equipment specs](/api-documentation/vehicle/spec_equipment/v2/)					| Edmunds, Partners, Public |
| manufacturer                  | The name of the manufacturer                              | Edmunds, Partners, Public |
| manufacturerCode              | The manufacturer code                                     | Edmunds, Partners, Public |
| matchingType                  | The value indicates algorithm which used to decode the VIN. Possible values: VIN, SQUISHVIN | Edmunds, Partners, Public |
| MPG                           | The highway and city MPG details                          | Edmunds, Partners, Public |
| warning                       | The warning field contains information about VIN checking. Also, it can be missed if everything is OK | Edmunds, Partners, Public |
