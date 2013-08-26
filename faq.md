---
layout: vertical-line-page
title: Frequently Asked Questions

class_page: faqPage
---

<a name="top">&nbsp;</a>

### The Questions

* [What is an API?](#faq-1)
* [Why has Edmunds decided to open up the data?](#faq-2)
* [Who is the intended audience for the Edmunds API?](#faq-3)
* [How might I use the content that's made available via the Edmunds API?](#faq-4)
* [How much does it cost to use the API?](#faq-5)
* [Can I use the Edmunds API for my business?](#faq-6)
* [What data formats does the Edmunds API support?](#faq-7)
* [How can I reach out to Edmunds to discuss a potential partnership opportunity?](#faq-8)
* [How can I make money using this API?](#faq-9)

---

### The Answers

<a name='faq-1'>&nbsp;</a>
<span class="question-header" >What is an API?
</span>
[Kin Lane](http://apievangelist.com), who's also known as *API Evangelist*, has the best answer for this question:

> *An API -- Application Programming Interface -- at its most basic level, allows your product or service to talk to other products or services. In this way, an API allows you to open up data and functionality to other developers, to other businesses or even between departments and locations within your company. It is increasingly the way in which companies exchange data, services and complex resources, both internally, externally with partners, and openly with the public.*

We also put together this [3-minute video](http://vimeo.com/65923039) to explain what an API is and how the Edmunds API works.

[Back to top](#top)

<a name='faq-2'>&nbsp;</a>
<span class="question-header" >Why has Edmunds decided to open up the data?
</span>
We here at Edmunds believe strongly that innovation is fostered best through openness and transparency. We're opening up our data because we want to give you, the developer, the ability to explore its potential beyond what we have already done. You can use the breadth and detail of the automotive information available through the Edmunds' API to create mashups, mobile apps, visualizations and other data-consuming applications that will provide an added dimension of user experience for the automotive consumer. Edmunds is committed to helping automotive consumers find the car that meets their every need. Providing our data to developers interested in automative data is a key component to achieving our goal.

[Back to top](#top)

<a name='faq-3'>&nbsp;</a>
<span class="question-header" >Who is the intended audience for the Edmunds API?
</span>
The ultimate user of our API is a software developer. However, we are also appealing to business owners and decision makers who are creative and innovative in the automotive space.

[Back to top](#top)

<a name='faq-4'>&nbsp;</a>
<span class="question-header">How might I use the content that's made available via the Edmunds API?
</span>
We want you to be as *creative* and as *innovative* as possible with our data. We have tried hard to put as little constraints on you as possible. The only thing we ask you to do is to **comply with our [Terms of Service](/terms_of_service/)**. 

[Back to top](#top)

<a name='faq-5'>&nbsp;</a>
<span class="question-header">How much does it cost to use the API?
</span>
The Edmunds API is **FREE**. Certain resources and datasets that are deemed for **Partners only** will require a discussion with our business development team, but no monetary compensation is expected for the API access.

[Back to top](#top)

<a name='faq-6'>&nbsp;</a>
<span class="question-header">Can I use the Edmunds API for my business?
</span>
Absolutely. We have large companies like eBay and Toyota Motors using our data as well as startups like showroom.is and noodler compare.

[Back to top](#top)

<a name='faq-7'>&nbsp;</a>
<span class="question-header">What data formats does the Edmunds API support?
</span>
The vast majority of our data is returned in **JSON**. The Editorial API resource support JSON as well as XML. We will be adding XML support to the other APIs in the future.

[Back to top](#top)

<a name='faq-8'>&nbsp;</a>
<span class="question-header">How can I reach out to Edmunds to discuss a potential partnership opportunity?
</span>
Exciting! Please [email us](mailto:api@edmunds.com) and try to be as specific as you can so we can bring in the right people to have a follow-up discussion with you regarding this potential opportunity. We should get back to you by email within 48 hours.

[Back to top](#top)

<a name='faq-9'>&nbsp;</a>
<span class="question-header">How can I make money using this API?
</span>
Well, aren't you in for a treat! We don't only have one, but two, ways for you to make money using the Edmunds API:

1. [API Affiliate Network](/api_affiliate_network/)
2. [Certified Developer Network](/certified-dev.html)

Both programs are intended for the talented developers to use the Edmunds API to their financial benefit.

[Back to top](#top)


<script type="text/javascript">

 $(function(){

 	function scrollTo(element){
		var elementClick = element.attr("href");		
		var cutElementClick = elementClick.substring(1);		
		var destination = $('[name="'+ cutElementClick +'"]').offset().top;		
		$("html, body").animate({ scrollTop: destination}, 500 );		
		return false;
	};
 
  	$("a").on('click', function (element) { 
   		var thisLink = $(this);
   		scrollTo(thisLink);
  	});

 });

</script>