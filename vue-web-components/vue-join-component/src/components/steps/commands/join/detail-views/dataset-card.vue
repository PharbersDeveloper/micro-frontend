<template>
    <div class="join-card-container">
        <div class="join-card-title" >
            <div class="join-card-ds">
                <span>{{index}}</span>
                &nbsp;
                <span>{{dataset}}</span>
            </div>
            <div class="join-card-op">
                <el-button type="text" >添加</el-button>
                <el-button type="text" >删除</el-button>
            </div>
        </div>
        <div class="join-card-content" :style="style">

        </div>
    </div>
</template>
<script>
import ElButton from 'element-ui/packages/button/index'

export default {
    data() {
        return {}
    },
    props: {
        index: Number,
        count: Number,
        step: Object,
        dataset: String,
    },
    components: {
        ElButton
    },
    mounted() {

    },
    methods: {

    },
    computed: {
        style() {
            if (this.step) {
                return "height: " + this.step.hitHeight() + "px; background-color: red;"
            } else return ""
        }
    }
}
</script>
<style lang="scss" scoped>
    * {
        letter-spacing: .4px;
        line-height: 1.6;
        box-sizing: border-box;
    }

    .join-card-container {
        display: flex;
        flex-direction: column;
        overflow: auto;
        width: 500px;
        margin-right: 3px;

        .join-card-title {
            display: flex;
            flex-direction: row;
            justify-content: space-between;

            .join-card-ds {

            }

            .join-card-op {

            }

        }

        .join-card-content {
            flex-grow: 1;
        }
    }
</style>
