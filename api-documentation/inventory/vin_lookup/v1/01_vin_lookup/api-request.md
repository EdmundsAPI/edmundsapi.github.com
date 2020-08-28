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


### Sample Request

Look up inventory for VIN **1FT7X2B68CEA05672** in the 16229 area within a 50 mile range.

#### URL

	https://api.edmunds.com/api/inventory/v1/lookup?vin=1FT7X2B68CEA05672&zipcode=16229&range=50&fmt=json
	
#### Response

	{ "resultsList": [ { 
		"bodyType" : "Pickup",
		"carfaxes" : [ null ],
		"cityMpg" : "N/A",
		"combinedMpg" : "N/A",
		"countAllVehicles" : "N/A",
		"countMatchedVehicles" : null,
		"dealerAddress" : "110 Rte 908|Natrona Heights, PA 15065",
		"dealerDistance" : "4.215765600558796",
		"dealerId" : "53658",
		"dealerInPDP" : true,
		"dealerLatitude" : "40.666629",
		"dealerLocationId" : "828461",
		"dealerLongitude" : "-79.705697",
		"dealerMake" : null,
		"dealerName" : "#1 Cochran Ford of Allegheny Valley",
		"dealerPhone" : "(888) 635-2853 ",
		"dealerSaleRating" : "5.0",
		"dealerSalesReviewsCount" : "4",
		"dealerServiceRating" : "0.0",
		"dealerServiceReviewsCount" : "0",
		"driveTrain" : "four wheel drive",
		"engineSize" : "8",
		"exteriorColor" : "N/A",
		"exteriorGenericColor" : "N/A",
		"f34PhotoUrlE" : null,
		"f34PhotoUrlST" : null,
		"f34PhotoUrlT" : null,
		"features" : [ null ],
		"franchiseId" : "53658",
		"gpexperiationDate" : "2013-12-31",
		"guaranteedPrice" : "35798.0",
		"hasBuildDataAndFullyMatched" : false,
		"hwyMpg" : "N/A",
		"interiorColor" : "N/A",
		"interiorGenericColor" : "N/A",
		"inventoryId" : "26770926",
		"inventoryPrice" : "44380.0",
		"inventoryType" : "NEW",
		"invoicePrice" : "41717.75",
		"make" : "Ford",
		"mileage" : "12",
		"model" : "F-250 Super Duty",
		"modelLinkCode" : "M030229",
		"modelYearId" : "100536051",
		"msrpPrice" : "44380",
		"options" : [  ],
		"photoCount" : "N/A",
		"photoUrlsE" : [  ],
		"photoUrlsST" : [  ],
		"photoUrlsT" : [  ],
		"premierDealer" : true,
		"stockNumber" : "AF120054",
		"styleId" : "N/A",
		"styleName" : "N/A",
		"submodel" : "F-250 Super Duty SuperCab",
		"submodelId" : "200410525",
		"tmvPrice" : "N/A",
		"tmvcustomerIncentives" : "0",
		"tmvdealerCash" : "4750",
		"tmvinventoryPrice" : "35798.0",
		"transmission" : "AUTOMATIC",
		"trim" : "N/A",
		"vehicleComments" : "N/A",
		"vin" : "1FT7X2B68CEA05672",
		"year" : "2012"
	} ] }