import Component from "@glimmer/component"
import layout from "../templates/components/returned-page"
import $ from "jquery"

export default Component.extend({
	layout,
	elementId: "oauth",
	accountDescribe: "账号",
	passwordDescribe: "密码",
	btnDescribe: "登录",
	didInsertElement() {
		this._super(...arguments)
		const a = Handlebars.compile(this.content)({
			accountDescribe: "账号",
			passwordDescribe: "密码",
			btnDescribe: "登录"
		})
		$("#oauth").append(a)
		$("#oauth").width("100%")
	}
})
