import { module, test } from 'qunit';
import { visit, click, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { percySnapshot } from 'ember-percy';

module('Acceptance | home page', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function(assert) {
    await visit('/');
    percySnapshot('home page', { breakpoints: ['desktop'] });

    click('#mode-toggle');
    percySnapshot('home page (dark mode toggled)', { breakpoints: ['desktop'] });

    assert.equal(currentURL(), '/');
  });
});
