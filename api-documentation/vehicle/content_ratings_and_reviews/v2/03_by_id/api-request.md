---
layout: api-documentation
title : 'Get Car Consumer Ratings and Reviews by Review ID'
title_active_left_menu: 'Content Ratings and Reviews'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Car Consumer Ratings and Reviews by Review ID'
spec: content_ratings_and_reviews
version: v2
api: vehicle
dropdown-link: 'api/vehiclereviews/v2/{review ID}'


level: 4
description_edpoint: 'Get Car Consumer Ratings and Reviews by Review ID'
title_md : Sample Request
number: 3

---

### Sample Request

Get consumer rating and review with ID **204192395**.

#### URL

	https://api.edmunds.com/api/vehiclereviews/v2/204192395?fmt=json&api_key={api key}
	
#### Response

	{
	  "id": "204192395",
	  "legacyId": "204192395",
	  "make": "honda",
	  "model": "accord",
	  "year": "2012",
	  "styleId": "101403708",
	  "title": "Final Honda Car Purchase",
	  "text": "After owning two previous Accords I can say this will be my last. Having been very satisfied with a '98 sedan 5 speed and an '05 coupe 6-speed I can honestly say I'm very disappointed with this '12 6-speed. My expectations of a 6 cyl. 6 speed \"sports\" car are not even close to aligning with this vehicle, the only performance upgrade is the motor and gearing, which result in a 6 mpg loss with comparable driving. If you're not quite as concerned in performance and decent gas mileage this car is comfortable for long road trips and has a fairly large backseat for a coupe. Also an excellent looking car in my opinion if Honda had oriented it more towards its Prelude roots I would be very pleased.",
	  "updated": 0,
	  "submodels": [
	    200410623
	  ],
	  "created": 1372129509219,
	  "favoriteFeatures": "Exterior design, engine, navigation, after being so pleased with a 7th gen this list has fallen short.",
	  "suggestedImprovements": "Suspension, Brakes, LSD, trunk seems smaller than my '05, not quite sure why such a big back seat is in a coupe. Wish Honda would drop the \"cookie cutter\" routine and get back to a sports car. I could go without alot of the amenities in this car for improved handling and stopping power. Gauge numbers are smaller than previous generations. Would appreciate a true sports car with Honda's reliability again but don't expect to see it anytime soon. 7 years ago this vehicle would have been more than sufficient as the previous model was in my opinion, however today I feel the bar has been raised and this vehicle has really only been adjusted to accompany a small portion of 6 speed buyers.",
	  "author": {
	    "authorName": "devilsdefence4"
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
	      "type": "REALIABILITY",
	      "value": 5
	    }
	  ],
	  "comments": [

	  ],
	  "thumbsUpDownCounter": {
	    "thumbsDown": 0,
	    "thumbsUp": 0
	  },
	  "moderationStatus": "STATUS_PASSED"
	}