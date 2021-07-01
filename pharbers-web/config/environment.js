'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'pharbers-web',
    environment,
    rootURL: '/',
    locationType: 'auto',
    host: 'https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn',
    namespace: 'v0',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      AWS_ACCESS_KEY: 'AKIAWPBDTVEAPOX3QT6U',
			AWS_SECRET_KEY: 'Vy7bMX1KCVK9Vow00ovt7r4VmMzhVlpKiE1Cbsor',
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.oauthCallback = "http://www.pharbers.com:4300"
    ENV.generalUri = "http://general.pharbers.com:4200"
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
    ENV.oauthCallback = "http://www.pharbers.com"
    ENV.generalUri = "http://general.pharbers.com"
  }

  return ENV;
};
