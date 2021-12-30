import Model from "@ember-data/model"
import { attr } from "@ember-data/model"

export default class PageModel extends Model {
	@attr("string") name
	@attr("string") uri
}
