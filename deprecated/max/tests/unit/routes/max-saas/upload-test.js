import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | max-saas/upload', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:max-saas/upload');
    assert.ok(route);
  });
});
