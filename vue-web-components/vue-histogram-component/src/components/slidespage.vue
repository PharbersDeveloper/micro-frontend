<template>
    <div class="page">
        <link rel="stylesheet" href="https://s3.cn-northwest-1.amazonaws.com.cn/components.pharbers.com/element-ui/element-ui.css">
        <div class="project_info_left">
            <div class="page_header">
                <div class="left">
                    <img :src="logo2" class="logo" alt="">
                    <div class="name">{{allData.projectName}}</div>
                </div>
                <div class="right">
                    <div class="text"
                        :class="[
                            {'borderBold': !edit}
                        ]"
                        @click="edit = false">浏览模式</div>
                    <div class="text"
                        :class="[
                            {'borderBold': edit}
                        ]"
                        @click="edit = true">编辑模式</div>
                    <el-button v-if="edit" class="panl" @click="saveSlideContent">Save</el-button>
                </div>
            </div>
            <div class="content">
                <slideComponent
                    :needTitle="false"
                    :isEditableValue="edit"
                    :content-model="activeModel"
                    :project-id="allData.projectId"
                    @changeHistogram="changeHistogram" />
            </div>
            <div class="page_footer">
                <div v-for="(slide, index) in slideArr"
                     :class="slideItemStyle(slide)"
                     @click="clickSlideFooterTab(index)"
                     :key="index">
                    <div class="slide_name">{{slide.title}}</div>
                    <img class="del_icon" :src="del_icon" @click.stop="clickDeleteSlide(index)"/>
                </div>
                <img :src="add_icon"  alt="" class="add_icon" @click.stop="addSlide">
            </div>
        </div>
<!--        <div class="project_info_right">-->
<!--            <div class="view_content" >-->
<!--                <div class="project_name_view">-->
<!--                    <span class="space">-->
<!--                        <img :src="logo2" alt="">-->
<!--                    </span>-->
<!--                    <div class="show-name" v-if="datasetcheckedIds.length == 1">-->
<!--                        <p class="project_name_info" :title="datasetcheckedNames[0]">-->
<!--                        {{datasetcheckedNames[0]}}-->
<!--                        </p>-->
<!--                    </div>-->
<!--                    <div class="show-name">-->
<!--                        <p class="project_name_info" v-if="datasetcheckedIds.length > 1">-->
<!--                            {{datasetcheckedIds.length}} 条数据集-->
<!--                        </p>-->
<!--                    </div>-->
<!--                </div>-->
<!--                <div class="view_func">-->
<!--                    <span  class="view_list">-->
<!--                        <img class='tags_imgs_tag' :src="label_icon" alt="">-->
<!--                        <span class='tags_func'>标签</span>-->
<!--                    </span>-->
<!--                    <span  class="view_list">-->
<!--                        <img class='tags_imgs_tag' :src="clear_data_icon" alt="">-->
<!--                        <span class='tags_func'>清除数据</span>-->
<!--                    </span>-->
<!--                    <span  class="view_list">-->
<!--                        <img class='tags_imgs_tag' :src="delete_icon" alt="">-->
<!--                        <span class='tags_func'>删除</span>-->
<!--                    </span>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
        <el-dialog
            title="删除"
            :visible.sync="dialogDeleteSlideVisible"
            width="600px">
            <div class="delete-slide-container">
                确定删除该数据看板吗？
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogDeleteSlideVisible = false">取消</el-button>
                <el-button type="primary" @click="on_clickDeleteSlideConfirm">确认</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="新内容"
            :visible.sync="dialogNewChartVisible"
            width="600px">
            <div class="create-chart-container">
                <div class="chart-type">
                    <img :src="logo1">
                    <span>图表</span>
                </div>
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogNewChartVisible = false">取消</el-button>
                <el-button type="primary" @click="on_clickNewChartConfirm">确认</el-button>
            </span>
        </el-dialog>
        <el-dialog
            title="新建图表"
            :visible.sync="dialogNewChartNameVisible"
            width="600px">
            <div class="create-chart-container">
                <span>数据源：</span>
                <input type="text" class="chartName">
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogNewChartNameVisible = false">取消</el-button>
                <el-button type="primary" @click="on_clickNewChartNameConfirm">确认</el-button>
            </span>
        </el-dialog>
        <img v-if="edit" :src="add_chart" class="add_chart" alt="" @click="dialogNewChartVisible = true">
    </div>
