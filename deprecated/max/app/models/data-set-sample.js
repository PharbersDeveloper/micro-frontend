import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class DataSetSampleModel extends Model {
    @belongsTo("data-set", {inverse: "sampleData"}) ds;
    @attr("string") data;
    @attr("date") created;
    @attr("date") modified;
    @attr("string") description;
}
