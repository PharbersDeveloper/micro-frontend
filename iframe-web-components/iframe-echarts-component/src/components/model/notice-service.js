export default class NoticeServiceService {
    constructor(id, adapter) {
        this.id = id
        this.jobId = ""
        //被观察的对象，需要维持一个观察者对象的id列表（添加，删除，通知）
        this.subjectID= []
        this.subjectCallback= []
        //管理状态的参数
        this.uploadStatus = false
        this.timeout = 2
    }

    register(tableName, id, callback, ele, projectId, timeout) {
        this.timeout = timeout
        // 持续30s，调用unregister删除
        if(this.subjectID.indexOf(id) == -1) {
            this.subjectID.push(id)
            this.subjectCallback.push({
                ele: ele,
                callback: callback,
                tableName: tableName,
                date: new Date().getTime(),
                projectId: projectId
            })
        }
    }

    unregister(id) {
        //删除id和callback函数
        let index = this.subjectID.indexOf(id)
        this.subjectID.splice(index, 1)
        this.subjectCallback.splice(index, 1)
    }

    getCookie(name) {
        let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return (arr[2]);
        else
            return null;
    }

    observer() {
        // 定义timer，5秒请求一次, 无限循环，id数组大于0调用register，无返回不进行处理
        // query notification, id数组大于0时请求数据，超过30秒删除id，用callback进行处理
        let that = this
        setInterval(async function() {
            let currentTime = new Date().getTime()
            // 设置超时时间
            that.subjectCallback.forEach((item,index) => {
                if(currentTime - item.date > that.timeout*60000) {
                    that.unregister(that.subjectID[index])
                }
            })
            if(that.subjectID.length > 0) {
                console.log(that.subjectID)
                let conditions = {}
                that.subjectID.forEach((item,index) => {
                    conditions = {
                        "id": ["=", item],
                        "projectId": ["begins_with", that.jobId]
                    }
                })
                let url = "https://apiv2.pharbers.com/phdydatasource/query"
                let headers = {
                    "Authorization": that.getCookie( "access_token" ) ||"a116e7890eedd4b3b4555ab8568c364a1a8db1d82d49d9173c1b02aa0b088721",
                    "Content-Type": "application/vnd.api+json",
                    "Accept": "application/vnd.api+json"
                }
                let statusBody = {
                    "table": "notification",
                    "conditions": conditions,
                    "limit": 1000,
                    "start_key": {}
                }
                let options = {
                    method: "POST",
                    headers: headers,
                    body: JSON.stringify(statusBody)
                }
                fetch(url, options)
                    .then(res => res.json())
                    .then(response => {
                        if(response.data && response.data.length > 0) {
                            let jobCat = response.data[0].attributes["job-cat"]
                            console.log(jobCat)
                            //以后会做成进度条
                            if(jobCat != "running") {
                                let index = that.subjectID.indexOf(response.data[0].id)
                                let targetCallback = that.subjectCallback[index]
                                // 将消息分发给不同component处理
                                targetCallback.callback(response, targetCallback.ele)
                                // 返回结果即调用unregister
                                that.unregister(response.data[0].id)
                            }
                        
                        }
                    }) 
            } else {
                console.log("notice observer")
            }
        }, 10 * 1000)
    }
}
