import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | activity-list', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:activity-list');
    assert.ok(route);
  });
});
