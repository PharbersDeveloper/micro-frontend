// import { staticFilePath, hostName } from "../../config/envConfig"

export default class PhLogsPolicy {
    constructor(id, parent) {
        this.id = id
        this.parent = parent
    }

    closeLogDialog() {
        this.parent.showDagLogs = false
    }

    showLogs(data, representId) {
        this.parent.runId = JSON.parse(data.message).cnotification.runId
        this.parent.jobShowName = JSON.parse(data.message).cnotification.jobShowName
        this.parent.representId = representId
        this.parent.showDagLogs = true
    }
}
