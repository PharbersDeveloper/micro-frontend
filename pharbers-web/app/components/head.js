import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class HeadComponent extends Component {
    @service('oauth') oauthService;
    @tracked topResponseMini;
    @tracked inverse = false;
    // @tracked isLogin = this.oauthService.judgeAuth();
    @tracked isLogin = false;
    @service router

    init() {
        super.init(...arguments);
        const that = this;
        // 中英文切换
        let originalSetItem = localStorage.setItem;
        localStorage.setItem = function (key, newValue) {
            let event = new Event('setItemEvent');
            event.key = key;
            event.newValue = newValue;
            window.dispatchEvent(event);
            originalSetItem.apply(this, arguments);
        };
    }

    @action
    linkToPage(data) {
        this.router.transitionTo(data.detail[0])
    }

    @action
    logout() {
        this.oauthService.removeAuth();
    }
}