</template>
<script>
import ElButton from "element-ui/packages/button"
import ElTabs from "element-ui/packages/tabs"
import ElTabPane from "element-ui/packages/tab-pane"
import ElDialog from 'element-ui/packages/dialog/src/component'
import slideComponent from "./slide"
import "element-ui/lib/theme-chalk/index.css"
import PhSlideModel from './slide-model/slide-model'
import BarPolicy from "../components/render-policy/bar-policy"
import PiePolicy from "../components/render-policy/pie-policy"
import PhHistogramDatasource from "../components/model/datasource"
import PhHistogramSchema from "../components/model/schema"

export default {
    props: {
        allData: {
            type: Object,
            default:() => ({
                projectName: "项目名称",
                projectId: "1",
                dashboard: null,
                slides: []
            })
        }
    },
    data: () => {
        return {
            logo1: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E7%9C%8B%E6%9D%BF.svg",
            logo2: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E7%9C%8B%E6%9D%BF%E5%8F%8D%E8%89%B2.svg",
            del_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/delete_r.svg",
            datasetcheckedIds: [],
            edit: false,
            add_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E5%8A%A0%E5%8F%B7.svg",
            clear_data_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/delete_b.svg",
            delete_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/delete_r.svg",
            label_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/tag.svg",
            dialogDeleteSlideVisible: false, //删除slide
            delSlideIndex: 0,
            add_chart: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E6%B7%BB%E5%8A%A0%E5%86%85%E5%AE%B9.svg",
            dialogNewChartVisible: false,
            dialogNewChartNameVisible: false,
            slideArr: [],
            activeModel: null
        }
    },
    components: {
        ElDialog,
        ElButton,
        slideComponent
    },
    mounted () {

    },
    methods: {
        getCookie(name) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr = document.cookie.match(reg))
                return (arr[2]);
            else
                return null;
        },
        createSlides() {
            const tmp = []
            for (let index = 0; index < this.allData.slides.length; ++index) {
                const item = new PhSlideModel(index, this.allData.slides[index])
                item.policies = this.createAllPolicyByModel(item)
                tmp.push(item)
            }
            this.slideArr = tmp.sort((l, r) => l.idx - r.idx)
            this.activeModel = this.slideArr[0]
        },
        changeHistogram(data) {
            // TODO:
            // this.$emit('event', data)
        },
        on_clickNewChartNameConfirm(data) {
            // TODO: 添加一个新图表
            // const event = new Event("event")
            // event.args = {
            //     callback: "clickNewChartName",
            //     element: this,
            //     param: {
            //         name: "clickNewChartName",
            //         projectName: this.allData.projectName,
            //         projectId: this.allData.projectId,
            //         dashboardId: this.allData.projectId,
            //         slideId: this.allData.projectId,
            //         contentId: this.allData.projectId
            //     }
            // }
            // this.$emit('event', event)
            // this.dialogNewChartNameVisible = false
        },
        on_clickNewChartConfirm() {
            this.dialogNewChartVisible = false
            this.dialogNewChartNameVisible = true
        },
        async addSlide() {
            const data = {
                content: "{}",
                pdId: this.allData.projectId + "_" + this.allData.dashboard.dashboardId,
                title: "new title",
                idx: String(Math.max(...this.slideArr.map(_ => parseInt(_.idx))) + 1),
                slideId: String(Math.max(...this.slideArr.map(_ => parseInt(_.idx))) + 1)
            }

            const item = new PhSlideModel(data.pdId + "_" + data.slideId, data)
            item.policies = this.createAllPolicyByModel(item)
            this.slideArr.push(item)
            await item.save(this)
        },
        createAllPolicyByModel(model) {
            let result = []
            // TODO: maybe has some bug
            for (const item in model.content) {
                result.push(this.createPolicyWithinContent(model.content[item]))
            }
            return result
        },
        createPolicyWithinContent(content) {
            // TODO: 这个是一个工厂类，在写的时候，可以运用外部单例，因为这个函数会被多次用到
            // 不会写就多写cv次这个函数吧
            if (content.policyName === "bar") {
                return new BarPolicy(content.index,
                    new PhHistogramDatasource(content.index,
                        this.projectId,
                        content.datasetName),
                    new PhHistogramSchema(content.index,
                        this.projectId,
                        content.datasetName),
                    { xProperty: content.x, yProperty: content.y })
            }
            else if (content.policyName === "pie") {
                return new PiePolicy(content.index,
                    new PhHistogramDatasource(content.index,
                        this.projectId,
                        content.datasetName),
                    new PhHistogramSchema(content.index,
                        this.projectId,
                        content.datasetName),
                    { xProperty: content.x, yProperty: content.y })
            }
        },
        clickSlideFooterTab(data) {
            this.edit = false
            this.activeModel = this.slideArr[data]
        },
        async on_clickDeleteSlideConfirm() {
            const tmp = []
            for (let idx = 0; idx< this.slideArr.length; ++idx) {
                if (idx !== this.delSlideIndex) {
                    tmp.push(this.slideArr[idx])
                } else {
                    await this.slideArr[idx].delete(this)
                }
            }
            this.slideArr = tmp
            this.activeModel = this.slideArr[0]
            this.dialogDeleteSlideVisible = false
        },
        clickDeleteSlide(index) {
            this.delSlideIndex = index
            this.dialogDeleteSlideVisible = true
        },
        resetSlideName() {
            this.slideArr.forEach((item, index) => {
                let num = index + 1
                item.name = "slide" + num
            })
        },
        slideItemStyle(item) {
            if (this.activeModel && item === this.activeModel) {
                return "slide_item slide_item_clicked"
            }
            else {
                return "slide_item"
            }
        },
        async saveSlideContent() {
            for (let idx = 0; idx < this.slideArr.length; ++idx) {
                if (this.slideArr[idx]) {
                    this.slideArr[idx].queryContent = this.slideArr[idx].content
                    await this.slideArr[idx].save(this)
                }
            }
            this.edit = false
        }
    },
    watch: {
        allData(n, o) {
            this.createSlides()
        }
    }
}
</script>

