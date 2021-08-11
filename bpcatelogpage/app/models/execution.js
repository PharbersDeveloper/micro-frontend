import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class ExecutionModel extends Model {
	// projectExecution: { link: "project", inverse: "executions"},
    //         arn: String,
    //         name: String,

	@attr('string') arn
}
