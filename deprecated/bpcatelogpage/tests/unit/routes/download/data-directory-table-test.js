import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | download/data-directory-table', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:download/data-directory-table');
    assert.ok(route);
  });
});
