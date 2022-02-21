
export default class PhCodeditorDatasource {
    constructor(id, projectId, jobId, flowVersion, jobName) {
        this.id = id
        this.debugToken = '1440b6d1f852c23d5efec36a2f30136c9eae44bd3cdf41c66d6d713b27911e0c'

        this.adapter = this.defaultAdapter
        this.projectId = projectId
        this.jobId = jobId
        this.flowVersion = flowVersion
        this.jobName = jobName

        this.data = []
        this.inputs = []
        this.outputs = []
        this.codePath = []
    }

    defaultAdapter(row) {
        const attr = row["attributes"]
        this.inputs = JSON.parse(attr["inputs"])
        this.outputs = JSON.parse(attr["outputs"])
        this.bucket = "ph-platform"
        let jobPath = attr["job-path"]
        this.file_name = jobPath.slice(jobPath.lastIndexOf("/")+1) //文件名称
        this.codeKey = jobPath.slice(0, jobPath.lastIndexOf("/")+1) //路径
    }

    buildQuery(ele, isAppend=false) {
        const url = "https://apiv2.pharbers.com/phdydatasource/query"
        const accessToken = ele.getCookie("access_token") || this.debugToken
        let body = {
            "table": "dagconf",
            "conditions": {
                "projectId": ["=", this.projectId],
                "jobName": ["=", this.jobName]
            },
            "limit": 100,
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
        console.log(ele.datasource)
        let that = this
        ele.datasource.buildQuery(ele)
            .then((response) => response.json())
            .then((response) => {
                ele.datasource.adapter(response.data[0])
                ele.downloadCode++
            })
    }
}
