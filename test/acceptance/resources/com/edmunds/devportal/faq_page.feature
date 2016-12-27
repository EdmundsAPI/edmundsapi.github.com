Feature: FAQ
  To verify faq page availability

  Scenario: Check page 'faq'
    Given I have opened '/faq.html' page
    Given there is a list of links:
      | MY ACCOUNT        |
      | REGISTER          |
      | API CONSOLE       |
      | API STATUS        |
      | CONTACT US        |
      | TERMS OF SERVICE  |
      | FAQ               |
    Given there is a list of menu:
      | api documentation    |
      | widgets and apps     |
      | showcase             |
      | affiliate network    |
    Given there is a navigated list
      | TERMS OF USE       |
      | API CONSOLE        |
      | API BRANDING GUIDE |
      | CONTACT US         |
      | API STATUS         |
    Then the page should have 'Frequently Asked Questions' in the title
    And the page should have header links
    And the page should have header menu
    And the page should have link to 'get started'
    And the page should have a navigated list
