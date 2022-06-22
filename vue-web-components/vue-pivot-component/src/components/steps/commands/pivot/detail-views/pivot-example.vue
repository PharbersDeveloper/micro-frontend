<template>
    <div class="pivot-example">
        <div class="pivot-example-content" >
            <div class="pivot-example-sample">
                <el-table
                        height="260"
                        :cell-style="tableNoBorder"
                        :header-cell-style="tableNoBorder"
                        @cell-click="cellClicked"
                        :data="defs.sampleData">
                    <el-table-column
                            prop="col"
                            label="样例"
                            width="180">
                    </el-table-column>
                </el-table>
            </div>
            <div class="pivot-example-setting">

            </div>
            <div class="pivot-example-display">

            </div>
        </div>
    </div>
</template>
<script>
import ElTable from 'element-ui/packages/table/index'
import ElTableColumn from 'element-ui/packages/table-column/index'
import { PhPivotDefs } from '../defs'

export default {
    data() {
        return {

        }
    },
    props: {
        defs: {
            type: Object,
            default: () => {
                return PhPivotDefs
            }
        }
    },
    components: {
        ElTable,
        ElTableColumn,

    },
    mounted() {

    },
    methods: {
        tableNoBorder({row, column, rowIndex, columnIndex}) {
            console.log(row)
            console.log(column)
            console.log(rowIndex)
            console.log(columnIndex)
            return 'border: none';
        },
        cellClicked(row) {
            console.log(row)
        }
    },
    computed: {

    }
}
</script>
<style lang="scss" scoped>
    * {
        letter-spacing: .4px;
        line-height: 1.6;
        box-sizing: border-box;
    }
    .pivot-example {
        /*margin-top: 4px;*/
    }

    .pivot-example-content {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        .pivot-example-sample {
            flex: 0 0 50%;
            background-color: #00b8d9;

            td {
                border: none !important;
            }
        }

        .pivot-example-setting {
            flex: 0 0 50%;
            background-color: #0D3349;
        }

        .pivot-example-display {
            flex: 0 0 100%;
            background-color: #2c3e50;
        }
    }

    .no-border-class {
        border-bottom: none !important;
    }


</style>
