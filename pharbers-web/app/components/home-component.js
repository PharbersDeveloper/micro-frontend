import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class HomeComponentComponent extends Component {
    @service router
    @action
    listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                if(e.detail[0].args.param.index != undefined) {
                    this.router.transitionTo(e.detail[0].args.param.name, e.detail[0].args.param.index)
                } else {
                    this.router.transitionTo(e.detail[0].args.param.name)
                }
                // e.detail[0].args.element.returnToTop()
                break
            default: 
                console.log("submit event to parent")
        }
    }

    @action
    registerListener(element) {
        element.allData = this.calAllData
        element.addEventListener("event", this.listener)
    }

    @action
    unregisterListener(element) {
        element.removeEventListener("event", this.listener)
    }

    get calAllData() {
        this.args.model._isVue = true
        return this.args.model
    }
}
