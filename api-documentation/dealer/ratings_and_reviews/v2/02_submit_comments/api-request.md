---
layout: api-documentation
title : 'Submit comments for dealer review'
title_active_left_menu: 'Ratings and Reviews'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Submit comments for dealer review'
spec: ratings_and_reviews
version: v2
api: dealer
dropdown-link: 'v1/api/drrrepository/v2/comments'


level: 4
description_edpoint: 'Submit comments for dealer review'
title_md : Sample Request
number: 4

---


### Sample Request #1

Submit Dealer Review Comment for `dealerReviewId` **111111111**

#### URL

	POST https://api.edmunds.com/v1/api/drrrepository/v2/comments?api_key={api key}
	
#### Request Body

	{
	 "parentId": 111111111,
	 "text": "testText",
	 "authorName": "testName",
	 "email": "test@email.com",
	 "dealerComment": false,
	 "created": 11111111111,
	 "ipAddress": "111.11.11.11"
	}

#### Response

	{
	 "id": "111111111",
	 "type": "DRR_COMMENT",
	 "location": "location"
	}