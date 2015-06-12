---
layout: page
title : 'The New Vehicle Configurator Widget'
title_parent: Widgets and apps
header : Vehicle configurator

class_page: pageWidgetSetup
---

{% include themes/twitter/widgets_and_apps/vehicle_configurator_setup.html %}

<div class="pre-loader" style="height: 200px;">&nbsp;</div>
<iframe src="http://widgets.edmunds.com/carconfig/v2?portal=true" width="100%" height="1190" align="left" class="iframeWidget">
</iframe>

#####ATTRIBUTES

* `Vhicle API Key` - the Key for Vehicle API registered on <a class='blueLink' href='http://developer.edmunds.com' title='Admunds Developer Portal'>Edmunds Developer Portal</a>

* `Dealer API Key` - the Key for Dealer API registered on <a class='blueLink' href='http://developer.edmunds.com' title='Admunds Developer Portal'>Edmunds Developer Portal</a>

* `Theme` - the theme for the Widget. Options: ‘Theme 1’, ‘Theme 2’, ‘Theme 3’..

* `Color Scheme` - the color schemefor the Widget. Option: ‘Light’, ‘Dark’..

* `Width` - sets the width of the Widget.

* `Include Border` - include/exclude border in the Widget.

* `Border Radius` - sets the size of the Border Radius.

* `Tabs to display` - configures tabs to display.

* `Included Makes` - the set of Makes to display in Makes dropdown.

* `Default Zip Code` - the zip code to display by default in ZIP field.

* `Dealer Keywords` - keywords by which we filter the list of dealers to show only the ones whose title matches one of the keywords.

* `Get Code` - instructions to embed Vehicle Widget on your page.

{% include themes/twitter/widgets_and_apps/vehicle_configurator_acordion.html %}
