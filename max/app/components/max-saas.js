import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'
import fetch, { Headers, Request, Response, AbortController } from 'fetch';
import { inject as service } from '@ember/service';
import ENV from "max/config/environment"


export default class MaxSaasComponent extends Component {
    @service oauthService
    @service cookies
    @service awsService
    @service store
    @service router

    @tracked optPageParam
    @tracked selectedTime
    @tracked fileName
    @tracked random
    @tracked provider
    @tracked uploadDate
    @tracked uploadToastBorder
    @tracked uploadTextStatus
    @tracked uploadText
    @tracked closeuploadToast
    @tracked uploadFileSize
    @tracked uploadLoadedSize
    @tracked showProgress
	@tracked jobLogsObj

    @action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "opt": // projectb表格按钮
                let optParam = e.detail[0].args.param
                this.provider = optParam.provider;
                this.projectId = optParam.projectId;
                this.uploadDate = optParam.date
				//文件上传
                if(optParam.type == "upload") {
                    $('#my-file').click()
                }
				//导入
				if(optParam.type == "import") {
					window.open(`${ENV.windowUri}/max-saas/import?ym=${this.uploadDate}&provider=${this.provider}&projectId=${this.projectId}`)
                }
                break
            case "confirmUpload": // 确认上传
                let confirmParam = e.detail[0].args.param
                this.confirmUploadFiles(confirmParam.memo, confirmParam.sheet);
                break
            case "changePage": // 操作信息 分页
                let changePageParams = e.detail[0].args.param
                this.optPageParam = changePageParams.page
				// 去掉url带的参数
				let url = document.URL.split('?')[0]
				history.pushState(null, null, url)
                //请求操作信息数据
                let jobLogs = await this.store.query( "jobLog", {"page[limit]": 10, "page[offset]": changePageParams.page * 10} )
                e.target.allData.jobLogs = jobLogs.filter(function(item) {
                    return item.id !== ''
                })
                this.random = Math.random()
                break
            case "closeToast": // 关闭上传进度条
                this.closeuploadToast = '1'
                break
            case "selectYearMonth": // 选择年月
                let paramDate = e.detail[0].args.param
                //获取选择年月时间戳
                let paramTime = paramDate.year + '-' + paramDate.month + '-' + '01';
                let currentstamp = paramTime.replace(/-/g, '/');
                let selectedTime = new Date(currentstamp).getTime()
                this.selectedTime = selectedTime
				// 去掉url带的参数
				let urls = document.URL.split('?')[0]
				history.pushState(null, null, urls)
                //请求项目信息
                let projects = await this.store.query("project",{ "filter[time]": selectedTime})
                e.target.allData.projectsData = projects.filter(function(item) {
                    return item.id !== ''
                })
                this.random = Math.random()
                break
            default: 
                console.log("other click event!")
        }
    }

    @action
    async confirmUploadFiles(memo, sheet) {
		if(sheet != "test") {
			//初始化变量
			this.uploadToastBorder = "blue"
			this.uploadTextStatus = "正在上传"
			this.uploadText = ""
			this.closeuploadToast = "0" //显示上传弹框
			function guid() {
				return "xxxxx-xxxx-4xxx-yxxx-xxxxx".replace( /[xy]/g, function ( c ) {
					var r = Math.random() * 16 | 0,
						v = c === "x" ? r : r & 0x3 | 0x8

					return v.toString( 16 )
				} )
			}

			//todo: getCurrentDate
			let currentDate = new Date().getTime()
			let date = new Date(currentDate)
			let y = date.getFullYear()
			let m = date.getMonth() + 1
			m = m < 10 ? ('0' + m) : m;
			let time = y + '-' + m + '-' + '01';
			let currentstamp = time.replace(/-/g, '/');
			let timesTamp = new Date(currentstamp).getTime()
			
			/**
			 * 1. 初始化上传流程
			 */
			let that = this
			const traceId = guid()
			let uploadMessage = {}
			uploadMessage.accountId = this.cookies.read( "account_id" )
			uploadMessage.file = document.getElementById( "my-file" ).files[0]
			this.fileName = uploadMessage.file.name
			let fileVersion = ''; //文件名，发送请求所需参数
			/**
			 * 2. upload file to OSS
			 */
			this.showProgress = '1' //显示上传进度
			that.uploadFileSize = uploadMessage.file.size  // 上传文件总大小
			// aws s3 upload
			const accountId = this.cookies.read( "account_id" )
			const bucketName = "ph-origin-files"
			const s3Client = this.awsService.get( "s3Client" )
			const fileKey = `user/${accountId}/${traceId}/${uploadMessage.file.name}`
			let uploadFileParams = {
				Bucket: bucketName,
				Key: fileKey.replace(/[(|)|（|）| 【|】| \[|\] ]/g, "_"),//文件名称格式化
				Body: uploadMessage.file
			}
			try {
				//S3 上传
				let s3FileUpload = await s3Client
					.upload( uploadFileParams )
					.on( "httpUploadProgress", function ( progress ) {
						// that.uploadLoadedSize = progress.loaded //实时进度
					} )
					.promise()
					.catch((err)=> {
						this.pushJobLogs(uploadFileParams.Key, "failed", "upload", uploadMessage, [], memo, sheet)
					})
					
				if(!s3FileUpload) return
				//文件名	
				fileVersion = s3FileUpload.Key.split("/").pop()
				let exArn = ''
				let execution = await this.store.createRecord('execution', {}).save()
				let executionId = execution.id
				// 上传文件tag
				let tagParam = {
					Bucket: s3FileUpload.Bucket,
					Key: s3FileUpload.Key,
					Tagging: {
						TagSet: [
							{
								Key: "owner", 
								Value: this.args.model.userData.name
								// Value: "pharbers"
							},
							{
								Key: "application", 
								Value: "max"
							}, 
							{
								Key: "provider", 
								Value: this.provider
								// Value: "pharbers"
							},
							{
								Key: "date", 
								Value: this.uploadDate
							},{
								Key: "time", 
								Value: parseInt(new Date().getTime()/1000).toString() //获取到秒级时间戳
							},
							{
								Key: "version", 
								Value: fileVersion.split('.')[0]
							},
							{
								Key: "filename", 
								Value: fileVersion
							},
							{
								Key: "sheet",
								Value: sheet
							},
							{
								Key: "executionId",
								Value: executionId
							}
						]
					}
				}
				// 上传文件打tag
				s3Client.putObjectTagging(tagParam, function(err, data) {
					if (err) console.log(err, err.stack);
				});
				//push jobLogs
				let labelsArr = ["owner",this.args.model.userData.name, "application", "max", "provider", this.provider, "date", this.uploadDate, "time", parseInt(new Date().getTime()/1000).toString(), "version", fileVersion.split('.')[0]]
				/**
				 * 3. create file metadata for database
				 */
				const applicationAdapter = this.store.adapterFor( "application" )
				const fileBodyObj = {
					name: uploadMessage.file.name.split( "." )[0],
					owner: accountId,
					extension: uploadMessage.file.name.split( "." )[1],
					size: uploadMessage.file.size,
					source: fileKey,
					type: "file", // candidate: database, file, stream, application, mart, cube
					accessibility: "",
					version: "",
					isNewVersion: true,
					providers: [],
					markets: [],
					molecules: [],
					dateCover: [],
					geoCover: [],
					labels: labelsArr,
					created: new Date(),
					modified: new Date(),
					description: memo,
					partners: that.args.model.employerId
				}
				applicationAdapter.set( "reqBody", fileBodyObj )
				//数据库上传数据
				await this.store.createRecord( "asset", fileBodyObj ).save()
				await this.pushJobLogs(fileVersion, "SUCCEEDED", "upload", uploadMessage, labelsArr, memo, timesTamp, uploadMessage.file, sheet, s3FileUpload)
				this.uploadLoadedSize = 100 //文件上传成功，进度条到50%
				//create executions 得到arn
				// that.uploadTextStatus = "正在处理"
				// 暂时去掉上传文件触发ETL流程
				// let executionInt = await setInterval(function() {
				// 	that.store.findRecord('execution', executionId).then(executionData => {	
				// 		if (executionData.arn && executionData.arn != '') { 
				// 			clearInterval(executionInt); 
				// 			that.uploadLoadedSize = 70
				// 			exArn = executionData.arn
				// 			//请求phstatus
				// 			let stateUrl = "https://api.pharbers.com/phstepstatus"
				// 			let options = {
				// 				method: "POST",
				// 				mode: "cors",
				// 				headers: {
				// 					"Authorization": that.cookies.read( "access_token" ),
				// 					"Content-Type": "application/vnd.api+json",
				// 					"Accept": "application/vnd.api+json",
				// 				},
				// 				body: JSON.stringify({"executionArn": exArn})
				// 			}
				// 			let dagStatusInt = setInterval(function() { 
				// 				fetch(stateUrl, options).then(res=>res.json()).then(response => {
				// 					let execution_status = response.execution_status
				// 					if (execution_status && execution_status !== 'RUNNING') {
				// 						clearInterval(dagStatusInt); 
				// 						that.uploadLoadedSize = 90
				// 						let code = 1
				// 						if(execution_status == "SUCCEEDED") {
				// 							code = 0
				// 							that.uploadLoadedSize = 100
				// 						} else {
				// 							that.uploadLoadedSize = 99
				// 						}
				// 						//patch joblogs 为当前状态值
				// 						that.store.push({
				// 							data: {
				// 								id: that.jobLogsObj.id,
				// 								type: 'jobLog',
				// 								attributes: {
				// 									"code": code,
				// 									"jobDesc": execution_status,
				// 									"date": new Date().getTime()
				// 								}
				// 							}
				// 						}).save().then(()=> {
				// 							that.router.transitionTo( "/" )
				// 							if(!that.optPageParam) {that.optPageParam = 0}
				// 							if(!that.selectedTime) {that.selectedTime = timesTamp}
				// 							that.router.transitionTo( `/max-saas/upload?page=${that.optPageParam}&selectedTime=${that.selectedTime}`)
				// 							if(that.uploadLoadedSize == 100) {
				// 								that.uploadToastBorder = "green"
				// 								that.uploadTextStatus = "处理成功"
				// 							} else {
				// 								that.uploadToastBorder = "red"
				// 								that.uploadTextStatus = "处理失败"
				// 							}
				// 						})
				// 					}
				// 				}) 
				// 			}, 20*1000)
				// 		} 
				// 	})
				// }, 20*1000)
				that.showProgress = '0'// 关闭上传进度条
				// that.router.transitionTo( "/" )
				// that.router.transitionTo( `/max-saas/upload?page=${that.optPageParam}&selectedTime=${that.selectedTime}`)
				//上传成功提示
				if(that.uploadLoadedSize == 100) {
					that.uploadTextStatus = "上传成功"
					that.uploadText = "在“我的数据”中查看结果"
					that.uploadToastBorder = "green"
				} else {
				//上传失败提示
					that.uploadTextStatus = "上传失败" 
					that.uploadText = ""
					that.uploadToastBorder = "red"
				}
			} catch ( e ) {
				console.log(e)
				that.showProgress = '0' //关闭上传进度条
				//上传失败提示
				that.uploadTextStatus = "上传失败" 
				that.uploadText = ""
				that.uploadToastBorder = "red"
			}

			// that.uploadLoadedSize = 0
			// 不管上传成功还是失败，都把文件清空
			let fileContainer = document.getElementById( "my-file" )
			fileContainer.value = null
			this.fileName = '' //文件名称置空
		}
    }

	@action
    async  parseExcelFile2(inputElement) {
		var file = inputElement;
		console.time();
		var reader = new FileReader();
		reader.onloadend = function(event) {
			var arrayBuffer = reader.result;
			// var buffer = Buffer.from(arrayBuffer)
			// debugger
			let arr = []
			var workbook = new ExcelJS.Workbook();
			// workbook.xlsx.read(buffer)
			workbook.xlsx.load(arrayBuffer).then(function(workbook) {
				console.timeEnd();
				workbook.worksheets.forEach(function (sheet, sheetNumber) {
					sheet.eachRow(function (row, rowNumber) {
						if(rowNumber == 1) {
							console.log(sheet)
							console.log(row.values)
							arr.push({name: sheet.name,headers: row.values})
						}
					})
				})
			});
		};
		reader.readAsArrayBuffer(file);
	}

    @action
    async pushJobLogs(fileVersion, status, option, uploadMessage, labelsArr, memo, timesTamp, inputElement, sheet, s3FileUpload) {
		let that = this
		let time
		if(this.uploadDate) {
			let ym = this.uploadDate.slice(0,4) + '/' + this.uploadDate.slice(4) +'/01'
			time = new Date(ym).getTime()
			
		}
		var file = inputElement;
		var reader = new FileReader();
		reader.onloadend = function(event) {
			var arrayBuffer = reader.result;
			let arr = []
			var workbook = new ExcelJS.Workbook();
			try {
				workbook.xlsx.load(arrayBuffer).then(async function(workbook) {
					workbook.worksheets.forEach(function (sheetData, sheetNumber) {
						sheetData.eachRow(function (row, rowNumber) {
							if(rowNumber == 1) {
								arr.push({name: sheetData.name,headers: row.values})
							}
						})
					})
					/* 读文件结束 */
					// message: 名字+文件大小+label
					let message = {
						name: fileVersion,
						size: uploadMessage.file.size,
						location: s3FileUpload.Key,
						label: labelsArr.toString(),
						sheet: sheet,
						schemas: arr
					}
					//push jobLogs
					let jobLogsParam = {
						"provider": that.provider,
						"owner": that.args.model.userData.id,
						"showName": that.args.model.userData.name,
						"time": time ? time : timesTamp,
						"version": fileVersion +'_'+ Math.random(),
						"code": 0,
						"jobDesc": status,
						"jobCat": option,
						"comments": memo,
						"message": JSON.stringify(message),
						"date": new Date().getTime(),
					}
					let jobLogsObj = await that.store.createRecord('jobLog', jobLogsParam).save()
					// that.jobLogsObj = jobLogsObj
					//刷新页面状态
					that.router.transitionTo( "/" )
					that.router.transitionTo( `/max-saas/upload?page=${that.optPageParam}&selectedTime=${that.selectedTime}`)
				})
			} catch ( e ) {
				console.log(e)
				that.showProgress = '0' //关闭上传进度条
				//上传失败提示
				that.uploadTextStatus = "上传失败" 
				that.uploadText = ""
				that.uploadToastBorder = "red"
			}
			
		};
		reader.readAsArrayBuffer(file);
    }

    @action
    async uploadFiles(title, event) {
        //禁用上传文件input
        let dom = $( event.target )
        dom[0].disabled = true
        
        let uploadFile = {}
        uploadFile.file = document.getElementById( "my-file" ).files[0]
        this.fileName = uploadFile.file.name //文件名称传入component

        dom[0].disabled = false
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
