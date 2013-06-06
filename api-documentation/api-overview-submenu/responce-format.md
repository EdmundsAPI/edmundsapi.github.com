---
layout: api-documentation-overview
title : Responce Format
header : Responce Format
group: api-doc-submenu
---
{% include JB/setup %}

   			
<p>In order to get a JSON object back, you need to set fmt=json in your API call. The response object will have the following format:
</p>

<pre>
<code>
	[
    {
        link: "URL",
        title: "STRING",
        published: "YYY-MM-DD",
        content: "TEXT IN HTML FORMAT"
    }, 
    {
        link: "URL",
        title: "STRING",
        published: "YYY-MM-DD",
        content: "TEXT IN HTML FORMAT"
    }, 
    {
        link: "URL",
        title: "STRING",
        published: "YYY-MM-DD",
        content: "TEXT IN HTML FORMAT"
    },
    {
        link: "URL",
        title: "STRING",
        published: "YYY-MM-DD",
        content: "TEXT IN HTML FORMAT"
    }, ....
]
</code>		
</pre>
 
