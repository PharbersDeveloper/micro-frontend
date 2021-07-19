import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';
import ENV from 'bpcatelogpage/config/environment';

export default class DownloadRoute extends Route {
	@service intl
	@service cookies
}
