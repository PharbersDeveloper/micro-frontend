
import { hostName } from "../../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"

export default class PhScenarioDetailDatasource {
    constructor(id, projectId='ggjpDje0HUC2JW', scenarioId='alfredtest') {
        this.id = id
        this.projectId = projectId
        this.scenarioId = scenarioId
        this.debugToken = "9dc3241f06aa649fbad9e03873c64f9951fdb78657cbf4b93ba266bdbc2c5d8d"
        this.store = new JsonApiDataStore()
        this.scenario = {}
        this.triggers = []
        this.steps = []
    }


    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr === document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    }

    async model() {
        this.store.reset()
        const scenarios = await this.buildScenarioQuery().then((response) => response.json())
        this.store.sync(scenarios)
        this.scenario = this.store.findAll("scenarios")[0]
        const triggers = await this.buildTriggersQuery([this.projectId, this.scenarioId].join("_"))
            .then((response) => response.json())
        this.store.sync(triggers)
        this.triggers = this.store.findAll("scenario-triggers")
        const steps = await this.buildStepsQuery([this.projectId, this.scenarioId].join("_"))
            .then((response) => response.json())
        this.store.sync(steps)
        this.steps = this.store.findAll("scenario-steps")
        // TODO: reports const reports = this.buildTriggersQuery(scenario.id).then((response) => response.json())
    }

    buildTriggersQuery(scenarioId) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "scenario_trigger",
            "conditions": {
                "scenarioId": ["=", scenarioId],
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

    buildScenarioQuery() {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "scenario",
            "conditions": {
                "projectId": ["=", this.projectId],
                "id": ["=", this.scenarioId]
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

    buildStepsQuery(scenarioId) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "scenario_step",
            "conditions": {
                "scenarioId": ["=", scenarioId]
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