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
title_md : Parameters
number: 2

---

### There is two types of reviews: Sales and Service.

#### Request body structure for Sales Dealer Review

| Parameter          | Description                                               | Possible Values                                        | Entered By       | Default Value | Required |
|:-------------------|:----------------------------------------------------------|:-------------------------------------------------------|:-----------------|:------------- |:-------- |
| title              | Title of the review                                       | Free text (limit 75 characters)                        | Reviewer Entered |               | Yes      |
| text               | Body of the review                                        | Free text (limit 7500 characters)                      | Reviewer Entered |               | Yes      |
| authorName         | Name of the reviewer                                      | Free text (limit 30 characters, “@” sign prohibited)   | Reviewer Entered |               | Yes      |
| email              | Email of the reviewer                                     | Free text (“@” sign required) (email of the reviewer ) | Reviewer Entered |               | Yes      |
| overallRating      | Overall rating of the experience                          | 1.0 - 2.0 - 3.0 - 4.0 - 5.0                            | Reviewer Entered |               | Yes      |
| dealerRecommended  | Would you recommend this dealership to friends and family | true/false                                             | Reviewer Entered |               | Yes      |
| carBought          | Did you purchase the car?                                 | true/false                                             | Reviewer Entered |               | Yes      |
| dealerId           | Edmunds Dealer ID                                         |                                                        | Partner Entered  |               | Yes      |
| stateCode          | Two letter state postal abbreviation                      |                                                        | Partner Entered  |               | Yes      |
| reviewType         | Review Type                                               | sales                                                  | Partner Entered  |               | Yes      |
| publishingSource   | Publishing Source                                         | EDMUNDS_REST_API                                       | Partner Entered  |               | Yes      |
| authorOrganization | Your Organization Name                                    |                                                        | Partner Entered  |               | No       |
| ipAddress          | Your Organization IP. ipAddress should be a static IP for your organization, and that authorOrganization should be the name of your organization.  These should be pre-filled and remain unmodified.  All fields are required for successful submission. | Partner Entered |    |           | Yes       |

#### Request body structure for Sales Dealer Review

| Parameter            | Description                                                                        | Possible Values                                        | Entered By       | Default Value | Required |
|:---------------------|:-----------------------------------------------------------------------------------|:-------------------------------------------------------|:-----------------|:------------- |:-------- |
| title                | Title of the review                                                                | Free text (limit 75 characters)                        | Reviewer Entered |               | Yes      |
| text                 | Body of the review                                                                 | Free text (limit 7500 characters)                      | Reviewer Entered |               | Yes      |
| authorName           | Name of the reviewer                                                               | Free text (limit 30 characters, “@” sign prohibited)   | Reviewer Entered |               | Yes      |
| email                | Email of the reviewer                                                              | Free text (“@” sign required) (email of the reviewer ) | Reviewer Entered |               | Yes      |
| overallRating        | Overall rating of the experience                                                   | 1.0 - 2.0 - 3.0 - 4.0 - 5.0                            | Reviewer Entered |               | Yes      |
| dealerRecommended    | Would you recommend this dealership to friends and family                          | true/false                                             | Reviewer Entered |               | Yes      |
| allCommitmentsMade   | Did the dealer honor all commitments made?                                         | yes/no                                                 | Reviewer Entered |               | Yes      |
| workQualitySatisfied | Were you satisfied with the quality of work performed on your vehicle?             | yes/no                                                 | Reviewer Entered |               | Yes      |
| workCompleteOnTime   | Did the dealership complete the work within the timeframe promised?                | yes/no                                                 | Reviewer Entered |               | Yes      |
| workQuoteProvided    | Did the dealership provide you with an accurate quote of the work to be performed? | yes/no                                                 | Reviewer Entered |               | Yes      |
| priceOfServiceFair   | Do you feel the price paid for service(s) was fair and appropriate?                | yes/no                                                 | Reviewer Entered |               | Yes      |
| dealerId             | Edmunds Dealer ID                                                                  |                                                        | Partner Entered  |               | Yes      |
| stateCode            | Two letter state postal abbreviation                                               |                                                        | Partner Entered  |               | Yes      |
| reviewType           | Review Type                                                                        | sales                                                  | Partner Entered  |               | Yes      |
| publishingSource     | Publishing Source                                                                  | EDMUNDS_REST_API                                       | Partner Entered  |               | Yes      |
| authorOrganization   | Your Organization Name                                                             |                                                        | Partner Entered  |               | Yes      |
| ipAddress            | Your Organization IP. ipAddress should be a static IP for your organization, and that authorOrganization should be the name of your organization.  These should be pre-filled and remain unmodified.  All fields are required for successful submission. | Partner Entered |    |           | Yes       |
