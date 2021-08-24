<template>
    <div class="max-table-container">
        <div class="max-table-header">
            <div class="max-table-row">
                <div class="max-table-cell" id="project-name-text">项目名</div>
                <div class="max-table-cell">上传</div>
                <div class="max-table-cell">导入</div>
                <div class="max-table-cell">人工清洗</div>
                <div class="max-table-cell">数据计算</div>
                <div class="max-table-cell">数据报告</div>
            </div>
        </div>
        <div class="max-table-body">
            <div class="max-table-row" v-for="(row,index) in rows" :key="index">
                <div class="max-table-cell" id="project-name"><div>{{row.project}}</div></div>
                <div class="max-table-cell"><ph-table-cell type="upload" :value="row.upload"></ph-table-cell></div>
                <div class="max-table-cell"><ph-table-cell type="import" :value="row.import"></ph-table-cell></div>
                <div class="max-table-cell"><ph-table-cell type="clean" :value="row.clean"></ph-table-cell></div>
                <div class="max-table-cell"><ph-table-cell type="calculation" :value="row.calculation"></ph-table-cell></div>
                <div class="max-table-cell"><ph-table-cell type="report" :value="row.report"></ph-table-cell></div>
            </div>
        </div>
    </div>
</template>

<script>
import phTableCell from './ph-table-cell.vue'
export default {
    components: {
        phTableCell
    },
    props: {
        rows: {
            type: Array,
            default() {
                return [
                    {
                        project: "AZ",
                        upload: "Operator1",
                        import: "Operator2",
                        clean: "Operator3",
                        calculation: "Operator4",
                        report: "Operator5"
                    },
                    {
                        project: "AZ",
                        upload: "Operator1",
                        import: "Operator2",
                        clean: "Operator3",
                        calculation: "Operator4",
                        report: "Operator5"
                    },
                    {
                        project: "AZ",
                        upload: "Operator1",
                        import: "Operator2",
                        clean: "Operator3",
                        calculation: "Operator4",
                        report: "Operator5"
                    },
                    {
                        project: "AZ",
                        upload: "Operator1",
                        import: "Operator2",
                        clean: "Operator3",
                        calculation: "Operator4",
                        report: "Operator5"
                    }
                ]
            }
        }
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

        .max-table-header {
            display: table-header-group;
            height: 32px;

            .max-table-row {
                display: table-row;

                #project-name-text {
                    padding-right: 2px;
                }

                .max-table-cell {
                    display: table-cell;
                    vertical-align: middle;
                    text-align: center;
                    border-bottom: 1px solid rgba(37,35,45,0.08);
                    @include heading-xsmall;

                    &:last-of-type {
                        width: 211px;
                        padding-right: 0;
                    }
                }
            }
        }

        .max-table-body {
            display: table-row-group;

            .max-table-row {
                display: table-row;
                height: 44px;

                #project-name {
                    width: 97px;
                    padding-right: 2px;
                    @include heading-xsmall;
                }

                .max-table-cell {
                    display: table-cell;
                    vertical-align: middle;
                    text-align: center;
                    padding: 0 2px;
                    width: 213px;
                    border-bottom: 1px solid rgba(37,35,45,0.08);

                    &:last-of-type {
                        width: 211px;
                        padding-right: 0;
                    }
                }
            }
        }
    }
</style>