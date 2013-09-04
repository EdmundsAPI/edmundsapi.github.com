---
layout: page
title : 'The New Vehicle Configurator Widget'
title_parent: Widgets and apps
header : Vehicle configurator

class_page: pageWidgetSetup
---

{% include themes/twitter/widgets_and_apps/vehicle_configurator_setup.html %}

<div class="pre-loader" style="height: 200px;">&nbsp;</div>
<iframe src="http://edmundswidgets-staging.herokuapp.com/carconfig/v1?portal=true" width="100%" height="1165" align="left" class="iframeWidget">
</iframe>

#####ATTRIBUTES

* `Vhicle API Key` - the Key for Vehicle API registered on <a class='blueLink' href='http://edmundsapi.github.io' title='Admunds Developer Portal'>Admunds Developer Portal</a>

* `Dealer API Key` - the Key for Dealer API registered on <a class='blueLink' href='http://edmundsapi.github.io' title='Admunds Developer Portal'>Admunds Developer Portal</a>

* `Width` - sets the width of the Widget.

* `Include Border` - include/exclude border in the Widget.

* `Border Radius` - sets the size of the Border Radius.

* `Included Makes` - the set of Makes to display in Makes dropdown.

* `Default Zip Code` - the zip code to display by default in ZIP field.

* `Dealer Keywords` - keywords by which we filter the list of dealers to show only the ones whose title matches one of the keywords.

* `Get Code` - instructions to embed Vehicle Widget on your page.



{% include themes/twitter/widgets_and_apps/vehicle_configurator_acordion.html %}
