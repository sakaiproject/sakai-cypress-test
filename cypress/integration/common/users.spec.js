import { Then, And } from 'cypress-cucumber-preprocessor/steps';

Then('go to the users page', () => {
  cy.get('[title^="Users"]').click();
});

Then('go to the add user page', () => {
  cy.get('[title^="New User"]').click()
});

And('add the test instructor', () => {
  cy.get('#user_eid').type('sakai-cypress-instructor');
  cy.get('#user_pw').type('sakai-cypress-instructor');
  cy.get('#user_pw0').type('sakai-cypress-instructor');
  cy.get('#type').select('maintain');
  cy.get('#eventSubmit_doSave').click();
});

And('delete the test instructor', () => {
  cy.get('#search').type('sakai-cypress-instructor');
  cy.get('a[title^="Search"]').click();
  cy.get('td[headers^="Eid"]').click();
  cy.get('[title^="Remove User"]').click();
  cy.get('#remove').click();
});

And('add the test student', () => {
  cy.get('#user_eid').type('sakai-cypress-student');
  cy.get('#user_pw').type('sakai-cypress-student');
  cy.get('#user_pw0').type('sakai-cypress-student');
  cy.get('#type').select('registered');
  cy.get('#eventSubmit_doSave').click();
});

And('delete the test student', () => {
  cy.get('#search').type('sakai-cypress-student');
  cy.get('a[title^="Search"]').click();
  cy.get('td[headers^="Eid"]').click();
  cy.get('[title^="Remove User"]').click();
  cy.get('#remove').click();
});
