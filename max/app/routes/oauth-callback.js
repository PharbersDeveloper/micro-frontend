import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class OauthCallbackRoute extends Route {
	@service oauthService;
	beforeModel( transition ) {
		this.oauthService.oauthCallback( transition )
	}
}
