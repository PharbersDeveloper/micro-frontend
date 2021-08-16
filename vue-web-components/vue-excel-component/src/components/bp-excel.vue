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
                {
                    project: "<span>AZ</span>",
                    upload: "<div><div><span>操作人</span><span>2021/08/29 18:30:43</span></div><div><button>1</button><button>2</button></div></div>",
                    import: "<div><div><span>操作人</span><span>2021/08/29 18:30:43</span></div><div><button>1</button><button>2</button></div></div>",
                    manual_cleaning: "<div><div><span>操作人</span><span>2021/08/29 18:30:43</span></div><div><button>1</button><button>2</button></div></div>",
                    data_calculation: "<div><div><span>操作人</span><span>2021/08/29 18:30:43</span></div><div><button>1</button><button>2</button></div></div>",
                    data_report:  "<div><div><span>操作人</span><span>2021/08/29 18:30:43</span></div><div><button>1</button><button>2</button></div></div>"
                },
                {
                    project: "<span>AZ</span>",
                    upload: "<div><div><span>操作人</span><span>2021/08/29 18:30:43</span></div><div><button>1</button><button>2</button></div></div>",
                    import: "<div><div><span>操作人</span><span>2021/08/29 18:30:43</span></div><div><button>1</button><button>2</button></div></div>",
                    manual_cleaning: "<div><div><span>操作人</span><span>2021/08/29 18:30:43</span></div><div><button>1</button><button>2</button></div></div>",
                    data_calculation: "<div><div><span>操作人</span><span>2021/08/29 18:30:43</span></div><div><button>1</button><button>2</button></div></div>",
                    data_report:  "<div><div><span>操作人</span><span>2021/08/29 18:30:43</span></div><div><button>1</button><button>2</button></div></div>"
                }
            ]
        }
    },
    data() {
        return {
            hotSettings: {
                data: this.data,
                language: zhCN.languageCode,
                height: "auto",
                readOnly: true,
                //定义表结构
                colHeaders:["项目名","上传","导入","人工清洗","数据计算","数据报告"],
                // rowHeaders: true,
                //定义属性
                columns: [
                    {data: 'project', renderer: 'html'},
                    {data: 'upload', renderer: 'html'},
                    {data: 'import', renderer: 'html'},
                    {data: 'manual_cleaning', renderer: 'html'},
                    {data: 'data_calculation', renderer: 'html'},
                    {data: 'data_report', renderer: 'html'}
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
                    searchResultClass: "search-result"
                },
                afterChange(changes, source) {
                    // console.log(this.getData(),changes,source)
                }
            }
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