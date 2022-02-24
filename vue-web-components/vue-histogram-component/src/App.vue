<template>
    <div id="app">
        <div class="container" >
            <div class="left">
                <ul>
                    <li v-for="(item, index) in lst" :key="index">{{item}}</li>
                </ul>
                <input type="text" v-model="xProperty" />
                <input type="text" v-model="yProperty" />
                <input type="text" v-model="policyName" />
                <input type="submit" @click="refresh" value="refresh" />
                <span><b>============</b></span>
                <input type="text" v-model="xProperty2" />
                <input type="text" v-model="yProperty2" />
                <input type="text" v-model="policyName2" />
                <input type="submit" @click="refresh2" value="refresh2" />
            </div>
            <div class="content">
<!--                <dragable :init-width="300" :init-height="100" :init-policy="policy" ref="container" />-->
                <dragable :init-left=0 :init-top=0 :init-width=300 :init-height=500 :init-policy="policy" ref="container" />
                <dragable :init-left=300 :init-top=100 :init-width=300 :init-height=500 :init-policy="policy2" ref="container2" />
            </div>
        </div>
    </div>
</template>

<script>
import histogram from './components/histogram.vue'
import dragable from './components/dragable-container'
import BarPolicy from "./components/render-policy/bar-policy"
import PhHistogramDatasource from "./components/model/datasource"
import PhHistogramSchema from "./components/model/schema"

export default {
    name: 'App',
    data: () => {
        return {
            policy: new BarPolicy('1', new PhHistogramDatasource('1'), new PhHistogramSchema('1'),
                { xProperty: "标准省份名称", yProperty: "sales" }),
            xProperty: "标准省份名称",
            yProperty: "sales",
            policyName: "bar",

            policy2: new BarPolicy('1', new PhHistogramDatasource('1'), new PhHistogramSchema('1'),
                { xProperty: "标准省份名称", yProperty: "sales" }),
            xProperty2: "标准省份名称",
            yProperty2: "sales",
            policyName2: "bar",
            lst: ["标准省份名称", "标准城市名称", "date", "quarter", "year", "month", "doi", "标准通用名", "atc", "sales", "units", "version", "provider", "owner"]
        }
    },
    components: {
        histogram,
        dragable
    },
    methods: {
        refresh() {
            if (this.policy.name !== this.policyName) {

            }

            this.policy.xProperty = this.xProperty
            this.policy.yProperty = this.yProperty
            this.$refs.container.resetPolicy(this.policy)
        },
        refresh2() {
            if (this.policy2.name !== this.policyName2) {

            }

            this.policy2.xProperty = this.xProperty2
            this.policy2.yProperty = this.yProperty2
            this.$refs.container2.resetPolicy(this.policy2)
        }
    }
}
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .container {
        display: flex;
        flex-direction: row;

        .left {
            display: flex;
            flex-direction: column;
            width: 500px;
            height: 1000px;
            background-color: green;
        }

        .content {
            position: relative;
            min-height: 10px;
            width: 100%;
            height: 1000px;
            background-color: red;
        }
    }
</style>
