Feature: User

  Background:
    Given I am "admin"

  Scenario: Create the test instructor
    Then add user "cypress-test-instructor" "maintain"

  Scenario: Delete the test instructor
    Then remove user "cypress-test-instructor"
