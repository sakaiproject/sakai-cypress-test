Feature: Student

  Background:
    Given I am at the portal
    Then login as admin

  Scenario: Create the test student
    Then go to the users page
    Then go to the add user page
    And add the test student

  Scenario: Delete the test student
    Then go to the users page
    And delete the test student
