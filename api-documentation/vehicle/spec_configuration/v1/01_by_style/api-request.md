---
layout: api-documentation
title : 'Get the default configuration for vehicle with style ID and Zip Code'
title_active_left_menu: "Spec: Configuration"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get the default configuration for vehicle with style ID and Zip Code'
spec: spec_configuration
version: v1
api: vehicle
dropdown-link: 'v1/api/configurator/default'


level: 4
description_edpoint: 'Get the default configuration for vehicle with style ID and Zip Code'
title_md : Sample Request
number: 4

---

### Sample Request

Get the default configuration for vehicle with style ID **200443450** in the area **90019**

#### URL

	https://api.edmunds.com/v1/api/configurator/default?zip=90019&styleid=200443450&fmt=json&api_key={api key}
	
#### Response
	
	{
	    "id": 200443450,
	    "longName": "1.8L 4-cyl. 5-speed Automatic w/Nav",
	    "pricingAttributeGroup": {
	        "id": 3,
	        "name": "PRICING",
	        "attributes": {
	            "MSRP": {
	                "id": 0,
	                "name": "MSRP",
	                "value": "23765"
	            },
	            "DEALER_INVOICE": {
	                "id": 0,
	                "name": "DEALER_INVOICE",
	                "value": "22077"
	            },
	            "USED_TMV_RETAIL": {
	                "id": 0,
	                "name": "USED_TMV_RETAIL",
	                "value": "22131"
	            },
	            "NEW_TMV_OFFER_PRICE_DISCOUNT": {
	                "id": 0,
	                "name": "NEW_TMV_OFFER_PRICE_DISCOUNT",
	                "value": ".02"
	            },
	            "DELIVERY_CHARGE": {
	                "id": 0,
	                "name": "DELIVERY_CHARGE",
	                "value": "790"
	            },
	            "USED_TMV_PRIVATE_PARTY": {
	                "id": 0,
	                "name": "USED_TMV_PRIVATE_PARTY",
	                "value": "21036"
	            },
	            "USED_TMV_TRADE_IN": {
	                "id": 0,
	                "name": "USED_TMV_TRADE_IN",
	                "value": "19585"
	            },
	            "NEW_TMV": {
	                "id": 0,
	                "name": "NEW_TMV",
	                "value": "22432.21"
	            }
	        }
	    },
	    "featuresMap": {
	        "200443482": {
	            "equipment": {},
	            "id": "200443482",
	            "modelYearId": 200442557,
	            "styleId": 0,
	            "name": "Gray Leather",
	            "attributeGroups": {
	                "MAIN": {
	                    "id": 1,
	                    "name": "MAIN",
	                    "attributes": {
	                        "NAME": {
	                            "id": 0,
	                            "name": "NAME",
	                            "value": "Gray Leather"
	                        },
	                        "WORKFLOWSTATUS": {
	                            "id": 0,
	                            "name": "WORKFLOWSTATUS",
	                            "value": "Published"
	                        }
	                    }
	                },
	                "LEGACY": {
	                    "id": 64,
	                    "name": "LEGACY",
	                    "attributes": {
	                        "COLOR_ID": {
	                            "id": 0,
	                            "name": "COLOR_ID",
	                            "value": "101384865"
	                        }
	                    }
	                },
	                "COLOR_CHIPS": {
	                    "id": 53,
	                    "name": "COLOR_CHIPS",
	                    "attributes": {
	                        "PRIMARY_G_CODE": {
	                            "id": 0,
	                            "name": "PRIMARY_G_CODE",
	                            "value": 143
	                        },
	                        "PRIMARY_R_CODE": {
	                            "id": 0,
	                            "name": "PRIMARY_R_CODE",
	                            "value": 134
	                        },
	                        "PRIMARY_B_CODE": {
	                            "id": 0,
	                            "name": "PRIMARY_B_CODE",
	                            "value": 142
	                        }
	                    }
	                },
	                "COLOR_TYPE": {
	                    "id": 55,
	                    "name": "COLOR_TYPE",
	                    "attributes": {
	                        "TMV_GENERIC_COLOR": {
	                            "id": 0,
	                            "name": "TMV_GENERIC_COLOR",
	                            "value": "Gray"
	                        },
	                        "COLOR_TYPE": {
	                            "id": 0,
	                            "name": "COLOR_TYPE",
	                            "value": "INTERIOR"
	                        }
	                    }
	                },
	                "FABRIC_TYPE": {
	                    "id": 54,
	                    "name": "FABRIC_TYPE",
	                    "attributes": {
	                        "FABRIC_TYPE_1": {
	                            "id": 0,
	                            "name": "FABRIC_TYPE_1",
	                            "value": "leather"
	                        }
	                    }
	                },
	                "COLOR_INFO": {
	                    "id": 66,
	                    "name": "COLOR_INFO",
	                    "attributes": {
	                        "COLOR_MANUFACTURER_CODE": {
	                            "id": 0,
	                            "name": "COLOR_MANUFACTURER_CODE",
	                            "value": "GR"
	                        },
	                        "OPTION_START_DATE": {
	                            "id": 0,
	                            "name": "OPTION_START_DATE",
	                            "value": "2012-11-29"
	                        },
	                        "MANUFACTURER_OPTION_NAME": {
	                            "id": 0,
	                            "name": "MANUFACTURER_OPTION_NAME",
	                            "value": "Gray"
	                        },
	                        "FLEET": {
	                            "id": 0,
	                            "name": "FLEET",
	                            "value": "consumer"
	                        },
	                        "OPTION_END_DATE": {
	                            "id": 0,
	                            "name": "OPTION_END_DATE",
	                            "value": "2099-09-09"
	                        }
	                    }
	                }
	            },
	            "equipmentClass": "COLOR",
	            "equipmentAvailability": "UNKNOWN",
	            "equipmentType": "color",
	            "startDate": "Thu Nov 29 00:00:00 PST 2012",
	            "endDate": "Wed Sep 09 00:00:00 PDT 2099"
	        },
	        ...
	    },
	    "furtherAdditions": [],
	    "furtherRemovals": [],
	    "requiredItems": [],
	    "includedItems": [],
	    "excludedItems": [],
	    "name": {},
	    "tmv": {
	        "nationalBasePrice": {
	            "baseMSRP": 23765.0,
	            "baseInvoice": 22077.0,
	            "deliveryCharges": null,
	            "tmv": 22266.0,
	            "usedTmvRetail": null,
	            "usedPrivateParty": null,
	            "usedTradeIn": null,
	            "estimateTmv": null,
	            "tmvRecommendedRating": null
	        },
	        "optionTMVPrices": {
	            "200443450": {
	                "baseMSRP": null,
	                "baseInvoice": null,
	                "deliveryCharges": null,
	                "tmv": 0.0,
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
	            "tmv": -73.0,
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
	            "tmv": 0.0,
	            "usedTmvRetail": null,
	            "usedPrivateParty": null,
	            "usedTradeIn": null,
	            "estimateTmv": null,
	            "tmvRecommendedRating": null
	        },
	        "destinationCharge": 790.0,
	        "regionalAdFee": 0.0,
	        "totalWithOptions": {
	            "baseMSRP": 24555.0,
	            "baseInvoice": 22867.0,
	            "deliveryCharges": null,
	            "tmv": 22983.0,
	            "usedTmvRetail": null,
	            "usedPrivateParty": null,
	            "usedTradeIn": null,
	            "estimateTmv": null,
	            "tmvRecommendedRating": null
	        },
	        "incentivesAndRebates": 0.0,
	        "offerPrice": 22500.0,
	        "certifiedUsedPrice": null,
	        "conditionAdjustment": null,
	        "mileageAdjustment": null,
	        "predictedChange": null,
	        "predictedChangeIndicator": null,
	        "gasGuzzlerTax": 0.0,
	        "estimatedTmv": false
	    }
	}