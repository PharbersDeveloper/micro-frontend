<template>
    <div class="select_file">
        <div class="select_file_container">
            <div class="project_name_header">
                <p>{{allData.projectName}}</p>
            </div>
            <div class="new_upload_file project_name_header">
                <p>新上传文件</p>
            </div>
            <div class="select_file">
                <div class="select_file_area">
                   <div>选择文件</div> 
                   <input type="file">                 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        allData: {
            type: Object,
            default: () => ({
                projectName: "项目名称"
            })
        }
    }
}
</script>

<style lang="scss" scoped>
* {
    padding: 0;
    margin: 0;
}
.select_file {
    position: relative;
    width: 100%;
    height: 100%;
    .select_file_container {
        position: absolute;
        width: 1200px;
        height: 768px;
        border: 2px solid #979797;
        margin: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        .project_name_header {
            width: 100%;
            height: 50px;
            border-bottom: 2px solid #979797;
            p {
                margin-left: 23px;
                line-height: 50px;
                font-family: PingFangSC-Medium;
                font-size: 16px;
                color: #000000;
                font-weight: 600;
            }
        }
        .new_upload_file {
            p {
                font-size: 14px;
            }
        }
        .select_file {
            width: 100%;
            height: 668px;
            background: #f7f7f7;
            padding-top: 41px;
            border-bottom: 2px solid #979797;
            .select_file_area {
                position: relative;
                width: 1100px;
                height: 240px;
                background: #d8d8d8;
                margin: 0 auto;
                border: 1px solid #979797;
                div {
                    position: absolute;
                    margin: auto;
                    top: 0;
                    left: 0;
                    bottom: 0;
                    right: 0;
                    display: inline-block;
                    width: 82px;
                    height: 32px;
                    background: #7163C5;
                    font-family: PingFangSC-Medium;
                    font-size: 14px;
                    color: #FFFFFF;
                    font-weight: 600;
                    border-radius: 4px;
                    line-height: 32px;
                    text-align: center;
                }
                input {
                    position: absolute;
                    top: 106px;
                    left: 515px;
                    opacity: 0;

                }
            }
        }
    }
}
</style>