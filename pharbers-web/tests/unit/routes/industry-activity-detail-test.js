import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | industry-activity-detail', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:industry-activity-detail');
    assert.ok(route);
  });
});
