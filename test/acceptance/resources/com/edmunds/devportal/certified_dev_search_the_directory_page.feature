Feature: Certified-def/search_the_directory
  To verify certified-def/search_the_directory page availability

  Scenario: Check page 'search_the_directory'
    Given I have opened '/certified-dev/search_the_directory' page
    Given there is a list of links:
      | MY ACCOUNT        |
      | REGISTER          |
      | API CONSOLE       |
      | API STATUS        |
      | AFFILIATE NETWORK |
      | TERMS OF SERVICE  |
      | FAQ               |
    Given there is a list of menu:
      | api documentation    |
      | widgets and apps     |
      | showcase             |
      | certified developers |
    Given there is a left menu
      | Program Home             |
      | Why build?               |
      | How do I get started?    |
      | ECD Badges               |
      | Policies/Legal           |
      | Search the ECD directory |
    Given there is a navigated list
      | TERMS OF USE       |
      | API CONSOLE        |
      | API BRANDING GUIDE |
      | CONTACT US         |
      | API STATUS         |
    Given there is a qualification types
      | Social    |
      | Mobile    |
      | Analytics |
      | Web       |
    Given there is a list of locations
      | Bohemia, NY   |
      | Newtown, PA   |
      | Atlanta, GA   |
    Then the page should have 'The Edmunds Certified Developer Network' in the title
    And the page should have header links
    And the page should have header menu
    And the page should have link to 'get started'
    And the page should have a navigated list
    And the page should have qualification types

    When I click 'social' and 'mobile' qualifications checkboxes
    And the page should have 'Social' and 'Mobile' item filters

    Then I click remove 'social' item filter
    And checkbox 'social' should be unchecked

    Then I click 'LOCATION' link
    And developers count in location should be correct