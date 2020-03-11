Feature: Site

  Background:
    Given I am at the portal

  #Scenario: Create the test instructor
  #  Then login as admin
  #  Then go to the users page
  #  Then go to the add user page
  #  And add the test instructor

  #Scenario: Create the test student
  #  Then login as admin
  #  Then go to the users page
  #  Then go to the add user page
  #  And add the test student

  #Scenario: Create the test site
  #  Then login as admin
  #  Then go to the sites page
  #  Then go to the new site page
  #  And create the test site

  #Scenario: Add the test instructor to the test site
  #  Then login as admin
  #  Then go to the worksite setup page
  #  Then search for the test site
  #  Then edit the test site
  #  And add the test instructor to the test site

  #Scenario: Add the test student to the test site
  #  Then login as admin
  #  Then go to the worksite setup page
  #  Then search for the test site
  #  Then edit the test site
  #  And add the test student to the test site

  Scenario: Login as the test instructor and go to the test site
    Then login as the test instructor
  #  Then ignore the popup as the test instructor
    Then go to the membership page
  #  Then go to the test site

  #Scenario: Login as the test student and go to the test site
  #  Then login as the test student
  #  Then ignore the popup as the test student
  #  Then go to the membership page
  #  Then go to the test site

  #Scenario: Delete the test site
  #  Then login as admin
  #  Then go to the worksite setup page
  #  Then search for the test site
  #  And delete the test site
