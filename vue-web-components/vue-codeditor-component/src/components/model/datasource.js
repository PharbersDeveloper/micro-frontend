
import { hostName } from "../../config/envConfig"

export default class PhCodeditorDatasource {
    constructor(id, projectId, jobId) {
        this.id = id
        this.debugToken = 'aaa197540eef457cf271da953f68cdfe5a126f1364430c9ed6af75d4eab1e5d7'

        this.adapter = this.defaultAdapter
        this.projectId = projectId
        this.jobId = jobId

        this.data = []
        this.inputs = []
        this.outputs = ""
        this.codePath = []
        this.bucket = ""
        this.runtime = ""
        this.file_name = ""
        this.codeKey = ""
    }

    defaultAdapter(row) {
        const attr = row["attributes"]
        this.inputs = JSON.parse(attr["inputs"])
        this.outputs = attr["outputs"]
        this.bucket = "ph-platform"
        this.runtime = attr["runtime"]
        let jobPath = attr["job-path"]
        this.file_name = jobPath.slice(jobPath.lastIndexOf("/")+1) //文件名称
        this.codeKey = jobPath.slice(0, jobPath.lastIndexOf("/")+1) //路径
    }

    buildQuery(ele) {
        const url = `${hostName}/phdydatasource/query`
        const accessToken = ele.getCookie("access_token") || this.debugToken
        let body = {
            "table": "dagconf",
            "conditions": {
                "projectId": [
                    "=",
                    this.projectId
                ],
                "id": [
                    "=",
                    this.jobId
                ]
            },
            "index_name": "dagconf-projectId-id-indexd",
            "limit": 10,
            "start_key": {}
        }

        let options = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                'Content-Type': 'application/json; charset=UTF-8',
                "accept": "application/json"
            },
            body: JSON.stringify(body)
        }
        return fetch(url, options)
    }

    refreshData(ele) {
        ele.datasource.buildQuery(ele)
            .then((response) => response.json())
            .then((response) => {
                ele.datasource.adapter(response.data[0])
                ele.downloadCode++
            })
    }
}
