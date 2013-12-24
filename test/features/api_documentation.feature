Feature: API Documentation
  To verify API documentation availability

  Scenario: Check menu items
    Given I have opened /api-documentation/overview/index.html page
    Then I should see multilevel menu
    Then menu '' should have items 'API Overview', 'Vehicle API', 'Editorial API', 'Inventory API', 'Dealer API'
    And menu 'Vehicle API' should have items 'Spec: Make', 'Spec: Model', 'Spec: Model/Year', 'Spec: Style', 'Spec: Engine and Transmission', 'Spec: Colors and Options', 'Spec: Configuration', 'Spec: Equipment', 'Spec: Squish VIN', 'Spec: VIN Decoding', 'Price: True Cost to Own®', 'Price: True Cost to Own® Categories', 'Price: True Market Value®', 'Price: Incentives and Rebates', 'Service: Maintenance', 'Service: Recalls', 'Service: Service Bulletin', 'Service: Notes', 'Service: Local Labor Rate', 'Media: Photos', 'Content: Ratings and Reviews', 'Content: Letter Grade Rating'
