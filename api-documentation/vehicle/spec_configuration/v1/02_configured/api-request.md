---
layout: api-documentation
title : 'Get configured vehicle w/ Options by style ID and Zip Code'
title_active_left_menu: "Spec: Configuration"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get configured vehicle w/ Options by style ID and Zip Code'
spec: spec_configuration
version: v1
api: vehicle
dropdown-link: 'v1/api/configurator/withOptions'


level: 4
description_edpoint: 'Get configured vehicle w/ Options by style ID and Zip Code'
title_md : Sample Request
number: 4

---

### Sample Request 1

Get the required, excluded and included options for a **2013 BMW 328i Sedan (2.0L 4-cyl. Turbo 6-speed Manual)** when the **M Sport Line** package is selected in the **77001** area.

#### URL

	https://api.edmunds.com/v1/api/configurator/withOptions?zip=77001&styleid=200423469&fmt=json&optionid=&selected=200425407&api_key={api key}
	
#### Response
	
	{
	  "zipCode": "77001",
	  "styleId": "200423469",
	  "colorId": null,
	  "currentOptions": [
	    ""
	  ],
	  "selectedOption": "200425407",
	  "deselectedOption": null,
	  "furtherAdditions": [
	    "200423479"
	  ],
	  "furtherRemovals": [

	  ],
	  "requiredItems": [
	    "200423479"
	  ],
	  "includedItems": [

	  ],
	  "excludedItems": [
	    "200424254",
	    "200423578",
	    "200423595",
	    "200423618"
	  ],
	  "name": {
	    "200424254": "Active Cruise Control",
	    "200423578": "Luxury Line",
	    "200423595": "Modern Line",
	    "200425407": "M Sport Line",
	    "200423479": "Alpine White",
	    "200423618": "Sport Line"
	  },
	  "tmv": {
	    "nationalBasePrice": {
	      "baseMSRP": 36850,
	      "baseInvoice": 33900,
	      "deliveryCharges": null,
	      "tmv": 34879,
	      "usedTmvRetail": null,
	      "usedPrivateParty": null,
	      "usedTradeIn": null,
	      "estimateTmv": null,
	      "tmvRecommendedRating": null
	    },
	    "optionTMVPrices": {
	      "200423469": {
	        "baseMSRP": null,
	        "baseInvoice": null,
	        "deliveryCharges": null,
	        "tmv": 0,
	        "usedTmvRetail": null,
	        "usedPrivateParty": null,
	        "usedTradeIn": null,
	        "estimateTmv": null,
	        "tmvRecommendedRating": null
	      },
	      "200425407": {
	        "baseMSRP": 3850,
	        "baseInvoice": 3505,
	        "deliveryCharges": null,
	        "tmv": 3644,
	        "usedTmvRetail": null,
	        "usedPrivateParty": null,
	        "usedTradeIn": null,
	        "estimateTmv": null,
	        "tmvRecommendedRating": null
	      },
	      "200423479": {
	        "baseMSRP": null,
	        "baseInvoice": null,
	        "deliveryCharges": null,
	        "tmv": 0,
	        "usedTmvRetail": null,
	        "usedPrivateParty": null,
	        "usedTradeIn": null,
	        "estimateTmv": null,
	        "tmvRecommendedRating": null
	      }
	    },
	    "regionalAdjustment": {
	      "baseMSRP": null,
	      "baseInvoice": null,
	      "deliveryCharges": null,
	      "tmv": 360,
	      "usedTmvRetail": null,
	      "usedPrivateParty": null,
	      "usedTradeIn": null,
	      "estimateTmv": null,
	      "tmvRecommendedRating": null
	    },
	    "colorAdjustment": {
	      "baseMSRP": null,
	      "baseInvoice": null,
	      "deliveryCharges": null,
	      "tmv": 0,
	      "usedTmvRetail": null,
	      "usedPrivateParty": null,
	      "usedTradeIn": null,
	      "estimateTmv": null,
	      "tmvRecommendedRating": null
	    },
	    "destinationCharge": 925,
	    "regionalAdFee": null,
	    "totalWithOptions": {
	      "baseMSRP": 41625,
	      "baseInvoice": 38330,
	      "deliveryCharges": null,
	      "tmv": 39808,
	      "usedTmvRetail": null,
	      "usedPrivateParty": null,
	      "usedTradeIn": null,
	      "estimateTmv": null,
	      "tmvRecommendedRating": null
	    },
	    "incentivesAndRebates": 0,
	    "offerPrice": 39400,
	    "certifiedUsedPrice": null,
	    "conditionAdjustment": null,
	    "mileageAdjustment": null,
	    "predictedChange": null,
	    "predictedChangeIndicator": null,
	    "gasGuzzlerTax": 0,
	    "estimatedTmv": false
	  }
	}
	
### Sample Request 2

Same as request above but now trying to add the **Luxury Line** options (some of which are not to coexist with the selected option) to the mis. Notice how we use <code>optionid=</code> multiple times for every new ID we're passing.

