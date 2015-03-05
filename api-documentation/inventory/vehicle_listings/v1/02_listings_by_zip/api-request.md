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


level: 4
description_edpoint: 'Get Inventory Listings by Zipcode'
title_md : Sample Request
number: 4

---


###Sample Request 1

Get one result for a NEW Hyundais for sale in the Santa Monica area (90404) within a 100-mile radius.

#### URL

	https://api.edmunds.com/api/inventory/v1/getall?radius=100&zipcode=90404&make=Hyundai&basicFilter=make:%22Hyundai%22&pagesize=1
	
#### Response

	{
	  "totalCount": 202385,
	  "resultsList": [
	    {
	      "year": "2012",
	      "features": [
	        "Automatic Climate Control",
	        "Seat Material: Leatherette",
	        "Cd Mp3 Playback",
	        "Tire Pressure Monitoring",
	        "Remote Anti Theft Alarm System",
	        "Side Airbags: Dual Front",
	        "In Dash Cd: Single Cd Player",
	        "Child Seat Anchors",
	        "Cruise Control",
	        "Sunroof: Power Glass",
	        "Pre Wired For Phone",
	        "Usb Connection",
	        "One Touch Power Sunroof",
	        "1st Row Seats: Bucket",
	        "Auxiliary Audio Input And Ipod\/iphone Integration",
	        "Stability Control",
	        "Traction Control",
	        "Sirius Xm",
	        "Passenger Seat: Multi Level Heating",
	        "Auxiliary Audio Input And Ipod Integration",
	        "In Dash Cd: Single Cd\/dvd",
	        "Navigation System: Hard Drive Based Display W\/voice Activation And Directions",
	        "Video Monitor: Front",
	        "Dvd Player",
	        "Harman\/kardon Speakers",
	        "Driver's Seat: Multi Level Heating",
	        "Sirius W\/sirius Traffic"
	      ],
	      "options": [
	        "Premium 1 Package (P01)",
	        "COMAND Single Disc Package (S32)",
	        "Sport Package (333)",
	        "Heated Front Seats (873)",
	        "iPod\/MP3 Media Interface (518)",
	        "Burl Walnut (731)"
	      ],
	      "make": "Mercedes-Benz",
	      "model": "C-Class",
	      "bodyType": "Sedan",
	      "trim": "C300 Sport 4MATIC",
	      "modelYearId": "100531654",
	      "styleId": "101398025",
	      "transmission": "AUTOMATIC",
	      "modelLinkCode": "M940001",
	      "submodelId": "200409981",
	      "combinedMpg": "N\/A",
	      "styleName": "C300 Sport 4MATIC 4dr Sedan AWD (3.0L 6cyl 7A)",
	      "submodel": "C-Class Sedan",
	      "inventoryType": "USED",
	      "engineSize": "6",
	      "driveTrain": "all wheel drive",
	      "franchiseId": "757855",
	      "exteriorColor": "Magnetite Black Metallic|40,42,39",
	      "interiorColor": "Black leatherette|0,0,0",
	      "carfaxes": [
	        null
	      ],
	      "vin": "WDDGF8BB6CR193318",
	      "mileage": "17974",
	      "cityMpg": "N\/A",
	      "hwyMpg": "N\/A",
	      "msrpPrice": "32899",
	      "tmvPrice": "N\/A",
	      "inventoryPrice": "32899.0",
	      "stockNumber": "120180L",
	      "exteriorGenericColor": "Black",
	      "interiorGenericColor": "Black",
	      "guaranteedPrice": "N\/A",
	      "tmvinventoryPrice": "N\/A",
	      "tmvdealerCash": "N\/A",
	      "tmvcustomerIncentives": "N\/A",
	      "invoicePrice": "N\/A",
	      "dealerName": "Silver Star Motors",
	      "dealerAddress": "3611 Northern Blvd|Long Island City, NY 11101",
	      "dealerDistance": "0.6571661839569499",
	      "dealerPhone": "(877) 364-8505",
	      "dealerLatitude": "40.75219",
	      "dealerLongitude": "-73.927625",
	      "dealerServiceRating": "0.0",
	      "dealerSaleRating": "1.0",
	      "countMatchedVehicles": null,
	      "countAllVehicles": "N\/A",
	      "dealerLocationId": "12450",
	      "dealerSalesReviewsCount": "1",
	      "dealerServiceReviewsCount": "0",
	      "dealerMake": null
	    }
	  ]
	}
	
