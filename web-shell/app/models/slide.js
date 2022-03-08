import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class SlideModel extends Model {
	@attr("string") slideId
	@attr("string") content
	@attr("string") title
}
