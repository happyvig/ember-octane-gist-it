import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { percySnapshot } from 'ember-percy';

module('Acceptance | home page', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    // Make sure we clear the local storage for each run
    window.localStorage.clear();
  });

  test('visiting /', async function(assert) {

    await visit('/');

    await percySnapshot('Home page', { breakpoints: ['desktop'] });

    await click('#mode-toggle');

    await percySnapshot('Home page - dark mode on', { breakpoints: ['desktop'] });

    assert.equal(currentURL(), '/');

  });
});
