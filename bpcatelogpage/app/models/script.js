import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class ScriptModel extends Model {
	@belongsTo("project") project;
	@attr("string") type;
	@attr("string") name;
	@attr("string") args;
	@attr("string") reverse;
	@hasMany("dataset") inputDfs;
	@hasMany("dataset") outputDfs;
	@belongsTo("stateDisplay") stateDisplay;
}
