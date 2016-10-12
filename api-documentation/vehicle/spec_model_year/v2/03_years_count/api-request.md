---
layout: api-documentation
title : 'Get Total Count of Car Model Years'
title_active_left_menu: 'Spec Model/Year'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Total Count of Car Model Years'
spec: spec_model_year
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/{make}/{model}/years/count'


level: 4
description_edpoint: 'Get Total Count of Car Model Years'
title_md : Sample Request
number: 4
---

### Sample Request 1

Get the total number of **new** model years for the **Acura MDX**.

#### URL

	http://api.edmunds.com/api/vehicle/v2/acura/mdx/years/count?fmt=json&state=new&api_key={api key}
	
#### Response

	{
		"yearsCount": 2
	}
	
### Sample Request 2

Get the total number of model years and the breakdown of their style count for **Acura MDX**

#### URL

	http://api.edmunds.com/api/vehicle/v2/acura/mdx/years/count?fmt=json&view=full&api_key={api key}

#### Response

	{
	  "yearsCount": 14,
	  "years": [
	    {
	      "year": 2014,
	      "stylesCount": 8,
	      "id": 200465929
	    },
	    {
	      "year": 2004,
	      "stylesCount": 5,
	      "id": 100503653
	    },
	    {
	      "year": 2007,
	      "stylesCount": 5,
	      "id": 100507584
	    },
	    {
	      "year": 2008,
	      "stylesCount": 7,
	      "id": 100524172
	    },
	    {
	      "year": 2003,
	      "stylesCount": 5,
	      "id": 100502711
	    },
	    {
	      "year": 2002,
	      "stylesCount": 4,
	      "id": 100000530
	    },
	    {
	      "year": 2010,
	      "stylesCount": 5,
	      "id": 100530869
	    },
	    {
	      "year": 2005,
	      "stylesCount": 5,
	      "id": 100504946
	    },
	    {
	      "year": 2012,
	      "stylesCount": 5,
	      "id": 100538329
	    },
	    {
	      "year": 2006,
	      "stylesCount": 5,
	      "id": 100506940
	    },
	    {
	      "year": 2001,
	      "stylesCount": 4,
	      "id": 100000009
	    },
	    {
	      "year": 2009,
	      "stylesCount": 5,
	      "id": 100525749
	    },
	    {
	      "year": 2013,
	      "stylesCount": 5,
	      "id": 200434553
	    },
	    {
	      "year": 2011,
	      "stylesCount": 5,
	      "id": 100533210
	    }
	  ]
	}

