import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from "@ember/object"

export default class ApplicationController extends Controller {
    @tracked topResponseMini;
    @tracked inverse = false;
    init() {
        super.init(...arguments)
        const that = this
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
}
