import { Then, And, Before, After } from 'cypress-cucumber-preprocessor/steps';

export function createUser(username, type) {
  if(!(['maintain', 'registered'].indexOf(type) >= 0)) {
    type = 'registered';
  }
  cy.get('[title^="Users"]').click();
  cy.get('[title^="New User"]').click();
  cy.get('#user_eid').type(username);
  cy.get('#user_pw').type(username);
  cy.get('#user_pw0').type(username);
  cy.get('#type').select(type);
  cy.get('#eventSubmit_doSave').click();
}

export function removeUser(username) {
  cy.get('[title^="Users"]').click();
  cy.get('#search').type(username);
  cy.get('a[title^="Search"]').click();
  cy.get('[headers="Eid"] > a').click();
  cy.get('[title^="Remove User"]').click();
  cy.get('#remove').click();
}

Then('create user {string} {string}', createUser);
Then('remove user {string}', removeUser);
