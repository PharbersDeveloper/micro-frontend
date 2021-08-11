<template>
    <hot-table :settings="hotSettings"></hot-table>
</template>
<script>
import { HotTable } from '@handsontable/vue';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css'

export default {
    components: {
        HotTable
    },
    props: {
        dataSource: {
            type: Array,
            default: () => [
                ["2016", 10, 11, 12],
                ["2017", 20, 11, 14],
                ["2018", 30, 15, 12]
            ]
        }
    },
    data() {
        return {
            hotSettings: {
                data: this.dataSource,
                //定义表结构
                colHeaders:[
                    "问题序号","问题类型","定性法规","问题金额"
                ],
                //定义属性
                columns: [
                    {},
                    {},
                    {},
                    {
                        colHeaders:'问题金额',
                        type:'numeric' //定义值的类型为数字类型
                    }
                ],
                rowHeaders: true,
                dropdownMenu: true,//头部是否显示menu
                copyable: true,
                mergeCells: true,
                manualColumnMove: true,
                manualRowMove: true,
                manualColumnResize: true,
                manualRowResize: true,
                columnSorting: true,
                contextMenu: true,
                afterChange(changes, source) {
                    console.log(this.getData(),changes,source)
                }
            }
        }
    }
}
</script>
<style lang="scss">
    #hot-display-license-info {
        display: none !important;
    }

    .htMenu {
        font-family: SFProText-Regular;
        font-size: 14px;
        color: #25232D;
        letter-spacing: 0.25px;
        text-align: left;
        line-height: 20px;
        font-weight: 400;
    }
</style>