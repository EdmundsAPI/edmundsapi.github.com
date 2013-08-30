---
layout: api-documentation
title : 'Get Letter Grade Rating by Car Style ID'
title_active_left_menu: "Content: Letter Grade Rating"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Letter Grade Rating by Car Style ID'
spec: content_letter_grade
version: v1
api: vehicle
dropdown-link: 'api/vehicle/v2/grade/{style ID}'


level: 4
description_edpoint: 'Get Letter Grade Rating by Car Style ID'
title_md : Response format
number: 3

---

###Response format

#### JSON Response

	{
	    "make": {string},
	    "model": {string},
	    "year": {integer},
	    "styleId": {integer},
	    "style": {style},
	    "date": {date},
	    "grade": {string},
	    "summary": {style},
	    "ratings": [{
	        "title": {string},
	        "grade": {string},
	        "score": {float},
	        "summary": {string},
	        "subRatings": [{
	            "title": {style},
	            "grade": {string},
	            "score": {integer},
	            "summary": {style}
	        }
	    }]
	}

| Property      				| Description                         					| Visibility                |
|:------------------------------|:------------------------------------------------------|:------------------------- |
| make		    				| The car make name										| Edmunds, Partners, Public |
| model							| The car model name									| Edmunds, Partners, Public |
| year	  						| The car model year 									| Edmunds, Partners, Public |
| styleId		    			| The car style ID										| Edmunds, Partners, Public |
| style 						| The car style name									| Edmunds, Partners, Public |
| date			    			| The date of this review								| Edmunds, Partners, Public |
| grade			    			| The grade assigned by Edmunds's editorial team		| Edmunds, Partners, Public |
| summary					    | The review											| Edmunds, Partners, Public |
| ratings						| Score and summary for all categories and subcategories covered (see overview)	| Edmunds, Partners, Public |


