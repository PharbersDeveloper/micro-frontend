import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class DataSetModel extends Model {
    @hasMany("data-set", {inverse: "child"}) parent;
    @hasMany("data-block") child;
    @hasMany("data-block", {inverse: "dfs"}) blockDs;
    @hasMany("data-set-sample", {inverse: "ds"}) sampleData;
    @belongsTo("job", {inverse: "gen"}) job
    @attr("string") name;
    @attr schema;
    @attr("string") source;
    @attr("string") storeType;
    @attr("number") size;
    @attr("string") description;
    @attr("date") created;
    @attr("date") modified;
    @attr("string") tabName;
}
