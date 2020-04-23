Feature: Portal

  @sakai-20
  Scenario: Login as admin
    Given I am "admin"
    And I can see "Message Of The Day"
    Then logout
