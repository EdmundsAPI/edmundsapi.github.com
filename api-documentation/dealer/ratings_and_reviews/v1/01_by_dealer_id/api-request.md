---
layout: api-documentation
title : 'Get Dealer Ratings and Reviews by Dealer ID'
title_active_left_menu: 'Ratings and Reviews'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Dealer Ratings and Reviews by Dealer ID'
spec: ratings_and_reviews
version: v1
api: dealer
dropdown-link: 'v1/api/drrrepository/getdrrbydealerid'


level: 4
description_edpoint: 'Get Dealer Ratings and Reviews by Dealer ID'
title_md : Sample Request
number: 4

---


### Sample Request

Get ratings and reviews for the dealership with ID **26811**

#### URL

	https://api.edmunds.com/v1/api/drrrepository/getdrrbydealerid?dealerid=26811&fmt=json&api_key={api key}
	
#### Response

	{
	  "dealerId": "26811",
	  "locationId": "946",
	  "dealerName": "Power Volvo Cerritos",
	  "dealerAddress": {
	    "street": "18303 Studebaker Rd",
	    "apartment": "",
	    "city": "Cerritos",
	    "stateCode": "CA",
	    "stateName": "California",
	    "county": "Los Angeles",
	    "country": "USA",
	    "zipcode": "90703",
	    "latitude": 33.865436,
	    "longitude": -118.099773
	  },
	  "dealerContactInfo": {
	    "dealer_website": "",
	    "email_address": "",
	    "phone_areacode": "562",
	    "phone_postfix": "1200",
	    "phone_prefix": "207",
	    "phone": "5622071200"
	  },
	  "salesReviews": [
	    {
	      "averageRating": 0,
	      "title": "Volvo of Cerritos sold me a damaged car.",
	      "reviewBody": "Power Volvo of Cerritos sold me a new 2007 Volvo S80 and did not disclose that they repainted the front fender. The paint color on the repainted fender does not match the other body panels. Six months after my purchase, Power Volvo of Cerritos still refuses to resolve the issue. In protest, I have exercised my First Amendment rights by launching a website [violative content deleted] to alert consumers on how they treat their customers. Sunit Kakkar, my salesman also made a racist comment against [violative content deleted]. In response to my website, Power Volvo of Cerritos retained attorney [violative content deleted].",
	      "consumerName": "oldsskl",
	      "date": "Jan 3, 2008 12:00:00 AM",
	      "totalRating": 1,
	      "recommendedDealer": "FALSE",
	      "comments": [

	      ]
	    }
	  ],
	  "serviceReviews": [

	  ]
	}