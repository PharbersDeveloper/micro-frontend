import Model, { attr } from '@ember-data/model';

export default class PartitionKeyModel extends Model {
	@attr("string") name;
	@attr("string") comment;
	@attr("string") type;
	@attr("string") parameters;
}
