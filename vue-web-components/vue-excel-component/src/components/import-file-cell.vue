<template>
    <div class="import-file-cell" @click="selectFile" :id="selected ? 'is-selected' : ''">
        <div class="import-file-cell-left">
            <span class="file-name">{{data.name}}</span>
            <div class="user-icon-name">
                <img :src="data.userIcon" alt="" class="icon">
                <span class="user-name">{{data.labels[5]}}</span>
            </div>
        </div>

        <div class="import-file-cell-right" :class="data.state">
            {{stateDisplay}}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: Object,
        selected: {
            type: Boolean,
            default: false
        },
        index: Number
    },
    computed: {
        stateDisplay() {
            if (this.data.state === 'success') {
                return '成功'
            } else {
                return '失败'
            }
        }
    },
    methods: {
        selectFile(file, index) {
            const event = new Event("event")
            event.args = {
                callback: "clickFile",
                element: this,
                param: {
                    attr: this.data,
                    select: this.index
                }
            }
            this.$emit('clickfile', event)
        }
    }
}
</script>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    @mixin heading-small {
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #25232D;
        letter-spacing: 0.25px;
        text-align: left;
        line-height: 20px;
        font-weight: 400;
    }

    @mixin body-tertiary {
        font-family: PingFangSC-Light;
        font-size: 12px;
        color: #706F79;
        letter-spacing: 0.25px;
        line-height: 16px;
        font-weight: 200;
    }

    #is-selected {
        border: 1px solid #7163C5;
        border-radius: 2px;
        background-color: #F2F0F9;
    }

    .import-file-cell {
        display: flex;
        width: 218px;
        height: 60px;
        border: 1px solid #E1DFE9;
        border-radius: 2px;
        padding: 10px;
        cursor: pointer;

        .import-file-cell-left {
            display: flex;
            flex-direction: column;
            
            .file-name {
                @include heading-small;
                width: 150px;
                white-space: nowrap;
                text-overflow: ellipsis;
                overflow: hidden;
                margin-bottom: 4px;
            }

            .user-icon-name {
                display: flex;
                margin-left: 2px;
                .user-name {
                    @include body-tertiary;
                }
            }
        }

        .import-file-cell-right {
            width: 44px;
            height: 18px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2px;
            letter-spacing: 0;
            font-family: PingFangSC-Light;
            font-size: 12px;
            text-align: center;
            line-height: 16px;
            font-weight: 200;
        }

        .success {
            color: #23A959;
            border: 1px solid #23A959;
        }

        .failed {
            color: #DB4D71;
            border: 1px solid #DB4D71;
        }
    }
</style>