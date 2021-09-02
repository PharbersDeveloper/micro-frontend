import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | max-saas/import', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:max-saas/import');
    assert.ok(route);
  });
});
