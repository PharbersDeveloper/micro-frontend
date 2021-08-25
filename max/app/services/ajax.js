import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { computed } from "@ember/object"

export default class AjaxService extends Service {
	@service('cookies') cookies;

	get headers() {
		let cookies = this.get( "cookies" )

		return {
			"Content-Type": "application/json", // 默认值
			Accept: "application/json",
			Authorization: `Bearer ${cookies.read( "access_token" )}`
		}
	}
}
