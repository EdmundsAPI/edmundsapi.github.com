---
layout: api-documentation
title : 'Get Dealer Ratings and Reviews by Dealer Make and Zipcode'
title_active_left_menu: 'Ratings and Reviews'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Dealer Ratings and Reviews by Dealer Make and Zipcode'
spec: ratings_and_reviews
version: v1
api: dealer
dropdown-link: 'v1/api/drrrepository/getdrrbyzipcodeandmake'


level: 4
description_edpoint: 'Get Dealer Ratings and Reviews by Dealer Make and Zipcode'
title_md : Sample Request
number: 4

---


### Sample Request

Get ratings and reviews for **lexus** dealership in the **90019** area

#### URL

	https://api.edmunds.com/v1/api/drrrepository/getdrrbyzipcodeandmake?zipcode=90019&make=lexus&fmt=json&api_key={api key}
	
#### Response

	{
	    "salesReviews": [{
	        "dealerId": "1104",
	        "locationId": "1104",
	        "dealerName": "Longo Lexus",
	        "averageRating": 4.0,
	        "title": "Most of Sales persons are excellent (from Don S.)",
	        "reviewBody": "We worked with Victor Z., a guy who truly works hard to please you.\nHe was very helpful and cooperative no matter what requests we made, and we made plenty while looking at different models and color options.\n We talked to another salesperson there that we felt was not very helpful and came back another day and got Victor Z.\nIf you have a problem, ask for Mr. M. the boss at Longo Lexus, he will be incredibly helpful (when buying another car a few years ago, we had a problem and he resolved it immediately to our satisfaction).\n ",
	        "consumerName": "donisland",
	        "date": "Aug 22, 2013 5:50:15 PM",
	        "totalRating": 5.0,
	        "recommendedDealer": "TRUE",
	        "comments": []
	    }],
	    "serviceReviews": [{
	        "dealerId": "1132",
	        "locationId": "1132",
	        "dealerName": "Crown Lexus",
	        "averageRating": 3.0,
	        "title": "Crown Lexus Rules",
	        "reviewBody": "I bought my 2013 Lexus RX 350 in January and have had nothing but excellent service.\nVery courteous technicians meet me and take care of all of my needs.\nThe lounge is very comfortable, everyone is very friendly.",
	        "consumerName": "larch46",
	        "date": "Aug 16, 2013 11:19:50 AM",
	        "totalRating": 5.0,
	        "recommendedDealer": "TRUE",
	        "comments": []
	    }]
	}