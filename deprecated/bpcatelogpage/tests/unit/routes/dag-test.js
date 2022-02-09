import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dag', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dag');
    assert.ok(route);
  });
});
