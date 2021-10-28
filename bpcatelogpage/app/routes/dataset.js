import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class DatasetRoute extends Route {
	async model() {
		return RSVP.hash( {
			_isVue: true
		} )
	}
}
