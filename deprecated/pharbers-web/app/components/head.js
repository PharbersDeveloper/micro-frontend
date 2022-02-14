import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HeadComponent extends Component {
    @service('oauth') oauthService;
    @tracked topResponseMini;
    // @tracked inverse = false;
    @tracked isLogin = this.oauthService.judgeAuth();
    @service router

    @action
    linkToPage(data) {
        this.router.transitionTo(data.detail[0])
    }

    @action
    logout() {
        this.oauthService.removeAuth();
    }
}
