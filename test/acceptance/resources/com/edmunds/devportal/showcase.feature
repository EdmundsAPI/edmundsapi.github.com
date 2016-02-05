Feature: Showcase
  To verify Showcase availability

  Scenario: Check Showcase
    Given I have opened '/showcase' page
    Then the showcases should be available:
        | All                |
        | Enterprise         |
        | Startups           |
        | Dealerships        |
        | OEMs               |
        | Solution Providers |
        | Individuals        |
    
    Then the 'All' showcase should be active
    And the list of 'All' applications should be present
    
    When I choose 'Enterprise' showcase
    Then the 'Enterprise' showcase should be active
    And the list of 'Enterprise' applications should be present
    
    When I choose 'Startups' showcase
    Then the 'Startups' showcase should be active
    And the list of 'Startups' applications should be present
    
    When I choose 'Dealerships' showcase
    Then the 'Dealerships' showcase should be active
    And the list of 'Dealerships' applications should be present
    
    When I choose 'OEMs' showcase
    Then the 'OEMs' showcase should be active
    And the list of 'OEMs' applications should be present
    
    When I choose 'Solution Providers' showcase
    Then the 'Solution Providers' showcase should be active
    And the list of 'Solution Providers' applications should be present
    
    When I choose 'Individuals' showcase
    Then the 'Individuals' showcase should be active
    And the list of 'Individuals' applications should be present
    