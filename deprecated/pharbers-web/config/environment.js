'use strict';

module.exports = function (environment) {
    let ENV = {
        modulePrefix: 'pharbers-web',
        environment,
        rootURL: '/',
        locationType: 'auto',
        redirectUri: "http://general.pharbers.com/oauth-callback",
        pharbersUri: "http://www.pharbers.com",
        accountsUri: "http://accounts.pharbers.com",
        host: "http://oauth.pharbers.com",
        clientId: "V5I67BHIRVR2Z59kq-a-",
        clientSecret: "961ed4ad842147a5c9a1cbc633693438e1f4a8ebb71050d9d9f7c43dbadf9b72",
        scope: "APP|*|R",
        // host: 'https://2t69b7x032.execute-api.cn-northwest-1.amazonaws.com.cn',
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

        // ENV.oauthCallback = "http://www.pharbers.com:4300"
        // ENV.generalUri = "http://general.pharbers.com:4200"
        ENV.redirectUri = "http://general.pharbers.com:4200/oauth-callback"
        ENV.clientId = "wsOelHMK2tLAVhj0"
        ENV.clientSecret = "961ed4ad842147a5c9a1cbc633693438e1f4a8ebb71050d9d9f7c43dbadf9b72"
        ENV.host = "http://oauth.pharbers.com"
        ENV.namespace = "v0"
        ENV.pharbersUri = "http://www.pharbers.com:4500"
        ENV.accountsUri = "http://accounts.pharbers.com:4300"
        ENV.scope = "APP|*|R"
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
        // ENV.oauthCallback = "http://www.pharbers.com"
        // ENV.generalUri = "http://general.pharbers.com"

        ENV.clientId = "V5I67BHIRVR2Z59kq-a-"
		ENV.clientSecret = "961ed4ad842147a5c9a1cbc633693438e1f4a8ebb71050d9d9f7c43dbadf9b72"
		ENV.redirectUri = "http://general.pharbers.com/oauth-callback"
		ENV.host = "http://oauth.pharbers.com"
		ENV.namespace = "v0"
		ENV.pharbersUri = "http://www.pharbers.com"
		ENV.accountsUri = "http://accounts.pharbers.com"
		ENV.scope = "APP|*|R"
    }

    return ENV;
};
