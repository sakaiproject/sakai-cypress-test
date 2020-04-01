import { Given, Then, And, Before, After } from 'cypress-cucumber-preprocessor/steps';

export function login(username) {
  cy.visit('https://qa20-mysql.nightly.sakaiproject.org/portal');
  cy.get('#eid').type(username);
  cy.get('#pw').type(username);
  cy.get('#submit').click();
  //cy.get('#popup-later-button').click();
}

export function logout() {
  cy.get('#loginUser').click();
  cy.get('#loginLink1').click();
}

Before({ tags: '@admin' }, () => {
  login('admin');
});

After({ tags: '@admin' }, logout);

Given('I am {string}', login);

And('I can see {string}', (string) => {
  cy.contains(string);
});

Then('logout', logout);
