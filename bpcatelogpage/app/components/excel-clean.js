import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class ExcelCleanComponent extends Component {
	@service router
    @service store
    @service cookies
    @service ajax


	@action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                let param = e.detail[0].args.param
                break
            default: 
                console.log("submit event to parent")
        }
    }

    @action
    registerListener(element) {
        element.allData = this.calAllData
        console.log(element.allData)
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
