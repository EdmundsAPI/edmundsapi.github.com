---
layout: api-documentation
title : 'Vehicle Inventory Listings by Zipcode'
title_active_left_menu: 'Vehicle Listings'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Inventory Listings by Zipcode'
spec: vehicle_listings
version: v1
api: inventory
dropdown-link: 'api/inventory/v1/getall'


level: 3
description_edpoint: 'Get Inventory Listings by Zipcode'
title_md : Description
number: 1

---

### Description

Get cars available for sale within a specific area by supplying a five-digit ZIP code.

### URL

	https://api.edmunds.com/api/inventory/v1/getall?zipcode={desired zipcode}&radius={miles in which to searh}&make={car make}&fmt=json
	
### Code Example

	# Get your access token
	curl -i -H 'Content-Type: application/x-www-form-urlencoded' 'https://api.edmunds.com/inventory/token' -X POST -d 'client_id=<api key>' -d 'client_secret=<shared secret>' -d 'grant_type=client_credentials'
	
	# Response should be something like this
	{"token_type":"bearer","mapi":"2ep93tpnyh6p5hgaxmp6qqsa","access_token":"jw8qpg8a3yprdbbkwvu2yas2","expires_in":3600}
	
	# With the access_token now available, we can make the call
	# In this example, we want to get a list of cars available for sale, or inventory listings, for all *NEW* Hyundais in the 90019 area within 100 miles
	curl -i -H 'Authorization: Bearer jw8qpg8a3yprdbbkwvu2yas2' 'https://api.edmunds.com/api/inventory/getall?radius=100&zipcode=90019&make=Hyundai'
	
	# You can make the same call directly in the browser as follows
	curl -i 'https://api.edmunds.com/api/inventory/getall?radius=100&zipcode=90019&make=Hyundai&access_token=jw8qpg8a3yprdbbkwvu2yas2'
	

