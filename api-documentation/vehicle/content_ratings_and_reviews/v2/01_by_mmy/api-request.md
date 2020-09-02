---
layout: api-documentation
title : 'Get Car Consumer Ratings and Reviews by Car Make/Model/Year'
title_active_left_menu: 'Content Ratings and Reviews'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Car Consumer Ratings and Reviews by Car Make/Model/Year'
spec: content_ratings_and_reviews
version: v2
api: vehicle
dropdown-link: 'api/vehiclereviews/v2/{make}/{model}/{year}'


level: 4
description_edpoint: 'Get Car Consumer Ratings and Reviews by Car Make/Model/Year'
title_md : Sample Request
number: 3

---

### Sample Request

Get the consumer ratings and reviews for the **2012 Honda Accord**.

#### URL

	https://api.edmunds.com/api/vehiclereviews/v2/honda/accord/2012?fmt=json&api_key={api key}
	
#### Response

	{
	  "links": [
	    {
	      "rel": "next",
	      "href": "\/api\/vehiclereviews\/v2\/honda\/accord\/2012?pagenum=2&pagesize=10"
	    },
	    {
	      "rel": "last",
	      "href": "\/api\/vehiclereviews\/v2\/honda\/accord\/2012?pagenum=4&pagesize=10"
	    }
	  ],
	  "averageRating": "3.909",
	  "reviewsCount": 40,
	  "reviews": [
	    {
	      "id": "204192395",
	      "legacyId": "204192395",
	      "link": {
	        "rel": "_self",
	        "href": "\/api\/vehiclereviews\/v2\/204192395"
	      },
	      "author": {
	        "authorName": "devilsdefence4"
	      },
	      "created": 1372129509219,
	      "updated": 0,
	      "title": "Final Honda Car Purchase",
	      "text": "After owning two previous Accords I can say this will be my last. Having been very satisfied with a '98 sedan 5 speed and an '05 coupe 6-speed I can honestly say I'm very disappointed with this '12 6-speed. My expectations of a 6 cyl. 6 speed \"sports\" car are not even close to aligning with this vehicle, the only performance upgrade is the motor and gearing, which result in a 6 mpg loss with comparable driving. If you're not quite as concerned in performance and decent gas mileage this car is comfortable for long road trips and has a fairly large backseat for a coupe. Also an excellent looking car in my opinion if Honda had oriented it more towards its Prelude roots I would be very pleased.",
	      "favoriteFeatures": "Exterior design, engine, navigation, after being so pleased with a 7th gen this list has fallen short.",
	      "suggestedImprovements": "Suspension, Brakes, LSD, trunk seems smaller than my '05, not quite sure why such a big back seat is in a coupe. Wish Honda would drop the \"cookie cutter\" routine and get back to a sports car. I could go without alot of the amenities in this car for improved handling and stopping power. Gauge numbers are smaller than previous generations. Would appreciate a true sports car with Honda's reliability again but don't expect to see it anytime soon. 7 years ago this vehicle would have been more than sufficient as the previous model was in my opinion, however today I feel the bar has been raised and this vehicle has really only been adjusted to accompany a small portion of 6 speed buyers.",
	      "thumbsUpDownCounter": {
	        "thumbsDown": 0,
	        "thumbsUp": 0
	      },
	      "ratings": [
	        {
	          "type": "PERFORMANCE",
	          "value": 3
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
	          "value": 3
	        },
	        {
	          "type": "INTERIOR_DESIGN",
	          "value": 3
	        },
	        {
	          "type": "EXTERIOR_DESIGN",
	          "value": 5
	        },
	        {
	          "type": "BUILD_QUALITY",
	          "value": 4
	        },
	        {
	          "type": "RELIABILITY",
	          "value": 5
	        }
	      ],
	      "commentsCount": 0,
	      "averageRating": "3.75",
	      "styleId": "101403708"
	    },
	    {
	      "id": "801389745",
	      "legacyId": "801389745",
	      "link": {
	        "rel": "_self",
	        "href": "\/api\/vehiclereviews\/v2\/801389745"
	      },
	      "author": {
	        "authorName": "cmk921"
	      },
	      "created": 1353899883045,
	      "updated": 0,
	      "title": "Very close to the perfect car",
	      "text": "I had a 2009 Accord EX-L 5M sedan that I used for work and a 2006 Corvette convertible (6M) that I used for fun.\nAs often happens in life, circumstances dictated that it would be wise to have one car to do everything.\n(Divorces suck.)\nHow to combine a work car and a fun car into a fun work car?\nI need room to haul large items for work, a backseat that 3 kids can inhabit, bulletproof reliability, decent bad weather traction (I live in Cleveland) and enough of a fun factor to keep me entertained - and not miss a Corvette.\nAlso, a manual transmission was a non-negotiable must-have.\nAn upscale brand could also be unwise for business.\nSo I found a car that really does do everything well.",
	      "favoriteFeatures": "The 3.5L is a truly great engine, combining low end torque and a willingness to rev that is fairly rare.\nIt sounds great, too - thanks, VTEC engineers.\nThe medium-throw shifter is a joy to use, and the clutch becomes very user friendly once you get used to it's unexpectedly light effort.\nThe steering is very good, if shy of great.\nThe car can certainly get up and move when you ask it to.\n\nThe exterior styling is vaguely Italian in a FWD sort of way; the lines are generally very pleasing to the eye.\n\nThe audio system is much better than I expected, and the iPod integration was a pleasant surprise.\n\nThe cargo and passenger space borders on the unbelievable in a mid-sized coupe.\n",
	      "suggestedImprovements": "The brakes are about average, and certainly not special.\n\nSome of the interior carpeting cuts don't quite match up correctly.\n\nFWD brings it's own demerits.\nTorque steer is present, and the car could really use a LSD.\n\nRoad noise is always present in classic Honda fashion.\n\nMy overall MPG is just ok, around 23.5 with a lot of highway miles.\n\nI like digital speedometers, and there's no digital speedometer.\n\nThe instrument display is a little bland, some blue and orange lights could have been stolen from the Acura bin.\n\nI'd like to damn the OE Michelins with faint praise; better rubber would turn this car into a top notch FWD sports coupe.\nThat's why God invented the Tire Rack, I guess.",
	      "thumbsUpDownCounter": {
	        "thumbsDown": 6,
	        "thumbsUp": 6
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
	      "commentsCount": 1,
	      "averageRating": "4.75",
	      "styleId": "101403708"
	    },
	    ...
	    {
	      "id": "1725007134",
	      "legacyId": "1725007134",
	      "link": {
	        "rel": "_self",
	        "href": "\/api\/vehiclereviews\/v2\/1725007134"
	      },
	      "author": {
	        "authorName": "zintage"
	      },
	      "created": 1347734419938,
	      "updated": 0,
	      "title": "Breaking noise when coming from a complete stop at stop lights",
	      "text": "It appears that in most of these 1012 models there is a break noise that becomes increasing loud when the weather temperatures increase.\n\nThis was rather frustrating because I bought this car in the winter of last year and as it became summer the noise became prominent.\n\nBefore you purchase this car please test drive it during hot weather and let go of the break after coming to a complete stop.\nIt will crunch and grind as if it were a car with 500+ miles on it.\n\nMy family owns 5 honda accords from previous years and none of them make this noise.\nThe dealer indicates that it's the pads shifting, but if that were the case why does it change with the weather and only in this model.",
	      "favoriteFeatures": "I do enjoy the extended radio attachments, but that comes with most cars at this time.",
	      "suggestedImprovements": "Please fix the upper control arm noise (if that's what it is) and ensure there is no crunching noise when rolling from a stop.\nIt's scaring my passengers and also making the drive very unpleasant in stop and go traffic.\n\nAlso, the head rests are not made for shorter people.\nMy parents have removed them from their Honda Van.",
	      "thumbsUpDownCounter": {
	        "thumbsDown": 2,
	        "thumbsUp": 0
	      },
	      "ratings": [
	        {
	          "type": "PERFORMANCE",
	          "value": 3
	        },
	        {
	          "type": "COMFORT",
	          "value": 3
	        },
	        {
	          "type": "FUEL_ECONOMY",
	          "value": 2
	        },
	        {
	          "type": "FUN_TO_DRIVE",
	          "value": 2
	        },
	        {
	          "type": "INTERIOR_DESIGN",
	          "value": 4
	        },
	        {
	          "type": "EXTERIOR_DESIGN",
	          "value": 4
	        },
	        {
	          "type": "BUILD_QUALITY",
	          "value": 2
	        },
	        {
	          "type": "RELIABILITY",
	          "value": 3
	        }
	      ],
	      "commentsCount": 0,
	      "averageRating": "2.875",
	      "styleId": "101403690"
	    }
	  ]
	}