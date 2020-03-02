Feature: Administrator

  Background:
    Given I am at the portal
    Then login as admin

  Scenario: Create the test instructor
    Then go to the users page
    Then go to the add user page
    And add the test instructor

  Scenario: Delete the test instructor
    Then go to the users page
    And delete the test instructor
