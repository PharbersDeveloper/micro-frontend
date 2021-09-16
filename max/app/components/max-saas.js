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
				//人工清洗
				if(optParam.type == "clean") {
					window.open(`${ENV.windowUri}/max-saas/cleaning`)
                }

                break
            case "confirmUpload": // 确认上传
                let confirmParam = e.detail[0].args.param
                this.confirmUploadFiles(confirmParam.memo, confirmParam.sheet);
                break
            case "changePage": // 分页
                let changePageParams = e.detail[0].args.param
                this.optPageParam = changePageParams.page
				// 去掉url带的参数
				let url = document.URL.split('?')[0]
				history.pushState(null, null, url)
                //请求操作信息数据
                let jobLogs = await this.store.query( "jobLog", {"page[limit]": 10, "page[offset]": changePageParams.page * 10, "sort": "date"} )
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
	getCurrentDate() {
		//获取当前时间的时间戳，格式为 2020-10-01
		let currentDate = new Date().getTime()
		let date = new Date(currentDate)
		let y = date.getFullYear()
		let m = date.getMonth() + 1
		m = m < 10 ? ('0' + m) : m;
		let time = y + '-' + m + '-' + '01';
		let currentstamp = time.replace(/-/g, '/');
		let timesTamp = new Date(currentstamp).getTime()
		return timesTamp
	}

	@action
	guid() {
		//随机id
		return "xxxxx-xxxx-4xxx-yxxx-xxxxx".replace( /[xy]/g, function ( c ) {
			var r = Math.random() * 16 | 0,
				v = c === "x" ? r : r & 0x3 | 0x8

			return v.toString( 16 )
		} )
	}

    @action
    async confirmUploadFiles(memo, sheet) {
		if(sheet != "test") {
			/**
			 * 1. 初始化上传流程和变量
			*/
			let that = this
			this.uploadToastBorder = "blue"
			this.uploadTextStatus = "正在上传"
			this.uploadText = ""
			this.closeuploadToast = "0" //显示上传弹框
			this.showProgress = '1' //显示上传进度条
			let user_name_show = decodeURI(this.cookies.read('user_name_show'))
			// 当月1号的时间戳 2020-10-01
			let timesTamp = this.getCurrentDate()
			// 当前时间的秒级时间戳
			let timesCurrent = parseInt(new Date().getTime()/1000).toString()
			//上传文件的信息
			let uploadMessage = {}
			uploadMessage.accountId = this.cookies.read( "account_id" )
			uploadMessage.file = document.getElementById( "my-file" ).files[0]
			this.fileName = uploadMessage.file.name
			//文件名
			let fileName = uploadMessage.file.name.replace(/[(|)|（|）| 【|】| \[|\] ]/g, "_");
			let fileVersion = fileName.split('.')[0] +'_'+ Math.random()
			//存进asset表的labels
			let labelsArr = ["owner",user_name_show, "application", "max", "provider", this.provider, "date", this.uploadDate, "time", timesCurrent, "fileName", fileName, "fileVersion", fileVersion]
			//打tag需要的参数
			let TagSet = [{
					Key: "owner",
					Value: user_name_show
				},
				{
					Key: "application",
					Value: "max"
				}, 
				{
					Key: "provider",
					Value: this.provider
				},
				{
					Key: "date", 
					Value: this.uploadDate
				},{
					Key: "time", 
					Value: timesCurrent
				},
				{
					Key: "version", //需要唯一
					Value: fileVersion
				},
				{
					Key: "filename", 
					Value: fileName
				},
				{
					Key: "sheet",
					Value: sheet
				}]
			try {
				/**
				 * 2. upload file
				 */
				const API_ENDPOINT = "https://upload.pharbers.com/upload";
				const request = new XMLHttpRequest();
				const formData = new FormData();

				request.open("POST", API_ENDPOINT, true);
				request.onreadystatechange = () => {
					if (request.readyState === 4 && request.status === 200) {
						//上传成功
						let res = JSON.parse(request.responseText)
						if(res.tmpname) {
							// 插入一条jobLog,存tag
							this.pushJobLogs(fileVersion, "SUCCEEDED", "upload", uploadMessage, labelsArr, memo, timesTamp, sheet, res.tmpname, TagSet)
						}
					}
				};
				formData.append("file", uploadMessage.file);
				request.send(formData);
				
				/**
				 * 3 create file metadata for database
				 */
				// const applicationAdapter = this.store.adapterFor( "application" )
				// const fileBodyObj = {
				// 	name: uploadMessage.file.name.split( "." )[0],
				// 	owner: this.cookies.read( "account_id" ),
				// 	extension: uploadMessage.file.name.split( "." )[1],
				// 	size: uploadMessage.file.size,
				// 	source: fileKey,
				// 	type: "file", // candidate: database, file, stream, application, mart, cube
				// 	accessibility: "",
				// 	version: "",
				// 	isNewVersion: true,
				// 	providers: [],
				// 	markets: [],
				// 	molecules: [],
				// 	dateCover: [],
				// 	geoCover: [],
				// 	labels: labelsArr,
				// 	created: new Date(),
				// 	modified: new Date(),
				// 	description: memo,
				// 	partners: that.args.model.employerId
				// }
				// applicationAdapter.set( "reqBody", fileBodyObj )
				// await this.store.createRecord( "asset", fileBodyObj ).save()
			} catch ( e ) {
				console.log(e)
				that.showProgress = '0' //关闭上传进度条
				//上传失败提示
				that.uploadTextStatus = "上传失败" 
				that.uploadText = ""
				that.uploadToastBorder = "red"
			}
			// 不管上传成功还是失败，都把文件清空
			let fileContainer = document.getElementById( "my-file" )
			fileContainer.value = null
			this.fileName = '' //文件名称置空
		}
    }

    @action
    async pushJobLogs(fileVersion, status, option, uploadMessage, labelsArr, memo, timesTamp, sheet, tmpname, TagSet) {
		let that = this
		let time
		if(this.uploadDate) {
			let ym = this.uploadDate.slice(0,4) + '/' + this.uploadDate.slice(4) +'/01'
			time = new Date(ym).getTime()
		}
		let message = {
			name: fileVersion,
			size: uploadMessage.file.size,
			label: labelsArr.toString(),
			sheet: sheet,
			tmpname: tmpname,
			tags: TagSet
		}
		//push jobLogs
		let jobLogsParam = {
			"provider": that.provider,
			"owner": that.cookies.read('account_id'),
			"showName": decodeURI(that.cookies.read('user_name_show')),
			"time": time ? time : timesTamp,
			"version": fileVersion,
			"code": 0,
			"jobDesc": status,
			"jobCat": option,
			"comments": memo,
			"message": JSON.stringify(message),
			"date": new Date().getTime(),
		}
		await that.store.createRecord('jobLog', jobLogsParam).save()
		that.uploadLoadedSize = 100 //文件上传成功，进度条到50%
		that.showProgress = '0'// 关闭上传进度条
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
		//刷新页面状态
		that.router.transitionTo( "/" )
		that.router.transitionTo( `/max-saas/upload?page=${that.optPageParam}&selectedTime=${that.selectedTime}`)
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
