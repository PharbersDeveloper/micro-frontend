import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | download/my-data', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:download/my-data');
    assert.ok(route);
  });
});
