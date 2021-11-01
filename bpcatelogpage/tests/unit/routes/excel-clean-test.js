import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | excel-clean', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:excel-clean');
    assert.ok(route);
  });
});
