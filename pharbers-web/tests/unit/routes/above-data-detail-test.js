import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | above-data-detail', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:above-data-detail');
    assert.ok(route);
  });
});