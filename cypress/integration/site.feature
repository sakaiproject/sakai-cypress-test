Feature: Site

  Background:
    Given I am at the portal
    Then login as admin

  #Scenario: Create the test instructor
  #  Then go to the users page
  #  Then go to the add user page
  #  And add the test instructor

  #Scenario: Create the test student
  #  Then go to the users page
  #  Then go to the add user page
  #  And add the test student

  #Scenario: Create the test site
  #  Then go to the sites page
  #  Then go to the new site page
  #  And create the test site

  Scenario: Add the test instructor to the site
    Then go to the worksite setup page
    Then search for the test site
    Then edit the test site
    And add the test instructor to the test site

  #Scenario: Delete the test site
  #  Then go to the worksite setup page
  #  Then search for the test site
  #  And delete the test site
