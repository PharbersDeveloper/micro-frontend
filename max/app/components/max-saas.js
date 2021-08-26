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
            case "opt":
                let param = e.detail[0].args.param
                this.provider = param.provider;
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
            case "changePage":
				//操作信息 分页
				let params = e.detail[0].args.param
				let jobLogs = await this.store.query( "jobLog", {"page[limit]": 10, "page[offset]": params.page * 10} )
				e.target.allData.jobLogs = jobLogs.filter(function(item) {
					return item.id !== ''
				})
				this.random = Math.random()
				break
            default: 
                console.log("other click event!")
        }
    }

    @action
    async uploadFiles(title, event) {
        //初始化变量
        this.uploadToastBorder = "blue"
        this.uploadTextStatus = "正在上传"
        this.uploadText = ""
        this.closeuploadToast = "0" //显示上传弹框

        //禁用上传文件input
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
        const traceId = guid()
        let uploadMessage = {}
        uploadMessage.accountId = this.cookies.read( "account_id" )
        uploadMessage.file = document.getElementById( "my-file" ).files[0]

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
            Key: fileKey.replace(/[(|)|（|）]/g, "_"),
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
            // upload file tag
            let tagParam = {
                Bucket: s3FileUpload.Bucket, 
                Key: s3FileUpload.Key, 
                Tagging: {
                    TagSet: [
                        {
                            Key: "owner", 
                            Value: this.args.model.userData.name
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
                            Value: new Date().getTime().toString()
                        },
                        {
                            Key: "version", 
                            Value: s3FileUpload.Key.split("/").pop()
                        }
                    ]
                }
            }
            s3Client.putObjectTagging(tagParam, function(err, data) {
                if (err) console.log(err, err.stack); // an error occurred
                else     console.log(data);           // successful response
            });
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
                labels: [this.args.model.userData.name, this.provider, this.uploadDate],
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

        // 不管上传成功还是失败，都把按键的disabled取消，样式还原,loaded大小还原
        dom[0].disabled = false
        that.uploadLoadedSize = 0

        // 不管上传成功还是失败，都把文件清空
        let fileContainer = document.getElementById( "my-file" )
        fileContainer.value = null
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
