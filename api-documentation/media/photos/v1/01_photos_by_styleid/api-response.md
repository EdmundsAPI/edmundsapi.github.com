---
layout: api-documentation
title : 'Get Car Photos By Car Style ID'
title_active_left_menu: 'Photos'
title_parent: Api documentation

amount_version: 2
title-endpoint: 'Get Car Photos By Car Style ID'
spec: photos
version: v1
api: media
dropdown-link: 'v1/api/vehiclephoto/service/findphotosbystyleid'

level: 4
description_edpoint: 'Get Car Photos By Car Style ID'
title_md : Response format
number: 3

---

### Response format

	[{
	    "authorNames": {array},
	    "captionTranscript": {string},
	    "type": {string},
	    "subType": {string},
	    "shotTypeAbbreviation": {string},
	    "photoSrcs": {array}
	}]
	

| Property      		| Description                         	| Visibility                |
|:----------------------|:--------------------------------------|:------------------------- |
| authorNames	    	| List of authors						| Edmunds, Partners, Public	|
| captionTranscript		| Photo caption						 	| Edmunds, Partners, Public	|
| type	    			| "Photos" is the default.			 	| Edmunds, Partners, Public |
| subType    			| Shot type: interior, exterior, detail	| Edmunds, Partners, Public |
| shotTypeAbbreviation  | Photo perspective (see overview)		| Edmunds, Partners, Public |
| photoSrcs    			| List of photo URL stubs				| Edmunds, Partners, Public |

### photoSrcs Array

The `photoSrcs` array is a list of URL stubs, for example '/honda/civic/1991/oem/1991_honda_civic_2dr-hatchback_si_fq_oem_1_131.jpg'. The base URL for these stubs is 'http://media.ed.edmunds-media.com', and the complete URL for the example above would be [http://media.ed.edmunds-media.com/honda/civic/1991/oem/1991_honda_civic_2dr-hatchback_si_fq_oem_1_131.jpg](http://media.ed.edmunds-media.com/honda/civic/1991/oem/1991_honda_civic_2dr-hatchback_si_fq_oem_1_131.jpg).