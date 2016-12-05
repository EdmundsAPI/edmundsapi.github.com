Feature: Affiliate Network
  To verify api_affiliate_network page availability

  Scenario: Check page 'api_affiliate_network'
    Given I have opened '/api_affiliate_network/' page
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
    Given there is a navigated list
      | TERMS OF USE       |
      | API CONSOLE        |
      | API BRANDING GUIDE |
      | CONTACT US         |
      | API STATUS         |
    Then the page should have 'The API affiliate NETWORK' in the title
    And the page should have header links
    And the page should have header menu
    And the page should have link to 'get started'
