import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class ProjectModel extends Model {
	@attr("string") provider;
    @attr("string") time;
    @attr("string") actions;
	@attr("string") mapper;
}
