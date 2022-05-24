
import { hostName } from "../../../config/envConfig"

export default class PhScenarioDetailPolicy {
    constructor(id, projectId='ggjpDje0HUC2JW', scenarioName='alfredtest') {
        this.id = id
        this.projectId = projectId
        this.scenarioName = scenarioName
        this.debugToken = "f70bc939f017529ee978cb3b1577fe5b526921bdae649266ab0508382925b491"
    }

    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr === document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    }

    async createOrUpdateScenarioIndex(scenario) {
        const response = await this.buildPushScenarioQuery(scenario)
        const res = await response.json()
        console.log(res)
        return !Object.keys(scenario).includes("error");
    }

    buildPushScenarioQuery(scenario) {
        const url = `${hostName}/phdydatasource/put_item`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "scenario",
            "item": {
                "id": scenario.id,
                projectId: scenario["project-id"],
                scenarioName: scenario["scenario-name"],
                index: scenario.index,
                active: scenario.active,
                args: scenario.args,
                label: scenario.label,
                owner: scenario.owner,
                traceId: scenario["trace-id"]
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
