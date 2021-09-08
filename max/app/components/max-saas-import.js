import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'
import fetch, { Headers, Request, Response, AbortController } from 'fetch';
import { inject as service } from '@ember/service';

export default class MaxSaasImportComponent extends Component {
	@service oauthService
    @service cookies
    @service awsService
    @service store
    @service router

	@action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "opt": // 选择文件按钮
                let optParam = e.detail[0].args.param
                this.provider = optParam.provider;
                this.projectId = optParam.projectId;
                this.uploadDate = optParam.date

                if(optParam.type == "upload") {
                    $('#my-file').click()
                }
                break
            default: 
                console.log("other click event!")
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
