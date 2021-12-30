import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | analyze', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:analyze');
    assert.ok(route);
  });
});
