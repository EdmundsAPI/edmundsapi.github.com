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
title_md : Response format
number: 3

---


### Response format

	{
		"resultsList": [{
			"year": {integer},
			"features": {array},
			"options": {array},
			"make": {string},
			"model": {string},
			"bodyType": {string},
			"trim": {string},
			"modelYearId": {integer},
			"styleId": {integer},
			"transmission": {string},
			"modelLinkCode": {string},
			"submodelId": {integer},
			"combinedMpg": {integer},
			"styleName": {string},
			"submodel": {string},
			"inventoryType": {string},
			"engineSize": {integer},
			"driveTrain": {string},
			"franchiseId": {integer},
			"exteriorColor": {string},
			"interiorColor": {string},
			"carfaxes": {array},
			"hasBuildDataAndFullyMatched": {boolean},
			"vin": {string},
			"mileage": {integer},
			"inventoryId": {integer},
			"cityMpg": {integer},
			"hwyMpg": {integer},
			"msrpPrice": {integer},
			"inventoryPrice": {float},
			"stockNumber": {string},
			"vehicleComments": {string},
			"exteriorGenericColor": {string},
			"interiorGenericColor": {string},
			"guaranteedPrice": {float},
			"gpexperiationDate": {date},
			"tmvinventoryPrice": {float},
			"tmvdealerCash": {flot},
			"tmvcustomerIncentives": {float},
			"invoicePrice": {float},
			"dealerInPDP": {boolean},
			"dealerName": {string},
			"dealerAddress": {string},
			"dealerPhone": {string},
			"dealerLatitude": {float},
			"dealerLongitude": {float},
			"dealerDistinace": {float},
			"dealerServiceRating": {float},
			"dealerSaleRating": {float},
			"countMatchedVehicles": {integer},
			"countAllVehicles": {integer},
			"dealerLocationId": {integer},
			"dealerSalesReviewsCount": {integer},
			"dealerServiceReviewsCount": {integer},
			"dealerMake": {string},
			"f34PhotoUrlsE": {string},
			"f34PhotoUrlsSE": {string},
			"f34PhotoUrlsT": {string},
			"photoUrlsST": {array},
			"photoUrlsST": {array},
			"photoUrlsST": {arrat},
			"tmvPrice": {float}
			"premierDealer": {boolean}
		}]
	}


