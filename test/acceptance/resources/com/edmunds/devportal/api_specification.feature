Feature: API Documentation
  To verify API specification availability

  Scenario: Check api documentation specification
    Given I have opened '/api-documentation/overview/index.html' page
    Given there is a list of specification articles:
      | description     |
      | parameters      |
      | response format |
      | sample request  |
    Then I should see left menu

    Then I choose 'Spec: Make' left menu
    And menu 'Spec: Make' should be active
    And the 'v2' documentation should be present
    And the 'v1' documentation should be present
    And menu 'v2' should be active
    And the documentation should have 3 endpoints
    When I choose 'api/vehicle/v2/makes' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/{make}' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/makes/count' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1' documentation
    And menu 'v1' should be active
    And the documentation should not have endpoints

    Then I choose 'Spec: Model' left menu
    And menu 'Spec: Model' should be active
    And the 'v2' documentation should be present
    And the 'v1' documentation should be present
    And menu 'v2' should be active
    And the documentation should have 3 endpoints
    When I choose 'api/vehicle/v2/{make}/{model}' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/{make}/models' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/{make}/models/count' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1' documentation
    And menu 'v1' should be active
    And the documentation should not have endpoints

    Then I choose 'Spec: Model/Year' left menu
    And menu 'Spec: Model/Year' should be active
    And the 'v2' documentation should be present
    And the 'v1' documentation should be present
    And menu 'v2' should be active
    And the documentation should have 3 endpoints
    When I choose 'api/vehicle/v2/{make}/{model}/years/count' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/{make}/{model}/{year}' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/{make}/{model}/years' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1' documentation
    And menu 'v1' should be active
    And the documentation should not have endpoints

    Then I choose 'Spec: Style' left menu
    And menu 'Spec: Style' should be active
    And the 'v2' documentation should be present
    And the 'v1' documentation should be present
    And menu 'v2' should be active
    And the documentation should have 7 endpoints
    When I choose 'api/vehicle/v2/styles/count' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/{make}/styles/count' endpoint
    Then the endpoint should have specification articles
    When I choose '/api/vehicle/v2/partners/chrome/styles/{ChromeId}' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/styles/{id}' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/{make}/{model}/{year}/styles' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/{make}/{model}/{year}/styles/count' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/{make}/{model}/styles/count' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1' documentation
    And menu 'v1' should be active
    And the documentation should not have endpoints

    Then I choose 'Spec: Engine and Transmission' left menu
    And menu 'Spec: Engine and Transmission' should be active
    And the 'v2' documentation should be present
    And the 'v1' documentation should be present
    And menu 'v2' should be active
    And the documentation should have 4 endpoints
    When I choose 'api/vehicle/v2/styles/{style ID}/transmissions' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/styles/{style ID}/engines' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/engines/{id}' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/transmission/{id}' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1' documentation
    And menu 'v1' should be active
    And the documentation should not have endpoints

    Then I choose 'Spec: Colors and Options' left menu
    And menu 'Spec: Colors and Options' should be active
    And the 'v2' documentation should be present
    And the 'v1' documentation should be present
    And menu 'v2' should be active
    And the documentation should have 4 endpoints
    When I choose 'api/vehicle/v2/colors/{id}' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/styles/{style ID}/options' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/styles/{style ID}/colors' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/options/{id}' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1' documentation
    And menu 'v1' should be active
    And the documentation should not have endpoints

    Then I choose 'Spec: Configuration' left menu
    And menu 'Spec: Configuration' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 2 endpoints
    When I choose 'v1/api/configurator/default' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/configurator/withOptions' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Spec: Equipment' left menu
    And menu 'Spec: Equipment' should be active
    And the 'v2' documentation should be present
    And the 'v1' documentation should be present
    And menu 'v2' should be active
    And the documentation should have 2 endpoints
    When I choose 'api/vehicle/v2/styles/{style ID}/equipment' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/equipment/{id}' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1' documentation
    And menu 'v1' should be active
    And the documentation should not have endpoints

    Then I choose 'Spec: Squish VIN' left menu
    And menu 'Spec: Squish VIN' should be active
    And the 'v1' documentation shouldn't be present
    And the 'v2' documentation should be present
    And menu 'v2' should be active
    And the documentation should have 1 endpoints
    When I choose 'api/vehicle/v2/squishvins/{squish VIN}/' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Spec: VIN Decoding' left menu
    And menu 'Spec: VIN Decoding' should be active
    And the 'v2' documentation should be present
    And the 'v1' documentation should be present
    And menu 'v2' should be active
    And the documentation should have 1 endpoints
    When I choose 'api/vehicle/v2/vins/{vin}' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1' documentation
    And menu 'v1' should be active
    And the documentation should have 1 endpoints

    Then I choose 'Price: True Cost to Own®' left menu
    And menu 'Price: True Cost to Own®' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 7 endpoints
    When I choose 'v1/api/tco/usedtotalcashpricebystyleidandzip/{style ID}/{zipcode}' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/tco/getmakeswithtcodata' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/tco/newtotalcashpricebystyleidandzip/{style ID}/{zipcode}' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/tco/getstyleswithtcodatabysubmodel' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/tco/newtruecosttoownbystyleidandzip/{style ID}/{zipcode}' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/tco/usedtruecosttoownbystyleidandzip/{style ID}/{zipcode}' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/tco/getmodelswithtcodata' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Price: True Cost to Own® Categories' left menu
    And menu 'Price: True Cost to Own® Categories' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 2 endpoints
    When I choose 'api/tco/v1/details/allusedtcobystyleidzipandstate/{style ID}/{zipcode}/{US State}' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/tco/v1/details/allnewtcobystyleidzipandstate/{style ID}/{zipcode}/{US State}' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Price: True Market Value®' left menu
    And menu 'Price: True Market Value®' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 6 endpoints
    When I choose 'v1/api/vehicle/tmv/tmvservice/findcertifiedpriceforstyle' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/vehicle/tmv/tmvservice/calculateusedtmv' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/v1/vehicle/vin/{vin}/price' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/vehicle/tmv/tmvservice/calculatenewtmv' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/vehicle/tmv/tmvservice/calculatetypicallyequippedusedtmv' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/v1/vehicle/{make}/{year}/price' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Price: Incentives and Rebates' left menu
    And menu 'Price: Incentives and Rebates' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 7 endpoints
    When I choose 'v1/api/vehicle/incentive/incentiverepository/findincentivesbymakeid' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/vehicle/incentive/incentiverepository/findincentivesbystyleid' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/vehicle/incentive/incentiverepository/findincentivesbymodelyearidandzipcode' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/vehicle/incentive/incentiverepository/findincentivesbycategoryandzipcode' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/vehicle/incentive/incentiverepository/findincentivesbystyleidandzipcode' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/vehicle/incentive/incentiverepository/findbyid' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/vehicle/incentive/incentiverepository/findincentivesbymakeidandzipcode' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Service: Maintenance' left menu
    And menu 'Service: Maintenance' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 3 endpoints
    When I choose 'v1/api/maintenance/action/{id}' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/maintenance/actionrepository/findmodelyearidswithmaintenanceschedule' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/maintenance/actionrepository/findbymodelyearid' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Service: Recalls' left menu
    And menu 'Service: Recalls' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 2 endpoints
    When I choose 'v1/api/maintenance/recallrepository/findbymodelyearid' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/maintenance/recall/{id}' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Service: Service Bulletin' left menu
    And menu 'Service: Service Bulletin' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 2 endpoints
    When I choose 'v1/api/maintenance/servicebulletin/{id}' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/maintenance/servicebulletinrepository/findbymodelyearid' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Service: Notes' left menu
    And menu 'Service: Notes' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 1 endpoints
    When I choose 'v1/api/maintenance/stylesnotes/{style ID}' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Service: Local Labor Rate' left menu
    And menu 'Service: Local Labor Rate' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 1 endpoints
    When I choose 'v1/api/maintenance/ziplaborrate/{zip code}' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Media: Photos' left menu
    And menu 'Media: Photos' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 1 endpoints
    When I choose 'v1/api/vehiclephoto/service/findphotosbystyleid' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Content: Ratings and Reviews' left menu
    And menu 'Content: Ratings and Reviews' should be active
    And the 'v2' documentation should be present
    And the 'v1' documentation should be present
    And menu 'v2' should be active
    And the documentation should have 3 endpoints
    When I choose 'api/vehiclereviews/v2/{make}/{model}/{year}' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehiclereviews/v2/styles/{styleId}' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehiclereviews/v2/{review ID}' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1' documentation
    And menu 'v1' should be active
    And the documentation should not have endpoints

    Then I choose 'Content: Letter Grade Rating' left menu
    And menu 'Content: Letter Grade Rating' should be active
    And the 'v1' documentation shouldn't be present
    And the 'v2' documentation should be present
    And menu 'v2' should be active
    And the documentation should have 2 endpoints
    When I choose 'api/vehicle/v2/grade/{style ID}' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/vehicle/v2/grade/{make}/{model}/{year}' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Articles' left menu
    And menu 'Articles' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 1 endpoints
    When I choose 'v1/content' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Editor Reviews' left menu
    And menu 'Editor Reviews' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 1 endpoints
    When I choose 'v1/content/editorreviews' endpoint
    Then the endpoint should have specification articles

    Then I choose 'VIN Lookup' left menu
    And menu 'VIN Lookup' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 1 endpoints
    When I choose 'api/inventory/v1/lookup' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Vehicle Listings' left menu
    And menu 'Vehicle Listings' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 2 endpoints
    When I choose 'api/inventory/v1/getall' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Ratings and Reviews' left menu
    And menu 'Ratings and Reviews' should be active
    And the 'v2' documentation shouldn't be present
    And the 'v1' documentation should be present
    And menu 'v1' should be active
    And the documentation should have 2 endpoints
    When I choose 'v1/api/drrrepository/getdrrbydealerid' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1/api/drrrepository/getdrrbyzipcodeandmake' endpoint
    Then the endpoint should have specification articles

    Then I choose 'Details and Location' left menu
    And menu 'Details and Location' should be active
    And the 'v2' documentation should be present
    And the 'v1' documentation should be present
    And menu 'v2' should be active
    And the documentation should have 9 endpoints
    When I choose 'api/dealer/v2/repairshops' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/dealer/v2/repairshops/{repairshopId}' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/dealer/v2/repairshops/count' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/dealer/v2/franchises' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/dealer/v2/franchises/{franchiseId}' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/dealer/v2/franchises/count' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/dealer/v2/dealers' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/dealer/v2/dealers/{id}' endpoint
    Then the endpoint should have specification articles
    When I choose 'api/dealer/v2/dealers/count' endpoint
    Then the endpoint should have specification articles
    When I choose 'v1' documentation
    And menu 'v1' should be active
    And the documentation should have 1 endpoints
    When I choose 'v1/api/dealer' endpoint
    Then the endpoint should have specification articles
