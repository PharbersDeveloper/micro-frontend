"use strict"

module.exports = function (environment) {
	let ENV = {
		modulePrefix: "web-shell",
		environment,
		rootURL: "/",
		locationType: "auto",
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
			redirectUri: "https://general.pharbers.com/oauth-callback",
			pharbersUri: "https://www.pharbers.com",
			accountsUri: "https://accounts.pharbers.com",
			host: "https://oauth.pharbers.com",
			apiUri: "https://apiv2.pharbers.com",
			apiHost: "apiv2.pharbers.com",
			clientId: "V5I67BHIRVR2Z59kq-a-",
			clientSecret:
				"961ed4ad842147a5c9a1cbc633693438e1f4a8ebb71050d9d9f7c43dbadf9b72",
			AWS_ACCESS_KEY: "AKIAWPBDTVEAPOX3QT6U",
			AWS_SECRET_KEY: "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",
			scope: "APP|*|R",

			clientName: "general",
			isNeedMenu: true
		}
	}

	if (environment === "development") {
		// ENV.APP.LOG_RESOLVER = true;
		// ENV.APP.LOG_ACTIVE_GENERATION = true;
		// ENV.APP.LOG_TRANSITIONS = true;
		// ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
		// ENV.APP.LOG_VIEW_LOOKUPS = true;
		ENV.APP.debugToken =
			"2da49bf8c5ab1d68430720d8cb66e1e6fdf5acc35dc12e20561f6fb20f25097c"
	}

	if (environment === "test") {
		// Testem prefers this...
		ENV.locationType = "none"

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false
		ENV.APP.LOG_VIEW_LOOKUPS = false

		ENV.APP.rootElement = "#ember-testing"
		ENV.APP.autoboot = false
	}

	if (environment === "production") {
		// here you can enable a production-specific feature
	}

	return ENV
}
