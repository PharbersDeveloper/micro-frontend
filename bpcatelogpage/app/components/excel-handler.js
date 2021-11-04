import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'
export default class ExcelHandlerComponent extends Component {
	@service router
    @service store
    @service cookies
    @service ajax

	@action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                const ltp = e.detail[0].args.param
                console.log(ltp)
                break
            case "createDataSetIndex":
                debugger
                const param = e.detail[0].args.param
                console.log(param)
                this.createDataSetIndex(param)
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

    createDataSetIndex(param) {
        const that = this
        const push_type = "put_item"
        const project_files_body = {
            "table": "action",
            "item": {
                "projectId": "Max", //TODO: 用projectId 替换
                "code": 0,
                "comments": "project file to Data set",
                "jobCat": "project_file_to_DS",
                "jobDesc": "creating",
                "message": param,
                "date": Date.now(),
                "owner": this.cookies.read('access_token'), // TODO: 用用户id替换
                "showName": "alfred"
            }
        }

        debugger
        const url = "https://apiv2.pharbers.com/phdydatasource/"
        const headers = {
            "Authorization": this.cookies.read( "access_token" ),
            "Content-Type": "application/vnd.api+json",
            "Accept": "application/vnd.api+json",
        }
        const options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(project_files_body)
        }
        return fetch(url+push_type, options).then(res => res.json())
    }
}
