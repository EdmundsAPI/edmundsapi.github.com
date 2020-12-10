---
layout: api-documentation
title : 'Get TMV® Price for a Typically Equipped Used Car'
title_active_left_menu: 'Price: True Market Value'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get TMV® Price for a Typically Equipped Used Car'
spec: price_tmv
version: v1
api: vehicle
dropdown-link: 'v1/api/tmv/tmvservice/calculatetypicallyequippedusedtmv'


level: 4
description_edpoint: 'Get TMV® Price for a Typically Equipped Used Car'
title_md : Sample Request
number: 4

---

### Sample Request

Get the TMV® price for the typically equipped car with style ID **200419751** in the **90019** area.

### URL

	https://api.edmunds.com/v1/api/tmv/tmvservice/calculatetypicallyequippedusedtmv?styleid=200419751&zip=90019&fmt=json&api_key={api key}
	
### Response

	{
	    "tmv": {
	        "nationalBasePrice": {
	            "baseMSRP": null,
	            "baseInvoice": null,
	            "deliveryCharges": null,
	            "tmv": null,
	            "usedTmvRetail": 35761.0,
	            "usedPrivateParty": 34394.0,
	            "usedTradeIn": 32583.0,
	            "estimateTmv": null,
	            "tmvRecommendedRating": null
	        },
	        "optionTMVPrices": {
	            "200419766": {
	                "baseMSRP": 2775.0,
	                "baseInvoice": 2563.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200392743": {
	                "baseMSRP": 2400.0,
	                "baseInvoice": 2244.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200486500": {
	                "baseMSRP": 1340.0,
	                "baseInvoice": 1232.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200419768": {
	                "baseMSRP": 0.0,
	                "baseInvoice": 0.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": null,
	                "tmvRecommendedRating": null
	            },
	            "200419762": {
	                "baseMSRP": 0.0,
	                "baseInvoice": 0.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": null,
	                "tmvRecommendedRating": null
	            },
	            "200392740": {
	                "baseMSRP": 2465.0,
	                "baseInvoice": 2277.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200486513": {
	                "baseMSRP": 2775.0,
	                "baseInvoice": 2563.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200392719": {
	                "baseMSRP": 1950.0,
	                "baseInvoice": 1796.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200486488": {
	                "baseMSRP": 2775.0,
	                "baseInvoice": 2563.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200419771": {
	                "baseMSRP": 330.0,
	                "baseInvoice": 303.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200419900": {
	                "baseMSRP": 2775.0,
	                "baseInvoice": 2563.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200486491": {
	                "baseMSRP": 330.0,
	                "baseInvoice": 303.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200419756": {
	                "baseMSRP": 1340.0,
	                "baseInvoice": 1232.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200486496": {
	                "baseMSRP": 2260.0,
	                "baseInvoice": 2115.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200486495": {
	                "baseMSRP": 2760.0,
	                "baseInvoice": 2575.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200486483": {
	                "baseMSRP": 640.0,
	                "baseInvoice": 588.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200421800": {
	                "baseMSRP": 2760.0,
	                "baseInvoice": 2575.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200392749": {
	                "baseMSRP": 330.0,
	                "baseInvoice": 303.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            },
	            "200392733": {
	                "baseMSRP": 640.0,
	                "baseInvoice": 588.0,
	                "deliveryCharges": null,
	                "tmv": null,
	                "usedTmvRetail": null,
	                "usedPrivateParty": null,
	                "usedTradeIn": null,
	                "estimateTmv": false,
	                "tmvRecommendedRating": null
	            }
	        },
	        "regionalAdjustment": {
	            "baseMSRP": null,
	            "baseInvoice": null,
	            "deliveryCharges": null,
	            "tmv": null,
	            "usedTmvRetail": 23.0,
	            "usedPrivateParty": 22.0,
	            "usedTradeIn": 21.0,
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
	            "usedTmvRetail": 36236.0,
	            "usedPrivateParty": 34868.0,
	            "usedTradeIn": 33056.0,
	            "estimateTmv": null,
	            "tmvRecommendedRating": null
	        },
	        "incentivesAndRebates": null,
	        "offerPrice": null,
	        "certifiedUsedPrice": 0.0,
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
	            "usedTmvRetail": 452.0,
	            "usedPrivateParty": 452.0,
	            "usedTradeIn": 452.0,
	            "estimateTmv": null,
	            "tmvRecommendedRating": null
	        },
	        "predictedChange": null,
	        "predictedChangeIndicator": null,
	        "gasGuzzlerTax": null,
	        "estimatedTmv": false
	    }
	}