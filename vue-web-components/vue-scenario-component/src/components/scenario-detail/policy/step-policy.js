
import { hostName } from "../../../config/envConfig"

export default class PhScenarioStepPolicy {
    constructor(id, projectId='ggjpDje0HUC2JW', scenarioName='alfredtest') {
        this.id = id
        this.projectId = projectId
        this.scenarioName = scenarioName
        this.debugToken = "9dc3241f06aa649fbad9e03873c64f9951fdb78657cbf4b93ba266bdbc2c5d8d"
    }

    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr === document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    }

    async createOrUpdateStepIndex(step) {
        const response = await this.buildPushStepQuery(step)
        const res = await response.json()
        console.log(res)
        return !Object.keys(step).includes("error");
    }

    async deleteStepIndex(step) {
        const response = await this.buildDeleteStepQuery(step)
        const res = await response.json()
        console.log(res)
        return !Object.keys(step).includes("error");
    }

    buildPushStepQuery(step) {
        const url = `${hostName}/phdydatasource/put_item`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let detail = {}
        if (step.mode === "dataset") {
            detail = {
                "type": step.type,
                "recursive": step.recursive,
                "ignore-error": step["ignore-error"],
                "name": step.ds
            }

            let body = {
                "table": "scenario_step",
                "item": {
                    scenarioId: step.scenarioId,
                    index: step.index,
                    detail: JSON.stringify(detail),
                    traceId: step.traceId,
                    mode: step.mode,
                    name: step.name
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

    buildDeleteStepQuery(step) {
        const url = `${hostName}/phdydatasource/delete_item`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "scenario_step",
            "conditions": {
                scenarioId: step.scenarioId,
                index: step.index
            }
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