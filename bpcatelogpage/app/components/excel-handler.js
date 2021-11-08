import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'
export default class ExcelHandlerComponent extends Component {
	@service router
    @service store
    @service('loading') loadingService;
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
                const param = e.detail[0].args.param
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

	@action
    async postUrl(type, body) {
		const url = "https://apiv2.pharbers.com/phdydatasource/"
        let headers = {
            "Authorization": this.cookies.read( "access_token" ),
            "Content-Type": "application/vnd.api+json",
            "Accept": "application/vnd.api+json",
        }
        let options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(body)
        }
        return fetch(url+type, options).then(res => res.json())
    }

    async createDataSetIndex(param) {
		this.loadingService.loading.style.display = 'inline-block'
        this.loadingService.loading.style['z-index'] = 2
        const that = this
		//直接导入数据集
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
                "showName": decodeURI(this.cookies.read('user_name_show'))
            }
        }
        let actions = await this.postUrl(push_type, project_files_body)

		//请求status，持续30s
        let statusType = 'query'
        let statusBody = {
            "table": "project_files",
            "conditions": {
                "id": actions.data.id
            },
            "limit": 10,
            "start_key": {}
        }
        var startTime = new Date().getTime();
        let dagStatusInt = setInterval(async function() { 
            that.postUrl(statusType, statusBody).then(response => {
                let project_files_status = response.data[0] ? response.data[0].attributes.status : 'creating'
                if (project_files_status !== 'creating') {
                    clearInterval(dagStatusInt); //循环结束
                    let status = ''
                    if(project_files_status == "success") {
                        console.log(project_files_status)
                    } else {
                        console.log(project_files_status)
                    }
                    that.loadingService.loading.style.display = 'none'
                    that.router.transitionTo( `/dataset-lst?projectName=${param.projectName}&projectId=${param.projectId}` )
                } else if(new Date().getTime() - startTime >= 60000) {
                    clearInterval(dagStatusInt); //循环结束
					alert("超时，连接终止！")
                    that.router.transitionTo( `/dataset-lst?projectName=${param.projectName}&projectId=${param.projectId}` )
				}
            }) 
        }, 5 * 1000)

    }
}
