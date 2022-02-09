import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class DataBlockModel extends Model {
    @attr("string") name;
    @hasMany("data-set", {inverse: "blockDs"}) dfs;
    @attr("string") label;
    @attr("number") startRow;
    @attr("string") type;
    @attr("string") description;
    @belongsTo("asset", {inverse: "block"}) assetBlock;
}
