<template>
    <div>
        <input type="search" id="search_field" placeholder="Search"/>
        <div id="hot-table"></div>
    </div>
</template>
<script>
import { HotTable } from '@handsontable/vue';
import Handsontable from 'handsontable';
import 'handsontable/dist/handsontable.full.css'
import { registerLanguageDictionary, zhCN } from 'handsontable/i18n'

export default {
    components: {
        HotTable
    },
    props: {
        data: {
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
                data: this.data,
                language: zhCN.languageCode,
                height: "auto",
                //定义表结构
                colHeaders:["问题序号","问题类型","定性法规","问题金额"],
                rowHeaders: true,
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
                licenseKey: 'non-commercial-and-evaluation',
                dropdownMenu: true,//头部是否显示menu
                copyable: true,
                mergeCells: true,
                manualColumnMove: true,
                manualRowMove: true,
                manualColumnResize: true,
                manualRowResize: true,
                columnSorting: true,
                // contextMenu: true,
                contextMenu: {
                    callback(key, selection, clickEvent) {
                        console.log(key, selection, clickEvent);
                    },
                    disableSelection: true,
                    isCommand: false
                },
                search: {
                    queryMethod: this.onlyExactMatch,
                    searchResultClass: "search-result"
                },
                afterChange(changes, source) {
                    // console.log(this.getData(),changes,source)
                }
            }
        }
    },
    methods: {
        onlyExactMatch(queryStr, value) {
            return queryStr.toString() === value.toString()
        }
    },
    mounted() {
        const container = document.querySelector('#hot-table')
        const searchField = document.querySelector('#search_field')
        registerLanguageDictionary(zhCN)
        const hot = new Handsontable(container, this.hotSettings)
        Handsontable.dom.addEvent(searchField, 'keyup', function(event) {
            const search = hot.getPlugin('search')
            const queryResult = search.query(this.value)
            hot.render()
        })
    }
}
</script>
<style lang="scss">
    .htMenu {
        font-family: SFProText-Regular;
        font-size: 14px;
        color: #25232D;
        letter-spacing: 0.25px;
        text-align: left;
        line-height: 20px;
        font-weight: 400;
    }

    #search_field {
        width: 200px;
        height: 32px;
        margin-bottom: 20px;
    }

    .search-result {
        color: #ff0000;
        font-weight: 800;
    }
</style>