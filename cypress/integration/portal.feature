Feature: Portal

  Scenario: Login as admin without password specified
    Given I am "admin"
    And I can see "Message Of The Day"
    Then logout

  Scenario: Login as admin with password specified
    Given I am "admin" with "admin"
    And I can see "Message Of The Day"
    Then logout