| Property      				| Description                         						| Visibility    			|
|:------------------------------|:----------------------------------------------------------|:------------------------- |
| year		    		    	| The car year												| Edmunds, Partners, Public |
| features	    		    	| Array of features this car has	 						| Edmunds, Partners, Public |
| options	    		    	| Array of options this car has								| Edmunds, Partners, Public |
| make		    		    	| The car make						 						| Edmunds, Partners, Public |
| model		    		    	| The car model						 						| Edmunds, Partners, Public |
| bodyType	    		    	| The car type or category (see Vehicle API overview)		| Edmunds, Partners, Public |
| trim		    		    	| The car trim												| Edmunds, Partners, Public |
| modelYearId    		    	| The Model Year ID of this car								| Edmunds, Partners, Public |
| styleId	    		    	| The style ID of this car									| Edmunds, Partners, Public |
| transmission    		    	| The transmission type on this car 						| Edmunds, Partners, Public |
| modelLinkCode    		    	| The manufacturer's model code for this car				| Edmunds, Partners, Public |
| submodelId    		    	| The submodel ID for this car (i.e. Sedan, ..etc)			| Edmunds, Partners, Public |
| combinedMpg    		    	| The combined MPG for this car								| Edmunds, Partners, Public |
| engineSize    		    	| The size of this car's engine								| Edmunds, Partners, Public |
| driveTrain    		    	| The drivetrain of this car								| Edmunds, Partners, Public |
| styleName	    		    	| The style name of this car								| Edmunds, Partners, Public |
| submodel	    		    	| The car's submodel										| Edmunds, Partners, Public |
| inventoryType    		    	| Is this car NEW, USED or CPO?		 						| Edmunds, Partners |
| franchiseId    		    	| The dealer ID						 						| Edmunds, Partners |
| exteriorColor    		    	| The car's exterior color			 						| Edmunds, Partners, Public |
| interiorColor    		    	| The car's interior color			 						| Edmunds, Partners, Public |
| hasBuildDataAndFullyMatched   | Is the built data available for this car?					| Edmunds			|
| carfaxes	    				| The Carfax data for this car								| Edmunds		    |
| mileage	    				| The number of miles this car has on it					| Edmunds, Partners, Public |
| vin		    				| The vehicle VIN					 						| Edmunds, Partners, Public |
| inventoryId    				| The inventory ID											| Edmunds, partners, Public	|
| cityMpg	    				| The car's City MPG				 						| Edmunds, Partners, Public |
| HwyMpg	    				| The car's Highway MPG										| Edmunds, Partners, Public |
| msrpPrice	    				| The MSRP of this car										| Edmunds, Partners |
| inventoryPrice   				| The price set for this car		 						| Edmunds, Partners |
| stockNumber    				| The stock number of the car								| Edmunds, Partners, Public |
| vehicleComment   				| Comments on this vehicle			 						| Edmunds			|
| exteriorGenericColor			| Exterior generic color			 						| Edmunds, Partners, Public |
| interiorGenericColor			| Interior generic color			 						| Edmunds, Partners, Public |
| guaranteedPrice 				| Edmunds.com's guaranteed price	 						| Edmunds, Partners |
| gpexperiationDate				| Guaranteed Price expiration date	 						| Edmunds, partners	|
| tmvinventoryPrice				| TMV price for this car									| Edmunds, Partners |
| tmvdealerCash    				| Dealer cash for this car			 						| Edmunds, Partners |
| tmvcustomerIncentives			| Customer incentives for this car	 						| Edmunds, Partners |
| invoicePrice    				| The invoice price on this car		 						| Edmunds, Partners |
| dealerInPDP    				| Is this dealership in Edmunds PDP?						| Edmunds			|
| dealerName    				| The name of the dealership selling this car				| Edmunds, Partners |
| dealerAddress    				| The dealership address			 						| Edmunds, Partners |
| dealerPhone    				| The dealership phone number		 						| Edmunds, Partners |
| dealerLatitude    			| The dealership location coordinates 						| Edmunds, Partners |
| dealerLongitude    			| The dealership location coordinates  						| Edmunds, Partners |
| dealerDistinace    			| Distance from the zipcode supplied						| Edmunds, Partners |
| dealerServiceRating  			| Dealership Service rating			 						| Edmunds, Partners |
| dealerSaleRating    			| Dealership Sale rating									| Edmunds, Partners |
| countMatchedVehicles 			| Number of matched cars at the dealership					| Edmunds, Partners |
| countAllVehicles    			| All vehicle count at the dealership						| Edmunds 			|
| dealerLocationId    			| Dealership location ID 			 						| Edmunds, Partners |
| dealerSalesReviewsCount		| Number of sales reviews this dealer has					| Edmunds, Partners |
| dealerServiceReviewsCount		| Number of service reviews this dealer has					| Edmunds, Partners |
| dealerMake	    			| The car make						 						| Edmunds, Partners |
| f34PhotoUrlsE	    			| Car photos						 						| Edmunds			|
| f34PhotoUrlsST    			| Car photos						 						| Edmunds			|
| f34PhotoUrlsT	    			| Car photos						 						| Edmunds			|
| photoUrlsST	    			| Car photos						 						| Edmunds			|
| photoUrlsE	    			| Car photos						 						| Edmunds			|
| photoUrlsT	    			| Car photos						 						| Edmunds			|
| tmvPrice		    			| The TMV Price	(deprecated. Use tmvinventoryPrice)			| Edmunds			|
| premierDealer	    			| Is this dealership a premier dealer? 						| Edmunds			|

**Note:** *Public* visibility is only available to public API keys that have been approved for access by Edmunds.com
