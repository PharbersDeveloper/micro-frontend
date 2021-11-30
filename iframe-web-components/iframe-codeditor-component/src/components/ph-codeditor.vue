<template>
<div class="ace-container" :style="style">
    <!-- import CSS -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
    <!-- 官方文档中使用 id，这里禁止使用，在后期打包后容易出现问题，使用 ref 或者 DOM 就行 -->
    <div class="ace-editor" ref="ace" ></div>
</div>

</template>

<script>
// 引入全局实例
import ace from 'ace-builds'
// 主题风格，引入主题后还需要在 options 中指定主题才会生效
import 'ace-builds/src-min-noconflict/theme-monokai'
import 'ace-builds/src-min-noconflict/theme-dracula'
// 支持代码格式， 需要引入具体的语法高亮库才会有对应的语法高亮效果
import 'ace-builds/src-min-noconflict/mode-javascript'
import 'ace-builds/src-min-noconflict/mode-json'
import 'ace-builds/src-min-noconflict/mode-css'
import 'ace-builds/src-min-noconflict/ext-language_tools'
import jsWorkerUrl from 'file-loader!ace-builds/src-noconflict/worker-javascript'
import jsonWorkerUrl from 'file-loader!ace-builds/src-noconflict/worker-json'
import cssWorkerUrl from 'file-loader!ace-builds/src-noconflict/worker-css'
ace.config.setModuleUrl('ace/mode/javascript_worker', jsWorkerUrl)
ace.config.setModuleUrl('ace/mode/json_worker', jsonWorkerUrl)
ace.config.setModuleUrl('ace/mode/css_worker', cssWorkerUrl)
ace.config.setModuleUrl(
    'ace/snippets/javascript',
    require('file-loader!ace-builds/src-noconflict/snippets/javascript.js')
)
ace.config.setModuleUrl('ace/snippets/css', require('file-loader!ace-builds/src-noconflict/snippets/css.js'))

// import { cloneDeep } from 'utils/tools'

export default {
    name: 'ph-codeditor',
    model: {
        event: 'change'
    },
    components: {

    },
    computed: {
        style: function() {
            let viewHeight = this.viewHeight
            return "height: " + viewHeight
        }
    },
    props: {
        viewHeight: {
            type: String,
            default: "600px"
        },
        // 编辑器内容
        value: {
            type: String,
            default: '12345'
        },
        // 默认语言
        language: {
            type: String,
            default: 'javascript'
        },
        // 主题，对应主题库 JS 需要提前引入
        theme: {
            type: String,
            default: 'monokai'
        },
        // 是否只读
        readonly: {
            type: Boolean,
            default: false
        },
        // 最大行数
        maxLines: {
            type: Number,
            default: 100
        },
        // 是否显示全屏按钮
        withFullscreenBtn: {
            type: Boolean,
            default: false
        },
        withFooterBtns: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            editor: null,
            isVisible: false,
            dialogValue: ''
        }
    },
    mounted() {
        // 初始化
        this.initEditor()
    },
    watch: {
        value(val) {
            if (this.editor.getValue() !== val) {
                this.editor.setValue(val)
                this.editor.clearSelection()
            }
        }
    },
    methods: {
        // 初始化
        initEditor() {
            // 创建实例
            this.editor = ace.edit(this.$refs.ace, {
                mode: `ace/mode/${this.language}`,
                theme: `ace/theme/${this.theme}`,
                fontSize: 12,
                tabSize: 4,
                value: this.value,
                selectionStyle: 'text',
                maxLines: this.maxLines,
                readOnly: this.readonly
            })
            // 设置属性等，具体需要可根据官方参数自行设置
            this.editor.setOptions({
                enableBasicAutocompletion: true,
                enableSnippets: true,
                enableLiveAutocompletion: true,
                wrap: true,
                setShowPrintMargin: false
            })
            // 设置值改变监听
            this.editor.on('change', () => {
                this.$emit('change', this.editor.getValue())
            })
        },
        // 实例方法，高亮某一行
        gotoLine(lineNumber) {
            this.editor.gotoLine(lineNumber)
        },
        // 全屏编辑
        fullscreen() {
            // this.dialogValue = cloneDeep(this.editor.getValue())
            // this.isVisible = true
        },
        closeEditCode() {
            this.editor.setValue(this.dialogValue)
            this.editor.clearSelection()
        },
        // resize编辑器
        resize() {
            this.editor.resize(true)
        },
        destroy() {
            if (this.editor) {
                this.editor.destroy()
                this.editor = null
            }
        }
    },
    beforeDestroy() {
        this.destroy()
    }
}
</script>

<style lang='scss' scoped>
.ace-container {
    position: relative;

    .ace-editor {
        position: absolute;
        inset: 7px 0px 0px;
        height: 100% !important;
    }

}
</style>
