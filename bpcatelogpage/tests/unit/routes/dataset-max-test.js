import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dataset-max', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dataset-max');
    assert.ok(route);
  });
});
