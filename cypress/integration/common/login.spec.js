import { Before, Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am at the portal', () => {
  cy.visit('https://qa20-mysql.nightly.sakaiproject.org/portal');
});

Then('login as admin', () => {
  cy.get('#eid').type('admin');
  cy.get('#pw').type('admin');
  cy.get('#submit').click();
});

And('I can see the message of the day', () => {
  cy.contains('Message Of The Day');
});
