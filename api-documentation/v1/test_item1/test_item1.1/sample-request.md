---
layout: api-documentation-v1

title : Sample Request
title_parent: Api documentation
title_active_left_menu: Test_item1.1

header : Sample Request

group: test_item1.1

sub_weight: 4

level: 2

api_version: Api version 1.0
---
{% include JB/setup %}


##Examples
###Request 1:

Get all information on BMW M3 2011

<pre>
<code class="prettyprint">
	{
    "tmv": {
        "certifiedUsedPrice": 0,
        "colorAdjustment": {
            "usedPrivateParty": 0,
            "usedTmvRetail": 0,
            "usedTradeIn": 0
        },
        "conditionAdjustment": {
            "usedPrivateParty": 0,
            "usedTmvRetail": 0,
            "usedTradeIn": 0
        },
        "estimatedTmv": false,
        "mileageAdjustment": {
            "usedPrivateParty": 0,
            "usedTmvRetail": 0,
            "usedTradeIn": 0
        },
        "nationalBasePrice": {
            "usedPrivateParty": 0,
            "usedTmvRetail": 0,
            "usedTradeIn": 0
        },
        "optionTMVPrices": {
            "200074977": {
                "baseInvoice": 2640,
                "baseMSRP": 2900,
                "deliveryCharges": 0,
                "estimateTmv": false,
                "tmv": 2713,
                "tmvRecommendedRating": 0,
                "usedPrivateParty": 0,
                "usedTmvRetail": 0,
                "usedTradeIn": 0
            },
            "200074983": {
                "baseInvoice": 955,
                "baseMSRP": 1050,
                "deliveryCharges": 0,
                "estimateTmv": false,
                "tmv": 982,
                "tmvRecommendedRating": 0,
                "usedPrivateParty": 0,
                "usedTmvRetail": 0,
                "usedTradeIn": 0
            },
            "200074993": {
                "baseInvoice": 365,
                "baseMSRP": 400,
                "deliveryCharges": 0,
                "estimateTmv": false,
                "tmv": 375,
                "tmvRecommendedRating": 0,
                "usedPrivateParty": 0,
                "usedTmvRetail": 0,
                "usedTradeIn": 0
            }
        },
        "regionalAdjustment": {
            "usedPrivateParty": 0,
            "usedTmvRetail": 0,
            "usedTradeIn": 0
        },
        "totalWithOptions": {
            "usedPrivateParty": 0,
            "usedTmvRetail": 0,
            "usedTradeIn": 0
        }
    }
}
</code>		
</pre>
 
