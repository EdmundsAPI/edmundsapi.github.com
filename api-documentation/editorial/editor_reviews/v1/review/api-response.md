---
layout: api-documentation
title : 'Get Edmunds Editor Review by Car Make/Model/Year'
title_active_left_menu: 'Editor Reviews'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Edmunds Editor Review by Car Make/Model/Year'
spec: editor_reviews
version: v1
api: editorial
dropdown-link: 'v1/content/editorreviews'


level: 4
description_edpoint: 'Get Edmunds Editor Review by Car Make/Model/Year'
title_md : Response format
number: 3

---


### Response format

	{
        "editorial": {
            "con": {string},
            "body": {string},
            "interior": {string},
            "legacy-id": {integer},
            "metaKeywords": {string},
            "metaDescription": {string},
            "driving": {string},
            "whatsNew": {string},
            "videoReview": {url},
            "powertrain": {string},
            "fvEdmundsSays": {string},
            "safety": {string},
            "pro": {string},
            "edmundsSays": {string},
            "introduction": {string},
            "review": {string}
        }
    }

| Property      				| Description                         						| Visibility    			|
|:------------------------------|:----------------------------------------------------------|:--------------------------|
| con					   		| Covering what's not jiving with this car         			| Edmunds, Partners, public |
| body            		    	| The full review       									| Edmunds, Partners, public |
| interior	    		    	| Review of the car's interior	 							| Edmunds, Partners, public |
| legacy-id	    		    	| Review ID                 	 							| Edmunds, Partners, public |
| metaKeywords    		    	| Review keywords           	 							| Edmunds, Partners, public	|
| metaDescription 		    	| Review description			 							| Edmunds, Partners, public |
| driving	    		    	| Review of the car's driving and handling					| Edmunds, Partners, public |
| whatsNew       		    	| Covering what's new in this model							| Edmunds, Partners, public |
| videoReview			     	| Link to the video review if available				 		| Edmunds, Partners, public |
| powertrain		     		| The sales review for this dealership (see below)	 		| Edmunds, Partners, public	|
| fvEdmundsSays			     	| Link to Edmunds Says video if available					| Edmunds, Partners, public	|
| safety				     	| Review of the car safety									| Edmunds, Partners, public	|
| pro           		     	| Covering what's really going for this car					| Edmunds, Partners, public	|
| edmundsSays     		     	| Edmunds.com's conclusion									| Edmunds, Partners, public	|
| introduction     		     	| Review introduction   									| Edmunds, Partners, public	|
| review           		     	| Review                									| Edmunds, Partners, public	|




