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
                {
                    project: `<span class='heading-xsmall'>AZ</span>`,
                    upload: `<div class='row-container'><span class='body-primary'>Operator</span><div class='button-container'><div class='button-background-grey' onclick='this.clickButton'><button class='icon_QC'></button></div><div class='button-background-purple'><button class='icon_upload'></button></div></div></div>`,
                    import: `<div class='row-container'><span class='body-primary'>Operator</span><div class='button-container'><div class='button-background-grey'><button class='icon_QC'></button></div><div class='button-background-purple'><button class='icon_export-table'></button></div></div></div>`,
                    manual_cleaning: `<div class='row-container'><span class='body-primary'>Operator</span><div class='button-container'><div class='button-background-grey'><button class='icon_QC'></button></div><div class='button-background-purple'><button class='icon_update-time'></button></div></div></div>`,
                    data_calculation: `<div class='row-container'><span class='body-primary'>Operator</span><div class='button-container'><div class='button-background-grey'><button class='icon_QC'></button></div><div class='button-background-purple'><button class='icon_database'></button></div></div></div>`,
                    data_report:  `<div class='row-container'><span class='body-primary'>Operator</span><div class='button-container'><div class='button-background-grey'><button class='icon_QC'></button></div><div class='button-background-purple'><button class='icon_project-stroke'></button></div></div></div>`
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
                    {data: 'project', renderer: this.projectNameRenderer},
                    {data: 'upload', renderer: 'html'},
                    {data: 'import', renderer: 'html'},
                    {data: 'manual_cleaning', renderer: 'html'},
                    {data: 'data_calculation', renderer: 'html'},
                    {data: 'data_report', renderer: 'html'}
                ],
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
    },
    methods: {
        projectNameRenderer(instance, td, row, col, prop, value, cellProperties) {
            console.log('prop',prop)
            td.innerHTML = value
            td.className = "project-name-container"
        },
        clickButton() {
            console.log('111')
        }
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
        
        .project-name-container {
            width: 95px;
            padding: 0;
        }

        td {
            height: 44px;
            padding: 0 2px;
            text-align: center;
            vertical-align: middle;
            border-left: 0;
            border-right: 0;

            .project-name {
                width: 95px;
                height: 16px;
            }

            .row-container {
                display: flex;
                justify-content: space-between;
                align-items: center;
                height: 36px;
                width: 209px;
                border: 1px solid #E1DFE9;
                margin: auto 0;
                padding: 0 10px;

                .button-container {
                    display: flex;

                    .button-background-grey {
                        width: 20px;
                        height: 20px;
                        background: rgba(37, 35, 45, 0.04);
                        border-radius: 1.25px;
                        margin-right: 4px;
                        cursor: pointer;
                    }

                    .button-background-purple {
                        width: 20px;
                        height: 20px;
                        background: #7163C5;
                        border-radius: 1.25px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>