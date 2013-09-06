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


level: 4
description_edpoint: 'Get Inventory by VIN'
title_md : Sample Request
number: 4

---


###Sample Request

Look up inventory for VIN **5FRYD3H20EB004006**

#### URL

		https://api.edmunds.com/api/inventory/v1/lookup?vin=5FRYD3H20EB004006&fmt=json
	
#### Response

	{
	  "cashRebate": [
	    {
	      "sourceType": "STUDENT_COLLEGE_GRAD",
	      "startDate": "2013-06-11",
	      "restrictions": "Acura College Graduate Bonus is available towards leasing or retail purchases when financed or leased through Acura Financial Services. Must have graduated within the past two years or will graduate within the next four months with a Master, Bachelor or an Associate degree from a U.S. accredited college or registered nursing school. Graduate can choose between AFS Retail Finance, Acura Luxury Lease or Leadership Purchase Plan. Bonus Cash must be used towards the Down Payment or Cap Cost reduction. Cannot be combine with Zero Due at Signing special lease offers. Must finance through Acura Financial Services.",
	      "subprogramId": 825249,
	      "endDate": "2014-06-02",
	      "contentType": "CUSTOMER_BONUS_CASH",
	      "regions": [
	        "i397"
	      ],
	      "type": "CASH_REBATE",
	      "id": 2923598,
	      "zipcodeExceptions": [

	      ],
	      "name": "Customer Bonus Cash - 2014 Acura - National",
	      "primary": false,
	      "rebateAmount": 500,
	      "incentiveVehicles": [
	        {
	          "link": "\/api\/incentive\/incentivevehicle\/60339"
	        }
	      ],
	      "categories": [
	        "Car",
	        "Sedan",
	        "SUV",
	        "Midsize",
	        "Luxury",
	        "4dr SUV",
	        "Hybrid"
	      ],
	      "comments": ""
	    },
	    {
	      "sourceType": "MILITARY_VETERAN",
	      "startDate": "2013-04-02",
	      "restrictions": "Military Appreciation Bonus Cash is available towards leasing or retail purchases. This offer is available from Acura Financial Services and must be financed through Acura Financial Services. Amount must be disclosed as Down Payment or Capitalized Cost Reduction Assistance. Offer applies to active-duty and reserve personnel in the U.S. Military and their spouses. A valid Military Leave and Earnings Statements (LES) is required as proof of eligibility. Retirees are not eligible. May be combined with other available incentives excluding Zero Due at Signing Lease program.",
	      "subprogramId": 807606,
	      "endDate": "2013-12-31",
	      "contentType": "CUSTOMER_BONUS_CASH",
	      "regions": [
	        "i397"
	      ],
	      "type": "CASH_REBATE",
	      "id": 2863216,
	      "zipcodeExceptions": [

	      ],
	      "name": "Customer Bonus Cash - 2013 Acura ALL - National",
	      "primary": false,
	      "rebateAmount": 750,
	      "incentiveVehicles": [
	        {
	          "link": "\/api\/incentive\/incentivevehicle\/56593"
	        },
	        {
	          "link": "\/api\/incentive\/incentivevehicle\/60339"
	        }
	      ],
	      "categories": [
	        "Crossover",
	        "Car",
	        "Sedan",
	        "SUV",
	        "Midsize",
	        "4dr Hatchback",
	        "Compact",
	        "Luxury",
	        "Wagon",
	        "4dr SUV",
	        "Hybrid"
	      ],
	      "comments": ""
	    }
	  ],
	  "lease": "",
	  "lowApr": "",
	  "resultsList": [
	    {
	      "GPExperiationDate": "",
	      "exteriorGenericColor": "",
	      "interiorColor": "Ebony leather|0,0,0",
	      "msrpPrice": "43185",
	      "dealerSaleRating": "4.9",
	      "dealerPhone": "(888) 449-6130",
	      "submodel": "MDX SUV",
	      "driveTrain": "front wheel drive",
	      "vin": "5FRYD3H20EB004006",
	      "modelLinkCode": "",
	      "features": [

	      ],
	      "TMVDealerCash": "N\/A",
	      "year": "2014",
	      "tmvPrice": "N\/A",
	      "inventoryPrice": "N\/A",
	      "dealerDistance": "N\/A",
	      "dealerLatitude": "",
	      "styleId": "200465930",
	      "mileage": "N\/A",
	      "interiorGenericColor": "",
	      "engineSize": "N\/A",
	      "countAllVehicles": "N\/A",
	      "transmission": "AUTOMATIC",
	      "franchiseId": "43518",
	      "styleName": "4dr SUV (3.5L 6cyl 6A)",
	      "hasBuildDataAndFullyMatched": false,
	      "invoicePrice": "N\/A",
	      "carfaxes": [

	      ],
	      "TMVCustomerIncentives": "N\/A",
	      "guaranteedPrice": "N\/A",
	      "countMatchedVehicles": "",
	      "modelYearId": "",
	      "make": "Acura",
	      "model": "MDX",
	      "submodelId": "",
	      "dealerSalesReviewsCount": "12",
	      "exteriorColor": "White Diamond Pearl|233,233,227",
	      "dealerMake": "",
	      "vehicleComments": "",
	      "bodyType": "",
	      "hwyMpg": "N\/A",
	      "dealerServiceReviewsCount": "0",
	      "premierDealer": false,
	      "cityMpg": "N\/A",
	      "inventoryType": "",
	      "trim": "Base",
	      "options": [
	        "Fuel Consumption: City: 20 mpg",
	        "Fuel Consumption: Highway: 28 mpg",
	        "Memorized Settings including door mirror(s)",
	        "Memorized Settings including steering wheel",
	        "Memorized Settings for 2 drivers",
	        "Driver seat memory",
	        "Remote power door locks",
	        "Power windows",
	        "Cruise controls on steering wheel",
	        "Cruise control",
	        "4-wheel ABS Brakes",
	        "Front Ventilated disc brakes",
	        "1st, 2nd and 3rd row head airbags",
	        "Passenger Airbag",
	        "Side airbag",
	        "Rear air conditioning with separate controls",
	        "50-50 Third Row Seat",
	        "Manual Folding Third Row Seat",
	        "Express open\/close glass sunroof",
	        "Rear spoiler: Lip",
	        "Bluetooth HandsFreeLink wireless phone connectivity",
	        "Audio system security",
	        "Digital Audio Input",
	        "In-Dash single CD player",
	        "Audio system memory card slot",
	        "MP3 player",
	        "XM AM\/FM\/Satellite Radio",
	        "XM Satellite Radio",
	        "Speed Sensitive Audio Volume Control",
	        "Total Number of Speakers: 8",
	        "Braking Assist",
	        "ABS and Driveline Traction Control",
	        "Stability control",
	        "Privacy glass: Deep",
	        "Machined aluminum rims",
	        "Wheel Diameter: 18",
	        "Wheel Width: 8",
	        "Driver knee airbags",
	        "Leather\/metal-look steering wheel trim",
	        "Leather\/metal-look shift knob trim",
	        "Simulated wood\/metal-look dash trim",
	        "Simulated wood\/metal-look door trim",
	        "Simulated wood\/metal-look center console trim",
	        "Video Monitor Location: Front",
	        "Trip computer",
	        "External temperature display",
	        "Tachometer",
	        "Manufacturer's 0-60mph acceleration time (seconds): 6.5 s",
	        "Auxilliary transmission cooler",
	        "Power remote w\/tilt down driver mirror adjustment",
	        "Heated driver mirror",
	        "Heated passenger mirror",
	        "Electrochromatic rearview mirror",
	        "Power remote w\/tilt down passenger mirror adjustment",
	        "Dual reverse tilt mirrors",
	        "Turn signal in mirrors",
	        "Dual illuminated vanity mirrors",
	        "Compass",
	        "Daytime running lights",
	        "Driver and passenger heated-cushion, driver heated-seatback",
	        "Rear heat ducts with separate controls",
	        "Remote window operation",
	        "Audio controls on steering wheel",
	        "Power liftgate",
	        "Power remote trunk release",
	        "Front and rear reading lights",
	        "Anti-theft alarm system",
	        "Leather seat upholstery",
	        "Front sport seat",
	        "Split rear bench",
	        "Fold forward seatback rear seats",
	        "Rear seats center armrest",
	        "Tilt and telescopic steering wheel",
	        "Transmission gear shifting controls on steering wheel",
	        "Speed-proportional electric power steering",
	        "Suspension class: Regular",
	        "Driver adjustable suspension ride control",
	        "Interior air filtration",
	        "Automatic front air conditioning",
	        "Dual front air conditioning zones",
	        "Tire Pressure Monitoring System: Tire specific",
	        "Remote activated exterior entry lights",
	        "Cargo area light",
	        "Max cargo capacity: 68 cu.ft.",
	        "Vehicle Emissions: ULEV II",
	        "Fuel Type: Premium unleaded",
	        "Fuel Capacity: 19.5 gal.",
	        "Instrumentation: Low fuel level",
	        "Clock: In-dash",
	        "Headlights off auto delay",
	        "Driver Seat Head Restraint Whiplash Protection",
	        "Head Restraint Whiplash Protection with Passenger Seat",
	        "Active suspension",
	        "Coil front spring",
	        "Regular front stabilizer bar",
	        "Independent front suspension classification",
	        "Strut front suspension",
	        "Four-wheel Independent Suspension",
	        "Coil rear spring",
	        "Rear Stabilizer Bar: Regular",
	        "Independent rear suspension",
	        "Multi-link rear suspension",
	        "Front and rear suspension stabilizer bars",
	        "Variable intermittent front wipers",
	        "Metal-look w\/chrome surround grille",
	        "Center Console: Full with covered storage",
	        "Overhead console: Mini with storage",
	        "Curb weight: 4,025 lbs.",
	        "Overall Length: 193.6",
	        "Overall Width: 77.2",
	        "Overall height: 67.6",
	        "Wheelbase: 111.0",
	        "Front Head Room: 38.1",
	        "Rear Head Room: 38.5",
	        "Front Leg Room: 41.5",
	        "Rear Leg Room: 36.5",
	        "Front Shoulder Room: 61.1",
	        "Rear Shoulder Room: 59.1",
	        "Front Hip Room: 57.5",
	        "Rear Hip Room: 57.8",
	        "3rd Row Head Room: 35.6",
	        "3rd Row Leg Room: 27.4",
	        "3rd Row Shoulder Room: 54.7",
	        "3rd Row Hip Room: 40.6",
	        "Three 12V DC power outlets",
	        "Transmission hill holder",
	        "Seatbelt pretensioners: Front",
	        "Rear center seatbelt: 3-point belt",
	        "Door reinforcement: Side-impact door beam",
	        "Engine immobilizer",
	        "Cargo tie downs",
	        "Floor mats: Carpet front and rear",
	        "Cupholders: Front and rear",
	        "Door pockets: Driver, passenger and rear",
	        "Seatback storage: 2",
	        "Tires: Width: 245 mm",
	        "Tires: Profile: 60",
	        "Tires: Speed Rating: H",
	        "Diameter of tires: 18.0",
	        "Type of tires: Performance AS"
	      ],
	      "TMVInventoryPrice": "N\/A",
	      "dealerLongitude": "",
	      "dealerName": "Frank Leta Acura",
	      "dealerLocationId": "",
	      "dealerAddress": "11777 Tesson Ferry Rd|Saint Louis, MO 63128",
	      "dealerServiceRating": "0.0",
	      "combinedMpg": "N\/A",
	      "stockNumber": "",
	      "inventoryId": ""
	    }
	  ],
	  "incentiveAvailable": "yes"
	}
