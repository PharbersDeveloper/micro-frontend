import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PharbersNavTopComponent extends Component {
	@service('oauth-service') oauthService;
    @tracked topResponseMini;
    // @tracked isLogin = this.oauthService.judgeAuth();
	@tracked isLogin = false
    @service router

    @action
    linkToPage(data) {
        this.router.transitionTo("shell", data.detail[0])
    }

    @action
    logout() {
        this.oauthService.removeAuth();
    }
}
