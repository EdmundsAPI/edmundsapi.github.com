---
layout: api-documentation
title : 'Dealer Ratings and Reviews'
title_active_left_menu: 'Ratings and Reviews'
title_parent: Api documentation

amount_version: 2
spec: ratings_and_reviews
version: v1
api: dealer
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version
---

<div class="info-message">
	Get the dealership ratings and reviews that are collected from consumers through Edmunds.com's website, apps and tools.
</div>

### Endpoints

* [Get Dealer Ratings and Reviews by Dealer ID](/api-documentation/dealer/ratings_and_reviews/v1/01_by_dealer_id/api-description.html)

If you know the dealership ID you would like to get this content for, you should use the first endpoint. Otherwise, the second endpoint would be the best and only option for you to get this content.

Also, You are able to submit a new dealer review.

* [Dealer Review Submission](/api-documentation/dealer/ratings_and_reviews/v2/01_submit_dealer_review/api-description.html)

### Special Requirements

Edmunds.com’s Visitor Dealer Ratings and Reviews are provided to Edmunds.com by its visitors, and are the proprietary materials of Edmunds.com, Inc. by virtue of Edmunds’ agreements with its visitors.

Accordingly, we have special requirements for the display of Visitor Dealer Ratings and Reviews. 

1) The display of Visitor Dealer Ratings and Reviews (or either of them) must clearly and prominently state that the Ratings and Reviews are from visitors to [www.edmunds.com](http://www.edmunds.com/), and may not state or imply that they constitute the opinion of Edmunds.com. For example:

*	"Visitor reviews of this dealer posted on Edmunds.com:"

	OR:

*	"Edmunds.com visitor dealer reviews:"

	OR:

*	"Average dealer rating from visitors to Edmunds.com:"

	OR:

*	"Edmunds.com average visitor rating for this dealer:"

2) If not all of the Visitor Dealer Reviews for a particular vehicle are displayed, you must make clear that you are displaying only selected Visitor Dealer Reviews.  For example:

*	"Selected visitor reviews of this dealer posted on Edmunds.com:"

	OR:

*	"Selected Edmunds.com visitor dealer reviews:"

3) No Visitor Dealer Review that is displayed may be edited or abridged.

4) Each Visitor Dealer Review (or comment on a review) must include the username of the visitor who submitted it and the published date (as it is returned by the API).

5) Each Visitor Dealer Review must include all comments when available.

6) You must be include the following legal notice:

*Edmunds.com Visitor Dealer Ratings and Reviews are the property of Edmunds.com, and may not be reproduced or distributed without the consent of Edmunds.com. Edmunds® is a trademark of Edmunds.com, Inc. Edmunds.com, Inc. is not affiliated with this website or app.*

