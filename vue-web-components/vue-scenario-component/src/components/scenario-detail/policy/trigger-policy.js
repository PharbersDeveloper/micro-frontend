
import { hostName } from "../../../config/envConfig"

export default class PhScenarioTriggerPolicy {
    constructor(id, projectId='ggjpDje0HUC2JW', scenarioName='alfredtest') {
        this.id = id
        this.projectId = projectId
        this.scenarioName = scenarioName
        this.debugToken = "dae3d1540184499768c8efc58713565349ed36735db0f4566d824604c6b07e20"
    }

    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr === document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    }

    async createOrUpdateTriggerResource(trigger) {
		console.log("111")
        const response = await this.buildPushTriggersResource(trigger)
        const res = await response.json()
        console.log(res)
        return res['status'] === 'ok'
    }

    async createOrUpdateTriggerIndex(trigger) {
		console.log("222")
        const response = await this.buildPushTriggersQuery(trigger)
        const res = await response.json()
        console.log(res)
        return !Object.keys(trigger).includes("error");
    }

    async deleteTriggerIndex(trigger) {
        const response = await this.buildDeleteTriggerResourceIndex(trigger)
        const res = await response.json()
        console.log(res)
        return !Object.keys(trigger).includes("error");
    }

    async deleteTriggerResource(trigger) {
        const response = await this.buildDeleteTriggerResource(trigger)
        const res = await response.json()
        console.log(res)
        return res['status'] === 'ok'
    }

	dealTriggerDisplay(triggerArray) {
		let arr = []
		triggerArray.forEach(trigger => {
			let detail = {}
			detail = {
                "timezone": trigger.timezone,
                "cron": trigger.cron,
                "start": trigger.start,
                "period": trigger.period,
                "value": trigger.value
            }
			arr.push({
				scenarioId: trigger.scenarioId,
				id: trigger.id,
				index: trigger.index,
				active: trigger.active,
				// detail: JSON.stringify(detail),
				detail: detail,
				mode: trigger.mode,
				traceId: trigger.traceId
			})
		})
		return arr
	}

    buildDeleteTriggerResource(trigger) {
        const url = `${hostName}/scenarioresource`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        if (trigger.mode === "timer") {
            let body = {
                "tenant-id": "pharbers",  // TODO: ...
                "project-id": this.projectId,
                "scenario-id": trigger.scenarioId,
                "trigger-id": trigger.id,
                "cron": "cron(* * * * ? *)",
                "deletion": true
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

    buildPushTriggersResource(trigger) {
        const url = `${hostName}/scenarioresource`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        if (trigger.mode === "timer") {
            let body = {
                "tenant-id": "pharbers",  // TODO: ...
                "project-id": this.projectId,
                "scenario-id": trigger.scenarioId,
                "trigger-id": trigger.id,
                "cron": "cron(* * * * ? *)"
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
                    id: trigger.id,
                    index: trigger.index,
                    active: trigger.active,
                    // detail: JSON.stringify(detail),
					detail: detail,
                    mode: trigger.mode,
                    traceId: trigger.traceId
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

    buildDeleteTriggerResourceIndex(trigger) {
        const url = `${hostName}/phdydatasource/delete_item`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken

        let body = {
            "table": "scenario_trigger",
            "conditions": {
                scenarioId: trigger.scenarioId,
                index: trigger.index
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

    buildDeleteTriggerResourceQuery() {
        // const url = `${hostName}/phdydatasource/query`
        // const accessToken = this.getCookie( "access_token" ) || this.debugToken
        // let body = {
        //     "table": "scenario",
        //     "conditions": {
        //         "projectId": ["=", this.projectId],
        //         "scenarioName": ["=", this.scenarioName]
        //     },
        //     "limit": 100,
        //     "start_key": {}
        // }
        //
        // let options = {
        //     method: "POST",
        //     headers: {
        //         "Authorization": accessToken,
        //         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        //         "accept": "application/json"
        //     },
        //     body: JSON.stringify(body)
        // }
        // return fetch(url, options)
    }
}
