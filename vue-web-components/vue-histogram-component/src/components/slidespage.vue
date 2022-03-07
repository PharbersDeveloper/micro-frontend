
<template>
    <div class="page">
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
                </div>
            </div>
            <div class="content">
                <slideComponent :needTitle="false" :isEditableValue="edit"></slideComponent>
            </div>
            <div class="page_footer">
                <div class="slide_item" 
                    v-for="(slide,index) in slideArr" 
                    @click="clickSlide(slide)"
                    :key="index">
                    <div class="slide_name">{{slide.name}}</div>
                    <img class="del_icon" :src="del_icon" @click="clickDeleteSlide(slide, index)">
                </div>
                <img :src="add_icon"  alt="" class="add_icon" @click="addAlide">
            </div>
        </div>
        <div class="project_info_right">
            <div class="view_content" >
                <div class="project_name_view">
                    <span class="space">
                        <img :src="logo2" alt="">
                    </span>
                    <div class="show-name" v-if="datasetcheckedIds.length == 1">
                        <p class="project_name_info" :title="datasetcheckedNames[0]">
                        {{datasetcheckedNames[0]}}
                        </p>
                    </div>
                    <div class="show-name">
                        <p class="project_name_info" v-if="datasetcheckedIds.length > 1">
                            {{datasetcheckedIds.length}} 条数据集
                        </p>
                    </div>
                </div>
                <div class="view_func">
                    <span  class="view_list">
                        <img class='tags_imgs_tag' :src="label_icon" alt="">
                        <span class='tags_func'>标签</span>
                    </span>
                    <span  class="view_list">
                        <img class='tags_imgs_tag' :src="clear_data_icon" alt="">
                        <span class='tags_func'>清除数据</span>
                    </span>
                    <span  class="view_list">
                        <img class='tags_imgs_tag' :src="delete_icon" alt="">
                        <span class='tags_func'>删除</span>
                    </span>
                </div>
            </div>
        </div>
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
    </div>
</template>
<script>
import ElButton from "element-ui/packages/button"
import ElTabs from "element-ui/packages/tabs"
import ElTabPane from "element-ui/packages/tab-pane"
import ElDialog from 'element-ui/packages/dialog/src/component'
import slideComponent from "./slide"
import "element-ui/lib/theme-chalk/index.css"

export default {
    props: {
        allData: {
            type: Object,
            default:() => ({
                projectName: "项目名称",
                dss:
                [
                    {
                        "projectId": null,
                        "schema": "[]",
                        "version": "max1.0",
                        "name": "cpa_pha_mapping",
                        "label": "",
                        "cat": "input_index",
                        "path": "s3://ph-max-auto/v0.0.1-2020-06-08/Takeda/cpa_pha_mapping/"
                    }
                ]
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
            slideArr: [{
                name: "slide1",
                content: "slideeee1"
            }, {
                name: "slide2",
                content: "slideeee2"
            }, {
                name: "slide3",
                content: "slideeee3"
            }],
            add_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/icons/%E5%8A%A0%E5%8F%B7.svg",
            clear_data_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/delete_b.svg",
            delete_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/delete_r.svg",
            label_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/tag.svg",
            content: "",
            dialogDeleteSlideVisible: false, //删除slide
            delSlideData: null,
            delSlideIndex: 0
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
        addAlide() {
            let num = this.slideArr.length + 1
            this.slideArr.push({
                name: "slide" + num,
                content: "slideeee" + num
            })
        },
        clickSlide(data) {
            this.content = data
        },
        on_clickDeleteSlideConfirm() {
            this.slideArr.splice(this.delSlideIndex, 1)
            this.dialogDeleteSlideVisible = false
            //重置slide名称
            this.resetSlideName()
        },
        clickDeleteSlide(data, index) {
            this.delSlideData = data
            this.delSlideIndex = index
            this.dialogDeleteSlideVisible = true
        },
        resetSlideName() {
            this.slideArr.forEach((item, index) => {
                let num = index + 1
                item.name = "slide" + num
            })
        }
    },
    watch: {

    }
}
</script>

<style scoped lang="scss">
    .page {
        display: flex;
        width: 100%;
        height: calc(100vh - 60px);
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
                            width: 48px;
                            height: 48px;
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
