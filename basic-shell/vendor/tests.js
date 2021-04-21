'use strict';

define("dummy/tests/integration/components/component-class-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)("Integration | Component | component-class", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders", async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ComponentClass />
      */
      {
        "id": "wNd4XRQO",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"component-class\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), ""); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ComponentClass>
              template block text
            </ComponentClass>
          
      */
      {
        "id": "cQPF3dxT",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"component-class\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), "template block text");
    });
  });
});
define("dummy/tests/integration/components/example-web-component-class-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)("Integration | Component | example-web-component-class", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders", async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ExampleWebComponentClass />
      */
      {
        "id": "2B9fOXd8",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"example-web-component-class\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), ""); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ExampleWebComponentClass>
              template block text
            </ExampleWebComponentClass>
          
      */
      {
        "id": "i5McAO5u",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"example-web-component-class\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), "template block text");
    });
  });
});
define("dummy/tests/integration/components/example-web-component-test", ["qunit", "ember-qunit", "@ember/test-helpers"], function (_qunit, _emberQunit, _testHelpers) {
  "use strict";

  (0, _qunit.module)("Integration | Component | example-web-component", function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);
    (0, _qunit.test)("it renders", async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });
      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        <ExampleWebComponent />
      */
      {
        "id": "otdYM9YP",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"example-web-component\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), ""); // Template block usage:

      await (0, _testHelpers.render)(Ember.HTMLBars.template(
      /*
        
            <ExampleWebComponent>
              template block text
            </ExampleWebComponent>
          
      */
      {
        "id": "uvMcNXZq",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"example-web-component\"]]",
        "moduleName": "(unknown template module)",
        "isStrictMode": false
      }));
      assert.equal(this.element.textContent.trim(), "template block text");
    });
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define('dummy/config/environment', [], function() {
  
          var exports = {
            'default': {"modulePrefix":"dummy","environment":"test","rootURL":"/","locationType":"none","EmberENV":{"FEATURES":{},"EXTEND_PROTOTYPES":{"Date":false},"_APPLICATION_TEMPLATE_WRAPPER":false,"_DEFAULT_ASYNC_OBSERVERS":true,"_JQUERY_INTEGRATION":false,"_TEMPLATE_ONLY_GLIMMER_COMPONENTS":true},"APP":{"autoboot":false,"LOG_ACTIVE_GENERATION":false,"LOG_VIEW_LOOKUPS":false,"rootElement":"#ember-testing"},"exportApplicationGlobal":true}
          };
          Object.defineProperty(exports, '__esModule', {value: true});
          return exports;
        
});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
