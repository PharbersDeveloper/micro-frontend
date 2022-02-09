import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | max-saas/cleaning', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:max-saas/cleaning');
    assert.ok(route);
  });
});
