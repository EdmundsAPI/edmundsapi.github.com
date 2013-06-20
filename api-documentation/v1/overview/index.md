---
layout: api-documentation-v1
title : API Overview
title_parent: Api documentation
title_active_left_menu: API Overview
header : API Overview
header_parent : API Overview
level: 1

title_nav_item: Api documentation
weight: 1

api_version: Api version 1.0
---


{% comment %} <!-- Top table "AVAILABLE API’S" --> {% endcomment %}
{% include themes/twitter/api_overview/table_available_api.html %}




###GETTING STARTED

Before you you will be able go use the Edmunds API, you will need to read and agree to our Terms of Use.

<div class="blogGray">
ready to rock and roll? 
<a class="linkGetKey" href="#" title="Get your API key">
Get your API key
</a>
  before diving
</div>


###THE EDMUNDS APIs AT A GLANCE

All our API calls have the following format:



So let's break it down:

<table>
	<tr>
		<td>Base URL</td>
		<td>http://api.edmunds.com/{version}/</td>
	</tr>
	<tr>
		<td>HTTP method</td>
		<td>GET</td>
	</tr>
	<tr>
		<td>Response Format</td>
		<td>JSON, JSONP</td>
	</tr>
</table>


Now let's take a look at what lies within the braces within the API call.

<pre>
<code class='prettyprint'>
	hfgchgsdvchgvg
</code>
</pre>

#####Common Parameters
The following parameters may or may not be required in every single API call:

<table>
	<tr>
		<th>Name</th>
		<th>Description</th>
		<th>Required?</th>
		<th>Default Value</th>	
	</tr>
	
	<tr>
		<td>
			<code>version</code>
		</td>
		<td>The API version</td>
		<td>Yes</td>
		<td>
			<span>current</span>
			<p>
				<span>Note:</span>
				If the version of a particular API is different, it will be called out on that API's documentation page
			</p>
		</td>
	</tr>
	
	<tr>
		<td>
			<code>format</code>
		</td>
		<td>The API response format</td>
		<td>Yes</td>
		<td>
			<span>json</span>
			<p>
				<span>Note:</span>
				The format has to be always set to <span>json</span>. To return <span>jsonp</span>, you need to set the <code>fn</code> parameter  described below. 
			</p>
		</td>
	</tr>
	
	<tr>
		<td>
			<code>api_key</code>
		</td>
		<td>The API Key</td>
		<td>Yes</td>
		<td>
			<span>json</span>
			<p>
				<span>Note:</span>
				<a class="linkGetKey" href="#" title="Get your API key">Get your API key</a> 
			</p>
		</td>
	</tr>
	
	<tr>
		<td>
			<code>fn</code>
		</td>
		<td>JSONP Callback function</td>
		<td>No</td>
		<td>
			<span>json</span>
			<p>
				Pass the name of a JavaScript function in your code and our response will be wrapped around it
			</p>
		</td>
	</tr>
</table>

The {call path} and {call parameters} are specific to the API endpoints and will be called out explicitly for each endpoint.



















