
export default class PhCodeditorDatasource {
    constructor(id, projectId, jobId, flowVersion, jobName) {
        this.id = id
        this.debugToken = '93a26d55060b6f783b55333cd5f1f3c9b87eb7634128a076ed975e63561b27b3'

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
