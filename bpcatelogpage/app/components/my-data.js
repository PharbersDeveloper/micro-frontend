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
					$('#my-file').click()
				}
				break
			case "closeToast":
				break
            default: 
                console.log("submit event to parent")
        }
	}

	@action
	async uploadFiles(title, event) {
		//初始化变量
		this.uploadToastBorder = "blue"
		this.uploadTextStatus = "正在上传"
		this.uploadText = ""
		this.closeuploadToast = "0"

		let dom = $( event.target )
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
		const traceId = guid(),
		name = new Date().getTime()

		let uploadLink = traceId + "/" + name // 续传，不续传的话用 const 就好了
		let uploadMessage = {}
		// uploadMessage.accountId = "5d7f1f90bd33a522bf1ba79c" // 测试id
		uploadMessage.accountId = this.cookies.read( "account_id" )
		uploadMessage.file = document.getElementById( "my-file" ).files[0]

		/**
		 * 2. upload file to OSS
		 */
		let that = this
		this.showProgress = true //上传进度条
		that.uploadFileSize = uploadMessage.file.size  // 上传文件总大小

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
					that.uploadLoadedSize = progress.loaded 
				} )
				.promise()
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


			applicationAdapter.set( "reqBody", fileBodyObj )
			//数据库上传数据
			await this.store
				.createRecord( "asset", fileBodyObj )
				.save()

			that.router.transitionTo( "/" )
			that.router.transitionTo( title.router.currentURL )

			let fileObj = {
				name: uploadMessage.file.name.split( "." )[0],
				size: uploadMessage.file.size,
				status: 1
			}
			that.showProgress = false// 关闭上传进度条
			// that.set( "uploadFileStatus", fileObj )

			//上传成功提示
			// that.toast.success( "", "上传成功", that.toastOptions )
			that.uploadTextStatus = "上传成功"
			that.uploadText = "在“我的数据”中查看结果"
			that.uploadToastBorder = "green"
		} catch ( e ) {
			// that.set( "loadedFailed", uploadMessage.file ) // 上传失败，记录上传的文件，用于续传
			// that.set( "uploadLink", uploadLink ) // 上传失败，记录上传的链接，用于续传
			let info = e.name === "cancel" ? "取消上传" : ""

			// 多种不同错误处理
			that.showProgress = false
			let fileObj = {
				name: uploadMessage.file.name.split( "." )[0],
				status: 0,
				info: info
			}

			// that.set( "uploadFileStatus", fileObj )

			//上传失败提示
			// that.toast.error( "", "上传失败", that.toastOptions )
			that.uploadTextStatus = "上传失败" 
			that.uploadText = ""
			that.uploadToastBorder = "red"
		}

		// 不管上传成功还是失败，都把按键的disabled取消，样式还原,loaded大小还原
		dom[0].disabled = false
		// this.set( "fileinputButton", false )
		// $( "#tooltips" )[0].title = ""
		that.uploadLoadedSize = 0

		// 不管上传成功还是失败，都把文件清空
		let fileContainer = document.getElementById( "my-file" )

		fileContainer.value = null
		// that.set( "curUploadFileSize", 0 )
		// that.set( "curProgress", 0 )
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
