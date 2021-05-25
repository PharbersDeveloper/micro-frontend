"use strict"

// eslint-disable-next-line node/no-unpublished-require
const EmberApp = require("ember-cli/lib/broccoli/ember-app")

module.exports = function (defaults) {
	let app = new EmberApp(defaults, {
		// Add options here
		minifyJS: { enabled: true },
		fingerprint: { enabled: false },
		SRI: { enabled: false }
	})

	// auth signiture lib
	app.import("node_modules/crypto-js/crypto-js.js", {
		using: [{ transformation: "amd", as: "crypto-js" }]
	})

	app.import("./vendor/react/react-example-components.js")
	app.import("./vendor/react/react-nested-components.js")
	app.import("./vendor/ember/vendor.js")
	app.import("./vendor/ember/dummy.js")
	// app.import("./vendor/vue/vue-components.js")
	app.import("./vendor/vue/pharbers.js")
	app.import("./vendor/vue/pharberspanel.js")
	app.import("./vendor/vue/pharberspage.js")

	return app.toTree()
}
