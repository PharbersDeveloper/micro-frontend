import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class DatasetModel extends Model {
	// @belongsTo("project") project;
	// @belongsTo("script") scriptInput;
	// @belongsTo("script") scriptOutput;
	// @attr("string") type;
	// @attr("string") name;
	// @attr("string") displayName;
	// @attr("string") connectConfig;
	// @attr("string") secretConfig
	// @attr("string") schema

	@attr("string") projectId
	@attr("string") schema
	@attr("string") version
	@attr("string") name
	@attr("string") label
}
