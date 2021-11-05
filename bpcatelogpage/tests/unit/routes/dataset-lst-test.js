import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dataset-lst', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dataset-lst');
    assert.ok(route);
  });
});
