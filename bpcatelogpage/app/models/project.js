import Model, { attr } from '@ember-data/model';

export default class ProjectModel extends Model {
	@attr("string") name;
	@attr("string") version;
	@attr("string") provider;
	@attr("string") arn;
	@attr executions
	@attr meta
}
