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
        // let originalSetItem = localStorage.setItem;
        // localStorage.setItem = function (key, newValue) {
        //     let event = new Event('setItemEvent');
        //     event.key = key;
        //     event.newValue = newValue;
        //     window.dispatchEvent(event);
        //     originalSetItem.apply(this, arguments);
        // };
        if (document.documentElement.clientWidth <= 549) {
            this.set('topResponseMini', true);
        } else {
            this.set('topResponseMini', false);
        }
        window.addEventListener('resize', function () {
            if (document.documentElement.clientWidth <= 549) {
                that.set('topResponseMini', true);
            } else {
                that.set('topResponseMini', false);
            }
        });
    }

    @action
    linkToPage(data) {
        // this.transitionToRoute(data.detail[0]);
        this.router.transitionTo(data.detail[0])
    }

    @action
    logout() {
        this.oauthService.removeAuth();
    }
}
