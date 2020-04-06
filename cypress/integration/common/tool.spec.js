import { Then, And, Before, After } from 'cypress-cucumber-preprocessor/steps';

const TOOLS = {
  announcements: 'announcements',
  assignments: 'assignment',
  calendar: 'schedule',
  'chat room': 'chat',
  commons: 'commons',
  'contact us': 'feedback',
  'drop box': 'dropbox',
  email: 'mailtool',
  'email archive': 'mailbox',
  forums: 'forums',
  gradebook: 'gradebookng',
  lessons: 'lessonbuildertool',
  messages: 'messages',
  news: 'simple\\.rss',
  podcasts: 'podcasts',
  polls: 'poll',
  postem: 'postem',
  resources: 'resources',
  roster: 'site\\.roster2',
  rubrics: 'rubrics',
  search: 'search',
  'section info': 'sections',
  'sign-up': 'signup',
  statistics: 'sitestats',
  syllabus: 'syllabus',
  'tests & quizzes': 'samigo',
  wiki: 'rwiki'
};

export function addTool(toolname) {
  if(!(toolname in TOOLS)) {
    let message = `Invalid tool: ${toolname}`;
    cy.log(message);
    throw Error(message);
  }
  cy.get('[title^="Site Info"]').click();
  cy.get('[title^="Manage Tools"]').click();
  cy.get(`#sakai\\.${TOOLS[toolname]}`).check();
  cy.get('#btnContinue').click();
  cy.get('#revise').click();
}

Then('add the {string} tool', addTool);
