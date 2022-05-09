<template>
    <div v-if="stage === 1" >
        <div v-if="activePane === 'local'">
            <bp-select-file :file-list="fileList"
                            @fileSelected="uploadFileSelected"
                            @fileDeleted="uploadFileDeleted"
                            @confirm="showDestinationDlg = true" />
        </div>
        <div v-else-if="activePane === 's3'">
            <bp-s3-file
                    :format-value="formatValue"
                    @formatValueChange="formatValueChange"
                    @pathChange="s3PathChange"
                    @confirm="showDestinationDlg = true" />

        </div>
        <next-dialog v-if="showDestinationDlg"
                     @closeDialog="showDestinationDlg = false"
                     :file-list="fileList"
                     :datasetArr="allData.datasetArr"
                     @destinationConfirm="destinationConfirm" />
    </div>
    <div v-else-if="stage === 2">
        <bp-excel-handler
                :active="activePane"
                :file-path="filePath"
                :file-list="s3path"
        />
    </div>

</template>

<script>
import 'element-ui/packages/theme-chalk/lib/index.css'
import BpSelectFile from './select-file'
import BpS3File from './s3-file'
import BpExcelHandler from './bp-excel-handler'
import nextDialog from './next-dialog'

export default {
    data() {
        return {
            // s3
            s3path: "",
            formatValue: "csv",
            // local
            fileList: [],
            // destination
            showDestinationDlg: false,
            dataID: "",
            dataset: "",
            destinationType: "String",
            // stages
            stage: 1,
            // activePane: "s3"
            activePane: "local"
        }
    },
    props: {
        allData: {
            type: Object,
            default: () => ({
                projectName: "demo",
                projectId: "ggjpDje0HUC2JW",
                uploadType: 'localUpload',
                datasetArr: []
            })
        }
    },
    components: {
        BpS3File,
        BpSelectFile,
        BpExcelHandler,
        nextDialog
    },
    mounted() {

    },
    created() {

    },
    methods: {
        test() {
            // eslint-disable-next-line no-debugger
            debugger
        },
        uploadFileSelected(f) {
            this.fileList.push(f)
        },
        uploadFileDeleted(i) {
            this.fileList.splice(i, 1)
        },
        s3PathChange(d) {
            this.s3path = d
        },
        formatValueChange(d) {
            this.formatValue = d
        },
        validation() {
            // TODO: 检验各种参数的正确性
            return true
        },
        destinationConfirm(data) {
            this.dataID = data.dataID
            this.dataset = data.dataset
            this.destinationType = data.type

            if (this.validation()) {
                this.stage = 2
            }
        },
    }
}
</script>

<style lang="scss" scoped>

</style>
