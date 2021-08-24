<template>
    <div id="hot-table"></div>
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
                copyable: true
            }
        }
    },
    mounted() {
        const container = document.querySelector('#hot-table')
        registerLanguageDictionary(zhCN)
        const hot = new Handsontable(container, this.hotSettings)
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

    .handsontable .htCore {
        th {
            background-color: #FFFFFF;
            padding: 0 2px;
            height: 24px;
            width: 112px;
        }

        td {
            height: 24px;
            width: 112px;
            padding: 0 2px;
            text-align: center;
            vertical-align: middle;
        }
    }
</style>