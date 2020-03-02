import { Then, And } from 'cypress-cucumber-preprocessor/steps';

Then('go to the sites page', () => {
  cy.get('[title^="Worksite Setup"]').click();
});

Then('go to the new site page', () => {
  cy.get('[title^="Create New Site"]').click();
});

Then('go to the worksite setup page', () => {
  cy.get('[title^="Worksite Setup"]').click();
});

Then('search for the test site', () => {
  cy.get('#searchFilter1').type('sakai-cypress-test');
  cy.get('#btnSearch_searchFilter1').click();
});

Then('edit the test site', () => {
  cy.get('#toggleAllSelected').check();
  cy.get('#btnEdit1').click();
});

And('delete the test site', () => {
  cy.get('#toggleAllSelected').check();
  cy.get('#btnHardDelete1').click();
  cy.get('[value^="Hard delete"]').click();
});

And('create the test site', () => {
  cy.get('#project').click();
  cy.get('#submitBuildOwn').click();
  cy.get('#title').type('sakai-cypress-test');
  cy.get('[value^="Continue"]').click();
  cy.get('[value^="Continue"]').click();
  cy.get('[value^="Continue"]').click();
  cy.get('[value^="Create Site"]').click();
});

And('add the test instructor to the test site', () => {
  cy.get('[title^="Add Participants"]').click();
  cy.get('[name^="content\:\:officialAccountParticipant"]').type('sakai-cypress-instructor');
  cy.get('[value^="differentRole"]').click();
  cy.get('[value^="Continue"]').click();
  cy.get('[value^="maintain"]').click();
  cy.get('[value^="Continue"]').click();
  cy.get('[value^="Continue"]').click();
  cy.get('[value^="Finish"]').click();
});
