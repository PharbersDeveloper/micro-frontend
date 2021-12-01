
export default class PhCodeditorDatasource {
    constructor(id, projectId, jobId, flowVersion, jobName) {
        this.id = id
        this.debugToken = 'b14ecdeb010a9f5617cd8bf6a6c97cb30ab53a40038ba720e0c9828b9c63a2dd'

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

        console.log(attr)
        // TODO: 让赵加一个写job的S3地址的列
        this.inputs = JSON.parse(attr["inputs"])
        this.outputs = JSON.parse(attr["outputs"])
        this.bucket = "ph-platform"
        this.codeKey =
            "2020-11-11/jobs/python/phcli/test_dag_developer/test_dag_developer_test_job_a/"
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
        let that = this
        ele.datasource.buildQuery(ele)
            .then((response) => response.json())
            .then((response) => {
                ele.datasource.adapter(response.data[0])
                ele.downloadCode++
            })
    }
}
