---
layout: api-documentation
title : 'Get Letter Grade Rating by Car Make/Model/Year'
title_active_left_menu: "Content: Letter Grade Rating"
title_parent: Api documentation

amount_version: 1
title-endpoint: 'Get Letter Grade Rating by Car Make/Model/Year'
spec: content_letter_grade
version: v2
api: vehicle
dropdown-link: 'api/vehicle/v2/grade/{make}/{model}/{year}'


level: 4
description_edpoint: 'Get Letter Grade Rating by Car Make/Model/Year'
title_md : Sample Request
number: 4

---

### Sample Request

Get Edmunds.com's Letter Grade Rating for **2013 Honda Accord**

#### URL

    https://api.edmunds.com/api/vehicle/v2/grade/honda/accord/2013?submodel=sedan&fmt=json&api_key={api key}

#### Response

    {
        "make": {
            "id": 200001444,
            "name": "Honda",
            "niceName": "honda"
        },
        "model": {
            "id": "Honda_Accord",
            "name": "Accord",
            "niceName": "accord"
        },
        "year": {
            "id": 100537293,
            "year": 2013
        },
        "style": {
            "id": 200434856,
            "name": "EX 4dr Sedan (2.4L 4cyl CVT)",
            "submodel": {
                "body": "Sedan",
                "modelName": "Accord Sedan",
                "niceName": "sedan"
            },
            "trim": "EX"
        },
        "date": "8/28/2012",
        "grade": "A",
        "summary": "Honda's 2013 Accord is more than the sum of its parts -- smooth and comfortable yet never out of its element. Honda has once again hit its stride with a midsize sedan that does everything well and feels like something we'd be happy to drive every day for years.",
        "ratings": [{
            "title": "Performance",
            "grade": "B",
            "score": 8.5,
            "summary": "Accord EX is among the best performing four-cylinder midsize sedans in dynamic tests. Fuel economy is on par for the segment.",
            "subRatings": [{
                 "title": "Acceleration",
                 "grade": "B",
                 "score": 8,
                 "summary": "CVT still feels weak off the line, but its 0-60 and quarter-mile performance is at the top of the segment (among 4-cyl models)."
            }, {
                "title": "Braking",
                "grade": "C",
                "score": 6.5,
                "summary": "Customarily weak Honda brakes. No significant distance fade in our test, but an uninspiring pedal."
            }, {
                "title": "Steering",
                "grade": "C",
                "score": 7,
                "summary": "Nothing special, but electric power steering offers adequate feel and feedback. "
            }, {
                "title": "Handling",
                "grade": "A",
                "score": 9,
                "summary": "Substantially better than old Accord despite the loss of double wishbone suspension up front. "
            }, {
                "title": "Driveability",
                "grade": "A",
                "score": 9,
                "summary": "Superb here. Mindlessly easy to drive. Not fun, but not offensive, either. A terrific midsize sedan."
            }]
        }, {
            "title": "Comfort",
            "grade": "B",
            "score": 8,
            "summary": "As comfortable as it needs to be -- comparable to Camry SE, which offers real damping. Never sloppy or soft in its suspension movements or creature comforts.",
            "subRatings": [{
                "title": "Seating Comfort",
                "grade": "B",
                "score": 8,
                "summary": "Vastly improved over 2012 Accord, which had awkward lower back support."
            }, {
                "title": "Ride Comfort",
                "grade": "B",
                "score": 8,
                "summary": "Comfortable, but the Accord does not live on the plush end of the scale."
            }, {
                "title": "Quietness",
                "grade": "B",
                "score": 7.5,
                "summary": "Average for the segment despite active noise cancellation."
            }]
        }, {
            "title": "Interior",
            "grade": "B",
            "score": 8,
            "summary": "A step above the old Accord and on par with the best in the segment when it comes to usability and functionality.",
            "subRatings": [{
                 "title": "Ergonomics",
                 "grade": "B",
                 "score": 8,
                 "summary": "Fewer buttons than before is nice. Also, they're logical and well placed."
            }, {
                "title": "Ingress/Egress",
                "grade": "C",
                "score": 7,
                "summary": "Ingress and egress are never a problem in Accord."
            }, {
                "title": "Space/Room",
                "grade": "A",
                "score": 9,
                "summary": "Smaller outside but the same size inside -- an impressive engineering feat. "
            }, {
                "title": "Visibility",
                "grade": "B",
                "score": 8,
                "summary": "Above average for the class. A low waistline aids visibility from the rear seat."
            }, {
                 "title": "Cargo/Storage",
                 "grade": "B",
                 "score": 8,
                 "summary": "An additional .8 cubes in the trunk is awesome considering this Accord's shorter overall length."
            }]
        }, {
            "title": "Value",
            "grade": "B",
            "score": 8.5,
            "summary": "More features, better handling and efficiency than before with only a mild price increase. Solid overall value.",
            "subRatings": [{
                 "title": "Build Quality (vs. $)",
                 "grade": "B",
                 "score": 8.5,
                 "summary": "Better than many competitors. Looks and feels like a Honda again. "
            }, {
                "title": "Features(vs. $)",
                "grade": "B",
                "score": 8,
                "summary": "Good safety features including LaneWatch. HondaLink, too, helps bring the Accord up to current feature-tech standards."
            }, {
                "title": "Cost",
                "grade": "B",
                "score": 8.5,
                "summary": "A solid value. See above."
            }, {
                "title": "MPG",
                "grade": "B",
                "score": 8,
                "summary": "This is a very close race among midsize sedans. Accord is better than before, but so is everyone else."
            }, {
                "title": "Warranty",
                "grade": "C",
                "score": 7,
                "summary": "Nothing spectacular here. Middle of the road. 3-year/36,000-mile basic, 5-year/60,000-mile drivetrain."
            }]
        }, {
            "title": "Fun To Drive",
            "grade": "B",
            "score": 8,
            "summary": "Better-than-average dynamics help the Accord be more fun than many competitors, but it's still a family car and not a sports car. ",
            "subRatings": [{
                "title": "Driving Experience",
                "grade": "B",
                "score": 7.5,
                "summary": "CVT is rarely fun, but it gets the job done. The six-speed manual (base transmission) and the Sport package (optional) raise the bar for fun to drive. "
            }, {
                "title": "Personality",
                "grade": "A",
                "score": 9,
                "summary": "More Honda personality than many Honda products in recent years. Solidly built with good materials, good visibility and a powertrain that's adequately powerful, miserly and utterly smooth."
            }]
        }]
    }