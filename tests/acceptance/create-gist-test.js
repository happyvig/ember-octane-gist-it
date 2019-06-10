import { module, test } from 'qunit';
import { percySnapshot } from 'ember-percy';
import { setupApplicationTest } from 'ember-qunit';
import { visit, click, currentURL, find } from '@ember/test-helpers';
import Controller from '@ember/controller';

module('Acceptance | Create gist page', function (hooks) {

  setupApplicationTest(hooks);

  hooks.beforeEach(function () {
    window.localStorage.clear();

    // let controller = Controller.extend({
    //   addFile: function () {
    //   }
    // });

    // this.owner.application.inject('controller:add-gist', 'add-gist', controller);
  });

  test('visiting /add-gist', async function(assert) {

    await visit('/add-gist');

    // find('#description').value = "DUMMY";
    // find('#filename').value = "DUMMY";
    // find('#code-editor').innerText = "DUMMY";

    this.set("description", "test");

    await percySnapshot('Add gist page', { breakpoints: ['desktop'] });

    await click('.add-gist');

    percySnapshot('On gist added', { breakpoints: ['desktop'] });

    console.log(currentURL());

    // Page navigates to home after adding
    assert.equal(currentURL(), '/add-gist');

  });
});
