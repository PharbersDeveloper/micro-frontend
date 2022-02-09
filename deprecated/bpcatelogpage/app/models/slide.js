import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

export default class SlideModel extends Model {
	@belongsTo("dash-board") dashBoard;
	@hasMany("chat") chats;
}
