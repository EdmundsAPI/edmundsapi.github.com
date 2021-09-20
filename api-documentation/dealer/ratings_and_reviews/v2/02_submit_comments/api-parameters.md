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
title_md : Parameters
number: 2

---

### Request body structure for Dealer Review Comment

| Parameter          | Description                                               | Possible Values                                        | Entered By       | Default Value | Required |
|:-------------------|:----------------------------------------------------------|:-------------------------------------------------------|:-----------------|:------------- |:-------- |
| parentId           | Dealer Review Id                                          |                                                        | Partner Entered  |               | Yes      |
| text               | Body of the review                                        | Free text (limit 7500 characters)                      | Reviewer Entered |               | Yes      |
| authorName         | Name of the reviewer                                      | Free text (limit 30 characters, “@” sign prohibited)   | Reviewer Entered |               | Yes      |
| email              | Email of the reviewer                                     | Free text (“@” sign required) (email of the reviewer ) | Reviewer Entered |               | Yes      |
| dealerComment      | Is it dealer comment?                                     | true/false                                             | Partner Entered  |               | Yes      |
| created            | Created Date                                              |                                                        | Partner Entered  |               | No       |
| ipAddress          | Your Organization IP. ipAddress should be a static IP for your organization, and that authorOrganization should be the name of your organization.  These should be pre-filled and remain unmodified.  All fields are required for successful submission. | | Partner Entered |           | No       |