Feature: Tool

  Scenario: This is a test scenario
    Given I am "admin"
    Then go to site "cypress-71a4615c"
    Then add tool "announcements"
