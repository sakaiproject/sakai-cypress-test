Feature: Tool

  @sakai-20
  @site
  Scenario: This is a test scenario
    Given I am the instructor
    Then go to the site
    Then add the "announcements" tool
    Then logout
