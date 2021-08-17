import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class ProjectModel extends Model {
	@attr("string") name;
	@attr("string") version;
	@attr("string") provider;
	@attr("string") arn;
	@attr("string") projectName;
	@attr executions
    @hasMany("execution", {inverse: "projectExecution"}) executions;
    // @hasMany("execution") executions;
	@attr meta
}
