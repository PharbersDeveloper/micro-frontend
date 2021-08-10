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
    data() {
        return {
            hotSettings: {
                data: [
                    ["2016", 10, 11, 12],
                    ["2017", 20, 11, 14],
                    ["2018", 30, 15, 12]
                ],
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
                dropdownMenu: true,//头部是否显示menu
                copyable: true, // 允许键盘复制
                mergeCells: true, //表示允许单元格合并
                manualColumnMove: true, //列可拖动
                manualRowMove: true, //行可拖动
                manualColumnResize: true, //列可拖拽 调大小
                manualRowResize: true, //行可拖拽 调大小
                // autoColumnSize: false, //当值为true且列宽未设置时，自适应列大小
                columnSorting: true, // 排序
                contextMenu: true, //右键菜单
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
</style>