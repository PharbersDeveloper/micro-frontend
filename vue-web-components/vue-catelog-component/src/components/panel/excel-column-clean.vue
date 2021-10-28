<template>
    <div class="upload-dataset">
        <div class="upload_dataset_container">
            <div class="project_name_header">
                <p class="project_name">{{allData.projectName}}</p>
            </div>
             <div class="project_name_header">
                <p class="project_name new_upload">New Uploaded File Dataset</p>
            </div>
            <div class="excel_area">
                <div class="area">
                    <p class="file_name">文件名称</p>
                    <div class="excel">
                        <bp-excel></bp-excel>
                    </div>
                </div>
                <div class="area column_clean">
                    <p class="file_name">列清洗</p>
                    <div class="excel">
                        <bp-excel></bp-excel>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
import bpExcel from '../../../../vue-excel-component/src/components/bp-excel'
export default {
    components: {
        bpExcel
    },
    props: {
        allData: {
            type: Object,
            default: () => ({
                projectName: "项目名称",
                dataName: [
                    {id:1,name:'Data_0001'},
                    {id:2,name:'Data_0002'}
                ],
                projectInfo: '2020.1 - 2021.12 Pfizer raw data'
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
.bg {
    background: #dfe7ff;
    }
.upload_dataset_container {
    width: 100vw;
    height: 100vh;
    border: 2px solid #979797;
    .project_name_header {
        height: 50px;
        width: 100%;
        border-bottom: 2px solid #979797;
        .project_name {
            margin-left: 30px;
            line-height: 50px;
            font-family: PingFangSC-Medium;
            font-size: 16px;
            color: #000000;
            font-weight: 600;
        }
        .new_upload {
            font-size: 14px;
        }
    }
    .excel_area {
        width: 100%;
        height: calc(100vh - 110px);
        background: #f7f7f7;
        padding-top: 20px;
        .area {
            margin: 0 auto;
            width: 1400px;
            height: 260px;
            .file_name {
                font-family: PingFangSC-Medium;
                font-size: 12px;
                color: #000000;
                font-weight: 600;
            }
            .excel {
                padding: 50px;
                margin-top: 5px;
                width: 1400px;
                height: 240px;
                border: 1px solid #979797;
            
            }
        }
        .column_clean {
            margin-top: 5px;
        }
        
    }
}
</style>