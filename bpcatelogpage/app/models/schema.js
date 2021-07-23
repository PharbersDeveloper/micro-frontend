import Model, { attr } from '@ember-data/model';

export default class SchemaModel extends Model {
	@attr("string") field;
	@attr("string") type;
	@attr("string") comment;
	@attr("string") parameters;
}
