Feature: Terms Of Use
  To verify terms_of_service page availability

  Scenario: Check page 'terms_of_service'
    Given I have opened '/terms_of_service/' page
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
    Then the page should have 'The Edmunds API Terms of Service' in the title
    And the page should have header links
    And the page should have header menu
    And the page should have link to 'get started'
    And the page should have a navigated list
