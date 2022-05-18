
// import { FunctionChains, eqFilterValueFunctionStep } from "./function_chains"
import { staticFilePath, hostName } from "../../config/envConfig"


export default class PhDataSource {
    constructor(id, projectId, datasetName, adapter=null) {
        this.id = id
        this.sort = {}
        this.filter = {}
        this.projectId = projectId
        this.name = datasetName
        this.batch_size = 100
        if (!adapter)
            this.adapter = this.defaultAdapter
        this.debugToken = "c332c1ff0fc63558f2c987a8ac0364f8dbc1f0a60886fda6e575a1ebc68c5687"
    }

    defaultAdapter(row, cols) {
        let result = []
        for (let idx = 0; idx < cols.length; ++idx) {
            result.push(row[cols[idx]])
        }
        return result
    }

    buildPolicyQuery(ele, query, schema) {
        const url = `${hostName}/phdadatasource`
        const accessToken = ele.getCookie("access_token") || this.debugToken
        const tenantId = ele.getCookie("company_id") || "zudIcG_17yj8CEUoCTHg"
        let body = {
            "query": query,
            "schema": schema,
            "projectId": this.projectId,
			"tenantId": tenantId
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

    refreshPolicyData(ele, policyQuery, policySchema) {
        ele.policy.datasource.buildPolicyQuery(ele, policyQuery, policySchema)
            .then((response) => response.json())
            .then((response) => {
                ele.policy.datasource.data = response //response.map(ele.datasource.adapter)
                // ele.policy.data = response //response.map(ele.datasource.adapter)
                ele.dataIsReady++
            })
    }
}
