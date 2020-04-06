import { v4 as uuid4 } from 'uuid';
import { Then, Before, After } from 'cypress-cucumber-preprocessor/steps';
import { login, logout } from './login.spec.js';
import { createUser, removeUser } from './user.spec.js';

export const STATE = { };

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

export function goToSite(sitename) {
  cy.visit('https://qa20-mysql.nightly.sakaiproject.org/portal');
  cy.get('.all-sites-icon').last().click();
  cy.get('#txtSearch').type(sitename);
  cy.get(`[title^="${sitename}"]`).last().click();
}

Before({ tags: '@site' }, function() {
  STATE.sitename = `cypress-${uuid4().split('-')[0]}`;
  STATE.instructor = `cypress-instructor-${uuid4()}`;
  STATE.student = `cypress-student-${uuid4()}`;
  login('admin');
  createSite(STATE.sitename);
  createUser(STATE.instructor, 'maintain');
  createUser(STATE.student);
  addUserToSite(STATE.instructor, STATE.sitename, 'maintain');
  addUserToSite(STATE.student, STATE.sitename);
  logout();
});

After({ tags: '@site' }, function() {
  login('admin');
  deleteSite(STATE.sitename);
  delete STATE.sitename;
  removeUser(STATE.instructor);
  delete STATE.instructor;
  removeUser(STATE.student);
  delete STATE.student;
  logout();
});

Then('create site {string}', createSite);
Then('add user {string} to site {string} {string}', addUserToSite);
Then('delete site {string}', deleteSite);
Then('go to site {string}', goToSite);

Given('I am the instructor', function() {
  login(STATE.instructor);
});

Given('I am the student', function() {
  login(STATE.student);
});

Then('go to the site', function() {
  goToSite(STATE.sitename);
});
