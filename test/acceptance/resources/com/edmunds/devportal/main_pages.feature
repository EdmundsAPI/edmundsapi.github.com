Feature: Main pages
  To verify main pages availability

  Scenario: Check page titles
    Given I have opened '/' page
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
    Then the page should have 'Edmunds Developer Network - Welcome to the Edmunds API' in the title
    And the page should have header links
    And the page should have header menu
    And the page should have link to 'get started'
    Then I choose 'api documentation' menu
    And a new page should be open
    Then the page should have 'API Overview' in the title
    And the page should have header links
    And the page should have header menu
    And the page should have link to 'get started'
    Then I choose 'widgets and apps' menu
    And a new page should be open
    Then the page should have 'The Edmunds API - Widgets' in the title
    And the page should have header links
    And the page should have header menu
    And the page should have link to 'get started'
    Then I choose 'showcase' menu
    And a new page should be open
    Then the page should have 'Applications Built with The Edmunds API' in the title
    And the page should have header links
    And the page should have header menu
    And the page should have link to 'get started'
    Then I choose 'certified developers' menu
    And a new page should be open
    Then the page should have 'Edmunds Certified Developer Network - Overview' in the title
    And the page should have header links
    And the page should have header menu
    And the page should have link to 'get started'
