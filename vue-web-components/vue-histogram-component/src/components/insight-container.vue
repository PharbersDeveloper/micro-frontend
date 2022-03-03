<template>
    <div class="page">
        <div class="container" >
            <div class="left">
                <ul>
                    <li v-for="(item, index) in lst" :key="index">{{item}}</li>
                </ul>
                <input type="text" v-model="xProperty" />
                <input type="text" v-model="yProperty" />
                <input type="text" v-model="policyName" />
                <input type="submit" @click="refresh" value="refresh" />
            </div>
            <div class="content">
                <dragable :init-left=0 :init-top=0 :init-width=300 :init-height=500 :init-policy="policy" ref="container" />
            </div>
        </div>
    </div>
</template>
<script>
import histogram from "../components/insight.vue"
import dragable from "../components/dragable-container"
import BarPolicy from "../components/render-policy/bar-policy"
import PiePolicy from "../components/render-policy/pie-policy"
import PhHistogramDatasource from "../components/model/datasource"
import PhHistogramSchema from "../components/model/schema"

export default {
    name: "insight-container",
    data: () => {
        return {
            datasource: new PhHistogramDatasource('1'),
            schema: new PhHistogramSchema('1'),
            policy: null,
            xProperty: "",
            yProperty: "",
            policyName: "",

            lst: ["标准省份名称", "标准城市名称", "date", "quarter", "year", "month", "doi", "标准通用名", "atc", "sales", "units", "version", "provider", "owner"]
        }
    },
    components: {
        histogram,
        dragable
    },
    methods: {
        refresh() {
            if (!this.policy || this.policy.policyName() !== this.policyName) {
                this.policy = this.createPolicyFactory(this.policyName)
                this.policy.xProperty = this.xProperty
                this.policy.yProperty = this.yProperty
                this.$refs.container.resetPolicy(this.policy)
            }
        },
        createPolicyFactory(factoryType) {
            if (factoryType === "pie") {
                return new PiePolicy('1', new PhHistogramDatasource('1'), new PhHistogramSchema('1'),
                    { xProperty: "标准省份名称", yProperty: "sales" })
            } else if (factoryType === "bar") {
                return new BarPolicy('1', new PhHistogramDatasource('1'), new PhHistogramSchema('1'),
                    { xProperty: "标准省份名称", yProperty: "sales" })
            }
        }
    },
    watch: {

    }
}
</script>

<style scoped lang="scss">
    .container {
        display: flex;
        flex-direction: row;
        min-height: 100vh;
        background-color: green;

        .left {
            display: flex;
            flex-direction: column;
            width: 500px;
            height: 100%;
        }

        .content {
            flex-grow: 1;
            position: relative;
            min-height: 10px;
            background-color: red;
        }
    }
</style>
