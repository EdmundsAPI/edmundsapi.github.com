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
dropdown-link: 'api/dealerreviews/v2/comments'


level: 4
description_edpoint: 'Submit comments for dealer review'
title_md : Response Format
number: 3

---


### Response format

	{
	 "id": {string},
	 "type": {string}
	}

| Property   | Description                     | Visibility                |
|:-----------|:--------------------------------|:--------------------------|
| id         | Dealer Review Comment ID        | Edmunds, Partners, public |
| type       | Dealer Review Comment Type      | Edmunds, Partners, public |