###Sample Request 2

Get one listing for a USED Lexus RX-350 2011 in Santa Monica

#### URL

	https://api.edmunds.com/api/inventory/v1/getall?radius=100&types=USED&years=2011&zipcode=90404&pagesize=1&make=Lexus&basicFilter=make:%22Lexus%22&basicFilter=model:%22RX%20350%22

#### Response

	{
	  "totalCount": 64,
	  "resultsList": [
	    {
	      "year": "2011",
	      "features": [
	        "Side Airbags: Dual Front And Dual Rear",
	        "Automatic Climate Control",
	        "Seat Material: Cloth",
	        "In Dash Cd: 6 Cd Player",
	        "Cd Mp3 Playback",
	        "Tire Pressure Monitoring",
	        "Remote Anti Theft Alarm System",
	        "Keyless Ignition",
	        "Xm",
	        "Child Seat Anchors",
	        "Cruise Control",
	        "Auxiliary Mp3 Audio Input",
	        "Pre Wired For Phone",
	        "1st Row Seats: Bucket",
	        "Stability Control",
	        "Traction Control"
	      ],
	      "options": [

	      ],
	      "make": "Lexus",
	      "model": "RX 350",
	      "bodyType": "SUV",
	      "trim": "Base",
	      "modelYearId": "100533091",
	      "styleId": "101353967",
	      "transmission": "AUTOMATIC",
	      "modelLinkCode": "M030347",
	      "submodelId": "200410197",
	      "combinedMpg": "N\/A",
	      "styleName": "4dr SUV (3.5L 6cyl 6A)",
	      "submodel": "RX 350 SUV",
	      "inventoryType": "USED",
	      "engineSize": "6",
	      "driveTrain": "front wheel drive",
	      "franchiseId": "745197",
	      "exteriorColor": "Starfire Pearl|246,245,239",
	      "interiorColor": "Light Gray premium leather|151,151,151",
	      "carfaxes": [
	        null
	      ],
	      "vin": "JTJZK1BA9B2003027",
	      "mileage": "50561",
	      "cityMpg": "N\/A",
	      "hwyMpg": "N\/A",
	      "msrpPrice": "N\/A",
	      "tmvPrice": "N\/A",
	      "inventoryPrice": "30888.0",
	      "stockNumber": "13RX1810A",
	      "exteriorGenericColor": "White",
	      "interiorGenericColor": "Gray",
	      "guaranteedPrice": "N\/A",
	      "tmvinventoryPrice": "N\/A",
	      "tmvdealerCash": "N\/A",
	      "tmvcustomerIncentives": "N\/A",
	      "invoicePrice": "N\/A",
	      "dealerName": "Lexus Santa Monica",
	      "dealerAddress": "1501 Santa Monica Blvd|Santa Monica, CA 90404",
	      "dealerDistance": "0.866596994505937",
	      "dealerPhone": "(877) 369-5060",
	      "dealerLatitude": "34.024941",
	      "dealerLongitude": "-118.484664",
	      "dealerServiceRating": "5.0",
	      "dealerSaleRating": "4.3",
	      "countMatchedVehicles": null,
	      "countAllVehicles": "N\/A",
	      "dealerLocationId": "886",
	      "dealerSalesReviewsCount": "17",
	      "dealerServiceReviewsCount": "1",
	      "dealerMake": null
	    }
	  ]
	}
