import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | excel-handler', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:excel-handler');
    assert.ok(route);
  });
});
