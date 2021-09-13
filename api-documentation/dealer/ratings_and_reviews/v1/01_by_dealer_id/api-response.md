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
title_md : Response Format
number: 3

---


### Response format

	{
	  "dealerId": {integer},
	  "locationId": {integer},
	  "dealerName": {string},
	  "dealerAddress": {
	    "street": {string},
	    "apartment": {string},
	    "city": {string},
	    "stateCode": {string},
	    "stateName": {string},
	    "county": {string},
	    "country": {string},
	    "zipcode": {integer},
	    "latitude": {float},
	    "longitude": {float}
	  },
	  "dealerContactInfo": {
	    "dealer_website": {URI},
	    "email_address": {email},
	    "phone_areacode": {integer},
	    "phone_postfix": {integer},
	    "phone_prefix": {integer},
	    "phone": {integer}
	  },
	  "salesReviews": [
	    {
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
| dealerAddress	    		   	| The dealership Address									| Edmunds, Partners, public |
| dealerContactInfo		     	| The dealership contact info						 		| Edmunds, Partners, public |
| salesReviews		     		| The sales review for this dealership (see below)	 		| Edmunds, Partners, public |
| serviceReviews		     	| The service review for this dealership (see below)		| Edmunds, Partners, public |


#### Review Properties

| Property      				| Description                         						| Visibility    			|
|:------------------------------|:----------------------------------------------------------|:--------------------------|
| averageRating	    		   	| Average rating for this dealer	 						| Edmunds, Partners, public |
| title		    	    		| Title of the review										| Edmunds, Partners, public |
| reviewBody	    		   	| The consumer review										| Edmunds, Partners, public |
| consumerName	    		   	| The name of the consumer submitting the review			| Edmunds, Partners, public |
| date		    		  		| The date the review was submitted						 	| Edmunds, Partners, public |
| totalRating		    		| Total rating given by the consumer						| Edmunds, Partners, public |
| recommendedDealer	    	  	| Yes or No		 											| Edmunds, Partners, public |
| comments		    	    	| Any comments on the review by the dealership				| Edmunds, Partners, public |
