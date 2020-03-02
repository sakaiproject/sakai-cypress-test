Feature: Portal

  Scenario: Login as admin
    Given I am at the portal
    Then login as admin
    And I can see the message of the day