<style scoped lang="scss">
    * {
        box-sizing: border-box;
    }
    .page {
        display: flex;
        width: 100%;
        height: calc(100vh - 60px);
        .create-chart-container {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .chart-type {
            height: 60px;
            width: 500px;
            border: 1px solid #bbb;
            display: flex;
            align-items: center;
            padding: 20px;
            img {
                width: 30px;
                margin-right: 14px;
            }
        }
        .add_chart {
            position: absolute;
            bottom: 60px;
            right: 510px;
            z-index: 99;
            cursor: pointer;
        }
        .project_info_left {
            flex: 1;
            border-right: 1px solid #dddddd;
            .page_header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 40px;
                border-bottom: 1px solid #ccc;
                .left {
                    display: flex;
                    align-items: center;
                    img {
                        height: 40px;
                    }
                    .name {
                        padding-left: 5px;
                        font-weight: bold;
                    }
                }
                .right {
                    display: flex;
                    .text {
                        margin-right: 10px;
                        font-weight: bold;
                        height: 40px;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                    }
                    .borderBold {
                        border-bottom: 1px solid #666;
                    }
                }
            }
            .content {
                height: calc(100vh - 88px);
            }
            .page_footer {
                display: flex;
                padding: 0 20px;
                height: 40px;
                border-top: 1px solid #ccc;

                .slide_item_clicked {
                    border: 2px red solid;
                }

                .slide_item {
                    display: flex;
                    align-items: center;
                    margin-right: 20px;
                    .slide_name {
                        cursor: pointer;
                        padding-right: 5px;
                    }
                    .del_icon {
                        width: 20px;
                        cursor: pointer;
                    }
                }

                .add_icon {
                    width: 20px;
                    cursor: pointer;
                }
            }
        }
        .project_info_right {
            width: 500px;
            .view_content {
                width: 100%;
                height: 260px;
                border-bottom: 1px solid #dddddd;

                .view_func {
                    margin-top: 100px;
                    display: flex;
                    justify-content: space-between;
                    padding: 0 30px;
                    .view_list {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        width: 75px;
                    }
                    .tags_imgs_tag {
                        width: 20px;
                    }
                }

                .tags_func {
                    cursor: pointer;
                }

                .project_name_view {
                    display: flex;
                    width: 100%;
                    height: 60px;
                    border-bottom: 1px solid #979797;
                    height: 44px;
                    .space {
                        display: flex;
                        width: 60px;
                        height: 60px;
                        background: #dfe7ff;
                        border-bottom: 2px solid #979797;
                        border-right: 2px solid #979797;
                        height: 44px;
                        width: 44px;
                        min-width: 44px;
                        justify-content: center;
                        align-items: center;
                        img {
                            width: 44px;
                            height: 44px;
                        }
                    }
                    .show-name {
                        line-height: 44px;
                        .project_name_info {
                            margin-left: 20px;
                            font-family: PingFangSC-Medium;
                            font-size: 14px;
                            color: #000000;
                            font-weight: 600;
                            height: 44px;
                            white-space: nowrap;
                            overflow: hidden;
                            width: 350px;
                            text-overflow: ellipsis;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>
