---
layout: api-documentation
title : 'Get Dealer Details and Location'
title_active_left_menu: Details and Location
title_parent: Api documentation

amount_version: 125
title-endpoint: 'Get Dealer Details and Location'
spec: details_and_location
version: v1
api: dealer
dropdown-link: 'v1/api/dealer'

level: 4
description_edpoint: 'Get Dealer Details and Location'
title_md : Response format
number: 3

---


### Response format

	{
	    "dealerHolder": [{
	        "id": {string},
	        "locationId": {integer},
	        "address": {object},
	        "name": {string},
	        "logicalName": {string},
	        "type": {string},
	        "make": {string},
	        "operations": {object},
	        "contactinfo": {object},
	        "publishDate": {date},
	        "active": {boolean},
	        "ppStatus": {string},
	        "syncPublishDate": {string}
	    }]
	}

| Property      				| Description                         						| Visibility    			|
|:------------------------------|:----------------------------------------------------------|:--------------------------|
| id					   		| The dealer ID. This is also the *Franchise* ID			| Edmunds, Partners, public |
| locationId    		    	| The dealer's location ID									| Edmunds, Partners, public |
| address	    		    	| The dealership address		 							| Edmunds, Partners, public |
| name		    		    	| The dealership name			 							| Edmunds, Partners, public |
| logicalName    		    	| The dealership logicalName	 							| Edmunds 					|
| type		    		    	| The dealership type			 							| Edmunds, Partners, public |
| make		    		    	| The car make that the dealership sells					| Edmunds, Partners, public |
| operations    		    	| The dealership operating hours							| Edmunds, Partners, public |
| contactinfo			     	| The dealership contact info						 		| Edmunds, Partners, public |
| publishDate		     		| The sales review for this dealership (see below)	 		| Edmunds					|
| active				     	| The dealership activity									| Edmunds					|
| ppStatus				     	| The dealership activity									| Edmunds					|
| syncPublishDate		     	| The dealership activity									| Edmunds					|




