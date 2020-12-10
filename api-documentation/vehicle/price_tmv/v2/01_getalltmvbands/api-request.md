---
layout: api-documentation
title : 'Get All TMV® Bands'
title_active_left_menu: 'Price: True Market Value'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get All TMV® Bands'
spec: price_tmv
version: v2
api: vehicle
dropdown-link: 'api/v2/usedtmv/getalltmvbands'


level: 4
description_edpoint: 'Get All TMV® Bands'
title_md : Sample Request
number: 4

---

### Sample Request

Get the new TMV® price for a car with style ID **200419751** in the **90019** area

### URL
    
    https://api.edmunds.com/api/v2/usedtmv/getalltmvbands?styleid=200419751&zip=90019&api_key={api key}
    
### Response

    {
      "tmvconditions": {
        "OUTSTANDING": {
          "Current": {
            "predictedChangeIndicator": 0,
            "colorAdjustment": {
              "deliveryCharges": 0.0,
              "tmvRecommendedRating": 0,
              "usedPrivateParty": 0.0,
              "usedTmvRetail": 0.0,
              "baseMSRP": 0.0,
              "tmv": 0.0,
              "usedTradeIn": 0.0,
              "baseInvoice": 0.0
            },
            "offerPrice": 0.0,
            "conditionAdjustment": {
              "deliveryCharges": 0.0,
              "tmvRecommendedRating": 0,
              "usedPrivateParty": 2053.0,
              "usedTmvRetail": 2458.0,
              "baseMSRP": 0.0,
              "tmv": 0.0,
              "usedTradeIn": 1676.0,
              "baseInvoice": 0.0
            },
            "mileageAdjustment": {
              "deliveryCharges": 0.0,
              "tmvRecommendedRating": 0,
              "usedPrivateParty": 0.0,
              "usedTmvRetail": 0.0,
              "baseMSRP": 0.0,
              "tmv": 0.0,
              "usedTradeIn": 0.0,
              "baseInvoice": 0.0
            },
            "nationalBasePrice": {
              "deliveryCharges": 0.0,
              "tmvRecommendedRating": 0,
              "usedPrivateParty": 14063.0,
              "usedTmvRetail": 15970.0,
              "baseMSRP": 0.0,
              "tmv": 0.0,
              "usedTradeIn": 11733.0,
              "baseInvoice": 0.0
            },
            "regionalAdFee": 0.0,
            "totalWithOptions": {
              "deliveryCharges": 0.0,
              "tmvRecommendedRating": 0,
              "usedPrivateParty": 16117.0,
              "usedTmvRetail": 18428.0,
              "baseMSRP": 0.0,
              "tmv": 0.0,
              "usedTradeIn": 13409.0,
              "baseInvoice": 0.0
            },
            "optionTMVPrices": {
              
            },
            "destinationCharge": 0.0,
            "predictedChange": 0.0,
            "estimatedTmv": false,
            "gasGuzzlerTax": 0.0,
            "regionalAdjustment": {
              "deliveryCharges": 0.0,
              "tmvRecommendedRating": 0,
              "usedPrivateParty": 0.0,
              "usedTmvRetail": 0.0,
              "baseMSRP": 0.0,
              "tmv": 0.0,
              "usedTradeIn": 0.0,
              "baseInvoice": 0.0
            },
            "incentivesAndRebates": 0.0,
            "certifiedUsedPrice": 0.0
          }
        },
        ...
      }
    }
