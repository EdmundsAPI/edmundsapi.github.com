Feature: Widgets and Apps
  To verify Widgets and Apps availability

  Scenario: Check TMV widget
    Given I have opened '/widgets_and_apps/index.html' page
    Then I should see carousel
    When I select 'TRUE MARKET VALUE' carousel item
    When I click on 'Learn More' button of slide 1
    Then the page should have 'The True Market Value® Widget' in the title

    Then I should see 'SEVERAL COLOR SCHEMES' widget article
    And the widget article should have buttons:
      | gray   |
      | green  |
      | yellow |
    When I click on 'gray' color button
    Then I should see 'gray' widget background
    When I click on 'green' color button
    Then I should see 'green' widget background
    When I click on 'yellow' color button
    Then I should see 'yellow' widget background

    Then I should see 'CUSTOMIZE WIDGET' widget article
    Then I should see 'TMV' slider
    When I click on point 1 of 'TMV' slider
    Then the 'TMV' slider should have markers:
      | API Key (or Vehicle API key for old keys) |
      | Color Theme                               |
      | Light or Dark Background                  |
      | UI Layout                                 |
    When I click on point 2 of 'TMV' slider
    Then the 'TMV' slider should have markers:
      | Widget Width       |
      | Border Radius      |
      | Selected Car Makes |
    When I click on point 3 of 'TMV' slider
    Then the 'TMV' slider should have markers:
      | Vehicle State |
      | Zip Code      |
      | Price Values  |

    Then I should see 'ALL MODERN MOBILE BROWSERS ARE SUPPORTED' widget article
    Then I click on 'GET A WIDGET!' footer button
    Then I should see setup page from 'http://widgets.edmunds.com/tmv/v2?portal=true' source

    Then I choose 'widgets and apps' menu
    And a new page should be open
    When I click on 'Configure Now' button of slide 1
    Then I should see setup page from 'http://widgets.edmunds.com/tmv/v2?portal=true' source


  Scenario: Check NVC widget
    Given I have opened '/widgets_and_apps/index.html' page
    Then I should see carousel
    When I select 'NEW VEHICLE CONFIGURATOR' carousel item
    Then the 'NEW VEHICLE CONFIGURATOR' carousel item should be active
    When I click on 'Learn More' button of slide 2
    Then the page should have 'The New Vehicle Configurator Widget' in the title
    And the widget article should have step slides
    When I click on step 1
    Then the step slide 1 should be active
    Then I should see 'STEP1: CONFIGURE YOUR VEHICLE' step header
    When I click on step 2
    Then the step slide 2 should be active
    Then I should see 'STEP2: TRUE MARKET VALUE' step header
    When I click on step 3
    Then the step slide 3 should be active
    Then I should see 'STEP3: GET FREE DEALER PRICE QUOTES' step header

    Then I should see 'CUSTOMIZE WIDGET' widget article
    Then I should see 'NVC' slider
    When I click on point 1 of 'NVC' slider
    Then the 'NVC' slider should have markers:
      | Vehicle API key |
      | Dealer API key  |
      | Theme           |
      | Color scheme    |
      | Width           |
    When I click on point 2 of 'NVC' slider
    Then the 'NVC' slider should have markers:
      | Border radius   |
      | Tabs to display |
      | Included Makes  |
    When I click on point 3 of 'NVC' slider
    Then the 'NVC' slider should have markers:
      | Included makes   |
      | Default ZIP code |
      | Dealer Keywords  |

    Then I should see 'ALL MODERN MOBILE BROWSERS ARE SUPPORTED' widget article
    Then I click on 'GET A WIDGET!' footer button
    Then I should see setup page from 'http://widgets.edmunds.com/carconfig/v2?portal=true' source

    Then I choose 'widgets and apps' menu
    When I select 'NEW VEHICLE CONFIGURATOR' carousel item
    Then the 'NEW VEHICLE CONFIGURATOR' carousel item should be active
    When I click on 'Configure Now' button of slide 2
    Then I should see setup page from 'http://widgets.edmunds.com/carconfig/v2?portal=true' source