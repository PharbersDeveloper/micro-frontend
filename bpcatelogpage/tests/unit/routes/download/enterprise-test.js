import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | download/enterprise', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:download/enterprise');
    assert.ok(route);
  });
});
