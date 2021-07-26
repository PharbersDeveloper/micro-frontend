import Model, { attr } from '@ember-data/model';

export default class PartitionModel extends Model {
	@attr("string") attribute;
    @attr schema;
}
