---
layout: api-documentation
title : 'Get TMV® Price for a Used Car'
title_active_left_menu: 'Price: True Market Value'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get TMV® Price for a Used Car'
spec: price_tmv
version: v1
api: vehicle
dropdown-link: 'v1/api/tmv/tmvservice/calculateusedtmv'


level: 4
description_edpoint: 'Get TMV® Price for a Used Car'
title_md : Sample Request
number: 4

---

### Sample Request

Get the TMV® price for a car with style ID **101353967** and condition **CLEAN** with **25,000 miles on it** in the **90019** area

### URL

	https://api.edmunds.com/v1/api/tmv/tmvservice/calculateusedtmv?styleid=101353967&condition=Clean&mileage=25000&zip=90019&fmt=json&api_key={api key}
	
### Response

	{
	    "tmv": {
	        "nationalBasePrice": {
	            "baseMSRP": null,
	            "baseInvoice": null,
	            "deliveryCharges": null,
	            "tmv": null,
	            "usedTmvRetail": 28341.0,
	            "usedPrivateParty": 26935.0,
	            "usedTradeIn": 25216.0,
	            "estimateTmv": null,
	            "tmvRecommendedRating": null
	        },
	        "optionTMVPrices": {},
	        "regionalAdjustment": {
	            "baseMSRP": null,
	            "baseInvoice": null,
	            "deliveryCharges": null,
	            "tmv": null,
	            "usedTmvRetail": 18.0,
	            "usedPrivateParty": 17.0,
	            "usedTradeIn": 16.0,
	            "estimateTmv": null,
	            "tmvRecommendedRating": null
	        },
	        "colorAdjustment": {
	            "baseMSRP": null,
	            "baseInvoice": null,
	            "deliveryCharges": null,
	            "tmv": null,
	            "usedTmvRetail": 0.0,
	            "usedPrivateParty": 0.0,
	            "usedTradeIn": 0.0,
	            "estimateTmv": null,
	            "tmvRecommendedRating": null
	        },
	        "destinationCharge": null,
	        "regionalAdFee": null,
	        "totalWithOptions": {
	            "baseMSRP": null,
	            "baseInvoice": null,
	            "deliveryCharges": null,
	            "tmv": null,
	            "usedTmvRetail": 28705.0,
	            "usedPrivateParty": 27298.0,
	            "usedTradeIn": 25578.0,
	            "estimateTmv": null,
	            "tmvRecommendedRating": null
	        },
	        "incentivesAndRebates": null,
	        "offerPrice": null,
	        "certifiedUsedPrice": 30922.0,
	        "conditionAdjustment": {
	            "baseMSRP": null,
	            "baseInvoice": null,
	            "deliveryCharges": null,
	            "tmv": null,
	            "usedTmvRetail": 0.0,
	            "usedPrivateParty": 0.0,
	            "usedTradeIn": 0.0,
	            "estimateTmv": null,
	            "tmvRecommendedRating": null
	        },
	        "mileageAdjustment": {
	            "baseMSRP": null,
	            "baseInvoice": null,
	            "deliveryCharges": null,
	            "tmv": null,
	            "usedTmvRetail": 346.0,
	            "usedPrivateParty": 346.0,
	            "usedTradeIn": 346.0,
	            "estimateTmv": null,
	            "tmvRecommendedRating": null
	        },
	        "predictedChange": null,
	        "predictedChangeIndicator": null,
	        "gasGuzzlerTax": null,
	        "estimatedTmv": false
	    }
	}
