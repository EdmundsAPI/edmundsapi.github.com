Feature: Main Page
  To verify Main Page functionality

  Scenario: Check the API carousel
    Given I have opened '/' page
    Then the '1' item info should be displayed

    When I select 'Editorial API' API carousel item
    Then the '2' item info should be displayed

    When I select 'Dealer API' API carousel item
    Then the '3' item info should be displayed

    When I select 'Inventory API' API carousel item
    Then the '4' item info should be displayed

    When I select 'Vehicle API' API carousel item
    Then the '1' item info should be displayed

    When I select 'Media API' API carousel item
    Then the '5' item info should be displayed

  Scenario: Check Built with Edmunds API carousel
    Given I have opened '/' page
    Then I should see carousel
    And the carousel should have '5' items

    When I select '2' Built with Edmunds API carousel item
    Then the '2' Built with Edmunds API carousel item should be active
    And the slide '2' of Built with Edmunds API should be displayed

    When I select '3' Built with Edmunds API carousel item
    Then the '3' Built with Edmunds API carousel item should be active
    And the slide '3' of Built with Edmunds API should be displayed

    When I select '4' Built with Edmunds API carousel item
    Then the '4' Built with Edmunds API carousel item should be active
    And the slide '4' of Built with Edmunds API should be displayed

    When I select '5' Built with Edmunds API carousel item
    Then the '5' Built with Edmunds API carousel item should be active
    And the slide '5' of Built with Edmunds API should be displayed

    When I select '1' Built with Edmunds API carousel item
    Then the '1' Built with Edmunds API carousel item should be active
    And the slide '1' of Built with Edmunds API should be displayed
