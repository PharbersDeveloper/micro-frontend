import Component from '@glimmer/component'
import { action } from '@ember/object'
import { inject as service } from "@ember/service"
import { tracked } from '@glimmer/tracking'


export default class MyDataComponent extends Component {
    @tracked tabIndex;
    @service router
	@service downloadFile

    @action
	listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                let param = e.detail[0].args.param
                if (param.index != undefined) {
                    if (param.queryParams) {
                        this.router.transitionTo(`${param.name}/${param.index}?${param.queryParams}`)
                    } else {
                        this.router.transitionTo(`${param.name}/${param.index}`)
                    }
                } else {
                    if (param.queryParams) {
                        this.router.transitionTo(`${param.name}?${param.queryParams}`)
                    } else {
                        this.router.transitionTo(param.name)
                    }
                }
                break
			case "service":
				let source = e.detail[0].args.param.file.source
				this.downloadFile.downloadFile(source)
				break
            default: 
                console.log("submit event to parent")
        }
	}

    @action
	registerListener(element) {
        element.allData = this.calAllData
        console.log(this.calAllData);
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
