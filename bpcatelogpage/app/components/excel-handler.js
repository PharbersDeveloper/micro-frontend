import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'
export default class ExcelHandlerComponent extends Component {
	@service router
    @service store
    @service('loading') loadingService;
    @service noticeService;
    @service cookies
    @service ajax
	@tracked tranParam = {}

	@action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                const ltp = e.detail[0].args.param
				let uri = '/projects'
                if(ltp.name === "advancedMapping") {
					uri = '/excel-clean?projectName='+ltp.projectName+ '&projectId=' + ltp.projectId
				} else if(ltp.name === "linkToProject" || ltp.name == "project") {
					uri = `/projects/`+ ltp.projectId
				} else if (ltp.name === "datasets") {
					uri = '/dataset-lst?projectName=' + ltp.projectName + '&projectId=' + ltp.projectId
				} else if(ltp.name === "scripts") {
					uri = '/recipes?projectName=' + ltp.projectName + '&projectId=' + ltp.projectId
				} else if (ltp.name == "flow") {
					uri = '/flow?projectName=' + ltp.projectName + '&projectId=' + ltp.projectId
				} else if(params.name == "airflow") {
					uri = '/airflow?projectName=' + params.projectName + '&projectId=' + params.projectId
				}
                this.router.transitionTo( uri )
                break
            case "createDataSetIndex":
                const param = e.detail[0].args.param
				this.tranParam = param
				this.createDataSetIndex(param)
                break
            default:
                console.log("submit event to parent")
        }
    }

    @action
    registerListener(element) {
        element.allData = this.calAllData
		element.allData.popupBack = true
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

	@action noticeCallback(response, ele) {
		let cnotification = JSON.parse(response.data[0].attributes.message).cnotification
		let upload_status = cnotification.status
		let error = cnotification.error
		if(upload_status == "project_file_to_DS_succeed") {
			//跳转下一页面
			this.router.transitionTo( `/dataset-lst?projectName=${this.tranParam.projectName}&projectId=${this.tranParam.projectId}` )
		} else if(upload_status == "project_file_to_DS_failed") {
			let msg = error !== '' ? error : '导入失败，请重新上传！'
			alert(msg)
		}
		this.loadingService.loading.style.display = 'none'
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

    @action
    async createDataSetIndex(param) {
		this.loadingService.loading.style.display = 'flex'
        this.loadingService.loading.style['z-index'] = 2
        const that = this
		param.opname = this.cookies.read( "account_id" )
		param.opgroup = this.cookies.read( "company_id" )
		param.cat = "uploaded"
		param.prop = {
			path: "",
			partitions: 1
		}
		//直接导入数据集
        const push_type = "put_item"
        const project_files_body = {
            "table": "action",
            "item": {
                "projectId": param.projectId,
                "code": 0,
                "comments": "project file to Data set",
                "jobCat": "project_file_to_DS",
                "jobDesc": "creating",
                "message": JSON.stringify(param),
                "date": Date.now(),
                "owner": this.cookies.read('account_id'),
                "showName": decodeURI(this.cookies.read('user_name_show'))
            }
        }
        let actions = await this.postUrl(push_type, project_files_body)
		//请求status，持续30s
		this.noticeService.register("notification", actions.data.id, this.noticeCallback, this, param.projectId,)

        // let statusType = 'query'
        // let statusBody = {
        //     "table": "notification",
        //     "conditions": {
        //         "id": actions.data.id
        //     },
        //     "limit": 10,
        //     "start_key": {}
        // }
        // var startTime = new Date().getTime();
        // let dagStatusInt = setInterval(async function() { 
        //     that.response.data[0].attributes.message(statusType, statusBody).then(response => {
        //         let project_files_status = response.data[0] ? response.data[0].attributes["job-desc"] : 'creating'
        //         if (project_files_status !== 'creating') {
        //             clearInterval(dagStatusInt); //循环结束
        //             let status = ''
		// 			console.log(project_files_status)
        //             if(project_files_status == "created") {
		// 				that.router.transitionTo( `/dataset-lst?projectName=${param.projectName}&projectId=${param.projectId}` )
        //             } else {
		// 				alert("failed！")
        //             }
        //             that.loadingService.loading.style.display = 'none'
        //         } else if(new Date().getTime() - startTime >= 60000) {
        //             clearInterval(dagStatusInt); //循环结束
		// 			alert("超时，连接终止！")
        //             that.loadingService.loading.style.display = 'none'
        //             that.router.transitionTo( `/dataset-lst?projectName=${param.projectName}&projectId=${param.projectId}` )
		// 		}
        //     }) 
        // }, 5 * 1000)

    }
}
