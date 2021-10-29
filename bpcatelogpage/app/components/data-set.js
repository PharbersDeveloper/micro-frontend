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
                break
            case "uploadFiles":
                let params = e.detail[0].args.param
                this.confirmUploadFiles(params.files[0], params.property, params.projectName)
                break
            default: 
                console.log("submit event to parent")
        }
    }

    @action
    async confirmUploadFiles(file, property, projectName) {
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
                        this.updateDataset(file, property, projectName, res)
                    }
                }
            };
            formData.append("file", uploadMessage.file);
            request.send(formData);
    }

    @action
    async updateDataset(file, property, projectName, message) {
        this.loadingService.loading.style.display = 'inline-block'
        let that = this
        //push project_files
        let url = "https://apiv2.pharbers.com/phdydatasource/put_item"
        let body = {
            "table": "project_files",
            "item": {
                "smID": projectName,
                "name": message.filename,
                "status": "creating",
                "category": message.filename.split('.')[1],
                "property": property,
                "id": message.tmpname
            }
        }
        let options = {
            method: "POST",
            headers: {
                "authorization": this.cookies.read( "access_token" ),
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "accept": "application/json, text/javascript, */*; q=0.01"
            },
            body: JSON.stringify(body)
        }
        let project_files = await fetch(url, options).then(res => res.json())
        let stateUrl = "https://apiv2.pharbers.com/phdydatasource/query"
        //请求status，持续30s
        let statusBody = {
            "table": "project_files",
            "conditions": {
                "id": project_files.data.id
            },
            "limit": 10,
            "start_key": {}
        }
        let statusOptions = {
            method: "POST",
            mode: "cors",
            headers: {
                "Authorization": this.cookies.read( "access_token" ),
                "Content-Type": "application/vnd.api+json",
                "Accept": "application/vnd.api+json",
            },
            body: JSON.stringify(statusBody)
        }
        var startTime = new Date().getTime();
        let dagStatusInt = setInterval(async function() { 
            fetch(stateUrl, statusOptions).then(res=>res.json()).then(response => {
                let project_files_status = response.data[0].attributes.status
                if (project_files_status !== 'creating' || new Date().getTime() - startTime >= 30000) {
                    clearInterval(dagStatusInt); //循环结束
                    let status = ''
                    if(project_files_status == "success") {
                        console.log("success")
                    } else {
                        console.log("failed")
                    }
                    // this.loadingService.loading.style.display = 'none'
                    that.router.transitionTo( '/excel-clean' )
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
