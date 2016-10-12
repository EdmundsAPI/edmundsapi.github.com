---
layout: api-documentation
title : 'Vehicle Inventory Listings by Dealer ID'
title_active_left_menu: 'Vehicle Listings'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Inventory Listings by Dealer ID'
spec: vehicle_listings
version: v1
api: inventory
dropdown-link: 'api/inventory/v1/getall'


level: 4
description_edpoint: 'Get Inventory Listings by Dealer ID'
title_md : Sample Request
number: 4

---


### Sample Request 1

Get the one NEW inventory listing for Santa Monica Audi

#### URL

		https://api.edmunds.com/api/inventory/v1/getall?types=NEW&dealerId=26711&pageSize=1
	
#### Response

	{
	  "totalCount": 242,
	  "resultsList": [
	    {
	      "year": "2013",
	      "features": [
	        "Side Window Sunshade: Power",
	        "Passenger Seat: Multi Level Heating",
	        "Front And Rear Parking Sensors",
	        "1 Subwoofers",
	        "Remote Anti Theft Alarm System",
	        "Keyless Ignition",
	        "Child Seat Anchors",
	        "Sunroof: Power Glass",
	        "In Dash Cd: Single Cd\/dvd",
	        "1st Row Seats: Bucket",
	        "One Touch Power Sunroof",
	        "Usb Connection",
	        "Bose Speakers",
	        "Driver's Seat: Multi Level Heating",
	        "Side Airbags: Dual Front And Dual Rear",
	        "Automatic Climate Control",
	        "Cd Mp3 Playback",
	        "Navigation System: Hard Drive Based Display W\/voice Activation And Directions",
	        "Tire Pressure Monitoring",
	        "Cruise Control",
	        "Seat Material: Premium Leather",
	        "Pre Wired For Phone",
	        "Cargo Tie Downs",
	        "Auxiliary Audio Input And Ipod\/iphone Integration",
	        "Stability Control",
	        "Real Time Traffic",
	        "Traction Control",
	        "Sirius W\/sirius Traffic"
	      ],
	      "options": [

	      ],
	      "make": "Audi",
	      "model": "A8",
	      "bodyType": "Sedan",
	      "trim": "L 3.0T quattro",
	      "modelYearId": "200421092",
	      "styleId": "200421094",
	      "transmission": "AUTOMATIC",
	      "modelLinkCode": "M030024",
	      "submodelId": "200421255",
	      "combinedMpg": "21",
	      "styleName": "L 3.0T quattro 4dr Sedan AWD (3.0L 6cyl S\/C 8A)",
	      "submodel": "A8 Sedan",
	      "inventoryType": "NEW",
	      "engineSize": "6",
	      "driveTrain": "all wheel drive",
	      "franchiseId": "26711",
	      "exteriorColor": "Quartz Gray Metallic|117,113,114",
	      "interiorColor": "N\/A",
	      "carfaxes": [
	        null
	      ],
	      "vin": "WAURGAFD6DN032587",
	      "mileage": "15",
	      "cityMpg": "18",
	      "hwyMpg": "28",
	      "msrpPrice": "90265",
	      "tmvPrice": "N\/A",
	      "inventoryPrice": "90265.0",
	      "stockNumber": "18843",
	      "exteriorGenericColor": "Gray",
	      "interiorGenericColor": "N\/A",
	      "guaranteedPrice": "N\/A",
	      "tmvinventoryPrice": "84333.0",
	      "tmvdealerCash": "0",
	      "tmvcustomerIncentives": "0",
	      "invoicePrice": "N\/A",
	      "dealerName": "Santa Monica Audi",
	      "dealerAddress": "1020 Santa Monica Blvd|Santa Monica, CA 90401",
	      "dealerDistance": "N\/A",
	      "dealerPhone": "(888) 479-6004 ",
	      "dealerLatitude": "34.021211",
	      "dealerLongitude": "-118.489241",
	      "dealerServiceRating": "0.0",
	      "dealerSaleRating": "3.3",
	      "countMatchedVehicles": null,
	      "countAllVehicles": "N\/A",
	      "dealerLocationId": "879",
	      "dealerSalesReviewsCount": "4",
	      "dealerServiceReviewsCount": "0",
	      "dealerMake": null
	    }
	  ]
	}
	
### Sample Request 2

Get the one NEW inventory listing for A4 from Santa Monica Audi

#### URL

	https://api.edmunds.com/api/inventory/v1/getall?types=NEW&dealerId=26711&pageSize=1&basicFilter=model:%22A4%22

#### Response

	{
	  "totalCount": 50,
	  "resultsList": [
	    {
	      "year": "2013",
	      "features": [
	        "Automatic Climate Control",
	        "Cd Mp3 Playback",
	        "Tire Pressure Monitoring",
	        "1 Subwoofers",
	        "Seat Material: Leather",
	        "Remote Anti Theft Alarm System",
	        "Side Airbags: Dual Front",
	        "In Dash Cd: Single Cd Player",
	        "Child Seat Anchors",
	        "Cruise Control",
	        "Sunroof: Power Glass",
	        "Auxiliary Mp3 Audio Input",
	        "Pre Wired For Phone",
	        "Sirius Xm",
	        "One Touch Power Sunroof",
	        "1st Row Seats: Bucket",
	        "Stability Control",
	        "Traction Control"
	      ],
	      "options": [

	      ],
	      "make": "Audi",
	      "model": "A4",
	      "bodyType": "Sedan",
	      "trim": "2.0T Premium",
	      "modelYearId": "200421515",
	      "styleId": "200421517",
	      "transmission": "AUTOMATIC",
	      "modelLinkCode": "M030029",
	      "submodelId": "200421798",
	      "combinedMpg": "26",
	      "styleName": "2.0T Premium 4dr Sedan (2.0L 4cyl Turbo CVT)",
	      "submodel": "A4 Sedan",
	      "inventoryType": "NEW",
	      "engineSize": "4",
	      "driveTrain": "front wheel drive",
	      "franchiseId": "26711",
	      "exteriorColor": "Glacier White Metallic|255,255,255",
	      "interiorColor": "N\/A",
	      "carfaxes": [
	        null
	      ],
	      "vin": "WAUAFAFL0DN033998",
	      "mileage": "31",
	      "cityMpg": "24",
	      "hwyMpg": "31",
	      "msrpPrice": "35880",
	      "tmvPrice": "N\/A",
	      "inventoryPrice": "35880.0",
	      "stockNumber": "D19080",
	      "exteriorGenericColor": "White",
	      "interiorGenericColor": "N\/A",
	      "guaranteedPrice": "N\/A",
	      "tmvinventoryPrice": "32429.0",
	      "tmvdealerCash": "0",
	      "tmvcustomerIncentives": "0",
	      "invoicePrice": "N\/A",
	      "dealerName": "Santa Monica Audi",
	      "dealerAddress": "1020 Santa Monica Blvd|Santa Monica, CA 90401",
	      "dealerDistance": "N\/A",
	      "dealerPhone": "(888) 479-6004 ",
	      "dealerLatitude": "34.021211",
	      "dealerLongitude": "-118.489241",
	      "dealerServiceRating": "0.0",
	      "dealerSaleRating": "3.3",
	      "countMatchedVehicles": null,
	      "countAllVehicles": "N\/A",
	      "dealerLocationId": "879",
	      "dealerSalesReviewsCount": "4",
	      "dealerServiceReviewsCount": "0",
	      "dealerMake": null
	    }
	  ]
	}
	
