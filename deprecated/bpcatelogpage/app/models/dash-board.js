import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class DashBoardModel extends Model {
	@belongsTo("project") project;
	@hasMany("slide") slides;
}
