import { Before, Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am at the portal', () => {
  cy.visit('https://qa20-mysql.nightly.sakaiproject.org/portal');
});

Then('login as admin', () => {
  cy.get('#eid').type('admin');
  cy.get('#pw').type('admin');
  cy.get('#submit').click();
});

Then('login as the test instructor', () => {
  cy.get('#eid').type('sakai-cypress-instructor');
  cy.get('#pw').type('sakai-cypress-instructor');
  cy.get('#submit').click();
});

Then('login as the test student', () => {
  cy.get('#eid').type('sakai-cypress-student');
  cy.get('#pw').type('sakai-cypress-student');
  cy.get('#submit').click();
});

And('I can see the message of the day', () => {
  cy.contains('Message Of The Day');
});
