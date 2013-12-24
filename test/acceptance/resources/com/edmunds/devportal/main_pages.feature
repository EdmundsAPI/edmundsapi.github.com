Feature: Main pages
  To verify main pages availability

  Scenario Outline: Check page titles
    Given I have opened <page> page
    Then the page should have <title> in title

  Examples:
    | page                                   | title                                                  |
    | /                                      | Edmunds Developer Network - Welcome to the Edmunds API |
    | /api-documentation/overview/index.html | API Overview                                           |
    | /widgets_and_apps/index.html           | The Edmunds API - Widgets                              |
    | /showcase.html                         | Applications Built with The Edmunds API                |
    | /certified-dev.html                    | Edmunds Certified Developer Network - Overview         |
