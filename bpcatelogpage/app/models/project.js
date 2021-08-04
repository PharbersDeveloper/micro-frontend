import Model, { attr } from '@ember-data/model';

export default class ProjectModel extends Model {
	@attr("string") name;
	@attr("string") type;
	@attr("string") provider;
    @attr("date") created;
	@attr tags
}
