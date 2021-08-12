import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class ExecutionModel extends Model {
	@attr('string') arn
	@attr('string') name
    @belongsTo("project", {inverse: "executions"}) projectExecution;
	@attr meta

}
