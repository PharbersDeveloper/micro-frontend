export default class NoticeServiceService {
    constructor(id, adapter) {
        this.id = id
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
            // 设置30s超时
            that.subjectCallback.forEach((item,index) => {
                if(currentTime - item.date > that.timeout*60000) {
                    that.unregister(that.subjectID[index])
                }
            })
            if(that.subjectID.length > 0) {
                let conditions = []
                that.subjectID.forEach((item,index) => {
                    conditions.push({
                        id: item,
                        projectId: that.subjectCallback[index].projectId
                    })
                })
                let url = "https://apiv2.pharbers.com/phdydatasource/batch_get_item"
                let headers = {
                    "Authorization": that.getCookie( "access_token" ) ||"34e15f53cf007d615a2cbed55a21041e4da8e7a3b9883eac12ef40e84915afb3",
                    "Content-Type": "application/vnd.api+json",
                    "Accept": "application/vnd.api+json"
                }
                let statusBody = {
                    "table": "notification",
                    "conditions": conditions
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
                            let status = JSON.parse(response.data[0].attributes.message).cnotification.status
                            //以后会做成进度条
                            if(status != "project_file_to_DS_running" || status != "dag_conf insert success") {
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
        }, 5 * 1000)
    }
}
