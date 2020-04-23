import { Before, After } from 'cypress-cucumber-preprocessor/steps';

import { STATE } from './state.spec.js';

Before({ tags: '@sakai-20' }, function() {
  STATE.host = 'https://qa20-mysql.nightly.sakaiproject.org/portal';
});

After({ tags: '@sakai-20' }, function() {
  delete STATE.host;
});
