<template>
    <div>
        <!-- <input type="search" id="search_field" placeholder="Search"/> -->
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
                [1,2,3,4,5,6,7,8],
                [1,2,3,4,5,6,7,8],
                [1,2,3,4,5,6,7,8],
                [1,2,3,4,5,6,7,8],
                [1,2,3,4,5,6,7,8]
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
                licenseKey: 'non-commercial-and-evaluation',
                // dropdownMenu: true,//头部是否显示menu
                copyable: true,
                mergeCells: true,
                manualColumnMove: true,
                manualRowMove: true,
                manualColumnResize: true,
                manualRowResize: true,
                // columnSorting: true,
                // contextMenu: true,
                // contextMenu: {
                //     callback(key, selection, clickEvent) {
                //         console.log(key, selection, clickEvent);
                //     },
                //     disableSelection: true,
                //     isCommand: false
                // },
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
        // const searchField = document.querySelector('#search_field')
        registerLanguageDictionary(zhCN)
        const hot = new Handsontable(container, this.hotSettings)
        // Handsontable.dom.addEvent(searchField, 'keyup', function(event) {
        //     const search = hot.getPlugin('search')
        //     const queryResult = search.query(this.value)
        //     hot.render()
        // })
    }
}
</script>
<style lang="scss">
    * {
        box-sizing: border-box;
    }

    .heading-xsmall {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #706F79;
        letter-spacing: 0.25px;
        text-align: center;
        line-height: 16px;
        font-weight: 400;
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

    #search_field {
        width: 200px;
        height: 32px;
        margin-bottom: 20px;
    }

    .search-result {
        color: #ff0000;
        font-weight: 800;
    }

    .handsontable table[class='htCore'] tr td {
        border-bottom: 1px solid rgba(37,35,45,0.08);
        border-top: 0;
    }
    
    .handsontable table[class='htCore'] tr th {
        height: 32px;
        border-bottom: 1px solid rgba(37,35,45,0.08);
        border-top: 0;
        border-bottom-width: 1px !important;

        .relative {
            height: 100%;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .handsontable .htCore {
        th {
            border: 0;
            background-color: #FFFFFF;
            padding: 0 2px;
            height: 24px;
            width: 112px;

            .colHeader {
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #706F79;
                letter-spacing: 0.25px;
                text-align: left;
                line-height: 16px;
                font-weight: 400;
            }
        }

        td {
            height: 24px;
            width: 112px;
            padding: 0 2px;
            text-align: center;
            vertical-align: middle;
            border-left: 0;
            border-right: 0;

            .row-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 36px;
                width: 209px;
                border: 1px solid #E1DFE9;
                margin: auto 0;
                padding: 0 10px;
            }
        }
    }
</style>