'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    minifyJS: { enabled: true },
    fingerprint: { enabled: false },
    SRI: { enabled: false }
  });


  return app.toTree();
};
