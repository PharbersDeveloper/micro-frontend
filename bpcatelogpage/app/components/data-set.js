import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class DataSetComponent extends Component {
    @service router
    @service store
    @service cookies
    @service('loading') loadingService;
    @service noticeService;
    @service ajax
    @tracked random
	@tracked tranParam = {}

    @action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                let param = e.detail[0].args.param
				let uri = '/projects'
				if(param.name === "linkToProject" || param.name == "project") {
					uri = `/projects/`+ param.projectId
				} else if (param.name === "datasets") {
					uri = '/dataset-lst?projectName=' + param.projectName + '&projectId=' + param.projectId
				} else if(param.name === "scripts") {
					uri = '/recipes?projectName=' + param.projectName + '&projectId=' + param.projectId
				} else if (param.name == "flow") {
					uri = '/flow?projectName=' + param.projectName + '&projectId=' + param.projectId
				}  else if(param.name == "airflow") {
					uri = '/airflow?projectName=' + param.projectName + '&projectId=' + param.projectId
				}
                this.router.transitionTo( uri )
                break
			case "s3UploadFiles":
				let s3_upload_param = e.detail[0].args.param
				if(s3_upload_param.s3UploadMessage.message) {
					let resMessage = {
						tmpname: s3_upload_param.s3UploadMessage.message.refer_name,
						filename: s3_upload_param.s3UploadMessage.message.file_name
					}
					let file = s3_upload_param.s3UploadMessage.message
					s3_upload_param.property.projectId = s3_upload_param.projectId
					s3_upload_param.property.opname = this.cookies.read( "account_id" )
					s3_upload_param.property.owner = this.cookies.read( "account_id" )
					s3_upload_param.property.opgroup = this.cookies.read( "company_id" )
					s3_upload_param.property.showName = decodeURI(this.cookies.read('user_name_show'))
					//关闭弹框
					e.detail[0].args.element.show = false
					this.random = Math.random()
					//notice回调函数参数
					this.tranParam = {
						"file": file,
						"property": s3_upload_param.property,
						"projectName": s3_upload_param.projectName,
						"message": resMessage,
						"projectId": s3_upload_param.projectId
					}
					//请求接口
					this.updateDataset(file, s3_upload_param.property, s3_upload_param.projectName, resMessage, s3_upload_param.projectId, "uploaded")
				}
                break
            case "uploadFiles":
                let params = e.detail[0].args.param
				let uploadParam = true
				let datasetName = params.property.dataset
				let dataID = params.property.dataID
				let datasetArray = this.args.model.datasetArr
				//如果数据集为下拉框选择，需要判断
				if(params.property.type == 'selectDataset') {
					// 判断数据id是否存在
					let opt = {"query": `select count(1) from \`${params.projectId}_${datasetName}\` where version = '${dataID}'`, "schema": ["count"]}
					let url = "https://apiv2.pharbers.com/phcheckversion"
					let headers = {
						"Authorization": this.cookies.read( "access_token" ),
						"Content-Type": "application/vnd.api+json",
						"Accept": "application/vnd.api+json",
					}
					let options = {
						method: "POST",
						headers: headers,
						body: JSON.stringify(opt)
					}
					let versionResult = await fetch(url, options).then(res => res.json())
					let NUMResult = Number(versionResult[0].count)
					if(NUMResult != 0) {
						uploadParam = false
						alert("数据ID重复，请重新输入！")
						throw new Error("数据集已存在")
					}
				}
				// 如果数据集是新创建，判断数据集是否存在
				else if(params.property.type == 'createDataset') {
					datasetArray.forEach(item => {
						if(item.name === datasetName) {
							uploadParam = false
							alert("数据集已存在，请在下拉框选择数据集！")
							throw new Error("数据集已存在")
						}
					})
				}
				if(uploadParam) {
					e.detail[0].args.element.show = false
					this.random = Math.random()
					params.property.projectId = params.projectId
					params.property.opname = this.cookies.read( "account_id" )
					params.property.owner = this.cookies.read( "account_id" )
					params.property.opgroup = this.cookies.read( "company_id" )
					params.property.showName = decodeURI(this.cookies.read('user_name_show'))
					this.confirmUploadFiles(params.files[0], params.property, params.projectName, params.projectId, "uploaded")
				}
                break
            default: 
                console.log("submit event to parent")
        }
    }

    @action
    async confirmUploadFiles(file, property, projectName, projectId, cat) {
            let that = this
            let uploadMessage = {}
            uploadMessage.file = file
            
            const API_ENDPOINT = "https://max.pharbers.com/upload";
            const request = new XMLHttpRequest();
            const formData = new FormData();
			this.loadingService.loading.style.display = 'flex'
			this.loadingService.loading.style['z-index'] = 2
            request.open("POST", API_ENDPOINT, true);
            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) {
                    //上传成功
                    let res = JSON.parse(request.responseText)
                    if(res.tmpname) {
						this.tranParam = {
							"file": file,
							"property": property,
							"projectName": projectName,
							"message": res,
							"projectId": projectId
						}
                        this.updateDataset(file, property, projectName, res, projectId, cat)
                    }
                }
            };
            formData.append("file", uploadMessage.file);
            request.send(formData);
    }

    @action
    async postUrl(type, body) {
        let url = "https://apiv2.pharbers.com/phdydatasource/"
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

	@action noticeCallback(response, ele) {
		let cnotification = JSON.parse(response.data[0].attributes.message).cnotification
		let upload_status = cnotification.status
		let error = cnotification.error !== "" ? JSON.parse(cnotification.error) : ""
		if(upload_status != "upload_succeed") {
			//跳转回dataset页面
			let msg = error["message"]["zh"] !== '' ? error["message"]["zh"] : '上传失败，请重新上传！'
			alert(msg)
			this.router.transitionTo('/dataset-lst?projectName=' + this.tranParam.projectName + '&projectId=' + this.tranParam.projectId)
		} else {
			this.noticeService.uploadStatus = true
			this.router.transitionTo( `/excel-handler?projectName=${this.tranParam.projectName}&projectId=${this.tranParam.projectId}&filename=${this.tranParam.file.name}&version=${this.tranParam.property.dataID}&dataset=${this.tranParam.property.dataset}&tmpname=${this.tranParam.message.tmpname}` )
		}
		this.loadingService.loading.style.display = 'none'
	}

    @action
    async updateDataset(file, property, projectName, message, projectId, cat) {
        this.loadingService.loading.style.display = 'flex'
        this.loadingService.loading.style['z-index'] = 2
        let that = this
        //push project_files
        let push_type = "put_item"
        let project_files_body = {
            "table": "project_files",
            "item": {
                "smID": projectName,
                "name": message.filename,
                "status": "creating",
                "category": message.filename.split('.')[1],
                "property": JSON.stringify(property),
                "id": message.tmpname
            }
        }
        let project_files = this.postUrl(push_type, project_files_body)
        //push actions
        let messages = {
			"actionName": property.dataset,
			"file": file,
			"message": message,
			"property": property,
			"projectId": projectId,
            "projectName": projectName,
			"cat": cat,
			"prop": JSON.stringify({
				path: "",
				partitions: 1
			})
		}
        let actions_body ={
            "table": "action",
            "item": {
                "projectId": projectId,
                "owner": this.cookies.read( "access_token" ),
                "showName": decodeURI(this.cookies.read('user_name_show')),
                "code": 0,
                "jobDesc": "created",
                "jobCat": "upload",
                "comments": "",
				"date": String(new Date().getTime()),
                "message": JSON.stringify(messages)
            }
        }
        let actions = this.postUrl(push_type, actions_body)
        let results = await Promise.all([project_files,actions])
        //请求status，持续30s
		this.noticeService.register("notification", results[0].data.id, this.noticeCallback, this, projectId)
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
}
