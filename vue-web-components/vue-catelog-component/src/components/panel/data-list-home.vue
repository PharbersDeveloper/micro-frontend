<template>
    <div class="data-list-home">
        <div class="data-home-container">
               <div class="content">  
                <div class="left-area">
                    <div class="projectInfo">
                        <div class="color"></div>
                        <div class="project_Information">
                            <p class="project_name">{{allData.projectDetail.name}}</p>
                            <p class="project_info">{{allData.projectDetail.provider}} , {{formatDateStandard(allData.projectDetail.created, 0)}}</p>
                        </div>
                    </div>
                    <div class="items">
                        <div class="item">
                            <div class="flow">
                                <p class="flow_word">主流程</p>
                                <div class="flow_item"> 
                                <div class="flow_item_cell" @click="linkToPage('datasets')">
                                        <div>
                                            <img :src="dataset_icon" alt="">
                                        </div>
                                        <div>
                                            <p class="number">{{allData.numShow.dataset}}</p>
                                            <p class="dataset">数据集</p>
                                        </div>
                                </div>
                                    <div class="flow_item_cell" @click="linkToPage('script')">
                                        <div>
                                            <img :src="recipes_icon" alt="">
                                        </div>
                                        <div>
                                            <p class="number">{{allData.numShow.flow}}</p>
                                            <p class="recipes">脚本</p>
                                        </div>
                                </div>
                                    <div class="flow_item_cell">
                                        <div>
                                            <img :src="models_icon" alt="">
                                        </div>
                                        <div>
                                            <p class="number">{{allData.numShow.model}}</p>
                                            <p class="models">模型</p>
                                        </div>
                                </div>
                                </div>
                            </div>
                            <div class="flow flow_two">
                                <p class="flow_word">实验室</p>
                                <div class="flow_item"> 
                                <div class="flow_item_cell" >
                                        <a href="#">
                                            <div>
                                                <img :src="notebook_icon" alt="">
                                            </div>
                                            <div>
                                                <p class="number">{{allData.numShow.notebook}}</p>
                                                <p class="notebooks">编译器</p>
                                            </div>
                                        </a>
                                </div>
                                    <div class="flow_item_cell">
                                        <a href="#">
                                            <div>
                                                <img :src="analyses_icon" alt="">
                                            </div>
                                            <div>
                                                <p class="number">{{allData.numShow.analysis}}</p>
                                                <p class="models">分析</p>
                                            </div>
                                        </a>
                                </div>
                                </div>
                            </div>
                            <div class="flow flow_three">
                                <p class="flow_word">指示面板</p>
                                <div class="flow_item"> 
                                <div class="flow_item_cell">
                                        <a href="#">
                                            <div>
                                                <img :src="dashboard_icon" alt="">
                                            </div>
                                            <div>
                                                <p class="number">{{allData.numShow.dashBoard}}</p>
                                                <p class="dashboard">指示面板</p>
                                            </div>
                                        </a>
                                </div>
                                </div>
                            </div>
                            <div class="flow flow_four">
                                <p class="flow_word">维基</p>
                                <div class="flow_item"> 
                                <div class="flow_item_cell">
                                        <a href="#">
                                            <div>
                                                <img :src="article_icon" alt="">
                                            </div>
                                            <div>
                                                <p class="number">{{allData.numShow.wiki}}</p>
                                                <p class="article">详解</p>
                                            </div>
                                        </a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="go_flow">
                            <button @click="linkToPage('flow')">数据流程</button>
                        </div>
                    </div>
                    
                </div>
                <div class="right_area">
                    <div class="hearder">
                        <p>时间线</p>
                    </div>
                    <div class="actions">
                        <div class="actions_list" v-for="(item, index) in actions" :key="index+'actions'">
                            <div class="center">
                                <p>{{formatDateStandard(item.date, 2)}}</p>
                            </div>
                            <div class="info" v-for="(list, index) in item.list" :key="index+'list'">
                                <div class="info_cell">
                                    <div class="icon">
                                        <img :src="num_icon" alt="">
                                    </div>
                                    <div class="cell_info">
                                        <p class="top_info">
                                            <span class="you">{{decodeURI(list.attributes["show-name"])}}</span>
                                                {{optionsMap[list.attributes["job-cat"]]}}
                                            <span class="time">{{formatDateStandard(list.attributes.date, 3)}}</span>
                                        </p>
                                        <span class="file">
                                            <img :src="showActionIcon(list.attributes)" alt="">
                                            <p> {{showActionName(list.attributes.message)}}</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataset_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/datasets.png",
            recipes_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/recipes.png",
            models_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/models.png",
            notebook_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/notebooks.png",
            analyses_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/analyses.png",
            dashboard_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/dashboard.png",
            article_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/articles.png",
            num_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/num_icon.png",
            file_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/file.png",
            script_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/script.png",
            optionsMap: {
                "intermediate": "创建了数据集",
                "transform_schema": "编辑了数据集",
                "clear_DS_data": "编辑了数据集",
                "remove_Job": "删除了脚本",
                "project_file_to_DS": "导入了数据",
                "max1.0": "创建了数据集",
                "remove_DS": "删除了数据集",
                "upload": "创建了数据集",
                "dag_refresh": "运行了dag"
            },
            actions: []
        }
    },
    watch: {
        "allData.actionsArr": function() {
            this.allData.actionsArr.map(mapItem => {
                if(mapItem.attributes["job-cat"] === "dag_refresh") {
                    return false
                }
                // 第一条数据直接存入actions数组
                if(this.actions.length === 0) {
                    this.actions.push({
                        date: Number(mapItem.attributes.date),
                        list: [mapItem]
                    })
                } else {
                    // 判断当前数据的date在actions数组中是否已经存在
                    let res = this.actions.some(item => {
                        let checkDate = this.isSameDay(item.date, Number(mapItem.attributes.date))
                        if(checkDate) {
                            item.list.push(mapItem)
                            return true
                        }
                    })
                    // 若不存在则在actions中存入新的按时间分类的数组
                    if(!res) {
                        this.actions.push({
                            date: Number(mapItem.attributes.date),
                            list: [mapItem]
                        })
                    }
                }
            })
        }
    },
    mounted() {
        this.allData.actionsArr.map(mapItem => {
            if(mapItem.attributes["job-cat"] === "dag_refresh") {
                return false
            }
            // 第一条数据直接存入actions数组
            if(this.actions.length === 0) {
                this.actions.push({
                    date: Number(mapItem.attributes.date),
                    list: [mapItem]
                })
            } else {
                // 判断当前数据的date在actions数组中是否已经存在
                let res = this.actions.some(item => {
                    let checkDate = this.isSameDay(item.date, Number(mapItem.attributes.date))
                    if(checkDate) {
                        item.list.push(mapItem)
                        return true
                    }
                })
                // 若不存在则在actions中存入新的按时间分类的数组
                if(!res) {
                    this.actions.push({
                        date: Number(mapItem.attributes.date),
                        list: [mapItem]
                    })
                }
            }
        })
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    "projectDetail": {
                        "name": "ETL_Iterator",
                        "provider": "pharbers",
                        "owner": null,
                        "type": "paas",
                        "created": "2021-10-25T12:16:19.000Z",
                        "tasks": [],
                        "actions": "{}",
                        "datasets": [],
                        "flow": "bMn5iL04CBxyYN7W",
                        "analysis": null
                    },
                    "numShow": {
                        "dataset": 5,
                        "flow": 1,
                        "analysis": 0,
                        "model": 0,
                        "notebook": 0,
                        "dashBoard": 0,
                        "wiki": 0
                    },
                    "actionsArr": [
                        {
                            "type": "actions",
                            "id": "CcixNo90_LZKP7D",
                            "attributes": {
                                "sort-version": "unknown",
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "max1.0",
                                "job-cat": "max1.0",
                                "comments": "",
                                "message": "{\"actionName\":\"wer\",\"keys\":\"ewr\",\"name\":\"wer\",\"version\":\"max1.0\",\"id\":\"cefbf57f88724af1880a9999903b9ec2\",\"cat\":\"output_index\",\"format\":\"Parquet\",\"prop\":{\"path\":\"ewr\",\"partitions\":1,\"format\":\"Parquet\"}}",
                                "date": 1641465364162
                            }
                        },
                        {
                            "type": "actions",
                            "id": "2CkuZK1Qae-rER-",
                            "attributes": {
                                "sort-version": "unknown",
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "max1.0",
                                "job-cat": "max1.0",
                                "comments": "",
                                "message": "{\"actionName\":\"ewr\",\"keys\":\"wer\",\"name\":\"ewr\",\"version\":\"max1.0\",\"id\":\"25cbf4a02774457dac551334f73de42b\",\"cat\":\"input_index\",\"prop\":{\"path\":\"wer\",\"partitions\":1}}",
                                "date": 1641465309506
                            }
                        },
                        {
                            "type": "actions",
                            "id": "1-N-PIzp7IYuhy_",
                            "attributes": {
                                "sort-version": "unknown",
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"b4862d6781c74b4350a7039141fad391.xlsx\",\"skipValue\":3,\"jumpValue\":0,\"fileType\":\"xlsx\",\"fileSheet\":\"Sheet1\",\"fileName\":\"MAPPING_to_QLX.xlsx\",\"isAppend\":false,\"destination\":\"qqq\",\"version\":\"qqq\",\"projectName\":\"ETL_Iterator\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"cat\":\"uploaded\",\"actionName\":\"qqq\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641463754968
                            }
                        },
                        {
                            "type": "actions",
                            "id": "r6W9TsqojaEo9SM",
                            "attributes": {
                                "sort-version": "unknown",
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "b231fffcbb67aa6fe587ee42593364f5b184f86ccab6d6d7327104d319a1a988",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "upload",
                                "comments": "",
                                "message": "{\"actionName\":\"qqq\",\"file\":{},\"message\":{\"message\":\"File uploaded successfully\",\"tmpname\":\"b4862d6781c74b4350a7039141fad391.xlsx\",\"filename\":\"MAPPING_to_QLX.xlsx\",\"statusCode\":200},\"property\":{\"dataID\":\"qqq\",\"dataset\":\"qqq\",\"type\":\"createDataset\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"owner\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"showName\":\"张璐\"},\"projectId\":\"JfSmQBYUpyb4jsei\",\"projectName\":\"ETL_Iterator\",\"cat\":\"uploaded\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641463746100
                            }
                        },
                        {
                            "type": "actions",
                            "id": "v7e-l_yWda-kB2G",
                            "attributes": {
                                "sort-version": "unknown",
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_qwe\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_qwe\",\"jobId\":\"\",\"inputs\":[{\"name\":\"wqe\",\"id\":\"b05503a9494b10695224ad5a8de0fd0a.xlsx\"}],\"outputs\":[{\"name\":\"qwe\",\"id\":\"34669027230c4847a156cbb26552fd1e\"}],\"jobVersion\":\"qwe_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641463570847
                            }
                        },
                        {
                            "type": "actions",
                            "id": "IVQtWjQ3FSWWG7g",
                            "attributes": {
                                "sort-version": "unknown",
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "b231fffcbb67aa6fe587ee42593364f5b184f86ccab6d6d7327104d319a1a988",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "upload",
                                "comments": "",
                                "message": "{\"actionName\":\"wqe\",\"file\":{},\"message\":{\"message\":\"File uploaded successfully\",\"tmpname\":\"b05503a9494b10695224ad5a8de0fd0a.xlsx\",\"filename\":\"MAPPING_to_QLX.xlsx\",\"statusCode\":200},\"property\":{\"dataID\":\"qwe\",\"dataset\":\"wqe\",\"type\":\"createDataset\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"owner\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"showName\":\"张璐\"},\"projectId\":\"JfSmQBYUpyb4jsei\",\"projectName\":\"ETL_Iterator\",\"cat\":\"uploaded\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641463528945
                            }
                        },
                        {
                            "type": "actions",
                            "id": "aR2vLrW5bhOLYyz",
                            "attributes": {
                                "sort-version": "unknown",
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "remove_DS",
                                "comments": "delete_dataset",
                                "message": "[{\"actionName\":\"ewr\",\"version\":\"\",\"dsid\":\"b31d2725eb6349ccb82a7d1adfd6d144\",\"destination\":\"ewr\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\"},{\"actionName\":\"ewrsdf\",\"version\":\"\",\"dsid\":\"272a0d1502c746a3860ff3176994fef9\",\"destination\":\"ewrsdf\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}]",
                                "date": 1641463347137
                            }
                        },
                        {
                            "type": "actions",
                            "id": "KqISz7Cs7h2nhbm",
                            "attributes": {
                                "sort-version": "unknown",
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "failed",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"b05503a9494b10695224ad5a8de0fd0a.xlsx\",\"skipValue\":3,\"jumpValue\":0,\"fileType\":\"xlsx\",\"fileSheet\":\"Sheet1\",\"fileName\":\"MAPPING_to_QLX.xlsx\",\"isAppend\":false,\"destination\":\"wqe\",\"version\":\"qwe\",\"projectName\":\"ETL_Iterator\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"cat\":\"uploaded\",\"actionName\":\"wqe\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641362139458
                            }
                        }
                    ],
                    "_isVue": true,
                    "projectName": "ETL_Iterator",
                    "projectId": "JfSmQBYUpyb4jsei"
                }
            }
        }
    },
    methods: {
        showActionName(data) {
            let msg = JSON.parse(data)
            if(Array.isArray(msg)) {
                return msg[0].actionName
            } else if(msg.actionName) {
                return msg.actionName
            } else {
                return "undefined"
            }
        },
        showActionIcon(data) {
            // "clear_DS_data": "编辑了数据集",
            // "remove_Job": "删除了脚本",
            // "project_file_to_DS": "导入了数据",
            // "remove_DS": "删除了数据集",
            let cat = data["job-cat"]
            let msg = JSON.parse(data["message"])
            if(cat === "intermediate") {
                return "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/intermediate.svg"
            } else if(cat === "upload" || cat === "transform_schema") {
                return "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/normal.svg"
            } else if(cat === "max1.0" && msg.cat === "input_index") {
                return "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/input_index.svg"
            } else if(cat === "max1.0" && msg.cat === "output_index") {
                return "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/output_index.svg"
            } 
            else  {
                return "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/intermediate.svg"
            }
        },
        isSameDay(timeStampA, timeStampB) {
            let dateA = new Date(timeStampA);
            let dateB = new Date(timeStampB);
            return (dateA.setHours(0, 0, 0, 0) == dateB.setHours(0, 0, 0, 0));
        },
        linkToPage(param) {
            const event = new Event("event")
            event.args = {
                callback: "linkToPage",
                element: this,
                param: {
                    name: param,
                    projectName: this.allData.projectDetail.name,
                    projectId: this.allData.projectDetail.id
                }
            }
            this.$emit('event', event)
        },
        formatDateStandard(...params) {
            if(params.length === 2) {
                let date = new Date( Number(params[0]) ),
                    Y = date.getFullYear(),
                    M =
                        ( date.getMonth() + 1 < 10 ?
                            `0${date.getMonth() + 1}` :
                            date.getMonth() + 1 ),
                    D0 = ( date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() ),
                    D1 = ( date.getDate() < 10 ? `0${date.getDate()}` : date.getDate() ),

                    h =
                        ( date.getHours() < 10 ? `0${date.getHours()}` : date.getHours() ),
                    m =
                        ( date.getMinutes() < 10 ?
                            `0${date.getMinutes()}` :
                            date.getMinutes() ) ,
                    s = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()

                // 输出结果：yyyy/mm/dd hh:mm
                if(params[1] === 0){
                    return Y + "/" + M + "/" + D0 + " " + h + ":" + m
                } else if(params[1] === 1) {
                    return Y + "-" + M + "-" + D0 + " " + h + ":" + m
                } else if(params[1] === 2) {
                    return Y + "-" + M + "-" + D0
                } else if(params[1] === 3) {
                    return h + ":" + m
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.data-home-container {
    
    height: calc(100vh - 40px);
    width: 100vw;
    background: #f2f2f2;
    .content {
        display: flex;
    }
    .header-area {
        width: 100%;
        height: 50px;
        background: #fff;
        p {
            line-height: 50px;
            margin: 0px;
            margin-left: 17px;
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: #000000;
            font-weight: 600;
            width: 200px;
            cursor: pointer;
        }
    }
    .left-area {
        flex: 1;
        .projectInfo {
            display: flex;
            // width: 1400px;
            height: 220px;
            background: #ffffff;
            border: 1px solid #ddd;
            margin-left: 20px;
            margin-top: 25px;
            .color {
                width: 80px;
                height: 100%;
                background: #cc9f3b;
            }
            .project_Information {
                display: 1;
                margin-left: 20px;
                margin-top: 20px;
                .project_name {
                    font-family: PingFangSC-Medium;
                    font-size: 38px;
                    color: #000000;
                    font-weight: 600;
                }
                .project_info {
                    font-family: PingFangSC-Medium;
                    font-size: 12px;
                    color: #000000;
                    font-weight: 500;
                }
            }
        }
    }
    .items {
        height: 220px;
        background: #ffffff;
        border: 1px solid #ddd;
        margin-left: 20px;
        margin-top: 25px;
        .go_flow {
            display: flex;
            justify-content: center;
            button {
                margin: 10px 0;
                width: 300px;
                height: 40px;
                box-sizing: border-box;
                background: #f9bd38;
                color: #333333;
                border: 1px solid transparent;
                font-weight: bold;
                letter-spacing: 2px;
                font-size: 14px;
                cursor: pointer;
            }
        }
        .item {
            display: flex;
        }
        .flow {
            width: 450px;
            height: 100%;
            // border: 1px solid #aaa;
            margin-left: 10px;
            .flow_word {
                width: 100%;
                height: 50px;
                border-bottom: 1px solid #dddddd;
                margin: 0px;
                line-height: 60px;
                font-size: 20px;
                font-weight: 600;
            }
            .flow_item {
                display: flex;
               
                .flow_item_cell {
                    width: 110px;
                    height: 80px;
                    margin-left: 10px;
                    margin-top: 20px;
                    cursor: pointer;
                div {
                    display: inline-block;
                }
                .number {
                    color: #666666;
                    font-size: 30px;
                    font-weight: 500;
                }
                .dataset {
                    color: #28a9dd;
                    font-size: 12px;
                }
                .recipes {
                    color: #f9bd38;
                    font-size: 12px;
                }
                .models {
                    color: #29af5d;
                    font-size: 12px;
                }
                .dashboard {
                    color: #f44336;
                    font-size: 12px;
                }
                .article {
                    color: #427b98;
                    font-size: 12px;
                }
                .notebooks {
                    color: #f28c38;
                    font-size: 12px;
                }
                
                }
                
            } 
           
        }
        .flow_two {
            width: 320px;
           
        }
        .flow_three {
            width: 180px;
        }
        .flow_four {
            width: 150px;
        }
    }
    .right_area {
        width:450px;
        // border: 1px solid #000;
        margin-top: 30px;
        margin-left: 20px;
        margin-right: 20px;
        .hearder {
            height: 30px;
            font-size: 14px;
            font-weight: 600;
            text-align: center;
            line-height: 30px;
            border-bottom: 2px solid #000;
        }
        .actions {
            height: calc(100vh - 150px);
            overflow: auto;
        }
        .center {
            margin-top: 10px;
            margin-left: 10px;
            color: #666666;
            font-size: 12px;
            margin-bottom: 10px;
        }
        .info {
            .info_cell {
                display: flex;
                height: 75px;
                width: 100%;
                background: #ffffff;
                border: 1px solid #dddddd;
                padding-left: 10px;
                padding-top: 10px;
                margin-bottom: 10px;
                .icon {
                    width: 20px;
                    height: 20px;
                    
                    img {
                        width: 100%;
                        border-radius: 10px;
                    }
                }
                .cell_info {
                    width: 100%;
                    margin-left: 10px;
                    font-size: 14px; 
                    .top_info {
                        position: relative;
                        .time {
                            position: absolute;
                            right: 10px;
                            top: 0;
                            font-size: 12px;
                            color: #999;
                        }
                    }
                     .you {
                        font-weight: 600;
                    }
                    .file {
                        display: flex;
                        margin: 5px;
                        p {
                            margin-left: 10px;
                        }
                    }
                   img {
                       width: 20px;
                       height: 20px;
                   }
                   };
                }
            }
        }
}
</style>