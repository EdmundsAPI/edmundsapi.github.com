---
layout: api-documentation
title : 'Get Car Styles with TCO® Value'
title_active_left_menu: 'Price: True Cost to Own'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Car Styles with TCO® Value'
spec: price_tco
version: v1
api: vehicle
dropdown-link: 'v1/api/tco/getstyleswithtcodatabysubmodel'


level: 4
description_edpoint: 'Get Car Styles with TCO® Value'
title_md : Sample Request
number: 4

---

### Sample Request

Get car styles with TCO® value for **2011 Acura ZDX Hatchback**.

#### URL

	https://api.edmunds.com/v1/api/tco/getstyleswithtcodatabysubmodel?make=acura&model=zdx&year=2011&submodel=hatchback&fmt=json&api_key={api key}
	
#### Response

	{
	    "styles": {
	        "4dr Hatchback AWD (3.7L 6cyl 6A)": {
	            "id": 101375229,
	            "price": 46020.0,
	            "trim": "Base",
	            "styleLongName": "3.7L V6 AWD 6-speed Automatic"
	        },
	        "4dr Hatchback AWD w/Advance Package (3.7L 6cyl 6A)": {
	            "id": 101375241,
	            "price": 56570.0,
	            "trim": "Base",
	            "styleLongName": "3.7L V6 AWD 6-speed Automatic w/Advance Package"
	        },
	        "4dr Hatchback AWD w/Technology Package (3.7L 6cyl 6A)": {
	            "id": 101375230,
	            "price": 50520.0,
	            "trim": "Base",
	            "styleLongName": "3.7L V6 AWD 6-speed Automatic w/Technology Package"
	        }
	    }
	}