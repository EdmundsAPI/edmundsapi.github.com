---
layout: api-documentation
title : 'Get make overview'
title_active_left_menu: 'Articles'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get make overview'
spec: articles
version: v2
api: editorial
dropdown-link: 'api/editorial/v2/{make}'


level: 4
description_edpoint: 'Get make overview'
title_md : Sample Request
number: 4

---

###Sample Request 1

Get Audi overview.

#### URL

    https://api.edmunds.com/api/editorial/v2/audi?view=basic&api_key={API key}&fmt=json

#### Response

    {
      "tags": [
        "R8",
        "Audi Cars SUVs",
        "Allroad",
        "Quattro",
        "Audi Automobile Works",
        "Luxury Cars"
      ],
      "description": "Audi cars: research Audi cars, read Audi reviews, find Audi car listings and get Audi pricing & dealer quotes.",
      "introduction": "&lt;p&gt;In business for more than 100 years, Audi is an automaker that builds luxury cars and SUVs. The company was started in Germany and has remained Deutschland-based to this day.&lt;/p&gt;&lt;p&gt;&amp;quot;Audi Automobile Works&amp;quot; entered the German car-manufacturing business in 1910 and remained independent until the Great Depression. Because Audi&#39;s founder, August Horch, had left a 10-year-old company bearing his own name, he chose a Latin form of his name -- Audi -- for his new company. Audi joined with three other auto manufacturers in 1932 to form Auto Union. Audi, the only surviving nameplate from that union, was purchased by Volkswagen in 1964.&lt;/p&gt;&lt;p&gt;During the 1970s, Audi started to get noticed in the U.S. with its 100LS luxury sedan and compact and sprightly Fox coupe and sedan. By the late &#39;70s the brand had replaced the dated 100LS with its new 5000 luxury sedan. &lt;/p&gt;&lt;p&gt;Every manufacturer has its defining moments. For Audi, one such moment came in March 1980 at the &lt;a href=&quot;/auto-shows/geneva/&quot;&gt;Geneva Motor Show&lt;/a&gt;. The automaker unveiled the Audi Quattro, an all-wheel-drive sport coupe that was met with a wildly enthusiastic response on the show floor. The Quattro&#39;s all-wheel-drive system went on to help Audi win accolades in motorsports and it was eventually integrated into the entire model range.&lt;/p&gt;&lt;p&gt;That year also saw the Fox replaced by the 4000. Four years later, the range-topping 5000 was redesigned. Audi&#39;s sales shot up nearly 50 percent, thanks chiefly to that newly aerodynamic yet handsome flagship that featured what would become an Audi hallmark -- an elegantly stylish, high-quality cabin.&lt;/p&gt;&lt;p&gt;Sadly, Audi&#39;s fortunes turned for the worse when the carmaker&#39;s 5000 model was accused of unintended acceleration in a &lt;em&gt;60 Minutes&lt;/em&gt; television episode. A subsequent government investigation found Audi innocent of the charge, but the resulting drop in sales nearly put Audi out of business in the U.S.&lt;/p&gt;&lt;p&gt;The late &#39;80s saw Audi redesign the 4000, renaming it the 80 and 90 (with the 90 having more equipment) and also rename the 5000, dubbing it the 100 or 200. The 200 featured a turbocharged five-cylinder with all-wheel drive as opposed to a non-turbo five and front-wheel drive, as on the 100. A Coupe also debuted, as did a new flagship, a V8-powered 200 sedan simply called the &amp;quot;V8&amp;quot;.&lt;/p&gt;&lt;p&gt;The following decade saw the A4 and Cabriolet models, as well as the renaming of the 100 to A6. The stunning A8 was introduced as Audi&#39;s new flagship, boasting all-aluminum construction and a beefy V8. High-performance versions of the various models bowed, dubbed S4, S6 and S8.&lt;/p&gt;&lt;p&gt;The start of the new millennium brought the TT, Audi&#39;s low-slung sport coupe (and later roadster). It also introduced RS versions of the A4 and A6, providing even more performance than &amp;quot;S&amp;quot; variants. In addition to &amp;quot;S&amp;quot; and &amp;quot;RS&amp;quot; versions of the TT, Audi&#39;s more recent releases include the A3 hatchback, Q5 crossover SUV, slick A5 coupe, exotic &lt;a href=&quot;/audi/r8/&quot;&gt;R8 sports car&lt;/a&gt; and &lt;a href=&quot;/audi/a7/&quot;&gt;A7 luxury hatchback sedan&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Today, Audi continues its success in the prestige car marketplace by offering a wide range of vehicles that impressively combine luxury and sport.&lt;/p&gt;",
      "link": {
        "rel": "related",
        "href": "http://www.edmunds.com/audi"
      },
      "make": {
        "name": "Audi",
        "niceName": "audi"
      },
      "models": [
        {
          "name": "S8",
          "niceName": "s8"
        },
        {
          "name": "Q5",
          "niceName": "q5"
        },
        {
          "name": "A7",
          "niceName": "a7"
        },
        {
          "name": "Q3",
          "niceName": "q3"
        }
      ]
    }

###Sample Request 2

Get Audi overview with view=full.

#### URL

    https://api.edmunds.com/api/editorial/v2/audi?view=full&api_key={API key}&fmt=json

