---
layout: api-documentation
title : 'Get TMV® Price for a New Car by MSRP and Spec'
title_active_left_menu: 'Price: True Market Value'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get TMV® Price for a New Car by MSRP and Spec'
spec: price_tmv
version: v1
api: vehicle
dropdown-link: 'api/v1/vehicle/{make}/{year}/price'


level: 4
description_edpoint: 'Get TMV® Price for a New Car by MSRP and Spec'
title_md : Sample Request
number: 4

---

### Sample Request

Get the TMV® for a **Lexus** priced at **$33,425** MSRP in the **90019** area.

### URL

	https://api.edmunds.com/api/v1/vehicle/lexus/2013/price?msrp=33425&zip=90019&api_key={api key}

### Response

	{
	    "tmvUsd": 31429,
	    "dealerCashUsd": 40.27,
	    "customerIncentiveUsd": 0.00,
	    "destinationFeeUsd": 895.00,
	    "gasGuzzlerTaxUsd": 0.00,
	    "link": {
	        "rel": "full",
	        "href": "/api/v1/vehicle/lexus/2013/price?zip=90019&msrp=33425&model=null&styles=101419737,200432929,200432928,200419839,200419838,200432926,200432927,101426942,200441510,200439741,200431708,200439742,200439740,101398299,200419751,200419752,200421776,200441460,101426944,101420861,101398300,200437667,200442774,200442807,200424195,200424196"
	    },
	    "corePercent": {
	        "priceUsd": 30573.81,
	        "percent": null,
	        "link": null
	    },
	    "regionAdjustment": {
	        "adjustmentUsd": 0.00,
	        "dmaAdjustment": null
	    },
	    "colorAdjustment": {
	        "adjustmentUsd": 0.00,
	        "percent": null,
	        "link": null,
	        "state": null
	    }
	}