import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object"
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
export default class ApplicationController extends Controller {
    @service('oauth') oauthService
    @tracked topResponseMini;
    @tracked inverse = true;
    @tracked isLogin = this.oauthService.judgeAuth()

    init() {
        super.init(...arguments)
        const that = this
        let originalSetItem = localStorage.setItem
        
        localStorage.setItem = function(key,newValue){
            let event = new Event("setItemEvent");
            event.key = key;
            event.newValue = newValue;
            window.dispatchEvent(event);
            originalSetItem.apply(this,arguments);
        }
        if(document.documentElement.clientWidth <= 549) {
            this.set('topResponseMini', true)
        } else {
            this.set('topResponseMini', false)
        }
        window.addEventListener('resize', function () {
            if(document.documentElement.clientWidth <= 549) {
                that.set('topResponseMini', true)

            } else {
                that.set('topResponseMini', false)
            }
        })
    }

    @action
    linkToPage(data) {
        this.transitionToRoute(data.detail[0])
    }

    @action
    logout() {
        this.oauthService.removeAuth()
    }
}
