import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking'
import fetch, { Headers, Request, Response, AbortController } from 'fetch';


export default class DagRunComponent extends Component {
    @tracked dagid;
	@service router
	@service store
	@service awsService
	@service cookies
	@tracked random


	@action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
				let linkParam = e.detail[0].args.param
				if(linkParam.name == 'linkToPageDag'){
					this.router.transitionTo( `/projects/`+ linkParam.project_id )
				} else {
					this.router.transitionTo( '/projects' )
				}
                break
			case "changePage":
				//执行列表 分页
				let params = e.detail[0].args.param
				let executions = await this.store.query( "execution", { "filter[projectExecution]": params.project_id, "page[limit]": 10, "page[offset]": params.page * 10} )
				e.target.allData.executions = executions.filter(function(item) {
					return item.name !== ''
				})
				break
			case "clickNode":
				// 请求logs
				let clickNodeParam = e.detail[0].args.param
				let url = "https://api.pharbers.com/phproject/logs"
				const body = {
					arn: clickNodeParam.arn,
					name: clickNodeParam.name
				}
				let options = {
					method: "POST",
					headers: {
						authorization: this.cookies.read( "access_token" ),
						'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
						"accept": "application/json, text/javascript, */*; q=0.01"
					},
					body: JSON.stringify(body)
				}
				fetch(url, options).then(res=> {
					return res.json()
				}).then( response => {
					// 请求s3
					if(response.AccessKeyId && response.SecretAccessKey) {
						let credentials = {
							accessKeyId: response.AccessKeyId,
							secretAccessKey: response.SecretAccessKey
						}
						function s3ClientFun() {
							AWS.config.update( credentials )
							AWS.config.update( { region: "cn-northwest-1" } )
							return new AWS.S3( { apiVersion: "2006-03-01" } )
						} 
						const s3Client = s3ClientFun()
						response.results.forEach(sourceData => {
							let str = sourceData.source.split("s3://")[1];
							if(sourceData.type == 's3') {
								let bucketName = str.split("/")[0];
								let keyName = str.substring(str.indexOf("/")+1, str.length);
								const result = s3Client.getObject({Bucket: bucketName, Key: keyName }).promise().then(s3Data => {
									let logsData = s3Data.Body
									function Uint8ArrayToString(fileData){
										var dataString = "";
										for (var i = 0; i < fileData.length; i++) {
										dataString += String.fromCharCode(fileData[i]);
										}
									
										return dataString
									}
									let logResult = Uint8ArrayToString(logsData)
									if(e.target.allData.logsData) {
										e.target.allData.logsData = e.target.allData.logsData + logResult
									} else {
										e.target.allData.logsData = logResult
									}
									this.random = Math.random()
								})
							}
						})
					} else {
						e.target.allData.logsData = ''
						this.random = Math.random()
					}
				})
				break
            default: 
                console.log("other click event!")
        }
    }

	@action
	registerListener(element) {
		element.allData = this.calAllData
		if(element.allData.targetExecution) {
			element.allData.arn = element.allData.targetExecution.arn
		}
		if(element.allData.arn) {
			this.dagid = element.allData.arn.split("execution:")[1].split(":")[0]+'_id'
		}
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
