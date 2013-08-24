---
layout: api-documentation
title : 'Get Dealer Details'
title_active_left_menu: Details and Location
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Dealer Details'
spec: details_and_location
version: v1
api: dealer
dropdown-link: 'dealer'


level: 4
description_edpoint: 'Get Dealer Details'
title_md : Response format
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


| Property      				| Description                         						| Visibility    	|
|:------------------------------|:----------------------------------------------------------|:----------------- |
| dealerID				   		| The dealer ID. This is also the *Franchise* ID			| Edmunds, Partners |
| locationId    		    	| The dealer's location ID									| Edmunds, Partners |
| dealerName    		    	| The dealership name			 							| Edmunds, Partners |
| averageRating	    		   	| Average rating for this dealer	 						| Edmunds, Partners |
| title		    	    		| Title of the review										| Edmunds, Partners |
| reviewBody	    		   	| The consumer review										| Edmunds, Partners |
| consumerName	    		   	| The name of the consumer submitting the review			| Edmunds, Partners |
| date		    		  		| The date the review was submitted						 	| Edmunds, Partners |
| totalRating		    		| Total rating given by the consumer						| Edmunds, Partners |
| recommendedDealer	    	  	| Yes or No		 											| Edmunds, Partners |
| comments		    	    	| Any comments on the review by the dealership				| Edmunds, Partners |
