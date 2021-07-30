import Component from '@glimmer/component'
import { action } from '@ember/object'
import { inject as service } from "@ember/service"
import { tracked } from '@glimmer/tracking'


export default class MyDataComponent extends Component {
    @tracked tabIndex;
    @service router
	@service downloadFile
	@service cookies
	@service awsService
	@service store

	@tracked uploadToastBorder
	@tracked uploadTextStatus
	@tracked uploadText
	@tracked closeuploadToast
	@tracked uploadFileSize
	@tracked uploadLoadedSize
	@tracked showProgress

    @action
	listener(e) {
        switch(e.detail[0].args.callback) {
            case "linkToPage":
                let param = e.detail[0].args.param
                if (param.index != undefined) {
                    if (param.queryParams) {
                        this.router.transitionTo(`${param.name}/${param.index}?${param.queryParams}`)
                    } else {
                        this.router.transitionTo(`${param.name}/${param.index}`)
                    }
                } else {
                    if (param.queryParams) {
                        this.router.transitionTo(`${param.name}?${param.queryParams}`)
                    } else {
                        this.router.transitionTo(param.name)
                    }
                }
                break
			case "service":
				//下载文件
				if(e.detail[0].args.param.name == "downloadFile") {
					let source = e.detail[0].args.param.file.source
					this.downloadFile.downloadFile(source)
				}
				//上传文件 
				else if(e.detail[0].args.param.name == "uploadFile") {
					// $('#my-file').click()
					this.uploadFiles(e.detail[0].args, e.target)
				}
				break
			case "closeToast":
				this.closeuploadToast = '1'
				break
            default: 
                console.log("submit event to parent")
        }
	}

	@action
	async uploadFiles(event,target) {
		debugger
		//初始化变量
		target.allData.uploadToastBorder = "blue"
		target.allData.uploadTextStatus = "正在上传"
		target.allData.uploadText = ""
		target.allData.closeuploadToast = "0" //显示上传弹框
		//禁用上传文件input
		let dom = $( event.param.uploadEvent.target )
		dom[0].disabled = true

		function guid() {
			return "xxxxx-xxxx-4xxx-yxxx-xxxxx".replace( /[xy]/g, function ( c ) {
				var r = Math.random() * 16 | 0,
					v = c === "x" ? r : r & 0x3 | 0x8

				return v.toString( 16 )
			} )
		}

		/**
		 * 1. 初始化上传流程
		 */
		const traceId = guid()
		let uploadMessage = {}
		uploadMessage.accountId = this.cookies.read( "account_id" )
		uploadMessage.file = event.element.$refs.inputUpload.files[0]
		// uploadMessage.file = document.getElementById( "my-file" ).files[0]
		console.log(111111)
		/**
		 * 2. upload file to OSS
		 */
		let that = this
		target.allData.showProgress = '1' //显示上传进度
		target.allData.uploadFileSize = uploadMessage.file.size  // 上传文件总大小

		// aws s3 upload
		const accountId = this.cookies.read( "account_id" )
		const bucketName = "ph-origin-files"
		const s3Client = this.awsService.get( "s3Client" )
		const fileKey = `user/${accountId}/${traceId}/${uploadMessage.file.name}`
		let uploadFileParams = {
			Bucket: bucketName,
			Key: fileKey,
			Body: uploadMessage.file
		}

		try {
			//S3 上传
			await s3Client
				.upload( uploadFileParams )
				.on( "httpUploadProgress", function ( progress ) {
					target.allData.uploadLoadedSize = progress.loaded //实时进度
				} )
				.promise()
				console.log(22222)
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
				labels: [],
				created: new Date(),
				modified: new Date(),
				description: "",
				partners: that.args.model.employerId
			}
			console.log(33333)
			applicationAdapter.set( "reqBody", fileBodyObj )
			//数据库上传数据
			await this.store
				.createRecord( "asset", fileBodyObj )
				.save()
			console.log(44444)
			that.router.transitionTo( "/" )
			that.router.transitionTo( that.router.currentURL )
			target.allData.showProgress = '0'// 关闭上传进度条
			console.log(55555)
			//上传成功提示
			target.allData.uploadTextStatus = "上传成功"
			target.allData.uploadText = "在“我的数据”中查看结果"
			target.allData.uploadToastBorder = "green"
			console.log(66666)
		} catch ( e ) {
			target.allData.showProgress = '0' //关闭上传进度条
			//上传失败提示
			target.allData.uploadTextStatus = "上传失败" 
			target.allData.uploadText = ""
			target.allData.uploadToastBorder = "red"
		}
		console.log(77777)
		// 不管上传成功还是失败，都把按键的disabled取消，样式还原,loaded大小还原
		dom[0].disabled = false
		target.allData.uploadLoadedSize = 0
		console.log(8888)
		// 不管上传成功还是失败，都把文件清空
		// let fileContainer = document.getElementById( "my-file" )
		let fileContainer = dom[0]
		fileContainer.files = null
		fileContainer.value = ''
		console.log(99999)
	}

    @action
	registerListener(element) {
        element.allData = this.calAllData
		if(element.allData.tab == "1") {
			element.allData.curTab = 1
		}
        console.log(this.calAllData);
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
