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
title_md : Sample Request
number: 4

---

### Sample Request 1

Get the expert content for mercedes-benz amg gt 2020.

#### URL

    https://api.edmunds.com//api/editorial/v3/makes/mercedes-benz/models/amg-gt/years/2020/expertcontent?api_key={api key}

#### Response

    {
      "vehicleReview": {
        "summary": "<p>When  it comes to two-seat sports cars, few make an impression like the 2020  Mercedes-Benz AMG GT. Sleek yet aggressive, the AMG GT looks part fighter jet  and part classic grand-touring car. The military hardware comes in the form of  a turbocharged V8 fitted underneath GT's long hood. Mercedes offers it in three  different states of tune, with 577 horsepower at its most potent. </p>\n<p>That  won't necessarily raise a whole lot of eyebrows considering you can get more  power from a Mustang or Camaro these days, but this engine has gobs of  high-revving V8 personality. Plus, in handling, the GT is easily on par with  any of today's top sports cars from Audi, Jaguar and Porsche. </p>\n<p>In  the grand-touring vein, you'll find an interior filled with premium materials  and the latest features you expect from Mercedes. This year's car also features  a few updates such as a standard 12-inch driver display, a new steering wheel  design, and an updated infotainment system with Apple CarPlay and Android Auto  smartphone integration. </p>\n<p>It's  true that the AMG GT doesn't live up to a \"grand touring\" moniker as  well as you might hope. The seats aren't very comfortable, for instance. And  when you do take a long trip, pack lightly: There's a comically small amount of  trunk space. In general, a Porsche 911 is going to be the more accommodating  sports car. But it's also fair to say the 911 isn't as evocative as it used to  be either. The GT delivers more memorable performance and style with just the  right amount of Germanic order. </p>",
        "overallRating": 8.2
      },
      "scorecard": {
        "overall": 8.2,
        "driving": 8.5,
        "utility": 7.0,
        "technology": 8.0,
        "comfort": 8.5,
        "interior": 8.0
      },
      "youTubeVideo": {
        "embedCode": "<iframe allowfullscreen=\"1\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" title=\"YouTube video player\" src=\"https://www.youtube.com/embed/IouK54e4QiY?rel=0\" width=\"100%\" height=\"100%\" frameborder=\"0\"></iframe>"
      },
      "safety": {
        "features": [
          {
            "title": "Blind-Spot Assist",
            "description": "Description: Alerts the driver to vehicles in the AMG GT's blind spots."
          },
          {
            "title": "Lane Keeping Assist",
            "description": "Vibrates the steering wheel to warn the driver if the vehicle senses it's drifting out of its lane. "
          },
          {
            "title": "Parktronic",
            "description": "Sounds an alert if the AMG GT is approaching an object in front of or behind the car."
          }
        ]
      },
      "featuresSpecs": {
        "mostPopularStyleName": "63 4dr Sedan AWD (4.0L 8cyl Turbo 9A)",
        "manufacturersSuggestedRetailPrice": "140250",
        "milesPerGallonCityAndHighway": "15/20 mpg",
        "seats": 4,
        "transmission": "9-speed shiftable automatic",
        "horsepower": "577 hp @ 5500 rpm"
      },
      "edmundsBackLink": "https://www.edmunds.com/mercedes-benz/amg-gt/"
    }
    