Feature: API Documentation
  To verify API documentation availability

  Scenario: Check menu items
    Given I have opened '/api-documentation/overview/index.html' page
    Then I should see left menu
    And menu '' should have items:
      | API Overview  |
      | Vehicle API   |
      | Editorial API |
      | Inventory API |
      | Dealer API    |
      | Media API     |
    And menu 'Vehicle API' should have items:
      | Spec: Make                           |
      | Spec: Model                          |
      | Spec: Model/Year                     |
      | Spec: Style                          |
      | Spec: Engine and Transmission        |
      | Spec: Colors and Options             |
      | Spec: Configuration                  |
      | Spec: Equipment                      |
      | Spec: Squish VIN                     |
      | Spec: VIN Decoding                   |
      | Price: True Cost to Own®             |
      | Price: True Cost to Own® Categories  |
      | Price: True Market Value®            |
      | Price: Incentives and Rebates        |
      | Service: Maintenance                 |
      | Service: Recalls                     |
      | Service: Service Bulletin            |
      | Service: Notes                       |
      | Service: Local Labor Rate            |
      | Content: Ratings and Reviews         |
      | Content: Letter Grade Rating         |
    And menu 'Editorial API' should have items:
      | Articles       |
      | Editor Reviews |
    And menu 'Inventory API' should have items:
      | VIN Lookup       |
      | Vehicle Listings |
    And menu 'Dealer API' should have items:
      | Ratings and Reviews  |
      | Details and Location |
    And menu 'API Overview' should be active
    And the page content should be displayed
    Then the page content should have articles:
      | Introduction             |
      | Data Hierarchy           |
      | URI Format               |
      | URI Examples             |
      | Rate Limit               |
      | Available Resources      |
      | Error Codes and Handling |
      | Useful API Calls         |
      | SDKs and Code Samples    |
      | Pedal to The Metal!      |

    When I choose 'Introduction' article
    Then I should see the 'Introduction' article content
    Then I return back to the top after 'Introduction' article
    And the page content should be displayed

    When I choose 'Data Hierarchy' article
    Then I should see the 'Data Hierarchy' article content
    Then I return back to the top after 'Data Hierarchy' article
    And the page content should be displayed

    When I choose 'URI Format' article
    Then I should see the 'URI Format' article content
    Then I return back to the top after 'URI Format' article
    And the page content should be displayed

    When I choose 'URI Examples' article
    Then I should see the 'URI Examples' article content
    Then I return back to the top after 'URI Examples' article
    And the page content should be displayed

    When I choose 'Rate Limit' article
    Then I should see the 'Rate Limit' article content
    Then I return back to the top after 'Rate Limit' article
    And the page content should be displayed

    When I choose 'Available Resources' article
    Then I should see the 'Available Resources' article content
    Then I return back to the top after 'Available Resources' article
    And the page content should be displayed

    When I choose 'Error Codes and Handling' article
    Then I should see the 'Error Codes and Handling' article content
    Then I return back to the top after 'Error Codes and Handling' article
    And the page content should be displayed

    When I choose 'Useful API Calls' article
    Then I should see the 'Useful API Calls' article content
    Then I return back to the top after 'Useful API Calls' article
    And the page content should be displayed

    When I choose 'SDKs and Code Samples' article
    Then I should see the 'SDKs and Code Samples' article content
    Then I return back to the top after 'SDKs and Code Samples' article
    And the page content should be displayed

    When I choose 'Pedal to The Metal!' article
    Then I should see the 'Pedal to The Metal!' article content
    Then I return back to the top after 'Pedal to The Metal!' article
    And the page content should be displayed



  Scenario: Check api overview documentation
    Given I have opened '/api-documentation/overview/index.html' page
    Then I should see left menu

    Then I choose 'Vehicle API' left menu
    And menu 'Vehicle API' should be active
    And the page content should be displayed
    Then the page content should have articles:
      | Overview             |
      | Quick Start          |
      | Static Datasets      |
      | API Uses             |
      | Available Resources  |

    Then I choose 'Editorial API' left menu
    And menu 'Editorial API' should be active
    And the page content should be displayed
    Then the page content should have articles:
      | Overview                          |
      | Quick Start                       |
      | Special Requirements              |
      | Available Resources               |
      | Available Article Categories      |
      | Granular Editor Review Components |
      | API Uses                          |

    Then I choose 'Inventory API' left menu
    And menu 'Inventory API' should be active
    And the page content should be displayed
    Then the page content should have articles:
      | Overview               |
      | OAuth 2.0              |
      | Quick Start            |
      | Edmunds Inventory Link |
      | Visibility Tiers       |
      | API Uses               |
      | Available Resources    |

    Then I choose 'Dealer API' left menu
    And menu 'Dealer API' should be active
    And the page content should be displayed
    Then the page content should have articles:
      | Overview               |
      | Quick Start            |
      | API Uses               |
      | Available Resources    |

    Then I choose 'Media API' left menu
    And menu 'Media API' should be active
    And the page content should be displayed
    Then the page content should have articles:
      | Overview               |
      | Quick Start            |
      | API Uses               |