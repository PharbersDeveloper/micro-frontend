
import { hostName } from "../../../config/envConfig"

export default class PhScenarioTriggerPolicy {
    constructor(id, projectId='ggjpDje0HUC2JW', scenarioName='alfredtest') {
        this.id = id
        this.projectId = projectId
        this.scenarioName = scenarioName
        this.debugToken = "fc982df534704f2d87ee4519f60f6f7366f25b41c3b83dcdb19ec2cada866948"
    }

    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr === document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    }

    async createOrUpdateTriggerResource() {

    }

    async createOrUpdateTriggerIndex(trigger) {
        const res = await this.buildPushTriggersQuery(trigger).then((response) => response.json())
        console.log(res)
        return !Object.keys(trigger).includes("error");
    }

    buildPushTriggersQuery(trigger) {
        const url = `${hostName}/phdydatasource/put_item`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let detail = {}
        if (trigger.mode === "timer") {
            detail = {
                "timezone": trigger.timezone,
                "cron": trigger.cron,
                "start": trigger.start,
                "period": trigger.period,
                "value": trigger.value
            }

            let body = {
                "table": "scenario_trigger",
                "item": {
                    scenarioId: trigger.scenarioId,
                    index: trigger.index,
                    active: trigger.active,
                    detail: JSON.stringify(detail),
                    mode: trigger.mode
                },
                "limit": 100,
                "start_key": {}
            }

            let options = {
                method: "POST",
                headers: {
                    "Authorization": accessToken,
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    "accept": "application/json"
                },
                body: JSON.stringify(body)
            }
            return fetch(url, options)
        } else {
            alert("not implemented")
        }
    }

    buildUpdateTriggerResourceQuery() {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "scenario",
            "conditions": {
                "projectId": ["=", this.projectId],
                "scenarioName": ["=", this.scenarioName]
            },
            "limit": 100,
            "start_key": {}
        }

        let options = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                "accept": "application/json"
            },
            body: JSON.stringify(body)
        }
        return fetch(url, options)
    }
}
