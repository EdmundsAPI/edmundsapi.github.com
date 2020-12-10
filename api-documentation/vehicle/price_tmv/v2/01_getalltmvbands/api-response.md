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
title_md : Response format
number: 3

---

### Response format

    {
      "tmvconditions": {
        "{tmvConditionName}": {
          "Current": {
            "predictedChangeIndicator": {integer},
            "offerPrice": {double},
            "regionalAdFee": {double},
            "destinationCharge": {double},
            "predictedChange": {double},
            "estimatedTmv": {boolean},
            "gasGuzzlerTax": {double},
            "incentivesAndRebates": {double},
            "certifiedUsedPrice": {double},
            "colorAdjustment": { <<< {adjustment object}
              "deliveryCharges": {double},
              "tmvRecommendedRating": {integer},
              "usedPrivateParty": {double},
              "usedTmvRetail": {double},
              "baseMSRP": {double},
              "tmv": {double},
              "usedTradeIn": {double},
              "baseInvoice": {double}
            },
            "conditionAdjustment": {adjustment object},
            "mileageAdjustment": {adjustment object},
            "nationalBasePrice": {adjustment object},
            "totalWithOptions": {adjustment object},
            "optionTMVPrices": {
              "{optionId}": {adjustment object},
              ...
            },
            "regionalAdjustment": {adjustment object}
          }
        },
        ...
      }
    }

| Property              | Description                                                             | Visibility                |
|:--------------------------------|:--------------------------------------------------------------|:------------------------- |
| predictedChangeIndicator        | Predicted Change Indicator                                    | Edmunds, Partners, Public |
| offerPrice                      | Edmunds.com special price offer                               | Edmunds, Partners, Public |
| regionalAdFee                   | The ad fee price when applicable                              | Edmunds, Partners, Public |
| destinationCharge               | Destination Charge                                            | Edmunds, Partners, Public |
| predictedChange                 | Predicted Change                                              | Edmunds, Partners, Public |
| estimatedTmv                    | Estimated Tmv                                                 | Edmunds, Partners, Public |
| gasGuzzlerTax                   | The gas guzzler tax                                           | Edmunds, Partners, Public |
| incentivesAndRebates            | Incentives And Rebates                                        | Edmunds, Partners, Public |
| certifiedUsedPrice              | The TMV® price for the certified vehicle when application     | Edmunds, Partners, Public |
| colorAdjustment                 | The TMV® price for all color adjustments when applicable      | Edmunds, Partners, Public |
| adjustment.deliveryCharges      | Adjustment Delivery Charges                                   | Edmunds, Partners, Public |
| adjustment.tmvRecommendedRating | Adjustment Tmv Recommended Rating                             | Edmunds, Partners, Public |
| adjustment.usedPrivateParty     | Adjustment Used Private Party                                 | Edmunds, Partners, Public |
| adjustment.usedTmvRetail        | Adjustment Used Tmv Retail                                    | Edmunds, Partners, Public |
| adjustment.baseMSRP             | Adjustment Base MSRP                                          | Edmunds, Partners, Public |
| adjustment.tmv                  | Adjustment Tmv                                                | Edmunds, Partners, Public |
| adjustment.usedTradeIn          | Adjustment Used Trade-In                                      | Edmunds, Partners, Public |
| adjustment.baseInvoice          | Adjustment Base Invoice                                       | Edmunds, Partners, Public |
| conditionAdjustment             | The TMV® price for all condition adjustments when applicable  | Edmunds, Partners, Public |
| mileageAdjustment               | The TMV® price for the mileage adjustment when applicable     | Edmunds, Partners, Public |
| nationalBasePrice               | The national TMV® price for the **base trim** of this vehicle | Edmunds, Partners, Public |
| totalWithOptions                | The **total** TMV® price including all adjustments            | Edmunds, Partners, Public |
| optionTMVPrices                 | The TMV® price for all option adjustments when applicable     | Edmunds, Partners, Public |
| regionalAdjustment              | The TMV® price for the regional adjustment when applicable    | Edmunds, Partners, Public |