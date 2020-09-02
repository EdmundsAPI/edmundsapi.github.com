---
layout: api-documentation
title : 'Photos'
title_active_left_menu: 'Photos'
title_parent: Api documentation

amount_version: 2
spec: photos
version: v1
api: media
dropdown-link: 'Select an Endpoint'


level: 2
overview: page_version

---

<div class="info-message">
    Get photos.
</div>

### Endpoint

* [Get a Car's Photos by its Style ID](/api-documentation/media/photos/v1/01_photos_by_styleid/api-description)

<div class="info-message">
<p> 
	The Photos Resource has only one endpoint right now (we're working hard on version 2.0, which should be out soon). You can access the photos of a specific make/model/year/trim by supplying its style ID, which you can get from the Model, Model Year and/or the Style and Trim resources.
</p>

<p>A few things to note about the responses you will get back when you make calls to the endpoint available above:</p>
</div>

### Media Base URL

The photos returned from this endpoint come in URL stub format, for example '/audi/s7/2013/oem/2013_audi_s7_sedan_prestige_fq_oem_6_2048.jpg'. The base URL for media/photos is <code>http://media.ed.edmunds-media.com</code> or <code>https://media.ed.edmunds-media.com</code> so the above Audi photo can be found at [http://media.ed.edmunds-media.com/audi/s7/2013/oem/2013_audi_s7_sedan_prestige_fq_oem_6_2048.jpg](http://media.ed.edmunds-media.com/audi/s7/2013/oem/2013_audi_s7_sedan_prestige_fq_oem_6_2048.jpg) or [https://media.ed.edmunds-media.com/audi/s7/2013/oem/2013_audi_s7_sedan_prestige_fq_oem_6_2048.jpg](https://media.ed.edmunds-media.com/audi/s7/2013/oem/2013_audi_s7_sedan_prestige_fq_oem_6_2048.jpg).

### Photo Shot Types (i.e. *shotTypeAbbreviation*)

Our photos are diverse in terms of the perspective from which they were taken. Here's a list of the all available shot types, which you will find in the API response as the value of the property **shotTypeAbbreviation**:

| Shot Type      		| Description                         														| Sort Order	|
|:----------------------|:------------------------------------------------------------------------------------------|:--------------|
| FQ			    	| Front Quarter view of entire vehicle, usually from the driver's side						| 1				|
| RQ					| Rear Quarter view of entire vehicle, from either the driver or passenger's side			| 2				|
| I		    			| Forward Interior Shot showing dash, seats and windshield									| 3				|
| RI	    			| Interior Shot showing rear seats. Can also be taken from outside of vehicle. 				| 4				|
| S						| Profile view of entire vehicle; usually left-hand side									| 5				|
| CARGO	    			| Shot of vehicle's trunk, bed, or other primary cargo area									| 6				|
| E		    			| Shot of vehicle's entire engine bay, usually from directly above							| 7				|
| W		    			| Shot of vehicle's entire wheel, usually the front-left 									| 8				|
| D		    			| Shot of vehicle's entire dashboard, usually taken from the rear-int 						| 9				|
| CC	    			| Shot of vehicle's center console, usually taken from the rear-int							| 10			|
| F		    			| Front end of vehicle. Shot includes rest of body as well, but not in primary focus		| 11			|
| R		    			| Rear end of vehicle. Shot includes rest of body as well, but not in primary focus			| 12			|
| DETAIL    			| Detail can be anything interior that has a specific need for attention					| 13			|
| B		    			| Close-up of an exterior emblem on the vehicle body. Trim/Engine/Packages, etc.			| 14			|
| O		    			| Any exterior shot that does not fit into any other type									| 15			|
| PROFILE    			| Additional profile/side view of entire vehicle, from driver or passenger's side			| 16			|

### Photo Sizes

The photo size is embedded in the photo URL stub: **\_{size}.jpg**. The values of *{size}* are as follows:

| Image Width (in pixels)  	| Aspect Ratio   |
|:--------------------------|:---------------|
| 87			    		| 1.587			 |
| 98						| 1.5  			 |
| 131		    			| 1.5  			 |
| 150	    				| 1.5  			 |
| 175						| 1.587			 |
| 185	    				| 1.5  			 |
| 196		    			| 1.5  			 |
| 276		    			| 1.5  			 |
| 300		    			| 1.587			 |
| 396	    				| 1.587			 |
| 400		    			| 1.5  			 |
| 423		    			| 1.5  			 |
| 500		    			| 1.587			 |
| 600		    			| 1.5  			 |
| 717		    			| 1.5  			 |
| 815		    			| 1.5  			 |
| 1600		    			| 1.5  			 |
| 2048		    			| 1.5  			 |

