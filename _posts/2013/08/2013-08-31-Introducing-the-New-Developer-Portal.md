---
layout: post
category: Announcement
tags: 
  - Edmunds
  - API
  - Developer Portal
  - SSL
  - OAuth 2.0
  - API docs
  - Affiliates
  - Javascript
  - SDK
  - Status Dashboard
title: "Introducing the New Developer Portal"
by: Ismail Elshareef
author_url: "https://twitter.com/ielshareef/"
author_description: "Senior Director, Open Platform initiative"
links: 
  - name: API Overview
    url: "/api-documentation/overview/"
  - name: API Affiliate Program
    url: /api_affiliate_network/
  - name: OAuth 2.0 Simplified
    url: "http://aaronparecki.com/articles/2012/07/29/1/oauth2-simplified"
page_title: "The Edmunds API Blog"
excerpt: "We're very excited to unveil our new Edmunds Developer Network Portal. The new portal has been completely redesigned with new APIs and documentation format to make it as easy as possible for developers to leverage the Edmunds.com data."
published: true
author_picture: Ismail_Elshareef.jpg
---

We're very excited to unveil our new **Edmunds Developer Network Portal**. The new portal has been completely redesigned with new APIs and documentation format to make it as easy as possible for developers to leverage the Edmunds.com data.

#### So what's new?

We have tons of goodies in this new portal:

* **Brand New Docs:** [Our docs](/api-documentation/overview/) are much more detailed with *examples* and response object definitions. Some of our APIs have new versions as well. The Vehicle Spec resources (make, model, model year, style, options, equipment, ...etc) have been completely revamped to reflect the community's suggestions and to address their pain points.

* **The API Affiliate Network:** API developers can start **making money** right now by registering for the [Edmunds API Affiliate Network](/api_affiliate_network/). Developers will get paid **$5** for *every new car lead form completed on the Edmunds.com site* because of their referrals. [Learn more](/api_affiliate_network/).

* **OAuth 2.0 Support:** For critical API calls (i.e. lead submission, reviews creation, inventory access, ...etc), we needed to have a better authorization and authentication paradigm. API keys are a simple and easy way to quickly get access to our public, low risk datasets and *we'll continue to support them*. However, operations involving critical transactions that impact our datasets directly need to be more secured. Therefore, we have introduced [OAuth 2.0](http://aaronparecki.com/articles/2012/07/29/1/oauth2-simplified) to access [certain resources](/api-documentation/inventory/). 

* **SSL Support:** All out endpoints now support both HTTP and HTTPS protocols. This will enable in-browser API calls on both secure and non-secure domains.

* **FAQs:** We've compiled a list of [common questions](/faq.html) we've received from the community over the past two years and their answers. [Learn more](/faq.html).

* **A Single API Key:** All new applications created on the portal would be issued **one API key** that would work with all publicly available APIs (i.e. vehicle, editorial and dealer). This should simplify development. You no longer need to keep track of *three different API keys*. We encourage all our developers with older keys to create a new application and get a new key. **We will start decommissioning the old keys by March 2014**.

* **Javascript SDK:** We completely revamped our Javascript SDK to make it super easy to use with active examples that work out of the box. [Learn more](https://github.com/EdmundsAPI/sdk-javascript).

* **API Status Dashboard:** Our developers weren't given visibility into API problems when they occurred. **Those days are over**. Now, when something is amiss, we [open a ticket](http://edmunds.statuspage.io/) for it of which you'll get notified if you [subscribe](http://edmunds.statuspage.io/) to get the alerts, and you'll know step-by-step what's going on with the API. [Learn more](http://edmunds.statuspage.io/).

* **Edmunds API 101 Video:** We've had [this video](https://vimeo.com/65923039) out for a while, but if you haven't seen it you, you should check it out.

We love to hear your feedback, suggestions, and comments on the new portal and our API in general. You can [tweets us](http://twitter.com/edmundsapi), [email us](mailto:api@edmunds.com) or post a comment on the [forum](http://edmunds.mashery.com/forum).

Happy coding!