import Model from "@ember-data/model"
import { attr } from "@ember-data/model"

export default class PageModel extends Model {
	@attr("string") projectName
	@attr("string") name
	@attr("string") route
	@attr("string") uri
	@attr("string") menu
	@attr("string") cat // list, command
	@attr("number") level
	@attr("string") engine // ember, vue, react
}
