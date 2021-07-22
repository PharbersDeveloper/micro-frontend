import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class TableModel extends Model {
	@attr("string") name;
    // @hasMany("schema") schema;
	@attr schemas
	@attr("string") describe;
	@attr("string") source;
	@attr("string") connect;
	@attr("string") deprecated;
	@attr("string") lastModifyTime;
	@attr("string") inputFormat;
	@attr("string") outputFormat;
	@attr("string") serdeLib;
    @attr serdeArguments;
	@attr("string") sizeKey;
	@attr("string") objectCount;
	@attr("string") updateByCrawler;
	@attr("string") crawlerSchemaSerializerVersion;
	@attr("string") recordCount;
	@attr("string") averageRecordSize;
	@attr("string") crawlerSchemaDeserializerVersion;
	@attr("string") compressionType;
	@attr("string") typeOfData;
	@attr("string") location;
	@attr("string") category;
    // @hasMany("partition-key") partitionKey;
	@attr partitionKeys;

}
