import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking'
import { inject as service } from '@ember/service';

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

    @action
    async listener(e) {
        switch(e.detail[0].args.callback) {
            case "opt": // 文件上传
                let param = e.detail[0].args.param
                this.provider = param.provider;
				this.projectId = param.projectId;
                let selectTime = new Date(param.date)
                let year = selectTime.getFullYear()
                let month = selectTime.getMonth() + 1
                if(String(month).length == 1) {
                    month = '0' + String(month)
                }
                this.uploadDate = String(year)+String(month) //年月202108
                if(param.type == "upload") {
                    $('#my-file').click()
                }
                break
            case "confirmUpload": // 确认上传
                this.confirmUploadFiles(e.detail[0].args.param.memo, e.detail[0].args.param.sheet);
                break
            case "changePage": // 操作信息 分页
                let params = e.detail[0].args.param
				this.optPageParam = params.page
				this.router.transitionTo( "/" )
            	this.router.transitionTo( `/max-saas?page=${this.optPageParam}&selectedTime=${this.selectedTime}` )
                // let jobLogs = await this.store.query( "jobLog", {"page[limit]": 10, "page[offset]": params.page * 10} )
                // e.target.allData.jobLogs = jobLogs.filter(function(item) {
                //     return item.id !== ''
                // })
                // this.random = Math.random()
                break
			case "closeToast": // 关闭上传进度条
				this.closeuploadToast = '1'
				break
			case "selectYearMonth": // 选择年月
				let paramDate = e.detail[0].args.param
				let paramTime = paramDate.year + '-' + paramDate.month + '-' + '01';
				let currentstamp = paramTime.replace(/-/g, '/');
				let selectedTime = new Date(currentstamp).getTime()

				this.selectedTime = selectedTime

				this.router.transitionTo( "/" )
            	this.router.transitionTo( `/max-saas?page=${this.optPageParam?this.optPageParam:0}&selectedTime=${this.selectedTime}` )
				break
            default: 
                console.log("other click event!")
        }
    }

    @action
    async confirmUploadFiles(memo, sheet) {
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

        /**
         * 1. 初始化上传流程
         */
        const traceId = guid()
        let uploadMessage = {}
        uploadMessage.accountId = this.cookies.read( "account_id" )
        uploadMessage.file = document.getElementById( "my-file" ).files[0]
        this.fileName = uploadMessage.file.name //文件名称传入component
		let fileVersion = ''; //文件名，发送请求所需参数
        /**
         * 2. upload file to OSS
         */
        let that = this
        this.showProgress = '1' //显示上传进度
        that.uploadFileSize = uploadMessage.file.size  // 上传文件总大小
        // aws s3 upload
        const accountId = this.cookies.read( "account_id" )
        const bucketName = "ph-origin-files"
        const s3Client = this.awsService.get( "s3Client" )
        const fileKey = `user/${accountId}/${traceId}/${uploadMessage.file.name}`
        let uploadFileParams = {
            Bucket: bucketName,
            Key: fileKey.replace(/[(|)|（|）| 【|】| \[|\] ]/g, "_"),
            Body: uploadMessage.file
        }

        try {
            //S3 上传
            let s3FileUpload = await s3Client
                .upload( uploadFileParams )
                .on( "httpUploadProgress", function ( progress ) {
                    that.uploadLoadedSize = progress.loaded //实时进度
                } )
                .promise()
				.catch((err)=> {
					this.updateProject(uploadFileParams.Key, "failed", "upload", uploadMessage, [], memo)
				})
			if(!s3FileUpload) return
			//文件名	
            fileVersion = s3FileUpload.Key.split("/").pop()
            // upload file tag
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
                            // Value: "202008"
                        },{
                            Key: "time", 
                            Value: new Date().getTime().toString()
                        },
                        {
                            Key: "version", 
                            Value: fileVersion.split('.')[0]
							// Value: "hdf_data_17"
                        },
                        {
                            Key: "filename", 
                            Value: fileVersion
							// Value: "hdf_data_17.xlsx"
                        },
                        {
                            Key: "sheet",
							Value: sheet
                            // Value: "Sheet1" 
                        }
                    ]
                }
            }
			// 上传文件打tag
            s3Client.putObjectTagging(tagParam, function(err, data) {
                if (err) console.log(err, err.stack); // an error occurred
            });
            /**
             * 3. create file metadata for database
             */
			let labelsArr = ["owner",this.args.model.userData.name, "application", "max", "provider", this.provider, "date", this.uploadDate, "time", new Date().getTime().toString(), "version", fileVersion]
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
            await this.store
                .createRecord( "asset", fileBodyObj )
                .save()

			//todo: getCurrentDate
			let currentDate = new Date().getTime()
			let date = new Date(currentDate)
			let y = date.getFullYear()
			let m = date.getMonth() + 1
			m = m < 10 ? ('0' + m) : m;
			let time = y + '-' + m + '-' + '01';
			let currentstamp = time.replace(/-/g, '/');
			let timesTamp = new Date(currentstamp).getTime()

			this.updateProject(fileVersion, "success", "upload", uploadMessage, labelsArr, memo, timesTamp)

            that.router.transitionTo( "/" )
            that.router.transitionTo( `/max-saas?page=${this.optPageParam}&selectedTime=${this.sele9ctedTime}` )
            that.showProgress = '0'// 关闭上传进度条

            //上传成功提示
            that.uploadTextStatus = "上传成功"
            that.uploadText = "在“我的数据”中查看结果"
            that.uploadToastBorder = "green"
        } catch ( e ) {
            console.log(e)
            that.showProgress = '0' //关闭上传进度条
            //上传失败提示
            that.uploadTextStatus = "上传失败" 
            that.uploadText = ""
            that.uploadToastBorder = "red"
        }

        that.uploadLoadedSize = 0
        // 不管上传成功还是失败，都把文件清空
        let fileContainer = document.getElementById( "my-file" )
        fileContainer.value = null
        this.fileName = '' //文件名称置空
    }

	@action
	async updateProject(fileVersion, status, option, uploadMessage, labelsArr, memo, timesTamp) {
		// message: 名字+文件大小+label
		let message = `name: ${fileVersion},size: ${uploadMessage.file.size}, label: ${labelsArr.toString()}`
		//push jobLogs
		let jobLogsParam = {
			"provider": this.provider,
			"owner": this.args.model.userData.id,
			"showName": this.args.model.userData.name,
			"time": timesTamp,
			"version": fileVersion,
			"code": 0,
			"jobDesc": status,
			"jobCat": option,
			"comments": memo,
			"message": message,
			"date": new Date().getTime()
		}
		await this.store.createRecord('jobLog', jobLogsParam).save()
		// patch project
		await this.store.push({
			data: {
				id: this.projectId,
				type: 'project',
				attributes: {
					"provider": this.provider,
					"time": timesTamp,
					"actions": JSON.stringify(jobLogsParam)
				}

			}
		}).save()
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
