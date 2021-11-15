import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'

export default class DataSetComponent extends Component {
    @service router
    @service store
    @service cookies
    @service('loading') loadingService;
    @service ajax
    @tracked random

    @action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                let param = e.detail[0].args.param
				let uri = ''
				if(param.name === "linkToProject") {
					uri = `/projects/`+ param.projectId
				}
                this.router.transitionTo( uri )
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
					let opt = {"query": `select count(1) from \`${datasetName}\` where version = '${dataID}'`, "schema": ["count"]}
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
				} else if(params.property.type == 'createDataset') {
					// 判断数据集是否存在
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
					this.confirmUploadFiles(params.files[0], params.property, params.projectName, params.projectId)
				}
                break
            default: 
                console.log("submit event to parent")
        }
    }

    @action
    async confirmUploadFiles(file, property, projectName, projectId) {
            let that = this
            let uploadMessage = {}
            uploadMessage.file = file
            
            const API_ENDPOINT = "https://max.pharbers.com/upload";
            const request = new XMLHttpRequest();
            const formData = new FormData();
        
            request.open("POST", API_ENDPOINT, true);
            request.onreadystatechange = () => {
                if (request.readyState === 4 && request.status === 200) {
                    //上传成功
                    let res = JSON.parse(request.responseText)
                    if(res.tmpname) {
                        this.updateDataset(file, property, projectName, res, projectId)
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

    @action
    async updateDataset(file, property, projectName, message, projectId) {
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
			file: file,
			message: message,
			property: property,
			projectId: projectId,
            projectName: projectName
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
                "message": JSON.stringify(messages)
            }
        }
        let actions = this.postUrl(push_type, actions_body)
        let results = await Promise.all([project_files,actions])

        //请求status，持续30s
        let statusType = 'query'
        let statusBody = {
            "table": "project_files",
            "conditions": {
                "id": results[0].data.id
            },
            "limit": 10,
            "start_key": {}
        }
        let startTime = new Date().getTime();
        let dagStatusInt = setInterval(async function() { 
            that.postUrl(statusType, statusBody).then(response => {
                let project_files_status = response.data[0].attributes.status
                if (project_files_status !== 'creating') {
                    clearInterval(dagStatusInt); //循环结束
                    let status = ''
                    if(project_files_status == "success") {
                        console.log(project_files_status)
                    } else {
                        console.log(project_files_status)
                    }
                    that.loadingService.loading.style.display = 'none'
                    // that.router.transitionTo( `/excel-clean?tmpname=${message.tmpname}&projectName=${projectName}` )
                    that.router.transitionTo( `/excel-handler?projectName=${projectName}&projectId=${projectId}&filename=${file.name}&version=${property.dataID}&dataset=${property.dataset}&tmpname=${message.tmpname}` )
                } else if(new Date().getTime() - startTime >= 60000) {
                    clearInterval(dagStatusInt); //循环结束
					alert("超时，连接终止！")
				}
            }) 
        }, 5 * 1000)
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
