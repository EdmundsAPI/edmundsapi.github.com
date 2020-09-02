---
layout: api-documentation
title : 'Get Car Consumer Ratings and Reviews by Car Style ID'
title_active_left_menu: 'Content Ratings and Reviews'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Car Consumer Ratings and Reviews by Car Style ID'
spec: content_ratings_and_reviews
version: v2
api: vehicle
dropdown-link: 'api/vehiclereviews/v2/styles/{styleId}'


level: 4
description_edpoint: 'Get Car Consumer Ratings and Reviews by Car Style ID'
title_md : Sample Request
number: 3

---

### Sample Request

Get the consumer ratings and reviews for the style ID **101403692**.

#### URL

	https://api.edmunds.com/api/vehiclereviews/v2/styles/101403692?fmt=json&api_key={api key}
	
#### Response

	{
	  "links": [
	    {
	      "rel": "next",
	      "href": "\/api\/vehiclereviews\/v2\/styles\/101403692?pagenum=2&pagesize=2"
	    },
	    {
	      "rel": "last",
	      "href": "\/api\/vehiclereviews\/v2\/styles\/101403692?pagenum=3&pagesize=2"
	    }
	  ],
	  "averageRating": "3.938",
	  "reviewsCount": 6,
	  "reviews": [
	    {
	      "id": "886938528",
	      "legacyId": "886938528",
	      "link": {
	        "rel": "_self",
	        "href": "\/api\/vehiclereviews\/v2\/886938528"
	      },
	      "author": {
	        "authorName": "mikes2012honda"
	      },
	      "created": 1353887371946,
	      "updated": 0,
	      "title": "Nice car ...",
	      "text": "...plagued with a high-speed front end shimmy. Our 2012 SE automatic runs and drives great at any speed except between 60-70mph (and above) ...the interstate cruising range. At 3500 miles our car went to the dealer to remedy a healthy 65mph shimmy but to no avail; it's going back again. Before you buy this car, check out the large number of\n'11 and '12 model year owners who are battling with Honda trying to get their cars to quit shimmying at freeway speeds. Check here on Edmunds ...there's a bunch ...and do an online search. I am hoping our car can be fixed. With the shimmy, the \"fun to drive\" quotient takes a big hit.",
	      "favoriteFeatures": "Fit and finish are top notch. Strong, flexible engine that pulls from down low and responsive 5-speed automatic transmission. Leather interior is well executed. Seats are firm and, except for the lumbar support, are comfortable. There is good visibility out of the sedan with no glaring blind spots.",
	      "suggestedImprovements": "Driver's seat lumbar support (on electric, 12-way adjustable seat the comes on the SE model) is *way* too low. The support pokes you right where your spine meets your butt.\n\nThe drivers-side dash curves inward and you *will* knock your knee cap on it getting into the car\n\nFix the shimmy. This is a *serious* problem that Honda refuses to address or repair. Based on this problem *I cannot recommend this car*. Which for a Honda sounds absurd but nonetheless countless Accords are shimmying down the highways while their owners are on a first name basis with their service department rep. Had I known about this problem I would have bought a Huyndai or Kia.\n\n",
	      "thumbsUpDownCounter": {
	        "thumbsDown": 0,
	        "thumbsUp": 1
	      },
	      "ratings": [
	        {
	          "type": "PERFORMANCE",
	          "value": 4
	        },
	        {
	          "type": "COMFORT",
	          "value": 4
	        },
	        {
	          "type": "FUEL_ECONOMY",
	          "value": 3
	        },
	        {
	          "type": "FUN_TO_DRIVE",
	          "value": 1
	        },
	        {
	          "type": "INTERIOR_DESIGN",
	          "value": 2
	        },
	        {
	          "type": "EXTERIOR_DESIGN",
	          "value": 4
	        },
	        {
	          "type": "BUILD_QUALITY",
	          "value": 5
	        },
	        {
	          "type": "RELIABILITY",
	          "value": 3
	        }
	      ],
	      "commentsCount": 0,
	      "averageRating": "3.25",
	      "styleId": "101403692"
	    },
	    {
	      "id": "1688721477",
	      "legacyId": "1688721477",
	      "link": {
	        "rel": "_self",
	        "href": "\/api\/vehiclereviews\/v2\/1688721477"
	      },
	      "author": {
	        "authorName": "trafficfdr"
	      },
	      "created": 1353835141361,
	      "updated": 0,
	      "title": "Not Understanding Other Reviews",
	      "text": "I am a Honda Lifer, I just traded in my '07 Accord lx 4cyl for a 12 Accord se 4 cyl, such a drastic improvement. I wasn't going to be priced gouged by the '13 model. I always figured you get a car with the bugs worked out over the newest toy. OK, the SE model has a power driver's seat, maybe the others cannot adjust the seat and it bothers them, no problem here or with the wife. Noise, no prob's either. Braking, same no complaints. I undetstand that previous years had them. Solid car all around. I was able to get this car for a bargain with the newer model on sale now. Grade \"A\" vehicle.",
	      "favoriteFeatures": "Solid driver's car. Handles great. I have had this through Hurricane \"Sandy\" and our first snow storm here in the Northeast, no problems driving in either conditions.",
	      "suggestedImprovements": "Improved gas mileage, and pricing the car as \"Free\". Thanks again Honda.",
	      "thumbsUpDownCounter": {
	        "thumbsDown": 1,
	        "thumbsUp": 2
	      },
	      "ratings": [
	        {
	          "type": "PERFORMANCE",
	          "value": 5
	        },
	        {
	          "type": "COMFORT",
	          "value": 4
	        },
	        {
	          "type": "FUEL_ECONOMY",
	          "value": 5
	        },
	        {
	          "type": "FUN_TO_DRIVE",
	          "value": 5
	        },
	        {
	          "type": "INTERIOR_DESIGN",
	          "value": 5
	        },
	        {
	          "type": "EXTERIOR_DESIGN",
	          "value": 5
	        },
	        {
	          "type": "BUILD_QUALITY",
	          "value": 5
	        },
	        {
	          "type": "RELIABILITY",
	          "value": 5
	        }
	      ],
	      "commentsCount": 0,
	      "averageRating": "4.875",
	      "styleId": "101403692"
	    }
	  ]
	}