import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class JobLogModel extends Model {
	@attr("string") provider;
    @attr("string") owner;
    @attr("date") time;
    @attr("string") version;
    @attr("number") code;
    @attr("string") jobDesc;
    @attr("string") jobCat;
    @attr("string") comments;
    @attr("string") message;
    @attr("string") date;
}
