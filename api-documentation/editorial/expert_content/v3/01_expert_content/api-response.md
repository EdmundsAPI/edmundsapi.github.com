---
layout: api-documentation
title : 'Get Expert content for make/model/year'
title_active_left_menu: 'Expert Content'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Expert content for make/model/year'
spec: expert_content
version: v3
api: editorial
dropdown-link: 'api/editorial/v3/makes/{make}/models/{models}/years/{year}/expertcontent'


level: 4
description_edpoint: 'Get Expert content for make/model/year'
title_md : Response format
number: 3

---


### Response format

    {
      "vehicleReview": {
        "summary": {string},
        "overallRating": {double}
      },
      "scorecard": {
        "overall": {double},
        "driving": {double},
        "utility": {double},
        "technology": {double},
        "comfort": {double},
        "interior": {double}
      },
      "youTubeVideo": {
        "embedCode": {iframe html block as string}
      },
      "safety": {
        "ratings": {
          "nhtsaRatings": {
            "overall": {integer},
            "frontalBarrierCrash": {
              "overall": {integer},
              "driver": {integer},
              "passenger": {integer}
            },
            "sideCrash": {
              "overall": {integer}
            },
            "sideBarrierCrash": {
              "overall": {integer},
              "driver": {integer},
              "passenger": {integer},
              "sidePoleRating": {integer}
            },
            "sideBarrierAndPoleCrash": {
              "frontSeat": {integer},
              "backSeat": {integer}
            },
            "rollover": {
              "rollover": {integer},
              "dynamicTestResult": {string},
              "riskOfRolloverPercent": {double}
            }
          },
          "iihsRatings": {
            "sideImpact": {string},
            "roofStrength": {string},
            "rearHeadProtectionAndHeadRestraint": {string},
            "smallOverlapFront": {string},
            "moderateOverlapFront": {string}
          },
          "jdPowerRatings": {
            "year": {integer},
            "overallQuality": {string},
            "powerTrainMechanicalQuality": {string},
            "overallDesignQuality": {string},
            "featuresAndAccessDesignQuality": {string},
            "powerTrainDesignQuality": {string},
            "overallMechanicalQuality": {string},
            "bodyAndInteriorMechanicalQuality": {string},
            "featuresAndAccessMechanicalQuality": {string},
            "bodyAndInteriorDesignQuality": {string}
          }
        },
        "features": [
          {
            "title": {string},
            "description": {string}
          }
        ]
      },
      "featuresSpecs": {
        "mostPopularStyleName": {string},
        "manufacturersSuggestedRetailPrice": {string},
        "milesPerGallonCityAndHighway": {string},
        "seats": {integer},
        "transmission": {string},
        "horsepower": {string}
      },
      "edmundsBackLink": {string}
    }

| Property                      | Description                                               | Visibility                |
|:------------------------------|:----------------------------------------------------------|:--------------------------|
| vehicleReview                 | Vehicle review summary and overall rating                 | Edmunds, Partners, public |
| scorecard                     | Ratings for some vehicle                                  | Edmunds, Partners, public |
| youTubeVideo                  | Youtube iframe html tag to put a video in some page       | Edmunds, Partners, public |
| safety                        | Safety features and ratings by model year                 | Edmunds, Partners, public |
| featuresSpecs                 | Vehicle specifications                                    | Edmunds, Partners, public |
| edmundsBackLink               | Edmunds back link                                         | Edmunds, Partners, public |
