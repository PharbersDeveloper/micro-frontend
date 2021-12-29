import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | prepare-set', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:prepare-set');
    assert.ok(route);
  });
});
