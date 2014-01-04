Feature: Certified-def/get_start
  To verify certified-def/get_start page availability

  Scenario: Check page 'get_started'
    Given I have opened '/certified-dev/get_start.html' page
    Given there is a list of links:
      | MY ACCOUNT        |
      | REGISTER          |
      | API CONSOLE       |
      | FORUM             |
      | API STATUS        |
      | AFFILIATE NETWORK |
      | TERMS OF USE      |
      | FAQ               |
      | BLOG              |
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
    Then the page should have 'The Edmunds Certified Developer Network' in the title
    And the page should have header links
    And the page should have header menu
    And the page should have link to 'get started'
    And the page should have link to 'CERTIFIED DEVELOPER'
    And the page should have a left menu
    And the page should have link to 'View Certified Developers Directory'
    And the page should have a navigated list

    Then I click 'CERTIFIED DEVELOPER' link
    And the right block should be visible
    And the page should have link to 'Check Out Our Codecademy Course'
    And the page should have link to 'BUSINESS OWNER'

    Then I click 'BUSINESS OWNER' link
    And the left block should be visible

  Scenario: Check link 'view certified directory'
    Given I have opened '/certified-dev/get_start.html' page
    Then I click 'View Certified Developers Directory' link
    And a new page should be open
