---
layout: page
title : 'The True Market Value® Widget'
title_parent: Widgets and apps
header : True market value

class_page: pageWidgetSetup
---

{% include themes/twitter/widgets_and_apps/market_value.html %}

The TMV® Widget allows consumers to get an idea of how much a new car costs and how much an old car could be traded in for at the dealership. The TMV® price shown is always based on the base style of the vehicle selected. Options and colors adjustments aren't taken into consideration.

You can use the widget configurator below to customize the layout and style of the widget, and grab a small snippet of code to insert into your HTML pages to implement the widget.

<div class="pre-loader" style="height: 200px;">&nbsp;</div>

<iframe src="http://widgets.edmunds.com/tmv/v2?portal=true" width="100%" height="1090" align="left" class="iframeWidget"></iframe>


##### ATTRIBUTES

* `Vhicle API Key` - the Key for Vehicle API registered on <a class='blueLink' href='http://developer.edmunds.com/' title='Edmunds Developer Portal'>Edmunds Developer Portal</a>
* `Theme` - the theme for the Widget. Options: 'Theme 1', 'Theme 2', 'Theme 3'.
* `Color Scheme` - the color schemefor the Widget. Option: 'Light', 'Dark'.
* `Layout` - sets the layout of the Widget. Options: 'Vertical', 'Horizontal'.
* `Width` - sets the width of the Widget.
* `Include Border` - inlude/exclude border in the Widget.
* `Border Radius` - sets the size of the  Border Radius.
* `Included Makes` - the set of Makes to display in Makes dropdown.
* `Show vehicled` - specifies what type of vehicles to display on widget. Options: 'All' - both new and used cars, `NEW` - only new cars, `USED` - only used cars.
* `Default Zip Code` - the zip code to display by default in ZIP field.
* `Price to display` - the set of prices to display. Depends from `Show vehicles`.

	* `All` or `NEW` - Options: 'invoice, TMV and MSRP', 'Invoice and TMV', 'TMV only'.

	* `USED` - Options: 'Tradein, PrivatePArty and Dealer Retail', 'Tradein and Dealer Retail', 'Dealer Retail only'.

* `Get Code` - Instructions to embed TMV Widget on your page.

{% include themes/twitter/widgets_and_apps/acordion.html %}
