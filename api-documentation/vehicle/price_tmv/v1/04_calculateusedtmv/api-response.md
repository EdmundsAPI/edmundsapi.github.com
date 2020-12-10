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
title_md : Response format
number: 3

---

### Response format

	{
	    "tmv": {
	        "nationalBasePrice": {price object},
	        "optionTMVPrices": {price object},
	        "regionalAdjustment": {price object},
	        "colorAdjustment": {price object},
	        "destinationCharge": {float},
	        "regionalAdFee": {float},
	        "totalWithOptions": {price object},
	        "incentivesAndRebates": {float},
	        "offerPrice": {float},
	        "certifiedUsedPrice": {float},
	        "conditionAdjustment": {price object},
	        "mileageAdjustment": {price object},
	        "predictedChange": null,
	        "predictedChangeIndicator": null,
	        "gasGuzzlerTax": {float},
	        "estimatedTmv": {boolean}
	    }
	}

| Property      		| Description                                              		| Visibility                |
|:----------------------|:--------------------------------------------------------------|:------------------------- |
| nationalBasePrice		| The national TMV® price for the **base trim** of this vehicle	| Edmunds, Partners, Public |
| optionTMVPrices		| The TMV® price for all option adjustments when applicable		| Edmunds, Partners, Public |
| regionalAdjustment	| The TMV® price for the regional adjustment when applicable	| Edmunds, Partners, Public |
| colorAdjustment		| The TMV® price for all color adjustments when applicable		| Edmunds, Partners, Public |
| regionalAdFee			| The ad fee price when applicable								| Edmunds, Partners, Public |
| totalWithOptions		| The **total** TMV® price including all adjustments			| Edmunds, Partners, Public |
| incentivesAndRebates	| All incentives and rebated related to this vehicle			| Edmunds, Partners, Public |
| offerPrice			| Edmunds.com special price offer								| Edmunds, Partners, Public |
| certifiedUsedPrice	| The TMV® price for the certified vehicle when application		| Edmunds, Partners, Public |
| mileageAdjustment		| The TMV® price for the mileage adjustment when applicable		| Edmunds, Partners, Public |
| predictedChange		| The TMV® price for the mileage adjustment when applicable		| Edmunds, Partners, Public |
| predictedChangeIndicator		| The TMV® price for the mileage adjustment when applicable		| Edmunds, Partners, Public |
| gasGuzzlerTax			| The gas guzzler tax												| Edmunds, Partners, Public |
| estimatedTmv			| Is the TMV® value estimated or accurate?							| Edmunds, Partners, Public |



The <code>price object</code> has this format:

	{
        "baseMSRP": null,
        "baseInvoice": null,
        "deliveryCharges": null,
        "tmv": -105.0,
        "usedTmvRetail": null,
        "usedPrivateParty": null,
        "usedTradeIn": null,
        "estimateTmv": null,
        "tmvRecommendedRating": null
    }

| Property      		| Description                                              		| Visibility                |
|:----------------------|:--------------------------------------------------------------|:------------------------- |
| baseMSRP				| The base MSRP price for this vehicle (for **new** cars only)		| Edmunds, Partners, Public |
| baseInvoice			| The base invoice price for this vehicle (for **new** cars only)	| Edmunds, Partners, Public |
| deliveryCharges		| Delivery charge (for **new** cars only)							| Edmunds, Partners, Public |
| tmv					| The TMV® price (for **new** cars only)							| Edmunds, Partners, Public |
| usedTmvRetail			| The TMV® price (for **used** cars only)						| Edmunds, Partners, Public |
| usedPrivateParty		| The TMV® price for selling the car privately (for **used** cars only)			| Edmunds, Partners, Public |
| usedTradeIn			| The TMV® price for trading the car in at the dealership (for **used** cars only)			| Edmunds, Partners, Public |
| estimateTmv			| Is the TMV® value estimated or accurate?								| Edmunds, Partners, Public |
| tmvRecommendedRating	| *deprecated*															| Edmunds, Partners, Public |
	
