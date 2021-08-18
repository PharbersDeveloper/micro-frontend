<template>
    <div class="max-table-container">
        <div class="max-table-header">
            <div class="max-table-row">
                <div class="max-table-cell">项目名</div>
                <div class="max-table-cell">上传</div>
                <div class="max-table-cell">导入</div>
                <div class="max-table-cell">人工清洗</div>
                <div class="max-table-cell">数据计算</div>
                <div class="max-table-cell">数据报告</div>
            </div>
        </div>
        <div class="max-table-body">
            <div class="max-table-row">
                <div class="max-table-cell" id="project-name"><div>AZ</div></div>
                <div class="max-table-cell"><ph-table-cell type="upload"></ph-table-cell></div>
                <div class="max-table-cell"><ph-table-cell type="import"></ph-table-cell></div>
                <div class="max-table-cell"><ph-table-cell type="clean"></ph-table-cell></div>
                <div class="max-table-cell"><ph-table-cell type="calculation"></ph-table-cell></div>
                <div class="max-table-cell"><ph-table-cell type="report"></ph-table-cell></div>
            </div>
        </div>
    </div>
</template>

<script>
import phTableCell from './ph-table-cell.vue'
export default {
    components: {
        phTableCell
    }
}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    @mixin heading-xsmall {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #706F79;
        letter-spacing: 0.25px;
        line-height: 16px;
        font-weight: 400;
    }

    .max-table-container {
        display: table;
        border-collapse: separate;
        border-spacing: 4px 0;

        .max-table-header {
            display: table-header-group;
            height: 32px;

            .max-table-row {
                display: table-row;

                .max-table-cell {
                    display: table-cell;
                    vertical-align: middle;
                    text-align: center;
                    border-bottom: 1px solid rgba(37,35,45,0.08);
                    @include heading-xsmall;
                }
            }
        }

        .max-table-body {
            display: table-row-group;

            .max-table-row {
                display: table-row;
                height: 42px; 

                #project-name {
                    width: 95px;
                    @include heading-xsmall;
                }

                .max-table-cell {
                    display: table-cell;
                    vertical-align: middle;
                    text-align: center;
                    width: 209px;

                    
                }
            }
        }
    }
</style>