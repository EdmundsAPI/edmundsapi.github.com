Feature: Certified-Dev pages
  To verify Certified-Developer pages availability

  Scenario: Check left menu items
    Given I have opened '/certified-dev/why_build.html' page
    Given there is a list of left menu items for certified-dev pages:
        | Program Home             |
        | Why build?               |
        | How do I get started?    |
        | ECD Badges               |
        | Policies/Legal           |
        | Search the ECD directory |
    Then the certified-dev page should have 'WHY BUILD?' in the page title
    And I should see menu for certified-dev network
    And menu for certified-dev network should have items
    
    Then I choose 'How do I get started?' item from menu on certified-dev page
    And a new page should be open
    Then the certified-dev page should have 'HOW DO I GET STARTED?' in the page title
    And I should see menu for certified-dev network
    And menu for certified-dev network should have items

    Then I choose 'ECD Badges' item from menu on certified-dev page
    And a new page should be open
    Then the certified-dev page should have 'ECD BADGES' in the page title
    And I should see menu for certified-dev network
    And menu for certified-dev network should have items

    Then I choose 'Policies/Legal' item from menu on certified-dev page
    And a new page should be open
    Then the certified-dev page should have 'POLICIES/LEGAL' in the page title
    And I should see menu for certified-dev network
    And menu for certified-dev network should have items

    Then I choose 'Why build?' item from menu on certified-dev page
    Then the certified-dev page should have 'WHY BUILD?' in the page title
    And I should see menu for certified-dev network
    And menu for certified-dev network should have items

    Then I choose 'Search the ECD directory' item from menu on certified-dev page
    And a new page should be open
    Then the certified-dev page should have 'SEARCH THE ECD DIRECTORY' in the page title
    And I should see menu for certified-dev network
    And menu for certified-dev network should have items

  Scenario: Check forward from 'why build?' page to 'How do I get started?' as a business owner
    Given I have opened '/certified-dev/why_build.html' page
    Then I click to the get started button as business owner
    And a new page should be open
    And the certified-dev page should have 'HOW DO I GET STARTED?' in the page title
    And the business owner block should be active
    And the developer block should be inactive

  Scenario: Check forward from 'why build?' page to 'How do I get started?' as a developer
    Given I have opened '/certified-dev/why_build.html' page
    Then I click to the get started button as developer
    And a new page should be open
    And the certified-dev page should have 'HOW DO I GET STARTED?' in the page title
    And the business owner block should be inactive
    And the developer block should be active

  Scenario: Check certified-dev page
    Given I have opened '/certified-dev.html' page
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
    Given there is a left list:
      | Expand your business opportunities                 |
      | Promote your software solution services            |
      | Get access to API previews before they launch      |
      | Help form the future roadmap of the Edmunds API    |
      | Monthly conference call to discuss API development |
      | Get some awesome swag                              |
      | Make Money!                                        |
    Given there is a right list:
      | Build automotive solutions quickly                                                     |
      | Enhance your brand with data from the leading automotive website                       |
      | Have your staff focus on your book of business                                         |
      | Expand your technical capabilities with API experts                                    |
      | Opportunity for your applications to be featured on Edmunds.com's promotional channels |
    Given there is descriptions of badges
      | Desktop web and widget application developer. Expertise in building out automotive solutions for the desktop browser. |
      | Mobile web and native mobile application developer. Expertise in building automotive solutions for the small screens. |
      | Creating automotive experiences that are social in nature, including Facebook apps and Twitter integration.           |
      | Going beyond what you see on the surface of the data. Finding insights and deriving new value.                        |
    Given there is a navigated list
      | TERMS OF USE       |
      | API CONSOLE        |
      | API BRANDING GUIDE |
      | CONTACT US         |
      | API STATUS         |
    Then the page should have 'Edmunds Certified Developer Network - Overview' in the title
    And the page should have header links
    And the page should have header menu
    And the page should have link to 'get started'
    And the page should have left block
    And the page should have right block
    And the page should have badges
    And the page should have descriptions list
    And the page should have a navigated list

    Then I direct the mouse over the left block
    And the right list should be visible
    And the link 'How do you get started' should be visible

    Then I direct the mouse over the right block
    And the left list should be visible
    And the link 'How do you get started' should be visible

    Then I click to badge
    And description should be change