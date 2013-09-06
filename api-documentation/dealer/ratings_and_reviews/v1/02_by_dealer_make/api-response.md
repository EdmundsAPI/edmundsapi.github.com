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
title_md : Response Format
number: 3

---


### Response format

	{
	  "salesReviews": [
	    {
			"dealerId": {integer},
			"locationId": {integer},
			"dealerName": {string},
	      	"averageRating": {integer},
		    "title": {string},
		    "reviewBody": {string},
		    "consumerName": {string},
		    "date": {date},
		    "totalRating": {integer},
		    "recommendedDealer": {boolean},
		     "comments": {array}
	    }
	  ],
	  "serviceReviews": [
		{
			"dealerId": {integer},
			"locationId": {integer},
			"dealerName": {string},
	      	"averageRating": {integer},
			"title": {string},
			"reviewBody": {string},
			"consumerName": {string},
			"date": {date},
			"totalRating": {integer},
			"recommendedDealer": {boolean},
			"comments": {array}
	    }
	  ]
	}


| Property      				| Description                         						| Visibility    			|
|:------------------------------|:----------------------------------------------------------|:--------------------------|
| dealerID				   		| The dealer ID. This is also the *Franchise* ID			| Edmunds, Partners, public |
| locationId    		    	| The dealer's location ID									| Edmunds, Partners, public |
| dealerName    		    	| The dealership name			 							| Edmunds, Partners, public |
| averageRating	    		   	| Average rating for this dealer	 						| Edmunds, Partners, public |
| title		    	    		| Title of the review										| Edmunds, Partners, public |
| reviewBody	    		   	| The consumer review										| Edmunds, Partners, public |
| consumerName	    		   	| The name of the consumer submitting the review			| Edmunds, Partners, public |
| date		    		  		| The date the review was submitted						 	| Edmunds, Partners, public |
| totalRating		    		| Total rating given by the consumer						| Edmunds, Partners, public |
| recommendedDealer	    	  	| Yes or No		 											| Edmunds, Partners, public |
| comments		    	    	| Any comments on the review by the dealership				| Edmunds, Partners, public |