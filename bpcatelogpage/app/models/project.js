import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class ProjectModel extends Model {
	@attr("string") name; //项目名称,如max提数
	@attr("string") version;
	@attr("string") provider;
	@attr("string") arn;
	@attr("string") projectName; //所属项目类别名称, 跟name不一样，如max
	@attr executions
    @hasMany("execution", {inverse: "projectExecution"}) executions;
	@attr meta
}