#### Response

    {
      "tags": [
        "R8",
        "Audi Cars SUVs",
        "Allroad",
        "Quattro",
        "Audi Automobile Works",
        "Luxury Cars"
      ],
      "description": "Audi cars: research Audi cars, read Audi reviews, find Audi car listings and get Audi pricing & dealer quotes.",
      "introduction": "&lt;p&gt;In business for more than 100 years, Audi is an automaker that builds luxury cars and SUVs. The company was started in Germany and has remained Deutschland-based to this day.&lt;/p&gt;&lt;p&gt;&amp;quot;Audi Automobile Works&amp;quot; entered the German car-manufacturing business in 1910 and remained independent until the Great Depression. Because Audi&#39;s founder, August Horch, had left a 10-year-old company bearing his own name, he chose a Latin form of his name -- Audi -- for his new company. Audi joined with three other auto manufacturers in 1932 to form Auto Union. Audi, the only surviving nameplate from that union, was purchased by Volkswagen in 1964.&lt;/p&gt;&lt;p&gt;During the 1970s, Audi started to get noticed in the U.S. with its 100LS luxury sedan and compact and sprightly Fox coupe and sedan. By the late &#39;70s the brand had replaced the dated 100LS with its new 5000 luxury sedan. &lt;/p&gt;&lt;p&gt;Every manufacturer has its defining moments. For Audi, one such moment came in March 1980 at the &lt;a href=&quot;/auto-shows/geneva/&quot;&gt;Geneva Motor Show&lt;/a&gt;. The automaker unveiled the Audi Quattro, an all-wheel-drive sport coupe that was met with a wildly enthusiastic response on the show floor. The Quattro&#39;s all-wheel-drive system went on to help Audi win accolades in motorsports and it was eventually integrated into the entire model range.&lt;/p&gt;&lt;p&gt;That year also saw the Fox replaced by the 4000. Four years later, the range-topping 5000 was redesigned. Audi&#39;s sales shot up nearly 50 percent, thanks chiefly to that newly aerodynamic yet handsome flagship that featured what would become an Audi hallmark -- an elegantly stylish, high-quality cabin.&lt;/p&gt;&lt;p&gt;Sadly, Audi&#39;s fortunes turned for the worse when the carmaker&#39;s 5000 model was accused of unintended acceleration in a &lt;em&gt;60 Minutes&lt;/em&gt; television episode. A subsequent government investigation found Audi innocent of the charge, but the resulting drop in sales nearly put Audi out of business in the U.S.&lt;/p&gt;&lt;p&gt;The late &#39;80s saw Audi redesign the 4000, renaming it the 80 and 90 (with the 90 having more equipment) and also rename the 5000, dubbing it the 100 or 200. The 200 featured a turbocharged five-cylinder with all-wheel drive as opposed to a non-turbo five and front-wheel drive, as on the 100. A Coupe also debuted, as did a new flagship, a V8-powered 200 sedan simply called the &amp;quot;V8&amp;quot;.&lt;/p&gt;&lt;p&gt;The following decade saw the A4 and Cabriolet models, as well as the renaming of the 100 to A6. The stunning A8 was introduced as Audi&#39;s new flagship, boasting all-aluminum construction and a beefy V8. High-performance versions of the various models bowed, dubbed S4, S6 and S8.&lt;/p&gt;&lt;p&gt;The start of the new millennium brought the TT, Audi&#39;s low-slung sport coupe (and later roadster). It also introduced RS versions of the A4 and A6, providing even more performance than &amp;quot;S&amp;quot; variants. In addition to &amp;quot;S&amp;quot; and &amp;quot;RS&amp;quot; versions of the TT, Audi&#39;s more recent releases include the A3 hatchback, Q5 crossover SUV, slick A5 coupe, exotic &lt;a href=&quot;/audi/r8/&quot;&gt;R8 sports car&lt;/a&gt; and &lt;a href=&quot;/audi/a7/&quot;&gt;A7 luxury hatchback sedan&lt;/a&gt;.&lt;/p&gt;&lt;p&gt;Today, Audi continues its success in the prestige car marketplace by offering a wide range of vehicles that impressively combine luxury and sport.&lt;/p&gt;",
      "link": {
        "rel": "related",
        "href": "http://www.edmunds.com/audi"
      },
      "make": {
        "id": 200000001,
        "name": "Audi",
        "niceName": "audi"
      },
      "models": [
        {
          "id": "Audi_Q1",
          "name": "Q1",
          "niceName": "q1",
          "link": {
            "rel": "self",
            "href": "/api/editorial/v2/audi/q1"
          }
        },
        {
          "id": "Audi_S4",
          "name": "S4",
          "niceName": "s4",
          "link": {
            "rel": "self",
            "href": "/api/editorial/v2/audi/s4"
          }
        },
        {
          "id": "Audi_S5",
          "name": "S5",
          "niceName": "s5",
          "link": {
            "rel": "self",
            "href": "/api/editorial/v2/audi/s5"
          }
        },
        {
          "id": "Audi_allroad",
          "name": "allroad",
          "niceName": "allroad",
          "link": {
            "rel": "self",
            "href": "/api/editorial/v2/audi/allroad"
          }
        }
      ]
    }
