import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
// import { render } from '@ember/test-helpers';
// import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | create-gist', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    this.set('description', '');
    this.set('fileName', '');
    this.set('body', '');

    assert.equal();

    //await render(hbs`<CreateGist />`);

    //assert.equal(this.element.textContent.trim(), '');

    // Template block usage:
    // await render(hbs`
    //   <CreateGist>
    //     template block text
    //   </CreateGist>
    // `);

    //assert.equal(this.element.textContent.trim().indexOf('template block text') > -1, true);
  });
});
