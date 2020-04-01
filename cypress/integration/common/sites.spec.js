import { v4 as uuid4 } from 'uuid';
import { Then, Before, After } from 'cypress-cucumber-preprocessor/steps';
import { login, logout } from './login.spec.js';
import { createUser, removeUser } from './user.spec.js';

export function createSite(sitename) {
  cy.get('[title^="Worksite Setup"]').click();
  cy.get('[title^="Create New Site"]').click();
  cy.get('#project').click();
  cy.get('#submitBuildOwn').click();
  cy.get('#title').type(sitename);
  cy.get('[value^="Continue"]').click();
  cy.get('[value^="Continue"]').click();
  cy.get('[value^="Continue"]').click();
  cy.get('[value^="Create Site"]').click();
}

export function deleteSite(sitename) {
  cy.get('[title^="Worksite Setup"]').click();
  cy.get('#searchFilter1').type(sitename);
  cy.get('#btnSearch_searchFilter1').click();
  cy.get('#toggleAllSelected').check();
  cy.get('#btnHardDelete1').click();
  cy.get('[value^="Hard delete"]').click();
}

export function addUserToSite(username, sitename, type) {
  if(!(['maintain', 'access'].indexOf(type) >= 0)) {
    type = 'access';
  }
  cy.get('[title^="Worksite Setup"]').click();
  cy.get('#searchFilter1').type(sitename);
  cy.get('#btnSearch_searchFilter1').click();
  cy.get('#toggleAllSelected').check();
  cy.get('#btnEdit1').click();
  cy.get('[title^="Add Participants"]').click();
  cy.get('textarea[name^="content\:\:officialAccountParticipant"]').type(username);
  cy.get('[value^="Continue"]').click();
  cy.get(`[value^="${type}"]`).click();
  cy.get('[value^="Continue"]').click();
  cy.get('[value^="Continue"]').click();
  cy.get('[value^="Finish"]').click();
}

Before({ tags: '@site' }, function() {
  this.sitename = `cypress-${uuid4().split('-')[0]}`;
  this.instructor = `cypress-instructor-${uuid4()}`;
  this.student = `cypress-student-${uuid4()}`;
  login('admin');
  createUser(this.instructor, 'maintain');
  createUser(this.student);
  createSite(this.sitename);
  addUserToSite(this.instructor, this.sitename, 'maintain');
  addUserToSite(this.student, this.sitename);
  logout();
});

After({ tags: '@site' }, function() {
  login('admin');
  deleteSite(this.sitename);
  removeUser(this.instructor);
  removeUser(this.student);
  logout();
});

Then('create site {string}', createSite);
Then('add user {string} to site {string}', addUserToSite);
Then('delete site {string}', deleteSite);

Then('add tool {string}', (toolname) => {

});
