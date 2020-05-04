import { Given, Then, And, Before, After } from 'cypress-cucumber-preprocessor/steps';

import { STATE } from './state.spec.js';

export function login(username, password=null) {
  cy.visit('/portal');
  if(password) {
    cy.get('#eid').type(username);
    cy.get('#pw').type(password);
    //cy.get('#popup-later-button').click();
  } else {
    cy.get('#eid').type(username);
    cy.get('#pw').type(username);
    //cy.get('#popup-later-button').click();
  }
  cy.get('#submit').click();
}

export function logout() {
  cy.get('#loginUser').click();
  cy.get('#loginLink1').click();
}

Before({ tags: '@admin' }, () => {
  login(Cypress.env('ADMIN_USERNAME'), Cypress.env('ADMIN_PASSWORD'));
});

After({ tags: '@admin' }, logout);

Given('I am {string}', login);
Given('I am {string} with {string}', login);

And('I can see {string}', (string) => {
  cy.contains(string);
});

Then('logout', logout);
