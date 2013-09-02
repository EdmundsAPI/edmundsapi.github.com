---

layout: api-documentation
title : API Overview
title_parent: Api documentation
title_active_left_menu: API Overview

level: 1
weight: 1

---

**Welcome!** To get you started, let's go over the automotive datasets we've made available for you through the Edmunds API. Once you [register for a key](http://edmunds.mashery.com/member/register), you will be able to access the following datasets:

* **Vehicle Specs**: Vehicle make/model/year/trim data, vehicle equipment, vehicle options, vehicle colors, etc.
* **Vehicle Pricing**: Edmunds.com TMV® (True Market Value®), Edmunds.com TCO® (True Cost to Own®), Incentives and Rebates, etc.
* **Vehicle Service**: Vehicle maintenance schedule, vehicle recalls, vehicle service bulletins, local labor rates, etc.
* **Vehicle Content**: Consumer reviews, editorial reviews, editorial articles, etc.
* **Vehicle Media**: Vehicle photos.
* **Dealership Content**: Dealership info, consumer reviews, list of cars for sale, dealer pricing, etc.

These datasets are distributed across _four distinct APIs_: **[Vehicle API](/api-documentation/vehicle/)**, **[Editorial API](/api-documentation/editorial/)**, **[Dealer API](/api-documentation/dealer/)** and **[Inventory API](/api-documentation/inventory/)**. A list of resources available under each API is on the left.

This overview covers the core concepts that you need to know before you could fully use the APIs to their potential. Once you have a good understanding of the API core concepts, you can then dig deeper into each API by visiting its dedicated overview page.

### Data Hierarchy

Exploring a new API can be daunting. To make using our API enjoyable, easy and fun, it's important to understand a few things regarding how our data is structured and how our APIs work.

In order to retrieve _most of the datasets_ we offer in the API, you will almost always need the **car Style ID** or the **car Model Year ID**. To get these IDs, you need to know at _least the car make_ you're interested in:

_Car Make –> Car Model –> **Car Model Year** –> Car Trim –> **Car Style**_

In the _Useful API Calls_ section below, we'll show you how to get both IDs in one API call!

* **Car Make:** It's either the name of the car's manufacturer or, if the manufacturer has more than one operating unit, the name of that unit.
* **Car Model:** A specific vehicle brand identified by a name or number (and which is usually further classified by trim or style level).
* **Car Model Year:** For a vehicle model, the calendar year designation assigned by the manufacturer to the annual version of that model.
* **Car Style:** A style is the specific version of a particular model. Each style offers different levels of equipment and a unique price point. Manufacturers have their own way of determining styles and these are not necessarily comparable across models.

[Here's a list of the complete Edmunds Glossary](http://www.edmunds.com/glossary/).

### URI Format

All API calls follow this format: _**{protocol}**://api.edmunds.com/**{endpoint}**?fmt=**{response format}**&api\_key=**{API key}**_

<table class="tableParametrs">
	<tr>
		<th>Name</th>
		<th>Description</th>
		<th>Required?</th>
		<th>Default Value</th>	
	</tr>
	
	<tr>
		<td>
			<code>protocol</code>
		</td>
		<td>HTTP/HTTPS</td>
		<td><strong>Yes</strong></td>
		<td>
			<span class="text-info">http | https</span>
			<p>
				<strong>Note:</strong>
				We recommend using the <strong><em>https</em></strong> when possible for extra security.
			</p>
		</td>
	</tr>
	
	<tr>
		<td>
			<code>endpoint</code>
		</td>
		<td>Path to API method</td>
		<td><strong>Yes</strong></td>
		<td>
			<span class="text-info">varies per API call</span>
			<p>
				<strong>Note:</strong>
				Endpoints are documented under each API's resources and will include the endpoint's version as well as the API method
			</p>
		</td>
	</tr>
	
	<tr>
		<td>
			<code>response format</code>
		</td>
		<td>API response format</td>
		<td><strong><strong>Yes</strong></strong></td>
		<td>
			<span class="text-info">json | xml</span>
			<p>
				<strong>Note:</strong>
				All API calls support <span class="text-info">json</span> as the default response format. XML support is limited and will be noted in the endpoint documentation if the response format also supports XML. For <span class="text-info">JSONP</span> support, you will need to add <code>callback=</code> to the query string and set it to the Javascript function that you have defined to handle the <strong>json</strong> response.
			</p>
		</td>
	</tr>
	
	<tr>
		<td>
			<code>API key</code>
		</td>
		<td>Authorized API Key</td>
		<td><strong>Yes</strong></td>
		<td>
			<a class="linkGetKey" href="#" title="Get your API key">Get your API key</a> 
		</td>
	</tr>

</table>

### URI Examples

* _**https**://api.edmunds.com/**api/vehicle/v2/makes**?fmt=**json**&api\_key=**94tyghf85jdhshwge334**_
* _**http**://api.edmunds.com/**api/vehicle/v2/lexus/models**?fmt=**json**&api\_key=**94tyghf85jdhshwge334**&callback=**myFunction**_
* _**https**://api.edmunds.com/**api/vehicle/v2/makes**?fmt=**json**&api\_key=**94tyghf85jdhshwge334**&**state=new&view=full**_

### Rate Limit

All API keys are issued with a _default quota_ of **2 API calls/second** and **5000 API calls/day**. We do increase rate limits on case-by-case basis. In order to increase the rate limit for a particular application, we need to verify the following:

1. The application is in compliance with our [Terms of Service](/terms_of_service/)
2. The application is in compliance with our [branding guide](/api_branding_guide/)
3. The application is representing the Edmunds data properly

Once these three criteria are verified, the rate limit is increased to what Edmunds and the developer determine to be appropriate. Please note that you **do *not* have to be an API Partner** to get your rate limit increased. Every developer can get their rate limit increased if their application meets the three conditions mentioned above. **If you would like to increase your API rate limit, please [email us](mailto:api@edmunds.com?subject=API%20Rate%20Limit%20Increase)**. _No monetary compensation is expected in exchange for the rate limit increase_.

### Available Resources

{% comment %} <!-- Top table "AVAILABLE API’S" --> {% endcomment %}
{% include themes/twitter/api_overview/table_available_api.html %}
Although access to these APIs is _free_, their _availability to developers_ varies based on the **access tier** to which the developer belongs. We currently offer _three access tiers_:

* **PUBLIC**: All registered developers using the Edmunds.com data and content according to our [Terms of Service](/terms_of_service/).
* **PARTNERS**: Developers working with Edmunds.com on strategic products and applications that include the Edmunds.com data and content. If you'd like to become an Edmunds API Partner, please [email us](mailto:api@edmunds.com?subject=API%20Partner%20Inquiry)
* **EDMUNDS**: Edmunds.com employees and contractors using the API to build out the Edmunds.com apps and websites.

Regardless of access tier, all developers using the Edmunds API need to **read** and **agree** to our [Terms of Service](/terms_of_service/).

### Error Codes and Handling

API errors occur for several reasons. Here's a list of **common errors** and ways to troubleshoot them.

| HTTP Status	| Description                           | Troubleshooting																|
|:--------------|:--------------------------------------|:------------------------------------------------------------------------------|
| 400    		| Bad Request				            | Check the URL to make sure it has proper syntax								|
| 401   		| Unauthorized				            | You are using the **wrong API key** or the key **isn't active** 				|
| 403 			| Forbidden							    | You are not authorized to access this resource, sorry.						|
| 404 			| Not Found							    | Check the URL path for typos								 					|
| 502    		| Bad Gateway	                        | If this persists, check our [API Status](http://edmunds.statuspage.io). It might be an issue we're addressing	|
| 503     	   	| Service Unavailable 					| If this persists, check our [API Status](http://edmunds.statuspage.io). It might be an issue we're addressing	|
| 504     	   	| Gateway Timeout                       | If this persists, check our [API Status](http://edmunds.statuspage.io). It might be an issue we're addressing	|

If an error persists and you can't resolve it, please [email us](mailto:api@edmunds.com?subject=API%20Error) and let us know.

When an error occurs, you should get the following response:

	{"error": {"code": xxx, "message":"some message"}}
	
Your code should always be looking for the root key <code>error</code> in the API response.

### Useful API Calls

As mentioned above, car _style IDs_ and _Model Year IDs_ are important to retrieve other datasets in the API. 

To get the _Model Year IDs_ for all _new_ makes, use the following API call:
	
	http://api.edmunds.com/api/vehicle/v2/makes?fmt=json&state=new&api_key={your vehicle api key}
	
In the **response** of that call, you will find the following object:

	{
		"id": 100538949,
		"year": 2013
	}

The **id** key in this object is the _Model Year ID_.

To get the _style IDs_ for a specific car make, let's use Lexus as an example, use the following API call:

	http://api.edmunds.com/api/vehicle/v2/lexus/models?fmt=json&api_key={your vehicle api key}
	
In the **response** of that call, you will find the following object:

	{
		"id": 101286113,
		"name": "4dr Hatchback (1.8L 4cyl gas/electric hybrid CVT)",
		"submodel": {
			"body": "Hatchback",
			"modelName": "CT 200h Hatchback"
		},
		"trim": "Base"
	}
	
The **id** key in this object is the _Style ID_.

More on these endpoints in the [_Spec: Make_](/api-documentation/vehicle/spec_make/v2/) and [_Spec: Model_](/api-documentation/vehicle/spec_model/v2/) resources under the Vehicle API.

### SDKs and Code Samples

Our [Javascript SDK](https://github.com/EdmundsAPI/sdk-javascript) is a great way to start integrating our API into your application _and_ work with many examples as well. For other SDKs and code samples, visit our [Github](https://github.com/EdmundsAPI/) home.

### Pedal to The Metal!

If you've made it this far, **congratulations**! You're way on your way to rocking the API! 

This is also a good time to make sure you're all set with an _account_ and a _key_ for the API(s) you want use. If you still haven't gotten your API key,<a class="linkGetKey" href="http://edmunds.mashery.com/member/register" title="Get your API key" target="_blank">get a key</a> now so you can start building in no time!

All set? Awesome. Why not start making **live API calls** _right now_ by using the [API Console](http://edmunds.mashery.com/io-docs). You won't need to write a single line of code to do so! Seriously. It's an interactive tool built by our friends at [Mashery](http://www.mashery.com) to help you get a sense of our data before investing time and effort coding against it.

Once you're comfortable with our APIs, you can start coding against it with confidence. We have a [Javascript SDK](https://github.com/EdmundsAPI/sdk-javascript) handy to help you start integrating the API into your pages in no time.

Still have questions? Don't hesitate to [tweet us](http://twitter.com/edmundsapi), [email us](mailto:api@edmunds.com) or post your questions to the [forum](http://edmunds.mashery.com/forum). We love to hear from you!


