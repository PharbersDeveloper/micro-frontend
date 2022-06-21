
export default class PhStatusModel {
    constructor(resourceId, status, traceId, detail) {
        this.resourceId = resourceId
        this.status = status
        this.switch = false
        this.editable = true
        this.traceId = traceId
        this.detail = detail
    }
}
