---
layout: api-documentation
title : 'Vehicle Inventory VIN Lookup'
title_active_left_menu: 'VIN Lookup'
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Inventory by VIN'
spec: vin_lookup
version: v1
api: inventory
dropdown-link: 'api/inventory/v1/lookup'


level: 3
description_edpoint: 'Get Inventory by VIN'
title_md : Description
number: 1

---

### Description

Look up a car available for sale by its VIN, zip code and range.

### URL

	https://api.edmunds.com/api/inventory/v1/lookup?vin={VIN}&zipcode={zip code}&range={radius value}&fmt=json
	
### Code Example

	# Get your access token
	curl -i -H 'Content-Type: application/x-www-form-urlencoded' 'https://api.edmunds.com/inventory/token' -X POST -d 'client_id=<api key>' -d 'client_secret=<shared secret>' -d 'grant_type=client_credentials'
	
	# Response should be something like this
	{"token_type":"bearer","mapi":"2ep93tpnyh6p5hgaxmp6qqsa","access_token":"jw8qpg8a3yprdbbkwvu2yas2","expires_in":3600}
	
	# With the access_token now available, we can make the call
	# In this example, we want to get a list of cars available for sale, or inventory listings, for all NEW cars at the Santa Monica Audi dealership, which has a dealerhsip ID of 26711
	curl -i -H 'Authorization: Bearer jw8qpg8a3yprdbbkwvu2yas2' 'https://api.edmunds.com/api/inventory/v1/lookup?vin=5FRYD3H20EB004006&zipcode=90019&range=50&fmt=json'
	
	# You can make the same call directly in the browser as follows
	curl -i 'https://api.edmunds.com/api/inventory/v1/lookup?vin=5FRYD3H20EB004006&fmt=json&access_token=jw8qpg8a3yprdbbkwvu2yas2'
	