#### URL

	https://api.edmunds.com/api/configurator/withOptions?zip=77001&styleid=200423469&fmt=json&optionid=200425407&optionid=200423479&selected=200423578&api_key={api key}

#### Response

	{
	  "zipCode": "77001",
	  "styleId": "200423469",
	  "colorId": null,
	  "currentOptions": [
	    "200425407",
	    "200423479"
	  ],
	  "selectedOption": "200423578",
	  "deselectedOption": null,
	  "furtherAdditions": [
	    "200423604"
	  ],
	  "furtherRemovals": [
	    "200425407"
	  ],
	  "requiredItems": [
	    "200423604"
	  ],
	  "includedItems": [
	    "200423596",
	    "200432247",
	    "200425583"
	  ],
	  "excludedItems": [
	    "200423537",
	    "200423488",
	    "200423595",
	    "200423536",
	    "200423502",
	    "200425407",
	    "200425385",
	    "200423492",
	    "200423486",
	    "200423618"
	  ],
	  "name": {
	    "200423537": "Venetian Beige Dakota",
	    "200423578": "Luxury Line",
	    "200423536": "Venetian Beige",
	    "200423502": "Dark Burl Walnut",
	    "200432247": "All-Season Tires",
	    "200423492": "Black w\/Red Highlight",
	    "200423486": "Black",
	    "200425583": "Highlight Trim Finishers Pearl Gloss Chrome",
	    "200423604": "Premium Package",
	    "200423596": "Moonroof",
	    "200423488": "Black Dakota",
	    "200423595": "Modern Line",
	    "200425407": "M Sport Line",
	    "200425385": "18\" Star-Spoke M Light Alloy Wheels",
	    "200423618": "Sport Line"
	  },
	  "tmv": {
	    "nationalBasePrice": {
	      "baseMSRP": 36850,
	      "baseInvoice": 33900,
	      "deliveryCharges": null,
	      "tmv": 34879,
	      "usedTmvRetail": null,
	      "usedPrivateParty": null,
	      "usedTradeIn": null,
	      "estimateTmv": null,
	      "tmvRecommendedRating": null
	    },
	    "optionTMVPrices": {
	      "200423469": {
	        "baseMSRP": null,
	        "baseInvoice": null,
	        "deliveryCharges": null,
	        "tmv": 0,
	        "usedTmvRetail": null,
	        "usedPrivateParty": null,
	        "usedTradeIn": null,
	        "estimateTmv": null,
	        "tmvRecommendedRating": null
	      },
	      "200423578": {
	        "baseMSRP": 2100,
	        "baseInvoice": 1910,
	        "deliveryCharges": null,
	        "tmv": 1988,
	        "usedTmvRetail": null,
	        "usedPrivateParty": null,
	        "usedTradeIn": null,
	        "estimateTmv": null,
	        "tmvRecommendedRating": null
	      },
	      "200423604": {
	        "baseMSRP": 3100,
	        "baseInvoice": 2820,
	        "deliveryCharges": null,
	        "tmv": 2934,
	        "usedTmvRetail": null,
	        "usedPrivateParty": null,
	        "usedTradeIn": null,
	        "estimateTmv": null,
	        "tmvRecommendedRating": null
	      },
	      "200423479": {
	        "baseMSRP": null,
	        "baseInvoice": null,
	        "deliveryCharges": null,
	        "tmv": 0,
	        "usedTmvRetail": null,
	        "usedPrivateParty": null,
	        "usedTradeIn": null,
	        "estimateTmv": null,
	        "tmvRecommendedRating": null
	      }
	    },
	    "regionalAdjustment": {
	      "baseMSRP": null,
	      "baseInvoice": null,
	      "deliveryCharges": null,
	      "tmv": 372,
	      "usedTmvRetail": null,
	      "usedPrivateParty": null,
	      "usedTradeIn": null,
	      "estimateTmv": null,
	      "tmvRecommendedRating": null
	    },
	    "colorAdjustment": {
	      "baseMSRP": null,
	      "baseInvoice": null,
	      "deliveryCharges": null,
	      "tmv": 0,
	      "usedTmvRetail": null,
	      "usedPrivateParty": null,
	      "usedTradeIn": null,
	      "estimateTmv": null,
	      "tmvRecommendedRating": null
	    },
	    "destinationCharge": 925,
	    "regionalAdFee": null,
	    "totalWithOptions": {
	      "baseMSRP": 42975,
	      "baseInvoice": 39555,
	      "deliveryCharges": null,
	      "tmv": 41098,
	      "usedTmvRetail": null,
	      "usedPrivateParty": null,
	      "usedTradeIn": null,
	      "estimateTmv": null,
	      "tmvRecommendedRating": null
	    },
	    "incentivesAndRebates": 0,
	    "offerPrice": 40600,
	    "certifiedUsedPrice": null,
	    "conditionAdjustment": null,
	    "mileageAdjustment": null,
	    "predictedChange": null,
	    "predictedChangeIndicator": null,
	    "gasGuzzlerTax": 0,
	    "estimatedTmv": false
	  }
	}