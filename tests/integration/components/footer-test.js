import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | footer', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Footer />`);

    assert.equal(this.element.textContent.trim().length > 0, true);

    // Template block usage:
    await render(hbs`
      <Footer>
        template block text
      </Footer>
    `);

    assert.equal(this.element.textContent.trim().indexOf('template block text') > -1, true);
  });
});
