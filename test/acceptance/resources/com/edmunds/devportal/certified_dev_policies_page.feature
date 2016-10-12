Feature: Certified-def/polities
  To verify polities page availability

  Scenario: Check page 'policies'
    Given I have opened '/certified-dev/policies' page
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
    Given there is a list of policies
      | General Guidelines     |
      | Badge Box Use Policies |
      | Press Policies         |
      | Compliance Policies    |
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
    And the page should have list of policies
    And the page should have a navigated list
