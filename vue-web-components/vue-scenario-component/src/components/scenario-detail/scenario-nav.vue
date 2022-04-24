<template>
    <div class="scenario-nav">
        <div class="scenario-nav-title">
            <p class="el-icon-s-operation"></p>
            <p>{{scenario["scenario-name"]}}</p>
        </div>
        <div class="scenario-nav-btns">
            <el-radio-group v-model="activeName">
                <el-radio-button label="Setting"></el-radio-button>
                <el-radio-button label="Steps"></el-radio-button>
            </el-radio-group>
            <el-button type="primary">Save</el-button>
            <el-button type="primary" disabled >运行</el-button>
        </div>
    </div>
</template>

<script>
import ElButton from "element-ui/packages/button/index"
import ElRadioGroup from "element-ui/packages/radio-group/index"
import ElRadioButton from "element-ui/packages/radio-button/index"

export default {
    components: {
        ElButton,
        ElRadioGroup,
        ElRadioButton
    },
    data() {
        return {
            activeName: "Setting"
        }
    },
    props: {
        scenario: Object,
    },
    computed: {

    },
    mounted() { },
    watch: {
        activeName(n) {
            this.$emit("active", n)
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .scenario-nav {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .scenario-nav-tabs {
            display: flex;
            flex-direction: row;
        }

        .scenario-nav-title {
            display: flex;
            flex-direction: row;
        }

        .scenario-nav-btns {

        }
    }
</style>
