---
layout: api-documentation
title : 'Submit dealer review'
title_active_left_menu: 'Ratings and Reviews'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Submit dealer review'
spec: ratings_and_reviews
version: v2
api: dealer
dropdown-link: 'v1/api/drrrepository/v2'


level: 4
description_edpoint: 'Submit dealer review'
title_md : Sample Request
number: 4

---


### Sample Request #1

Submit Sales Review with dealer id **838870**

#### URL

	POST https://api.edmunds.com/v1/api/drrrepository/v2?api_key={api key}
	
#### Request Body

	{
	 "dealerId": 838870,
	 "stateCode": "AK",
	 "publishingSource": "EDMUNDS_REST_API",
	 "title": "test",
	 "text": "test",
	 "authorName": "John",
	 "email": "John@edmunds.com",
	 "overallRating": "5",
	 "reviewType": "sales",
	 "dealerRecommended": true,
	 "carBought": true,
	 "ipAddress": "111.11.11.11"
	}

#### Response

	{
	 "id": "111111111",
	 "type": "sales",
	 "location": "location"
	}

---

### Sample Request #2

Submit Service Review with dealer id **838870**

#### URL

	POST https://api.edmunds.com/v1/api/drrrepository/v2?api_key={api key}

#### Request Body

	{
	 "dealerId": 838870,
	 "stateCode": "AK",
	 "publishingSource": "EDMUNDS_REST_API",
	 "authorOrganization": "Edmunds.com",
	 "emailReviewActivation": true,
	 "title": "test",
	 "text": "test",
	 "authorName": "Uladzislau",
	 "email": "someemail@edmunds.com",
	 "overallRating": "5",
	 "reviewType": "service",
	 "dealerRecommended": true,
	 "workQualitySatisfied": "YES",
	 "workCompleteOnTime": "YES",
	 "priceOfServiceFair": "YES",
	 "workQuoteProvided": "YES",
	 "allCommitmentsMade": "YES",
	 "ipAddress": "111.11.11.11"
	}

#### Response

	{
	 "id": "111111111",
	 "type": "service",
	 "location": "location"
	}
