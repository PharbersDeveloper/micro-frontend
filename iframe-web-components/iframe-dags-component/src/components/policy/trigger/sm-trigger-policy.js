import { hostName } from '../../../config/envConfig'

export default class PhDagTriggerPolicy {
    constructor(id, parent) {
        this.id = id
        this.parent = parent
    }

    // 点击trigger，弹窗选择version
    dagRunPreparing() {
        let roots = []
        this.parent.datasource.data.forEach(item => {
            if(item.attributes.runtime === "output_index") {
                roots.push(item)
            } else if(item.attributes.ctype === "node" &&
                item.parentIds.length === 0 &&
                this.parent.datasource.cal.selected.includes(item.id)) {
                roots.push(item)
            }
        })
        let datasetsArr = []
        roots.forEach(item => {
            datasetsArr.push({
                "name": item.attributes.name,
                "representId": item.representId,
                "version": [],
                "cat": item["attributes"]["runtime"],
                "prop": item.attributes.prop !== "" ? this.handlerJSON(item.attributes.prop) : ""
            })
        })
        this.parent.textConf = {
            "datasets": datasetsArr,
            "scripts": [],
            "userConf": {}
        }
        this.parent.showRunJson = true
    }

    /**
     * 1. 触发整体dag运行
     * 2. 进度条清0
     * 3. 清除节点状态
     * 4. 关闭log弹窗
     * 5. 开始正常run dag流程
     */
    async runDag(data) {
        this.parent.loading = true
        this.parent.showProgress = false
        const url = `${hostName}/statemachinetrigger`
        const accessToken = this.parent.getCookie("access_token") || this.parent.datasource.debugToken
        let confData = data.args.param.jsonValue
        confData.ownerId = this.parent.getCookie("account_id") || "c89b8123-a120-498f-963c-5be102ee9082"
        confData.showName = this.parent.getCookie("user_name_show") ? decodeURI(decodeURI(this.getCookie("user_name_show"))) : "dev环境"
        confData.jobDesc = this.parent.registerJobEventName

        const runnerId = "alfredtest"
        const body = {
            common: {
                runnerId: runnerId,
                projectId: this.parent.projectId,
                projectName: this.parent.projectName,
                owner: confData.ownerId,
                showName: confData.showName
            },
            calculate: {
                type: "dataset",
                name: this.parent.datasource.cal.calculate.name,
                conf: confData
            }
        }

        let options = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
                "accept": "application/json"
            },
            body: JSON.stringify(body)
        }
        let results = await fetch(url, options).then(res => res.json())
        if(results.status === "failed") {
            alert("启动出错，请重新运行！")
            this.parent.loading = false
            return false
        }
        // const dag_run_id = results.data.dag_run_id.split("_")
        // const time = new Date(dag_run_id.pop()).getTime()
        // const runnerId = dag_run_id.join("_") + "_" + time
        // console.info(runnerId)
        const tmpMsg = {
            message: {
                notification: {
                    eventName: this.parent.registerJobEventName,
                    projectId: this.parent.projectId, //results.data.dag_id, // results.data.
                    id: runnerId

                },
                executionStatus: {
                    // runnerId: results.data.dag_run_id,
                    id: runnerId,
                    // projectId: dag_run_id.pop(),
                    eventName: "executionStatus" //+ runnerId
                }
            }
        }
        this.parent.eventPolicy.forwardMessageToParent(tmpMsg)
        this.parent.showRunJson = false
        this.parent.loading = false
        this.parent.renderPolicy.resetDagStatus("trigger")
    }

    /**
     * retry按钮
     * 1. 有第一次运行状态才可以点retry三个按钮
     * 2. 选择job之后修改名字，点运行时候出现弹窗提示
     */
    async retryDag(data) {
        this.parent.showProgress = false
        console.log("responseArr", this.parent.responseArr)
        this.runId = JSON.parse(this.parent.responseArr.message).cnotification.runId
        const url = `${hostName}/phdagtasktrigger`
        const accessToken = this.parent.getCookie("access_token") || this.parent.datasource.debugToken
        let body = {
            "project_name": this.parent.projectName,
            "flow_version": "developer",
            "run_id": this.parent.runId,
            "task_id": this.parent.projectName + "_" + this.parent.projectName + "_developer_" + this.parent.selectItemName,
            "clean_cat": data //向上还是向下
            //  + "_" + this.selectItem["represent-id"]
        }
        let options = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                "Content-Type": 'application/x-www-form-urlencoded; charset=UTF-8',
                "accept": "application/json"
            },
            body: JSON.stringify(body)
        }
        let results = await fetch(url, options).then(res => res.json())
        if(results.status === "failed") {
            alert("重新运行出错，请重新运行！")
            this.parent.loading = false
            return false
        }
        const dag_run_id_retry = this.parent.runId.split("_")
        const time_retry = new Date(dag_run_id_retry.pop()).getTime()
        const runnerId_retry = dag_run_id_retry.join("_") + "_" + time_retry

        const tmpMsg = {
            message: {
                dagRunCmd: this.parent.registerJobEventName,
                dagExecutionCmd: "executionStatus" + runnerId_retry
            }
        }
        this.parent.eventPolicy.forwardMessageToParent(tmpMsg)
        this.parent.showProgress = true
        this.parent.progressOver = false
    }

    handlerJSON(str) {
        if (typeof str == 'string') {
            try {
                let jsonValue = JSON.parse(str);
                return jsonValue;
            } catch (e) {
                return str
            }
        }
    }
}
