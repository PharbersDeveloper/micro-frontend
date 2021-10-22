<template>
    <div class="data-list-home">
        <div class="data-home-container">
            <div class="header-area">
                <p>{{allData.projectName}}</p>
            </div>
           <div class="content">  
            <div class="left-area">
                <div class="projectInfo">
                    <div class="color"></div>
                    <div class="project_Information">
                        <p class="project_name">{{allData.projectName}}</p>
                        <p class="project_info">{{allData.projectInfo}}</p>
                    </div>
                </div>
                <div class="item">
                    <div class="flow">
                        <p class="flow_word">Flow</p>
                        <div class="flow_item"> 
                           <div class="flow_item_cell">
                                <a href="#">
                                    <div>
                                        <img :src="dataset_icon" alt="">
                                    </div>
                                    <div>
                                        <p class="number">0</p>
                                        <p class="dataset">DATASET</p>
                                    </div>
                                </a>
                           </div>
                            <div class="flow_item_cell">
                                <a href="#">
                                    <div>
                                        <img :src="recipes_icon" alt="">
                                    </div>
                                    <div>
                                        <p class="number">0</p>
                                        <p class="recipes">FLOW</p>
                                    </div>
                                </a>
                           </div>
                            <div class="flow_item_cell">
                                <a href="#">
                                    <div>
                                        <img :src="models_icon" alt="">
                                    </div>
                                    <div>
                                        <p class="number">0</p>
                                        <p class="models">MODELS</p>
                                    </div>
                                </a>
                           </div>
                        </div>
                    </div>
                    <div class="flow flow_two">
                        <p class="flow_word">Lab</p>
                        <div class="flow_item"> 
                           <div class="flow_item_cell" >
                                <a href="#">
                                    <div>
                                        <img :src="notebook_icon" alt="">
                                    </div>
                                    <div>
                                        <p class="number">0</p>
                                        <p class="dataset">NOTEBOOKS</p>
                                    </div>
                                </a>
                           </div>
                            <div class="flow_item_cell">
                                <a href="#">
                                    <div>
                                        <img :src="analyses_icon" alt="">
                                    </div>
                                    <div>
                                        <p class="number">0</p>
                                        <p class="recipes">ANALYSES</p>
                                    </div>
                                </a>
                           </div>
                        </div>
                    </div>
                    <div class="flow flow_three">
                        <p class="flow_word">Dashboards</p>
                        <div class="flow_item"> 
                           <div class="flow_item_cell">
                                <a href="#">
                                    <div>
                                        <img :src="dashboard_icon" alt="">
                                    </div>
                                    <div>
                                        <p class="number">1</p>
                                        <p class="dashboard">DASHBOARD</p>
                                    </div>
                                </a>
                           </div>
                        </div>
                    </div>
                    <div class="flow flow_four">
                        <p class="flow_word">WiKi</p>
                        <div class="flow_item"> 
                           <div class="flow_item_cell">
                                <a href="#">
                                    <div>
                                        <img :src="article_icon" alt="">
                                    </div>
                                    <div>
                                        <p class="number">0</p>
                                        <p class="article">ARTICLES</p>
                                    </div>
                                </a>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right_area">
                <div class="hearder">
                    <p>TIMELINE</p>
                </div>
                <div class="center">
                    <p>TODAY</p>
                </div>
                <div class="info">
                    <div class="info_cell">
                        <div class="icon">
                            <img :src="num_icon" alt="">
                        </div>
                        <div class="cell_info">
                            <p class="top_info">
                                <span class="you">You</span>
                                 created dashboard
                                 <span class="time">17:04</span>
                            </p>
                            <span class="file">
                                <img :src="file_icon" alt="">
                                <p> nnn's default dashboard</p>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="info">
                    <div class="info_cell">
                        <div class="icon">
                            <img :src="num_icon" alt="">
                        </div>
                        <div class="cell_info">
                            <p class="top_info">
                                <span class="you">You</span>
                                 created project
                                 <span class="time">17:04</span>
                            </p>
                            <span class="file">
                                <img :src="script_icon" alt="">
                                <p> nnn</p>
                            </span>
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
            script_icon: "https://s3.cn-northwest-1.amazonaws.com.cn/general.pharbers.com/script.png"
        }
    },
    props: {
        allData: {
            type: Object,
            default: () => ({
                projectName: "Project Name",
                projectInfo: "Description the project was created by Ken on Oct 11th 2021"
            })
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}
.data-home-container {
    
    height: 100vh;
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
        }
    }
    .left-area {
        .projectInfo {
            display: flex;
            width: 1400px;
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
                    font-size: 16px;
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
    .item {
        display: flex;
        width: 1400px;
        height: 220px;
        background: #ffffff;
        border: 1px solid #ddd;
        margin-left: 20px;
        margin-top: 25px;
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
        flex: 1;
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
            border-bottom: 3px solid #000;
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
                            top: 0
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