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
        },
        colHeaders: Array
    },
    data() {
        return {
            hotSettings: {
                data: this.data,
                language: zhCN.languageCode,
                height: "100%",
                width: "100%",
                readOnly: true,
                licenseKey: 'non-commercial-and-evaluation',
                copyable: true
            }
        }
    },
    created() {
        if (this.colHeaders) {
            this.hotSettings['colHeaders'] = this.colHeaders
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

    @mixin heading-small-inverse {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #FFFFFF;
        letter-spacing: 0.25px;
        text-align: left;
        line-height: 20px;
        font-weight: 400;
    }

    .handsontable .wtHider {
        width: 100% !important;

        .wtSpreader {
            width: 100%;
        }
    }
    .handsontable .htCore {
        width: 100% !important;
        th {
            background-color: #FFFFFF;
            padding: 0 2px;
            height: 24px;
            min-width: 112px;
            vertical-align: bottom;
            text-align: left;
            @include heading-small-inverse;
            background-color: #BCBAC4;

            .relative {
                padding: 0;
            }
        }

        td {
            height: 24px;
            min-width: 112px;
            width: 100%;
            padding: 0 2px;
            vertical-align: bottom;
        }
    }
</style>