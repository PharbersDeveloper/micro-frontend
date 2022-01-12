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
                    <div class="actions" @scroll="scrollGet($event)">
                        <div class="actions_list" v-for="(item, index) in actionsShow" :key="index+'actionsShow'">
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
                                            {{showActionDesc(list.attributes)}}
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
                "intermediate": "创建了脚本",
                "transform_schema": "编辑了数据集",
                "clear_DS_data": "编辑了数据集",
                "remove_Job": "删除了脚本",
                "project_file_to_DS": "导入了数据",
                "max1.0": "创建了数据集",
                "remove_DS": "删除了数据集",
                "upload": "创建了数据集",
                "dag_create": "创建了脚本"
            },
            actions: [],
            actionsShow: [],
            actionsKey: ""
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
    async mounted() {
        const accessToken = this.getCookie("access_token") || "ce9acc796c509e9f9053ea428f3ca5d800dace2092ba1b6c42b6c961534eb5de"
        const acurl = "https://apiv2.pharbers.com/phdydatasource/query"
        let acbody = {
            "table": "action",
            "conditions": {
                "projectId": ["=", this.allData.projectId]
            },
            "limit": 10,
            "start_key": ""
        }
        let acoptions = {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                'Content-Type': 'application/json; charset=UTF-8',
                "accept": "application/json"
            },
            body: JSON.stringify(acbody)
        }
        this.actions = await fetch(acurl, acoptions).then(res=>res.json())
        this.actionsKey = this.actions.meta.start_key
        this.dealActions() //处理actions数据
    },
    props: {
        allData: {
            type: Object,
            default: function() {
                return {
                    "projectDetail": {},
                    "numShow": {},
                    "actionsArr": [
                        {
                            "type": "actions",
                            "id": "tqbL2CSoMK4QNUI",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_zsd\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_zsd\",\"jobId\":\"\",\"inputs\":[{\"name\":\"output_ceshi\",\"id\":\"55d958a1c7ca4f149cee3e6711e9f056\"}],\"outputs\":[{\"name\":\"zsd\",\"id\":\"43a97efbdd234598a166f0278f66fc48\"}],\"jobVersion\":\"zsd_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641869303148
                            }
                        },
                        {
                            "type": "actions",
                            "id": "Ga_JJ5bA86aRtl_",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "max1.0",
                                "job-cat": "max1.0",
                                "comments": "",
                                "message": "{\"actionName\":\"output_ceshi\",\"keys\":\"weqw\",\"name\":\"output_ceshi\",\"version\":\"max1.0\",\"id\":\"55d958a1c7ca4f149cee3e6711e9f056\",\"cat\":\"output_index\",\"format\":\"Parquet\",\"prop\":{\"path\":\"weqw\",\"partitions\":1,\"format\":\"Parquet\"}}",
                                "date": 1641869282420
                            }
                        },
                        {
                            "type": "actions",
                            "id": "Z6g6P6TXkMFv4Tt",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_大人物\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_大人物\",\"jobId\":\"\",\"inputs\":[{\"name\":\"滚动\",\"id\":\"a65c26c9905e0545d327ed5eb4ca507c.xlsx\"}],\"outputs\":[{\"name\":\"大人物\",\"id\":\"fbaf4beff82049ea95f6e0ace6643b5d\"}],\"jobVersion\":\"大人物_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641869256074
                            }
                        },
                        {
                            "type": "actions",
                            "id": "e7C5kD7t2cgBxr-",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "refresh",
                                "job-cat": "dag_refresh",
                                "comments": "dag_refresh",
                                "message": "{\"projectId\":\"JfSmQBYUpyb4jsei\", \"flowVersion\":\"developer\", \"jobCat\":\"dag_refresh\"}",
                                "date": 1641869248146
                            }
                        },
                        {
                            "type": "actions",
                            "id": "lynIDLIs1d48WPf",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "remove_Job",
                                "comments": "delete_dataset",
                                "message": "[{\"actionName\":\"compute_大人物\", \"targetId\":\"KUhhW66ot0NsRzG\", \"jobName\":\"developer_KUhhW66ot0NsRzG_ETL_Iterator_ETL_Iterator_compute_大人物\", \"flowVersion\":\"developer\"}]",
                                "date": 1641869247254
                            }
                        },
                        {
                            "type": "actions",
                            "id": "jLwaXrrYxxwEehN",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_大人物\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_大人物\",\"jobId\":\"\",\"inputs\":[{\"name\":\"11\",\"id\":\"1a04f9eef17b4250b4cfd58aaabf43ef\"}],\"outputs\":[{\"name\":\"大人物\",\"id\":\"fbaf4beff82049ea95f6e0ace6643b5d\"}],\"jobVersion\":\"大人物_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641869023473
                            }
                        },
                        {
                            "type": "actions",
                            "id": "BifADWuWsMU4IQd",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"a65c26c9905e0545d327ed5eb4ca507c.xlsx\", \"skipValue\":0, \"jumpValue\":0, \"fileType\":\"xlsx\", \"fileSheet\":\"订单明细\", \"fileName\":\"LLP 2020年4月出单收支明细(1).xlsx\", \"isAppend\":false, \"destination\":\"滚动\", \"version\":\"123\", \"projectName\":\"ETL_Iterator\", \"projectId\":\"JfSmQBYUpyb4jsei\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\", \"cat\":\"uploaded\", \"actionName\":\"滚动\", \"prop\":{\"path\":\"\", \"partitions\":1}}",
                                "date": 1641807158758
                            }
                        },
                        {
                            "type": "actions",
                            "id": "a_F_zkboYcMdjhC",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c0127ababfff3ed6ae68275374e4a2e7fa9584adee88a5eb1a4b72d9809e79c2",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "upload",
                                "comments": "",
                                "message": "{\"actionName\":\"滚动\",\"file\":{},\"message\":{\"message\":\"File uploaded successfully\",\"tmpname\":\"a65c26c9905e0545d327ed5eb4ca507c.xlsx\",\"filename\":\"LLP 2020年4月出单收支明细(1).xlsx\",\"statusCode\":200},\"property\":{\"dataID\":\"123\",\"dataset\":\"滚动\",\"type\":\"createDataset\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"owner\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"showName\":\"张璐\"},\"projectId\":\"JfSmQBYUpyb4jsei\",\"projectName\":\"ETL_Iterator\",\"cat\":\"uploaded\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641807148191
                            }
                        },
                        {
                            "type": "actions",
                            "id": "fGPqBKFheYjlGGY",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"8ce25c59b4133705c57cbaa0e3467980.xlsx\", \"skipValue\":0, \"jumpValue\":0, \"fileType\":\"xlsx\", \"fileSheet\":\"订单明细\", \"fileName\":\"LLP 2020年4月出单收支明细(1).xlsx\", \"isAppend\":false, \"destination\":\"ceshi\", \"version\":\"2222\", \"projectName\":\"ETL_Iterator\", \"projectId\":\"JfSmQBYUpyb4jsei\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\", \"cat\":\"uploaded\", \"actionName\":\"ceshi\", \"prop\":{\"path\":\"\", \"partitions\":1}}",
                                "date": 1641806679183
                            }
                        },
                        {
                            "type": "actions",
                            "id": "Fc8raTvWtw1C0Dv",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c0127ababfff3ed6ae68275374e4a2e7fa9584adee88a5eb1a4b72d9809e79c2",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "upload",
                                "comments": "",
                                "message": "{\"actionName\":\"ceshi\",\"file\":{},\"message\":{\"message\":\"File uploaded successfully\",\"tmpname\":\"8ce25c59b4133705c57cbaa0e3467980.xlsx\",\"filename\":\"LLP 2020年4月出单收支明细(1).xlsx\",\"statusCode\":200},\"property\":{\"dataID\":\"2222\",\"dataset\":\"ceshi\",\"type\":\"createDataset\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"owner\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"showName\":\"张璐\"},\"projectId\":\"JfSmQBYUpyb4jsei\",\"projectName\":\"ETL_Iterator\",\"cat\":\"uploaded\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641806670551
                            }
                        },
                        {
                            "type": "actions",
                            "id": "JFdFknrjjSEzIdr",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "failed",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"a7bc5714f2a84ee437e964aeb30215f4.xlsx\", \"skipValue\":0, \"jumpValue\":0, \"fileType\":\"xlsx\", \"fileSheet\":\"订单明细\", \"fileName\":\"LLP 2020年4月出单收支明细(1).xlsx\", \"isAppend\":false, \"destination\":\"无限滚动\", \"version\":\"wqe\", \"projectName\":\"ETL_Iterator\", \"projectId\":\"JfSmQBYUpyb4jsei\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\", \"cat\":\"uploaded\", \"actionName\":\"无限滚动\", \"prop\":{\"path\":\"\", \"partitions\":1}}",
                                "date": 1641806638646
                            }
                        },
                        {
                            "type": "actions",
                            "id": "JqnvP_7EOdsQidg",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"a7bc5714f2a84ee437e964aeb30215f4.xlsx\", \"skipValue\":0, \"jumpValue\":0, \"fileType\":\"xlsx\", \"fileSheet\":\"订单明细\", \"fileName\":\"LLP 2020年4月出单收支明细(1).xlsx\", \"isAppend\":false, \"destination\":\"无限滚动\", \"version\":\"wqe\", \"projectName\":\"ETL_Iterator\", \"projectId\":\"JfSmQBYUpyb4jsei\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\", \"cat\":\"uploaded\", \"actionName\":\"无限滚动\", \"prop\":{\"path\":\"\", \"partitions\":1}}",
                                "date": 1641806082149
                            }
                        },
                        {
                            "type": "actions",
                            "id": "0dv_dkLJAZUpl4H",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c0127ababfff3ed6ae68275374e4a2e7fa9584adee88a5eb1a4b72d9809e79c2",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "upload",
                                "comments": "",
                                "message": "{\"actionName\":\"无限滚动\",\"file\":{},\"message\":{\"message\":\"File uploaded successfully\",\"tmpname\":\"a7bc5714f2a84ee437e964aeb30215f4.xlsx\",\"filename\":\"LLP 2020年4月出单收支明细(1).xlsx\",\"statusCode\":200},\"property\":{\"dataID\":\"wqe\",\"dataset\":\"无限滚动\",\"type\":\"createDataset\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"owner\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"showName\":\"张璐\"},\"projectId\":\"JfSmQBYUpyb4jsei\",\"projectName\":\"ETL_Iterator\",\"cat\":\"uploaded\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641806026202
                            }
                        },
                        {
                            "type": "actions",
                            "id": "PI9tSgIe9eDfciG",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_dfg\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_dfg\",\"jobId\":\"\",\"inputs\":[{\"name\":\"ewrw\",\"id\":\"61f3061fc6f14c3b8a8e5615dd568d05\"}],\"outputs\":[{\"name\":\"dfg\",\"id\":\"ac8217371ae64c94bf5409e1907967f5\"}],\"jobVersion\":\"dfg_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641803390758
                            }
                        },
                        {
                            "type": "actions",
                            "id": "dTwTeWtZcUO85wq",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_dfg\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_dfg\",\"jobId\":\"\",\"inputs\":[{\"name\":\"11\",\"id\":\"1a04f9eef17b4250b4cfd58aaabf43ef\"}],\"outputs\":[{\"name\":\"dfg\",\"id\":\"ac8217371ae64c94bf5409e1907967f5\"}],\"jobVersion\":\"dfg_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641800596132
                            }
                        },
                        {
                            "type": "actions",
                            "id": "-dLTf2cm5nqKt8Q",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_dsfsdf\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_dsfsdf\",\"jobId\":\"\",\"inputs\":[{\"name\":\"ewrw\",\"id\":\"61f3061fc6f14c3b8a8e5615dd568d05\"}],\"outputs\":[{\"name\":\"dsfsdf\",\"id\":\"03a7d9f774db4f2aa3f804b518bc7c29\"}],\"jobVersion\":\"dsfsdf_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641800567250
                            }
                        },
                        {
                            "type": "actions",
                            "id": "iHn189Dxbe0femD",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_ewrw\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_ewrw\",\"jobId\":\"\",\"inputs\":[{\"name\":\"大人物\",\"id\":\"fbaf4beff82049ea95f6e0ace6643b5d\"}],\"outputs\":[{\"name\":\"ewrw\",\"id\":\"61f3061fc6f14c3b8a8e5615dd568d05\"}],\"jobVersion\":\"ewrw_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"pyspark\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641800510546
                            }
                        },
                        {
                            "type": "actions",
                            "id": "HJqGQcljFAHV29Q",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_222\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_222\",\"jobId\":\"\",\"inputs\":[{\"name\":\"11\",\"id\":\"1a04f9eef17b4250b4cfd58aaabf43ef\"}],\"outputs\":[{\"name\":\"222\",\"id\":\"41299ae32eaf456ba4c58d41ab41e2b6\"}],\"jobVersion\":\"222_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"pyspark\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641800483462
                            }
                        },
                        {
                            "type": "actions",
                            "id": "jv-jy4-YXOybrqx",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_11\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_11\",\"jobId\":\"\",\"inputs\":[{\"name\":\"11111\",\"id\":\"02dd6c4a35b9ba4e04134153e3d52043.xlsx\"}],\"outputs\":[{\"name\":\"11\",\"id\":\"1a04f9eef17b4250b4cfd58aaabf43ef\"}],\"jobVersion\":\"11_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641800331622
                            }
                        },
                        {
                            "type": "actions",
                            "id": "Cv2Dh7sjSsoVjJF",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "clear_DS_data",
                                "comments": "clear_dataset_tags",
                                "message": "[{\"actionName\":\"持续形成v\", \"version\":\"\", \"dsid\":\"de36c0e028b54f45b5c1ac04a8e25030\", \"destination\":\"持续形成v\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}]",
                                "date": 1641800207097
                            }
                        },
                        {
                            "type": "actions",
                            "id": "gpklB2Wt2RWMhyo",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "max1.0",
                                "job-cat": "max1.0",
                                "comments": "",
                                "message": "{\"actionName\":\"大人物\",\"keys\":\"耳闻\",\"name\":\"大人物\",\"version\":\"max1.0\",\"id\":\"fbaf4beff82049ea95f6e0ace6643b5d\",\"cat\":\"input_index\",\"prop\":{\"path\":\"耳闻\",\"partitions\":1}}",
                                "date": 1641800157453
                            }
                        },
                        {
                            "type": "actions",
                            "id": "0XSUTAVMkf-3DyG",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_zsd\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_zsd\",\"jobId\":\"\",\"inputs\":[{\"name\":\"fsd\",\"id\":\"b0f92f8dc25d4c38b4bac9311a5c1499\"}],\"outputs\":[{\"name\":\"zsd\",\"id\":\"43a97efbdd234598a166f0278f66fc48\"}],\"jobVersion\":\"zsd_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641800084068
                            }
                        },
                        {
                            "type": "actions",
                            "id": "yq_q0dhmG0XneMs",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_持续形成v\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_持续形成v\",\"jobId\":\"\",\"inputs\":[{\"name\":\"fsd\",\"id\":\"b0f92f8dc25d4c38b4bac9311a5c1499\"}],\"outputs\":[{\"name\":\"持续形成v\",\"id\":\"de36c0e028b54f45b5c1ac04a8e25030\"}],\"jobVersion\":\"持续形成v_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641798550451
                            }
                        },
                        {
                            "type": "actions",
                            "id": "e0jOGXookNGdYj9",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_fsd\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_fsd\",\"jobId\":\"\",\"inputs\":[{\"name\":\"zsd\",\"id\":\"43a97efbdd234598a166f0278f66fc48\"}],\"outputs\":[{\"name\":\"fsd\",\"id\":\"b0f92f8dc25d4c38b4bac9311a5c1499\"}],\"jobVersion\":\"fsd_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641797980577
                            }
                        },
                        {
                            "type": "actions",
                            "id": "lEH8sb6VSJwKDQd",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_11\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_11\",\"jobId\":\"\",\"inputs\":[{\"name\":\"zsd\",\"id\":\"43a97efbdd234598a166f0278f66fc48\"}],\"outputs\":[{\"name\":\"11\",\"id\":\"1a04f9eef17b4250b4cfd58aaabf43ef\"}],\"jobVersion\":\"11_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"pyspark\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641796226881
                            }
                        },
                        {
                            "type": "actions",
                            "id": "wqhgDCgw8rr93iN",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_asd\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_asd\",\"jobId\":\"\",\"inputs\":[{\"name\":\"fsd\",\"id\":\"b0f92f8dc25d4c38b4bac9311a5c1499\"}],\"outputs\":[{\"name\":\"asd\",\"id\":\"3a33a21dea87458f98ade181dc15e1ce\"}],\"jobVersion\":\"asd_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"pyspark\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641796175564
                            }
                        },
                        {
                            "type": "actions",
                            "id": "3f1Tjv0RqcdBNSU",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_zsd\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_zsd\",\"jobId\":\"\",\"inputs\":[{\"name\":\"fsd\",\"id\":\"b0f92f8dc25d4c38b4bac9311a5c1499\"}],\"outputs\":[{\"name\":\"zsd\",\"id\":\"43a97efbdd234598a166f0278f66fc48\"}],\"jobVersion\":\"zsd_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641795983258
                            }
                        },
                        {
                            "type": "actions",
                            "id": "cwSluKqCl683JaC",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_vxcb\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_vxcb\",\"jobId\":\"\",\"inputs\":[{\"name\":\"asd\",\"id\":\"3a33a21dea87458f98ade181dc15e1ce\"}],\"outputs\":[{\"name\":\"vxcb\",\"id\":\"23fb5c328f1f4936ab4ffdbd78c36f7a\"}],\"jobVersion\":\"vxcb_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641795724363
                            }
                        },
                        {
                            "type": "actions",
                            "id": "4CwuuipFs73n5Dy",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "dag_create",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_fsd\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_fsd\",\"jobId\":\"\",\"inputs\":[{\"name\":\"萨达\",\"id\":\"67167dfb201e4b08b05c7a47a8b1908f\"}],\"outputs\":[{\"name\":\"fsd\",\"id\":\"b0f92f8dc25d4c38b4bac9311a5c1499\"}],\"jobVersion\":\"fsd_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641794936098
                            }
                        },
                        {
                            "type": "actions",
                            "id": "iQeZE2-UM2jA5DD",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_多少啊\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_多少啊\",\"jobId\":\"\",\"inputs\":[{\"name\":\"D\",\"id\":\"561b3cfe7b8f45abb486b5787b66ba6c\"}],\"outputs\":[{\"name\":\"多少啊\",\"id\":\"7d4889854d9540ca9f6988a68efc1137\"}],\"jobVersion\":\"多少啊_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641794838769
                            }
                        },
                        {
                            "type": "actions",
                            "id": "x8LAHqiAF5jIZ7x",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_萨达\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_萨达\",\"jobId\":\"\",\"inputs\":[{\"name\":\"B\",\"id\":\"c5dc52e9c46048b28feabfb524fcddd0\"}],\"outputs\":[{\"name\":\"萨达\",\"id\":\"67167dfb201e4b08b05c7a47a8b1908f\"}],\"jobVersion\":\"萨达_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641794815878
                            }
                        },
                        {
                            "type": "actions",
                            "id": "_3Ybmo2lk9vA86C",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_dfg\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_dfg\",\"jobId\":\"\",\"inputs\":[{\"name\":\"asd\",\"id\":\"3a33a21dea87458f98ade181dc15e1ce\"}],\"outputs\":[{\"name\":\"dfg\",\"id\":\"ac8217371ae64c94bf5409e1907967f5\"}],\"jobVersion\":\"dfg_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641794575633
                            }
                        },
                        {
                            "type": "actions",
                            "id": "yO8nGe2ErQkBqaf",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "clear_DS_data",
                                "comments": "clear_dataset_tags",
                                "message": "[{\"actionName\":\"E\", \"version\":\"\", \"dsid\":\"2ed86da851824796803296e43f95090a\", \"destination\":\"E\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}]",
                                "date": 1641794088565
                            }
                        },
                        {
                            "type": "actions",
                            "id": "umcCfbSz_7973Ts",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "clear_DS_data",
                                "comments": "clear_dataset_tags",
                                "message": "[{\"actionName\":\"22222\", \"version\":\"\", \"dsid\":\"c3d1ca0c0e0ad489b5fa39978069406d.xlsx\", \"destination\":\"22222\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}]",
                                "date": 1641793793462
                            }
                        },
                        {
                            "type": "actions",
                            "id": "A49eImKSQtyQeBG",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "clear_DS_data",
                                "comments": "clear_dataset_tags",
                                "message": "[{\"actionName\":\"11111\", \"version\":\"\", \"dsid\":\"02dd6c4a35b9ba4e04134153e3d52043.xlsx\", \"destination\":\"11111\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}]",
                                "date": 1641793737745
                            }
                        },
                        {
                            "type": "actions",
                            "id": "padmryjQt-t7rZB",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "clear_DS_data",
                                "comments": "clear_dataset_tags",
                                "message": "[{\"actionName\":\"大表\", \"version\":\"\", \"dsid\":\"1845fdfdf0f1ec1ee1e9ccd25857980f.xlsx\", \"destination\":\"大表\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}]",
                                "date": 1641793603482
                            }
                        },
                        {
                            "type": "actions",
                            "id": "zV3yiGzwKee3WcE",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "running",
                                "job-cat": "clear_DS_data",
                                "comments": "clear_dataset_tags",
                                "message": "{\"actionName\":\"大表\",\"version\":\"\",\"dsid\":\"1845fdfdf0f1ec1ee1e9ccd25857980f.xlsx\",\"destination\":\"大表\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}",
                                "date": 1641793227039
                            }
                        },
                        {
                            "type": "actions",
                            "id": "a8xRPPC2Aup8ZHb",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "running",
                                "job-cat": "clear_DS_data",
                                "comments": "clear_dataset_tags",
                                "message": "{\"actionName\":\"大表\",\"version\":\"\",\"dsid\":\"1845fdfdf0f1ec1ee1e9ccd25857980f.xlsx\",\"destination\":\"大表\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}",
                                "date": 1641793030604
                            }
                        },
                        {
                            "type": "actions",
                            "id": "BD2cT3HXMasu8ea",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "refresh",
                                "job-cat": "dag_refresh",
                                "comments": "dag_refresh",
                                "message": "{\"projectId\":\"JfSmQBYUpyb4jsei\", \"flowVersion\":\"developer\", \"jobCat\":\"dag_refresh\"}",
                                "date": 1641793017301
                            }
                        },
                        {
                            "type": "actions",
                            "id": "ozMxAK7fWw1lAlf",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "remove_Job",
                                "comments": "delete_dataset",
                                "message": "[{\"actionName\":\"compute_xzc\", \"targetId\":\"0c6O4VsgD0yubw4\", \"jobName\":\"developer_0c6O4VsgD0yubw4_ETL_Iterator_ETL_Iterator_compute_xzc\", \"flowVersion\":\"developer\"}]",
                                "date": 1641793016870
                            }
                        },
                        {
                            "type": "actions",
                            "id": "OOc6wF1uo-qdh8f",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_xzc\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_xzc\",\"jobId\":\"\",\"inputs\":[{\"name\":\"B\",\"id\":\"c5dc52e9c46048b28feabfb524fcddd0\"}],\"outputs\":[{\"name\":\"xzc\",\"id\":\"b839c12f849e4539b3a9c70b01748c4c\"}],\"jobVersion\":\"xzc_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641793005712
                            }
                        },
                        {
                            "type": "actions",
                            "id": "qmc5gwsnsYy7Rc7",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "refresh",
                                "job-cat": "dag_refresh",
                                "comments": "dag_refresh",
                                "message": "{\"projectId\":\"JfSmQBYUpyb4jsei\", \"flowVersion\":\"developer\", \"jobCat\":\"dag_refresh\"}",
                                "date": 1641792991003
                            }
                        },
                        {
                            "type": "actions",
                            "id": "tg9LXL-E1Aay79Z",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "remove_Job",
                                "comments": "delete_dataset",
                                "message": "[{\"actionName\":\"compute_asd\", \"targetId\":\"MxoybnWUDAXJY89\", \"jobName\":\"developer_MxoybnWUDAXJY89_ETL_Iterator_ETL_Iterator_compute_asd\", \"flowVersion\":\"developer\"}]",
                                "date": 1641792990623
                            }
                        },
                        {
                            "type": "actions",
                            "id": "WjPXZlYJK0Amkxf",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_asd\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_asd\",\"jobId\":\"\",\"inputs\":[{\"name\":\"B\",\"id\":\"c5dc52e9c46048b28feabfb524fcddd0\"}],\"outputs\":[{\"name\":\"asd\",\"id\":\"3a33a21dea87458f98ade181dc15e1ce\"}],\"jobVersion\":\"asd_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641792979685
                            }
                        },
                        {
                            "type": "actions",
                            "id": "lRIT29b2Zn6BWLh",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "%E5%BC%A0%E7%92%90",
                                "time": -1,
                                "code": "0",
                                "job-desc": "refresh",
                                "job-cat": "dag_refresh",
                                "comments": "dag_refresh",
                                "message": "{\"projectId\":\"JfSmQBYUpyb4jsei\", \"flowVersion\":\"developer\", \"jobCat\":\"dag_refresh\"}",
                                "date": 1641792941535
                            }
                        },
                        {
                            "type": "actions",
                            "id": "5u5i20L3twPcUgz",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "remove_DS",
                                "comments": "delete_dataset",
                                "message": "[{\"actionName\":\"G\", \"version\":\"\", \"dsid\":\"1d683fe331a44fd9b24bc6cf1e69427a\", \"destination\":\"G\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}, {\"actionName\":\"1\", \"version\":\"\", \"dsid\":\"afa11bf0ff52a0386d860844d00a9adc.xlsx\", \"destination\":\"1\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}, {\"actionName\":\"F\", \"version\":\"\", \"dsid\":\"7214fa3ab31043d3810f6cf0587e6398\", \"destination\":\"F\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}, {\"actionName\":\"C\", \"version\":\"\", \"dsid\":\"840120c6e8cd404d8d256ed03fda6757\", \"destination\":\"C\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}]",
                                "date": 1641792941268
                            }
                        },
                        {
                            "type": "actions",
                            "id": "E-wwauU7ZyxIg2m",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "%E5%BC%A0%E7%92%90",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "remove_Job",
                                "comments": "delete_dataset",
                                "message": "[{\"targetId\":\"m3iu9hfFwcaQk1L\", \"jobName\":\"developer_m3iu9hfFwcaQk1L_ETL_Iterator_ETL_Iterator_compute_C\", \"flowVersion\":\"developer\"}]",
                                "date": 1641792941065
                            }
                        },
                        {
                            "type": "actions",
                            "id": "2RWC4CvOP9Zo2fT",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "remove_DS",
                                "comments": "delete_dataset",
                                "message": "[{\"actionName\":\"H\", \"version\":\"\", \"dsid\":\"b88de9235b2d4d21b0973f092229091c\", \"destination\":\"H\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}]",
                                "date": 1641792919718
                            }
                        },
                        {
                            "type": "actions",
                            "id": "rskQ0aZKUegd5w7",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "%E5%BC%A0%E7%92%90",
                                "time": -1,
                                "code": "0",
                                "job-desc": "refresh",
                                "job-cat": "dag_refresh",
                                "comments": "dag_refresh",
                                "message": "{\"projectId\":\"JfSmQBYUpyb4jsei\", \"flowVersion\":\"developer\", \"jobCat\":\"dag_refresh\"}",
                                "date": 1641784966434
                            }
                        },
                        {
                            "type": "actions",
                            "id": "BO410yLaSuPv0U4",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "failed",
                                "job-cat": "remove_DS",
                                "comments": "delete_dataset",
                                "message": "[{\"actionName\":\"A\", \"version\":\"\", \"dsid\":\"d90d9f8651f049f0875710dc72bee6fb.xlsx\", \"destination\":\"A\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}, {\"actionName\":\"H\", \"version\":\"\", \"dsid\":\"b88de9235b2d4d21b0973f092229091c\", \"destination\":\"H\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}]",
                                "date": 1641784802973
                            }
                        },
                        {
                            "type": "actions",
                            "id": "9mKxnFNvdXDpwHx",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "%E5%BC%A0%E7%92%90",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "remove_Job",
                                "comments": "delete_dataset",
                                "message": "[{\"targetId\":\"4N6zRCubLTSGU2V\", \"jobName\":\"developer_4N6zRCubLTSGU2V_ETL_Iterator_ETL_Iterator_compute_B\", \"flowVersion\":\"developer\"}, {\"targetId\":\"33wNjTbRZy6nt6I\", \"jobName\":\"developer_33wNjTbRZy6nt6I_ETL_Iterator_ETL_Iterator_compute_D\", \"flowVersion\":\"developer\"}, {\"targetId\":\"ZwtqgaXvtBuPAoA\", \"jobName\":\"developer_ZwtqgaXvtBuPAoA_ETL_Iterator_ETL_Iterator_compute_H\", \"flowVersion\":\"developer\"}, {\"targetId\":\"ZOTmmLI12KlgMTG\", \"jobName\":\"developer_ZOTmmLI12KlgMTG_ETL_Iterator_ETL_Iterator_compute_E\", \"flowVersion\":\"developer\"}, {\"targetId\":\"Swgfg9588e3IBdb\", \"jobName\":\"developer_Swgfg9588e3IBdb_ETL_Iterator_ETL_Iterator_compute_G\", \"flowVersion\":\"developer\"}, {\"targetId\":\"21B3kEuT4kZeNXa\", \"jobName\":\"developer_21B3kEuT4kZeNXa_ETL_Iterator_ETL_Iterator_compute_F\", \"flowVersion\":\"developer\"}]",
                                "date": 1641784802697
                            }
                        },
                        {
                            "type": "actions",
                            "id": "AUOHHSLl3-rA14s",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"afa11bf0ff52a0386d860844d00a9adc.xlsx\", \"skipValue\":0, \"jumpValue\":0, \"fileType\":\"xlsx\", \"fileSheet\":\"Sheet1\", \"fileName\":\"MAPPING_to_QLX.xlsx\", \"isAppend\":false, \"destination\":\"1\", \"version\":\"1\", \"projectName\":\"ETL_Iterator\", \"projectId\":\"JfSmQBYUpyb4jsei\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\", \"cat\":\"uploaded\", \"actionName\":\"1\", \"prop\":{\"path\":\"\", \"partitions\":1}}",
                                "date": 1641783491110
                            }
                        },
                        {
                            "type": "actions",
                            "id": "83wgdKYgvvEVIAv",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "51da28e010f177c30fa4e72823d668af47d3e02b0662bd7ab86916a5c5b062e2",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "upload",
                                "comments": "",
                                "message": "{\"actionName\":\"1\",\"file\":{},\"message\":{\"message\":\"File uploaded successfully\",\"tmpname\":\"afa11bf0ff52a0386d860844d00a9adc.xlsx\",\"filename\":\"MAPPING_to_QLX.xlsx\",\"statusCode\":200},\"property\":{\"dataID\":\"1\",\"dataset\":\"1\",\"type\":\"createDataset\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"owner\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"showName\":\"张璐\"},\"projectId\":\"JfSmQBYUpyb4jsei\",\"projectName\":\"ETL_Iterator\",\"cat\":\"uploaded\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641783477767
                            }
                        },
                        {
                            "type": "actions",
                            "id": "MVhvIx5aBGRdKqD",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "51da28e010f177c30fa4e72823d668af47d3e02b0662bd7ab86916a5c5b062e2",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "upload",
                                "comments": "",
                                "message": "{\"actionName\":\"1\",\"file\":{},\"message\":{\"message\":\"File uploaded successfully\",\"tmpname\":\"56f74d6a2c3a8db8650cdf73e07b1a51.xlsx\",\"filename\":\"MAPPING_to_QLX.xlsx\",\"statusCode\":200},\"property\":{\"dataID\":\"1\",\"dataset\":\"1\",\"type\":\"createDataset\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"owner\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"showName\":\"张璐\"},\"projectId\":\"JfSmQBYUpyb4jsei\",\"projectName\":\"ETL_Iterator\",\"cat\":\"uploaded\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641783403559
                            }
                        },
                        {
                            "type": "actions",
                            "id": "Cvkb3a24v2FWI87",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "failed",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"e590684f5415bfc11765f20ca366b0e9.xlsx\", \"skipValue\":0, \"jumpValue\":0, \"fileType\":\"xlsx\", \"fileSheet\":\"Sheet1\", \"fileName\":\"MAPPING_to_QLX.xlsx\", \"isAppend\":false, \"destination\":\"11111\", \"version\":\"wd\", \"projectName\":\"ETL_Iterator\", \"projectId\":\"JfSmQBYUpyb4jsei\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\", \"cat\":\"uploaded\", \"actionName\":\"11111\", \"prop\":{\"path\":\"\", \"partitions\":1}}",
                                "date": 1641783201788
                            }
                        },
                        {
                            "type": "actions",
                            "id": "loRzJPxN3S_BMjV",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "failed",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"e590684f5415bfc11765f20ca366b0e9.xlsx\", \"skipValue\":0, \"jumpValue\":0, \"fileType\":\"xlsx\", \"fileSheet\":\"Sheet1\", \"fileName\":\"MAPPING_to_QLX.xlsx\", \"isAppend\":false, \"destination\":\"11111\", \"version\":\"wd\", \"projectName\":\"ETL_Iterator\", \"projectId\":\"JfSmQBYUpyb4jsei\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\", \"cat\":\"uploaded\", \"actionName\":\"11111\", \"prop\":{\"path\":\"\", \"partitions\":1}}",
                                "date": 1641783193433
                            }
                        },
                        {
                            "type": "actions",
                            "id": "KydB_l26JUSZxCr",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "failed",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"e590684f5415bfc11765f20ca366b0e9.xlsx\", \"skipValue\":0, \"jumpValue\":0, \"fileType\":\"xlsx\", \"fileSheet\":\"Sheet1\", \"fileName\":\"MAPPING_to_QLX.xlsx\", \"isAppend\":false, \"destination\":\"11111\", \"version\":\"wd\", \"projectName\":\"ETL_Iterator\", \"projectId\":\"JfSmQBYUpyb4jsei\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\", \"cat\":\"uploaded\", \"actionName\":\"11111\", \"prop\":{\"path\":\"\", \"partitions\":1}}",
                                "date": 1641783176497
                            }
                        },
                        {
                            "type": "actions",
                            "id": "qDIcoHF3mS2ZJk0",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "failed",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"e590684f5415bfc11765f20ca366b0e9.xlsx\", \"skipValue\":0, \"jumpValue\":0, \"fileType\":\"xlsx\", \"fileSheet\":\"Sheet1\", \"fileName\":\"MAPPING_to_QLX.xlsx\", \"isAppend\":false, \"destination\":\"11111\", \"version\":\"wd\", \"projectName\":\"ETL_Iterator\", \"projectId\":\"JfSmQBYUpyb4jsei\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\", \"cat\":\"uploaded\", \"actionName\":\"11111\", \"prop\":{\"path\":\"\", \"partitions\":1}}",
                                "date": 1641783163465
                            }
                        },
                        {
                            "type": "actions",
                            "id": "4f2ls64NFowjTvT",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "failed",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"e590684f5415bfc11765f20ca366b0e9.xlsx\", \"skipValue\":0, \"jumpValue\":0, \"fileType\":\"xlsx\", \"fileSheet\":\"Sheet1\", \"fileName\":\"MAPPING_to_QLX.xlsx\", \"isAppend\":false, \"destination\":\"11111\", \"version\":\"wd\", \"projectName\":\"ETL_Iterator\", \"projectId\":\"JfSmQBYUpyb4jsei\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\", \"cat\":\"uploaded\", \"actionName\":\"11111\", \"prop\":{\"path\":\"\", \"partitions\":1}}",
                                "date": 1641783133049
                            }
                        },
                        {
                            "type": "actions",
                            "id": "3JZTY0pxxJZv_ze",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "failed",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"e590684f5415bfc11765f20ca366b0e9.xlsx\", \"skipValue\":0, \"jumpValue\":0, \"fileType\":\"xlsx\", \"fileSheet\":\"Sheet1\", \"fileName\":\"MAPPING_to_QLX.xlsx\", \"isAppend\":false, \"destination\":\"11111\", \"version\":\"wd\", \"projectName\":\"ETL_Iterator\", \"projectId\":\"JfSmQBYUpyb4jsei\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\", \"cat\":\"uploaded\", \"actionName\":\"11111\", \"prop\":{\"path\":\"\", \"partitions\":1}}",
                                "date": 1641783100765
                            }
                        },
                        {
                            "type": "actions",
                            "id": "rxNJCEUUm09Jzn1",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "failed",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"e590684f5415bfc11765f20ca366b0e9.xlsx\", \"skipValue\":0, \"jumpValue\":0, \"fileType\":\"xlsx\", \"fileSheet\":\"Sheet1\", \"fileName\":\"MAPPING_to_QLX.xlsx\", \"isAppend\":false, \"destination\":\"11111\", \"version\":\"wd\", \"projectName\":\"ETL_Iterator\", \"projectId\":\"JfSmQBYUpyb4jsei\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\", \"cat\":\"uploaded\", \"actionName\":\"11111\", \"prop\":{\"path\":\"\", \"partitions\":1}}",
                                "date": 1641782479802
                            }
                        },
                        {
                            "type": "actions",
                            "id": "Z8qrTpPn3OkFR5o",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "failed",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"e590684f5415bfc11765f20ca366b0e9.xlsx\", \"skipValue\":0, \"jumpValue\":0, \"fileType\":\"xlsx\", \"fileSheet\":\"Sheet1\", \"fileName\":\"MAPPING_to_QLX.xlsx\", \"isAppend\":false, \"destination\":\"11111\", \"version\":\"wd\", \"projectName\":\"ETL_Iterator\", \"projectId\":\"JfSmQBYUpyb4jsei\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\", \"cat\":\"uploaded\", \"actionName\":\"11111\", \"prop\":{\"path\":\"\", \"partitions\":1}}",
                                "date": 1641782448539
                            }
                        },
                        {
                            "type": "actions",
                            "id": "4KGFAhRs31nghtm",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "51da28e010f177c30fa4e72823d668af47d3e02b0662bd7ab86916a5c5b062e2",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "upload",
                                "comments": "",
                                "message": "{\"actionName\":\"11111\",\"file\":{},\"message\":{\"message\":\"File uploaded successfully\",\"tmpname\":\"e590684f5415bfc11765f20ca366b0e9.xlsx\",\"filename\":\"MAPPING_to_QLX.xlsx\",\"statusCode\":200},\"property\":{\"dataID\":\"wd\",\"dataset\":\"11111\",\"type\":\"selectDataset\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"owner\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"showName\":\"张璐\"},\"projectId\":\"JfSmQBYUpyb4jsei\",\"projectName\":\"ETL_Iterator\",\"cat\":\"uploaded\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641782438984
                            }
                        },
                        {
                            "type": "actions",
                            "id": "wxVY9oVSfMfBMSr",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "51da28e010f177c30fa4e72823d668af47d3e02b0662bd7ab86916a5c5b062e2",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "upload",
                                "comments": "",
                                "message": "{\"actionName\":\"33333\",\"file\":{},\"message\":{\"message\":\"File uploaded successfully\",\"tmpname\":\"a112dab97e884aae37d7d21030ddb1b3.xlsx\",\"filename\":\"MAPPING_to_QLX.xlsx\",\"statusCode\":200},\"property\":{\"dataID\":\"123\",\"dataset\":\"33333\",\"type\":\"createDataset\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"owner\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"showName\":\"张璐\"},\"projectId\":\"JfSmQBYUpyb4jsei\",\"projectName\":\"ETL_Iterator\",\"cat\":\"uploaded\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641782392224
                            }
                        },
                        {
                            "type": "actions",
                            "id": "-JIcKsmFG5Yy6Zt",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"c3d1ca0c0e0ad489b5fa39978069406d.xlsx\", \"skipValue\":3, \"jumpValue\":0, \"fileType\":\"xlsx\", \"fileSheet\":\"Sheet1\", \"fileName\":\"MAPPING_to_QLX.xlsx\", \"isAppend\":false, \"destination\":\"22222\", \"version\":\"12\", \"projectName\":\"ETL_Iterator\", \"projectId\":\"JfSmQBYUpyb4jsei\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\", \"cat\":\"uploaded\", \"actionName\":\"22222\", \"prop\":{\"path\":\"\", \"partitions\":1}}",
                                "date": 1641782359011
                            }
                        },
                        {
                            "type": "actions",
                            "id": "k4waFfzdaNhg9r3",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "51da28e010f177c30fa4e72823d668af47d3e02b0662bd7ab86916a5c5b062e2",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "upload",
                                "comments": "",
                                "message": "{\"actionName\":\"22222\",\"file\":{},\"message\":{\"message\":\"File uploaded successfully\",\"tmpname\":\"c3d1ca0c0e0ad489b5fa39978069406d.xlsx\",\"filename\":\"MAPPING_to_QLX.xlsx\",\"statusCode\":200},\"property\":{\"dataID\":\"12\",\"dataset\":\"22222\",\"type\":\"createDataset\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"owner\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"showName\":\"张璐\"},\"projectId\":\"JfSmQBYUpyb4jsei\",\"projectName\":\"ETL_Iterator\",\"cat\":\"uploaded\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641782346191
                            }
                        },
                        {
                            "type": "actions",
                            "id": "ijuCVL17AHYlu7k",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"02dd6c4a35b9ba4e04134153e3d52043.xlsx\", \"skipValue\":0, \"jumpValue\":0, \"fileType\":\"xlsx\", \"fileSheet\":\"订单明细\", \"fileName\":\"LLP 2020年4月出单收支明细(1).xlsx\", \"isAppend\":false, \"destination\":\"11111\", \"version\":\"萨达\", \"projectName\":\"ETL_Iterator\", \"projectId\":\"JfSmQBYUpyb4jsei\", \"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\", \"opgroup\":\"zudIcG_17yj8CEUoCTHg\", \"cat\":\"uploaded\", \"actionName\":\"11111\", \"prop\":{\"path\":\"\", \"partitions\":1}}",
                                "date": 1641781653007
                            }
                        },
                        {
                            "type": "actions",
                            "id": "_RHrSZQe_h_N2lO",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "51da28e010f177c30fa4e72823d668af47d3e02b0662bd7ab86916a5c5b062e2",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "upload",
                                "comments": "",
                                "message": "{\"actionName\":\"11111\",\"file\":{},\"message\":{\"message\":\"File uploaded successfully\",\"tmpname\":\"02dd6c4a35b9ba4e04134153e3d52043.xlsx\",\"filename\":\"LLP 2020年4月出单收支明细(1).xlsx\",\"statusCode\":200},\"property\":{\"dataID\":\"萨达\",\"dataset\":\"11111\",\"type\":\"createDataset\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"owner\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"showName\":\"张璐\"},\"projectId\":\"JfSmQBYUpyb4jsei\",\"projectName\":\"ETL_Iterator\",\"cat\":\"uploaded\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641781618947
                            }
                        },
                        {
                            "type": "actions",
                            "id": "ds06vbkvCKGt8kq",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "max1.0",
                                "job-cat": "max1.0",
                                "comments": "",
                                "message": "{\"actionName\":\"sadf\",\"keys\":\"sd\",\"name\":\"sadf\",\"version\":\"max1.0\",\"id\":\"d546b810211d435aaf87b1a15c501bc0\",\"cat\":\"input_index\",\"prop\":{\"path\":\"sd\",\"partitions\":1}}",
                                "date": 1641780872056
                            }
                        },
                        {
                            "type": "actions",
                            "id": "VI0ELXo6Zfh7MOU",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"1845fdfdf0f1ec1ee1e9ccd25857980f.xlsx\",\"skipValue\":0,\"jumpValue\":0,\"fileType\":\"xlsx\",\"fileSheet\":\"订单明细\",\"fileName\":\"LLP 2020年4月出单收支明细(1).xlsx\",\"isAppend\":false,\"destination\":\"大表\",\"version\":\"收到\",\"projectName\":\"ETL_Iterator\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"cat\":\"uploaded\",\"actionName\":\"大表\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641540854879
                            }
                        },
                        {
                            "type": "actions",
                            "id": "Ba2_qfnHaFGXvcL",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "26b133a43705f7f4544abf31212f01131e3fdbf5eef55663d4a4ff6c21f9ac76",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "upload",
                                "comments": "",
                                "message": "{\"actionName\":\"大表\",\"file\":{},\"message\":{\"message\":\"File uploaded successfully\",\"tmpname\":\"1845fdfdf0f1ec1ee1e9ccd25857980f.xlsx\",\"filename\":\"LLP 2020年4月出单收支明细(1).xlsx\",\"statusCode\":200},\"property\":{\"dataID\":\"收到\",\"dataset\":\"大表\",\"type\":\"createDataset\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"owner\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"showName\":\"张璐\"},\"projectId\":\"JfSmQBYUpyb4jsei\",\"projectName\":\"ETL_Iterator\",\"cat\":\"uploaded\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641540843929
                            }
                        },
                        {
                            "type": "actions",
                            "id": "DKCqnkqxDTHkTQD",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_D\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"flowVersion\":\"developer\",\"jobCat\":\"prepare_edit\",\"jobDisplayName\":\"ETL_Iterator_ETL_Iterator_developer_compute_D_33wNjTbRZy6nt6I\",\"projectName\":\"ETL_Iterator\",\"jobName\":\"developer_33wNjTbRZy6nt6I_ETL_Iterator_ETL_Iterator_compute_D\",\"operatorParameters\":[\"filter\",[{\"key\":[\"=\",\"value2\"]}],\"select\",[\"col1\",\"col2\"],\"operation_null\",\"value\"],\"runtime\":\"prepare\"}",
                                "date": 1641538961453
                            }
                        },
                        {
                            "type": "actions",
                            "id": "jJewKCyD6k922-s",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_H\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"flowVersion\":\"developer\",\"jobCat\":\"prepare_edit\",\"jobDisplayName\":\"ETL_Iterator_ETL_Iterator_developer_compute_H_ZwtqgaXvtBuPAoA\",\"projectName\":\"ETL_Iterator\",\"jobName\":\"developer_ZwtqgaXvtBuPAoA_ETL_Iterator_ETL_Iterator_compute_H\",\"operatorParameters\":[\"filter\",[{\"key\":[\"=\",\"value\"]}],\"select\",[\"col1\",\"col2\"],\"operation_null\",\"value\"],\"runtime\":\"prepare\"}",
                                "date": 1641538920661
                            }
                        },
                        {
                            "type": "actions",
                            "id": "OL8da0W8VGFTiDh",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"ETL_Iterator_ETL_Iterator_developer_compute_H_ZwtqgaXvtBuPAoA\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"flowVersion\":\"developer\",\"jobCat\":\"prepare_edit\",\"jobDisplayName\":\"ETL_Iterator_ETL_Iterator_developer_compute_H_ZwtqgaXvtBuPAoA\",\"projectName\":\"ETL_Iterator\",\"jobName\":\"developer_ZwtqgaXvtBuPAoA_ETL_Iterator_ETL_Iterator_compute_H\",\"operatorParameters\":[\"filter\",[{\"key\":[\"=\",\"value\"]}],\"select\",[\"col1\",\"col2\"],\"operation_null\",\"value\"],\"runtime\":\"prepare\"}",
                                "date": 1641538824667
                            }
                        },
                        {
                            "type": "actions",
                            "id": "v5EPZ6OEPacgxaM",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_H\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_H\",\"jobId\":\"\",\"inputs\":[{\"name\":\"A\",\"id\":\"d90d9f8651f049f0875710dc72bee6fb.xlsx\"}],\"outputs\":[{\"name\":\"H\",\"id\":\"b88de9235b2d4d21b0973f092229091c\"}],\"jobVersion\":\"H_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"prepare\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"filter\",[{\"key\":[\"=\",\"value\"]}],\"select\",[\"col1\",\"col2\"],\"operation_null\",\"value\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641538741836
                            }
                        },
                        {
                            "type": "actions",
                            "id": "ArWn4KEm8hrKGgG",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"ETL_Iterator_ETL_Iterator_developer_compute_B_4N6zRCubLTSGU2V\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"flowVersion\":\"developer\",\"jobCat\":\"prepare_edit\",\"jobDisplayName\":\"ETL_Iterator_ETL_Iterator_developer_compute_B_4N6zRCubLTSGU2V\",\"projectName\":\"ETL_Iterator\",\"jobName\":\"developer_4N6zRCubLTSGU2V_ETL_Iterator_ETL_Iterator_compute_B\",\"operatorParameters\":[\"filter\",[{\"剂型\":[\"=\",\"CAP\"]}],\"select\",[\"生产企业\",\"1称\"],\"operation_null\",\"value\"],\"runtime\":\"prepare\"}",
                                "date": 1641538688748
                            }
                        },
                        {
                            "type": "actions",
                            "id": "5K_W1EpXXkU1pZT",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"developer_4N6zRCubLTSGU2V_ETL_Iterator_ETL_Iterator_compute_B\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"flowVersion\":\"developer\",\"jobCat\":\"prepare_edit\",\"jobDisplayName\":\"ETL_Iterator_ETL_Iterator_developer_compute_B_4N6zRCubLTSGU2V\",\"projectName\":\"ETL_Iterator\",\"jobName\":\"developer_4N6zRCubLTSGU2V_ETL_Iterator_ETL_Iterator_compute_B\",\"operatorParameters\":[\"filter\",[{\"剂型\":[\"=\",\"CAP\"]}],\"select\",[\"生产企业\",\"1称\"],\"operation_null\",\"value\"],\"runtime\":\"prepare\"}",
                                "date": 1641538646166
                            }
                        },
                        {
                            "type": "actions",
                            "id": "KQ68n0EyLD_lfpH",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"developer_33wNjTbRZy6nt6I_ETL_Iterator_ETL_Iterator_compute_D\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"flowVersion\":\"developer\",\"jobCat\":\"prepare_edit\",\"jobDisplayName\":\"ETL_Iterator_ETL_Iterator_developer_compute_D_33wNjTbRZy6nt6I\",\"projectName\":\"ETL_Iterator\",\"jobName\":\"developer_33wNjTbRZy6nt6I_ETL_Iterator_ETL_Iterator_compute_D\",\"operatorParameters\":[\"filter\",[{\"key\":[\"=\",\"value2\"]}],\"select\",[\"col1\",\"col2\"],\"operation_null\",\"value\"],\"runtime\":\"prepare\"}",
                                "date": 1641538213923
                            }
                        },
                        {
                            "type": "actions",
                            "id": "CwiXt30QkEm33TG",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"projectId\":\"JfSmQBYUpyb4jsei\",\"flowVersion\":\"developer\",\"jobCat\":\"prepare_edit\",\"jobDisplayName\":\"ETL_Iterator_ETL_Iterator_developer_compute_D_33wNjTbRZy6nt6I\",\"projectName\":\"ETL_Iterator\",\"jobName\":\"developer_33wNjTbRZy6nt6I_ETL_Iterator_ETL_Iterator_compute_D\",\"operatorParameters\":[\"filter\",[{\"key\":[\"=\",\"value1\"]}],\"select\",[\"col1\",\"col2\"],\"operation_null\",\"value\"]}",
                                "date": 1641537982478
                            }
                        },
                        {
                            "type": "actions",
                            "id": "m2bbEwrY70Tf_KH",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_G\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_G\",\"jobId\":\"\",\"inputs\":[{\"name\":\"A\",\"id\":\"d90d9f8651f049f0875710dc72bee6fb.xlsx\"}],\"outputs\":[{\"name\":\"G\",\"id\":\"1d683fe331a44fd9b24bc6cf1e69427a\"}],\"jobVersion\":\"G_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"sparkr\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641537622944
                            }
                        },
                        {
                            "type": "actions",
                            "id": "4Xy7sfvuiie_tE4",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_F\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_F\",\"jobId\":\"\",\"inputs\":[{\"name\":\"A\",\"id\":\"d90d9f8651f049f0875710dc72bee6fb.xlsx\"}],\"outputs\":[{\"name\":\"F\",\"id\":\"7214fa3ab31043d3810f6cf0587e6398\"}],\"jobVersion\":\"F_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"r\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641537524841
                            }
                        },
                        {
                            "type": "actions",
                            "id": "dbkHXHzB0v1r_8c",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_E\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_E\",\"jobId\":\"\",\"inputs\":[{\"name\":\"A\",\"id\":\"d90d9f8651f049f0875710dc72bee6fb.xlsx\"}],\"outputs\":[{\"name\":\"E\",\"id\":\"2ed86da851824796803296e43f95090a\"}],\"jobVersion\":\"E_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"pyspark\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641537455502
                            }
                        },
                        {
                            "type": "actions",
                            "id": "kBRKfQ06TJZA_-_",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_D\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_D\",\"jobId\":\"\",\"inputs\":[{\"name\":\"A\",\"id\":\"d90d9f8651f049f0875710dc72bee6fb.xlsx\"}],\"outputs\":[{\"name\":\"D\",\"id\":\"561b3cfe7b8f45abb486b5787b66ba6c\"}],\"jobVersion\":\"D_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"prepare\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"filter\",[{\"key\":[\"=\",\"value\"]}],\"select\",[\"col1\",\"col2\"],\"operation_null\",\"value\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641536835924
                            }
                        },
                        {
                            "type": "actions",
                            "id": "p83drfMiWUAu7BN",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_C\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_C\",\"jobId\":\"\",\"inputs\":[{\"name\":\"B\",\"id\":\"c5dc52e9c46048b28feabfb524fcddd0\"}],\"outputs\":[{\"name\":\"C\",\"id\":\"840120c6e8cd404d8d256ed03fda6757\"}],\"jobVersion\":\"C_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"python3\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"script\",\"\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641536785018
                            }
                        },
                        {
                            "type": "actions",
                            "id": "Sg7-SaEaoauzx8T",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"projectId\":\"JfSmQBYUpyb4jsei\",\"flowVersion\":\"developer\",\"jobCat\":\"prepare_edit\",\"jobDisplayName\":\"ETL_Iterator_ETL_Iterator_developer_compute_B_4N6zRCubLTSGU2V\",\"projectName\":\"ETL_Iterator\",\"jobName\":\"developer_4N6zRCubLTSGU2V_ETL_Iterator_ETL_Iterator_compute_B\",\"operatorParameters\":[\"filter\",[{\"剂型\":[\"=\",\"CAP\"]}],\"select\",[\"生产企业\",\"1称\"],\"operation_null\",\"value\"]}",
                                "date": 1641526157026
                            }
                        },
                        {
                            "type": "actions",
                            "id": "S8sQjE2dd-KXjxQ",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"projectId\":\"JfSmQBYUpyb4jsei\",\"flowVersion\":\"developer\",\"jobCat\":\"prepare_edit\",\"jobDisplayName\":\"ETL_Iterator_ETL_Iterator_developer_compute_B_4N6zRCubLTSGU2V\",\"projectName\":\"ETL_Iterator\",\"jobName\":\"developer_4N6zRCubLTSGU2V_ETL_Iterator_ETL_Iterator_compute_B\",\"operatorParameters\":[\"filter\",[{\"剂型\":[\"=\",\"CAP\"]}],\"select\",[\"生产企业\",\"商品名称\"],\"operation_null\",\"value\"]}",
                                "date": 1641522318714
                            }
                        },
                        {
                            "type": "actions",
                            "id": "qcX3LGNGH0gJSRP",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "intermediate",
                                "comments": "",
                                "message": "{\"actionName\":\"compute_B\",\"dagName\":\"ETL_Iterator\",\"flowVersion\":\"developer\",\"jobName\":\"compute_B\",\"jobId\":\"\",\"inputs\":[{\"name\":\"A\",\"id\":\"d90d9f8651f049f0875710dc72bee6fb.xlsx\"}],\"outputs\":[{\"name\":\"B\",\"id\":\"c5dc52e9c46048b28feabfb524fcddd0\"}],\"jobVersion\":\"B_version1\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"timeout\":\"1000\",\"runtime\":\"prepare\",\"owner\":\"张璐\",\"targetJobId\":\"\",\"projectName\":\"ETL_Iterator\",\"labels\":[],\"operatorParameters\":[\"filter\",[{\"剂型\":[\"=\",\"TAB\"]}],\"select\",[\"生产企业\",\"商品名称\"],\"operation_null\",\"value\"],\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641522279646
                            }
                        },
                        {
                            "type": "actions",
                            "id": "fN1PUmPm-qb_hqW",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "project_file_to_DS",
                                "comments": "project file to Data set",
                                "message": "{\"fileId\":\"d90d9f8651f049f0875710dc72bee6fb.xlsx\",\"skipValue\":3,\"jumpValue\":0,\"fileType\":\"xlsx\",\"fileSheet\":\"Sheet1\",\"fileName\":\"MAPPING_to_QLX.xlsx\",\"isAppend\":false,\"destination\":\"A\",\"version\":\"A\",\"projectName\":\"ETL_Iterator\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"cat\":\"uploaded\",\"actionName\":\"A\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641522190296
                            }
                        },
                        {
                            "type": "actions",
                            "id": "qzkCuDNQG0W6z7y",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "2b265ebcc5d04e0062bf8298b5038f1f3d46a4dcfc97f7c5c8444663409bd8ff",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "created",
                                "job-cat": "upload",
                                "comments": "",
                                "message": "{\"actionName\":\"A\",\"file\":{},\"message\":{\"message\":\"File uploaded successfully\",\"tmpname\":\"d90d9f8651f049f0875710dc72bee6fb.xlsx\",\"filename\":\"MAPPING_to_QLX.xlsx\",\"statusCode\":200},\"property\":{\"dataID\":\"A\",\"dataset\":\"A\",\"type\":\"createDataset\",\"projectId\":\"JfSmQBYUpyb4jsei\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"owner\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\",\"showName\":\"张璐\"},\"projectId\":\"JfSmQBYUpyb4jsei\",\"projectName\":\"ETL_Iterator\",\"cat\":\"uploaded\",\"prop\":{\"path\":\"\",\"partitions\":1}}",
                                "date": 1641522175362
                            }
                        },
                        {
                            "type": "actions",
                            "id": "XK7h13GRFsVa3uQ",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "remove_DS",
                                "comments": "delete_dataset",
                                "message": "[{\"actionName\":\"wqe\",\"version\":\"\",\"dsid\":\"b05503a9494b10695224ad5a8de0fd0a.xlsx\",\"destination\":\"wqe\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\"},{\"actionName\":\"qwe\",\"version\":\"\",\"dsid\":\"34669027230c4847a156cbb26552fd1e\",\"destination\":\"qwe\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\"},{\"actionName\":\"ewr\",\"version\":\"\",\"dsid\":\"25cbf4a02774457dac551334f73de42b\",\"destination\":\"ewr\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\"},{\"actionName\":\"qqq\",\"version\":\"\",\"dsid\":\"b4862d6781c74b4350a7039141fad391.xlsx\",\"destination\":\"qqq\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\"},{\"actionName\":\"wer\",\"version\":\"\",\"dsid\":\"cefbf57f88724af1880a9999903b9ec2\",\"destination\":\"wer\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}]",
                                "date": 1641522154342
                            }
                        },
                        {
                            "type": "actions",
                            "id": "t3nWeVybvSAGO88",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "refresh",
                                "job-cat": "dag_refresh",
                                "comments": "dag_refresh",
                                "message": "{\"projectId\":\"JfSmQBYUpyb4jsei\", \"flowVersion\":\"developer\", \"jobCat\":\"dag_refresh\"}",
                                "date": 1641466314617
                            }
                        },
                        {
                            "type": "actions",
                            "id": "AEMZQ5mHjEazsDA",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "remove_Job",
                                "comments": "delete_dataset",
                                "message": "[{\"actionName\":\"compute_qwe\",\"targetId\":\"vZNKtY2m1lMzssJ\",\"jobName\":\"developer_vZNKtY2m1lMzssJ_ETL_Iterator_ETL_Iterator_compute_qwe\",\"flowVersion\":\"developer\"}]",
                                "date": 1641466314063
                            }
                        },
                        {
                            "type": "actions",
                            "id": "n56chI9ktzraXe7",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "succeed",
                                "job-cat": "clear_DS_data",
                                "comments": "clear_dataset_tags",
                                "message": "{\"actionName\":\"qqq\",\"version\":\"\",\"dsid\":\"b4862d6781c74b4350a7039141fad391.xlsx\",\"destination\":\"qqq\",\"opname\":\"c89b8123-a120-498f-963c-5be102ee9082\",\"opgroup\":\"zudIcG_17yj8CEUoCTHg\"}",
                                "date": 1641466178198
                            }
                        },
                        {
                            "type": "actions",
                            "id": "8E1SC24AMYbZ7NM",
                            "attributes": {
                                "project-id": "JfSmQBYUpyb4jsei",
                                "owner": "c89b8123-a120-498f-963c-5be102ee9082",
                                "show-name": "张璐",
                                "time": -1,
                                "code": "0",
                                "job-desc": "failed",
                                "job-cat": "transform_schema",
                                "comments": "transform_schema",
                                "message": "{\"actionName\":\"qqq\",\"dsid\":\"b4862d6781c74b4350a7039141fad391.xlsx\",\"destination\":\"qqq\",\"schema\":[{\"src\":\"生产企业\",\"des\":\"生产企业\",\"type\":\"Double\"}]}",
                                "date": 1641466038327
                            }
                        },
                        {
                            "type": "actions",
                            "id": "CcixNo90_LZKP7D",
                            "attributes": {
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
                        }
                    ],
                    "projectName": "ETL_Iterator",
                    "projectId": "JfSmQBYUpyb4jsei"
                }
            }
        }
    },
    methods: {
        dealActions() {
            this.actions.data.map(mapItem => {
                //过滤掉dag_refresh
                if(mapItem.attributes["job-cat"] === "dag_refresh") {
                    return false
                }
                // 第一条数据直接存入actionsShow数组
                if(this.actionsShow.length === 0) {
                    this.actionsShow.push({
                        date: Number(mapItem.attributes.date),
                        list: [mapItem]
                    })
                } else {
                    // 判断当前数据的date在actionsShow数组中是否已经存在
                    let res = this.actionsShow.some(item => {
                        let checkDate = this.isSameDay(item.date, Number(mapItem.attributes.date))
                        if(checkDate) {
                            item.list.push(mapItem)
                            return true
                        }
                    })
                    // 若不存在则在actionsShow中存入新的按时间分类的数组
                    if(!res) {
                        this.actionsShow.push({
                            date: Number(mapItem.attributes.date),
                            list: [mapItem]
                        })
                    }
                }
            })
        },
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        },
        //滚动
        scrollGet(e) {
            console.log(e)
            let scrollTop = e.target.scrollTop || document.body.scrollTop;
            let clientHeight = e.target.clientHeight;
            let scrollHeight = e.target.scrollHeight;
            if (scrollTop + clientHeight >= scrollHeight) { 
                //滚动到底部
                this.getActions(this.actionsKey)
            }
        },
        async getActions(value) {
            const accessToken = this.getCookie("access_token") || "ce9acc796c509e9f9053ea428f3ca5d800dace2092ba1b6c42b6c961534eb5de"
            const acurl = "https://apiv2.pharbers.com/phdydatasource/query"
            let acbody = {
                "table": "action",
                "conditions": {
                    "projectId": ["=", this.allData.projectId]
                },
                "limit": 10,
                "start_key": value
            }
            let acoptions = {
                method: "POST",
                headers: {
                    "Authorization": accessToken,
                    'Content-Type': 'application/json; charset=UTF-8',
                    "accept": "application/json"
                },
                body: JSON.stringify(acbody)
            }
            this.actions = await fetch(acurl, acoptions).then(res=>res.json())
            this.actionsKey = this.actions.meta.start_key
            this.dealActions() //处理actions数据
        },
        //操作叙述
        showActionDesc(data) {
            let cat = data["job-cat"]
            let msg = JSON.parse(data["message"])
            if(cat === "intermediate" && msg.jobCat === "prepare_edit") {
                return "编辑了脚本"
            } else {
                return this.optionsMap[cat]
            }
        },
        //操作对象的名称
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
        //操作对象的icon
        showActionIcon(data) {
            let cat = data["job-cat"]
            let msg = JSON.parse(data["message"])
            if(cat === "intermediate") {
                if(msg.runtime === "prepare") {
                    return "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/prepare_icon.svg"
                } else if(msg.runtime === "python3") {
                    return "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/python_icon.svg"
                } else if(msg.runtime === "pyspark") {
                    return "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/pyspark_icon.svg"
                } else if(msg.runtime === "r") {
                    return "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/R_icon.svg"
                } else if(msg.runtime === "sparkr") {
                    return "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/sparkR_icon.svg"
                } else {
                    return "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/intermediate.svg"
                }
            } else if(cat === "upload" || cat === "transform_schema") {
                return "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/normal.svg"
            } else if(cat === "max1.0" && msg.cat === "input_index") {
                return "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/input_index.svg"
            } else if(cat === "max1.0" && msg.cat === "output_index") {
                return "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/output_index.svg"
            } else  {
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
                            width: 300px;
                            overflow: hidden;
                            text-overflow: ellipsis;
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