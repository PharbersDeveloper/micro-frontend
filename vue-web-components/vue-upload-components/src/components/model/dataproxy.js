import PhExcelFormat from "./formats/excel"
import PhCsvFormat from "./formats/csv"
import PhDestination from "./s3-destination"
// import { hostName } from "../../config/envConfig"


export default class PhExcelPreviewProxy {
    constructor(id, activePane, fileList, currentFile=0) {
        this.id = id
        this.files = []
        this.readyList = []
        this.suffixType = ""
        this.fileList = fileList
        this.currentFile = currentFile

        this.prepareDatasource(activePane)
        this.isCurrentReady = false

        this.skipFirstLines = 0
        this.skipNextLines = 0
        this.dataRefresh = 0
        this.currentSheet = ""

        this.progress = ""
        this.destination = new PhDestination(this.id)

        this.company_id = "zudIcG_17yj8CEUoCTHg"
    }

    viewNeedRefresh() {
        this.isCurrentReady = this.readyList[this.currentFile]
        this.suffixType = this.files[this.currentFile].getType()
        this.skipFirstLines = this.files[this.currentFile].getSkipFirstLines()
        this.skipNextLines = this.files[this.currentFile].getSkipNextLines()
        this.currentSheet = this.files[this.currentFile].getCurrentSheetName()
        this.dataRefresh++
    }

    prepareDatasource(activePane) {
        if (activePane === "local") {
            return this.prepareLocalDatasource()
        } else if (activePane === "s3") {
            return this.prepareS3Datasource()
        }
    }

    readyCallback(idx) {
        this.readyList[idx] = true
        this.viewNeedRefresh()
    }

    prepareLocalDatasource() {
        for (let index = 0; index  < this.fileList.length; ++index) {
            const item = this.fileList[index]
            const fname = item.name
            const suffix = fname.split('.')[1]
            if (suffix === "xlsx") {
                this.files.push(new PhExcelFormat(index, item, this))
            } else if (suffix === "csv") {
                this.files.push(new PhCsvFormat(index, item, this))
            } else {
                alert("not implemented")
            }
            this.readyList.push(false)
        }
    }

    prepareS3Datasource() {
        // TODO: s3 的 以后再调试
        // eslint-disable-next-line no-debugger
        debugger
    }

    isReady() {
        // return this.readyList[this.currentFile]
        // TODO: ...
        return false
    }

    getDatasource() {
        return this.files[this.currentFile].getDatasource()
    }

    getSchema() {
        return this.files[this.currentFile].getSchema()
    }

    getSheetNames() {
        return this.files[this.currentFile].getSheetNames()
    }

    getCurrentSheetName() {
        return this.files[this.currentFile].getCurrentSheetName()
    }

    setSkipFirstLines(v) {
        if (this.skipFirstLines !== v) {
            this.files[this.currentFile].setSkipFirstLines(v)
            this.viewNeedRefresh()
        }
    }

    setSkipNextLines(v) {
        if (this.skipNextLines !== v) {
            this.files[this.currentFile].setSkipNextLines(v)
            this.viewNeedRefresh()
        }
    }

    setCurrentSheet(v) {
        this.files[this.currentFile].setCurrentSheet(v)
        this.viewNeedRefresh()
    }

    // TODO: @wodelu 这里需要添加一个参数，表示上传创建的Dataset的位置
    uploadCurrentData(to) {
        this.files[this.currentFile].uploadCurrentData(this.destination, to)
    }

    uploadProgress(progress) {
        this.progress = progress
    }


    getCookie(name) {
        let arr,
            reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if ((arr = document.cookie.match(reg))) return arr[2];
        else return null;
    }

    importCurrentDataToDS(uuid, dsName) {
        // let that = this
        // const url = `${hostName}/phresourcecreationtrigger`
        // let message = {
        // 	common: {
        // 		traceId: uuid,
        // 		projectId: this.projectId,
        // 		projectName: this.projectName,
        // 		flowVersion: "developer",
        // 		dagName: this.projectName,
        // 		owner: this.getCookie("account_id") || "c89b8123-a120-498f-963c-5be102ee9082",
        // 		showName: decodeURI(
        // 			this.getCookie("user_name_show") || "测试人员"
        // 		)
        // 	},
        // 	action: {
        // 		cat: "createDS",
        // 		desc: "create DS",
        // 		comments: "something need to say",
        // 		message: "something need to say",
        // 		required: true
        // 	},
        // 	datasets: [{
        // 		"name": dsName,
        // 		"cat": "uploaded",
        // 		"format": "csv"
        // 	}],
        // 	script: {},
        // 	notification: {
        // 		required: true
        // 	},
        // 	result: {
        // 		datasets: [""],
        // 		scripts: [""],
        // 		links: [""]
        // 	}
        // }
        // let options = {
        // 	method: "POST",
        // 	headers: {
        // 		Authorization: accessToken,
        // 		"Content-Type":
        // 			"application/x-www-form-urlencoded; charset=UTF-8",
        // 		accept: "application/json"
        // 	},
        // 	body: JSON.stringify(message)
        // }
        // return fetch(url, options)
    }
}
