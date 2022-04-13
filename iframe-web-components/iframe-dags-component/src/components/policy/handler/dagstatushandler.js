import { staticFilePath, hostName } from "../../../config/envConfig"

export default class PhDagHandler {
    constructor(id, parent) {
        this.id = id
        this.parent = parent
    }

    handleForwardMessage(event) {
        if (event.data.message) {
            if (event.data.message.cmd === "render_dag") {
                console.log("iframe接收的", event.data.message.cmd)
                this.runDagCallback(event.data.message)
            }
            if(event.data.message.cmd === "finish_dag") {
                console.log("iframe接收的dag finish", event.data.message.cmd)
                this.runDagFinishCallback(event.data.message)
            }
        }
    }

    forwardMessageToParent(message) {
        window.parent.postMessage(message, '*')
    }

    /**
     *  trigger更新实时状态
     */
    runDagCallback(response) {
        let that = this.parent
        let represent_id = ""
        let payloadArr = JSON.parse(response.payload)
        console.log("payloadArr", payloadArr)
        this.responseArr = payloadArr
        let data = that.datasource.data
        payloadArr.forEach(payload => {
            let status = payload["status"]
            let jobName = JSON.parse(payload.message).cnotification.jobName
            // 1.找到对应job节点并更新状态
            data.forEach((it,index) => {
                if(jobName.indexOf(it.attributes.name) !== -1) {
                    if(status === "success") {
                        it.status = "succeed"
                    } else if(status === "failed") {
                        it.status = "failed"
                        represent_id = it.representId
                    } else if(status === "running") {
                        it.status = "running"
                    }
                }
                that.refreshNodeStatus(it)
            })
            // 2.失败时出现弹框
            if(status === "failed") {
                let showName = JSON.parse(payload.message).cnotification.jobShowName
                let length = that.failedLogs.filter(it => it.jobShowName === showName)
                if(length < 1) {
                    that.failedLogs.push({
                        data: payload,
                        jobShowName: showName,
                        representId: represent_id
                    })
                }
            }
            console.log("failedLogs", that.failedLogs)
        })
    }

    // trigger更新整体状态
    runDagFinishCallback(response) {
        let payload = JSON.parse(response.payload)
        let status = payload["status"]
        if(status !== "running") {
            // 更新进度条
            this.parent.progressOver = true
            this.parent.retryButtonShow = true
        }
    }
}
