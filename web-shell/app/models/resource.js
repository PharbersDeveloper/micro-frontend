import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class ResourceModel extends Model {
	@attr("string") name;
	@attr("string") resourceType;
	@attr("date") created;
	@attr("string") tenant;
	@attr("string") type;
	@attr accounts;
	@attr concrets;
	@attr includes;
	@belongsTo("project") project;
}
