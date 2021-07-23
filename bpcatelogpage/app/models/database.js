import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class DatabaseModel extends Model {
	@attr("string") name;
    @attr("string") describe;
}
