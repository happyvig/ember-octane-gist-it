import { module} from 'qunit';
import { test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | add-gist', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:add-gist');
    assert.ok(controller);
  });
});
