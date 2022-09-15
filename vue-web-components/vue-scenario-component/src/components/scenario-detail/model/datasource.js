
import { hostName } from "../../../config/envConfig"
import { JsonApiDataStore } from "jsonapi-datastore"

export default class PhScenarioDetailDatasource {
    constructor(id, projectId='ggjpDje0HUC2JW', scenarioId='alfredtest') {
        this.id = id
        this.projectId = projectId
        this.scenarioId = scenarioId
		this.scenarioName = ""
        this.debugToken = "eab8d11b79ebf042a4289654ac620b7abbb67f291bfdbde7c1322b716b24b842"
        this.store = new JsonApiDataStore()
        this.scenario = {}
        this.triggers = []
        this.steps = []
		this.datasets = []
        this.datasetsAll = []
        this.reports = []
        this.history = []
        this.stepHistory = []
        this.scenarioExecution = []
        this.scenarioJob = []
        this.scenarioStep = []
        this.currentPageToken = ""
        this.hasMore = true
        this.stepsCount = 20
    }


    getCookie(name) {
		let arr,
			reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
		if ((arr = document.cookie.match(reg))) return arr[2];
		else return null;
	}

    async model() {
        this.store.reset()

		const datasets = await this.buildDatasetQuery().then((response) => response.json())
        this.store.sync(datasets)
        this.datasetsAll = this.store.findAll("datasets")
        this.datasets = this.datasetsAll.filter(
            (it) => it.cat === "intermediate"
        )

        const scenarios = await this.buildScenarioQuery().then((response) => response.json())
        this.store.sync(scenarios)
        this.scenario = this.store.findAll("scenarios")[0]
		if (this.scenario && this.scenario.args !== "") {
			this.scenarioParams = JSON.parse(this.scenario.args)
		} else {
			this.scenarioParams = []
		}

        const triggers = await this.buildTriggersQuery(this.scenarioId)
            .then((response) => response.json())
        this.store.sync(triggers)
        this.triggers = this.store.findAll("scenario-triggers")

        const reports = await this.buildReportsQuery(this.scenarioId)
            .then((response) => response.json())
        this.store.sync(reports)
        this.reports = this.store.findAll("scenario-reports")

        const steps = await this.buildStepsQuery(this.scenarioId)
            .then((response) => response.json())
        this.store.sync(steps)
        this.steps = this.store.findAll("scenario-steps")
    }

    buildHistoryQuery(projectId) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "scenario_status",
            "conditions": {
                "id": ["=", projectId]
            },
            "limit": this.stepsCount,
            "start_key": this.currentPageToken !== "" ? this.currentPageToken : ""
        }

        let options = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                'Content-Type': 'application/json',
                "accept": "application/json"
            },
            body: JSON.stringify(body)
        }
        return fetch(url, options)
    }

    refreshHistory(projectId ,callback=null) {
        this.buildHistoryQuery(projectId)
            .then((response) => response.json())
            .then((response) => {
                response.data.forEach(item=>{
                    item.id = item.attributes["trace-id"]
                })
                this.currentPageToken = response.meta.start_key
                if(this.currentPageToken === "") {
                    this.hasMore = false
                }
                this.store.reset()
                this.store.sync(response)
                this.history = this.store.findAll("scenario-status")
                if(callback)
                    callback()
            })
    }

    buildScenarioExecutionQuery(traceId) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "scenario_execution",
            "index_name": "traceId-scenarioId-index",
            "conditions": {
                "traceId": ["=", traceId],
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

    refreshScenarioExecution(traceId) {
        this.buildScenarioExecutionQuery(traceId)
            .then((response) => response.json())
            .then((response) => {
                response.data.forEach(item=>{
                    item.id = item.attributes["runner-id"]
                })
                this.store.reset()
                this.store.sync(response)
                this.scenarioExecution = this.store.findAll("scenario-executions")
            })
    }

    buildScenarioStepQuery(scenarioId, stepId) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "scenario_step",
            "conditions": {
                "scenarioId": ["=", scenarioId],
                "id": ["=", stepId],
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

    refreshScenarioStep(scenarioId, stepId,callback=null) {
        this.buildScenarioStepQuery(scenarioId, stepId)
            .then((response) => response.json())
            .then((response) => {
                this.store.reset()
                this.store.sync(response)
                this.scenarioStep = this.store.findAll("scenario-steps")
                if(callback)
                    callback()
            })
    }

    buildScenarioJobQuery(runnerId) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "execution",
            "index_name": "runnerId-jobName-index",
            "conditions": {
                "runnerId": ["=", runnerId],
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

    refreshScenarioJob(runnerId,callback=null) {
        this.buildScenarioJobQuery(runnerId)
            .then((response) => response.json())
            .then((response) => {
                // response.data.forEach(item=>{
                //     item.id = item.attributes["runner-id"]
                // })
                // this.store.reset()
                this.store.sync(response)
                this.scenarioJob = this.store.findAll("executions")
                if(callback)
                    callback()
            })
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

    buildReportsQuery(scenarioId) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "scenario_report",
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

	buildDatasetQuery() {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = this.getCookie( "access_token" ) || this.debugToken
        let body = {
            "table": "dataset",
            "conditions": {
                "projectId": ["=", this.projectId]            },
			"index_name": "dataset-projectId-name-index",
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
