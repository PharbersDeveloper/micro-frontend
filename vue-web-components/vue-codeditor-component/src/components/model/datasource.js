
import { hostName } from "../../config/envConfig"
import { Message } from 'element-ui'

export default class PhCodeditorDatasource {
    constructor(id, projectId, jobId, parent) {
        this.id = id
        this.debugToken = 'ef562efd648f5474246ed66a7f1094508ec3cc5fae355e2f7c090355daf62bec'

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
		this.parent = parent
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

	iframeComplete(event) {
		if(event.data.editorStaus === "complete") {
			this.datasource.refreshData(this.datasource.parent)
		}
	}

	async getEditorContentEvent(event) {
		if (event.data.editorId === "codeEditor") {
			console.info(event.data)
			const codeEditorContent = event.data.content
			console.info(codeEditorContent)
			let url = `${hostName}/phupdatejobcode`
			const accessToken = this.datasource.parent.getCookie("access_token") || this.datasource.debugToken
			let body = {
				"bucket": "ph-platform",
				"key": this.datasource.codeKey,
				"file_name": this.datasource.file_name,
				"data": encodeURI(codeEditorContent),
				"timespan": new Date().getTime()
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
			let result = await fetch(url, options).then(res => res.json())
			if (result.status === 1) {
				Message({
					type: 'success',
					showClose: true,
					duration: 3000,
					message: '脚本保存成功！'
				})
			} else {
				Message({
					type: 'error',
					showClose: true,
					duration: 30000,
					message: '脚本保存失败！'
				})
			}
			this.downloadCode++
		}

	}
}