import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class JobModel extends Model {
    @hasMany("data-set", {inverse: "job"}) gen;
    @attr("string") task;
    @attr inputDS;
    @attr outPutDS;
    @attr("string") jobId;
    @attr("string") asset;
    @attr("string") status;
    @attr("date") start;
    @attr("date") end;
    @attr("date") created;
    @attr("date") modified;
    @attr("string") description;
}
