---
layout: api-documentation
title : 'Get Dealer Details and Location'
title_active_left_menu: Details and Location
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Dealer Details and Location'
spec: details_and_location
version: v1
api: dealer
dropdown-link: 'v1/api/dealer'

level: 4
description_edpoint: 'Get Dealer Details and Location'
title_md : Sample Request
number: 4

---

###Sample Request

Get dealerships within the 2-mile radius of the **90019** area.

#### URL

	https://api.edmunds.com/v1/api/dealer?zipcode=90019&radius=2&fmt=json&api_key={api key}
	
#### Response

	{
	    "dealerHolder": [{
	        "id": "R_823649",
	        "locationId": "823649",
	        "address": {
	            "street": "1324 S La Brea Ave",
	            "apartment": "",
	            "city": "Los Angeles",
	            "stateCode": "CA",
	            "stateName": "California",
	            "county": "Los Angeles",
	            "country": "USA",
	            "zipcode": "90019",
	            "latitude": 34.049377,
	            "longitude": -118.344147
	        },
	        "name": "Citizen Collision Auto Repair",
	        "logicalName": "CitizenCollisionAutoRepair",
	        "type": "ROOFTOP",
	        "make": "",
	        "operations": {
	            "Wednesday": "08:00 AM-05:00 PM",
	            "Tuesday": "08:00 AM-05:00 PM",
	            "Thursday": "08:00 AM-05:00 PM",
	            "Saturday": "08:00 AM-01:00 PM",
	            "Friday": "08:00 AM-05:00 PM",
	            "Monday": "08:00 AM-05:00 PM",
	            "Sunday": ""
	        },
	        "contactinfo": {
	            "dealer_website": "",
	            "email_address": "",
	            "phone": "(323) 938-7977"
	        },
	        "publishDate": "2013-08-24",
	        "active": true,
	        "ppStatus": "INACTIVE",
	        "syncPublishDate": "2013-08-24"
	    }, {
	        "id": "R_682733",
	        "locationId": "682733",
	        "address": {
	            "street": "2339 S La Brea Ave",
	            "apartment": "",
	            "city": "Los Angeles",
	            "stateCode": "CA",
	            "stateName": "California",
	            "county": "Los Angeles",
	            "country": "USA",
	            "zipcode": "90016",
	            "latitude": 34.035839,
	            "longitude": -118.349558
	        },
	        "name": "La Brea Shell Auto Center",
	        "logicalName": "LaBreaShellAutoCenter",
	        "type": "ROOFTOP",
	        "make": "",
	        "operations": {},
	        "contactinfo": {
	            "dealer_website": "",
	            "email_address": "",
	            "phone": "(323) 935-8592"
	        },
	        "publishDate": "2013-08-24",
	        "active": true,
	        "ppStatus": "INACTIVE",
	        "syncPublishDate": "2013-08-24"
	    }, {
	        "id": "",
	        "locationId": "845",
	        "address": {
	            "street": "5070 Wilshire Blvd",
	            "apartment": "",
	            "city": "Los Angeles",
	            "stateCode": "CA",
	            "stateName": "California",
	            "county": "Los Angeles",
	            "country": "USA",
	            "zipcode": "90036",
	            "latitude": 34.061994,
	            "longitude": -118.340132
	        },
	        "name": "Beverly Hills BMW",
	        "logicalName": "BeverlyHillsBMW",
	        "type": "ROOFTOP",
	        "make": "Used,BMW",
	        "operations": {
	            "Wednesday": "9:00 AM-8:00 PM",
	            "Tuesday": "9:00 AM-8:00 PM",
	            "Thursday": "9:00 AM-8:00 PM",
	            "Saturday": "9:00 AM-7:00 PM",
	            "Friday": "9:00 AM-8:00 PM",
	            "Monday": "9:00 AM-8:00 PM",
	            "Sunday": "10:00 AM-7:00 PM"
	        },
	        "contactinfo": {
	            "dealer_website": "http://www.bmwofbeverlyhills.com/",
	            "email_address": "",
	            "phone": "(310) 358-7800"
	        },
	        "publishDate": "2013-08-24",
	        "active": true,
	        "ppStatus": "INACTIVE",
	        "syncPublishDate": "2013-08-24"
	    }, {
	        "id": "R_596378",
	        "locationId": "596378",
	        "address": {
	            "street": "5436 W 6th St",
	            "apartment": "",
	            "city": "Los Angeles",
	            "stateCode": "CA",
	            "stateName": "California",
	            "county": "Los Angeles",
	            "country": "USA",
	            "zipcode": "90036",
	            "latitude": 34.064901,
	            "longitude": -118.34482
	        },
	        "name": "Miracle Mile 76",
	        "logicalName": "MiracleMile76",
	        "type": "ROOFTOP",
	        "make": "",
	        "operations": {},
	        "contactinfo": {
	            "dealer_website": "",
	            "email_address": "",
	            "phone": "(323) 938-3286"
	        },
	        "publishDate": "2013-08-24",
	        "active": true,
	        "ppStatus": "INACTIVE",
	        "syncPublishDate": "2013-08-24"
	    }, {
	        "id": "R_708216",
	        "locationId": "708216",
	        "address": {
	            "street": "5910 W Pico Blvd",
	            "apartment": "",
	            "city": "Los Angeles",
	            "stateCode": "CA",
	            "stateName": "California",
	            "county": "Los Angeles",
	            "country": "USA",
	            "zipcode": "90035",
	            "latitude": 34.051453,
	            "longitude": -118.367997
	        },
	        "name": "Sidles Automotive",
	        "logicalName": "SidlesAutomotive_1",
	        "type": "ROOFTOP",
	        "make": "",
	        "operations": {},
	        "contactinfo": {
	            "dealer_website": "",
	            "email_address": "",
	            "phone": "(323) 297-9700"
	        },
	        "publishDate": "2013-08-24",
	        "active": true,
	        "ppStatus": "INACTIVE",
	        "syncPublishDate": "2013-08-24"
	    }, {
	        "id": "R_595306",
	        "locationId": "595306",
	        "address": {
	            "street": "2520 W Washington Blvd",
	            "apartment": "",
	            "city": "Los Angeles",
	            "stateCode": "CA",
	            "stateName": "California",
	            "county": "Los Angeles",
	            "country": "USA",
	            "zipcode": "90018",
	            "latitude": 34.039485,
	            "longitude": -118.31847
	        },
	        "name": "Washington Auto Center",
	        "logicalName": "WashingtonAutoCenter",
	        "type": "ROOFTOP",
	        "make": "",
	        "operations": {},
	        "contactinfo": {
	            "dealer_website": "",
	            "email_address": "",
	            "phone": "(323) 737-1757"
	        },
	        "publishDate": "2013-08-24",
	        "active": true,
	        "ppStatus": "INACTIVE",
	        "syncPublishDate": "2013-08-24"
	    }]
	}