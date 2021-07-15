import Model, { attr, hasMany, belongsTo } from '@ember-data/model';


export default class AssetModel extends Model {
    @attr("string") name;
    @hasMany("data-block", {inverse: "assetBlock"}) block;
    @attr("string") extension;
    @attr("number") size;
    @attr("string") source;
    @attr("string") owner;
    @attr("string") accessibility;
    @attr("string") version;
    @attr("boolean") isNewVersion;
    @attr("string") type;
    @attr providers;
    @attr markets;
    @attr molecules;
    @attr dateCover;
    @attr geoCover;
    @attr labels;
    @attr("string") description;
    @attr("date") created;
    @attr("date") modified;
    @attr("string") shared;
    @attr("string") partners;
}
