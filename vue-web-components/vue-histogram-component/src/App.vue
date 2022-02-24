<template>
    <div id="app">
        <div class="container" >
            <div class="left">
                <ul>
                    <li v-for="(item, index) in lst" :key="index">{{item}}</li>
                </ul>
                <input type="text" v-model="xProperty" />
                <input type="text" v-model="yProperty" />
                <input type="submit" @click="refresh" value="refresh" />
            </div>
            <div class="content">
                <dragable :init-x-property="xProperty" :init-y-property="yProperty" :init-policy="policy" ref="container" />
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
            lst: ["标准省份名称", "标准城市名称", "date", "quarter", "year", "month", "doi", "标准通用名", "atc", "sales", "units", "version", "provider", "owner"]
        }
    },
    components: {
        histogram,
        dragable
    },
    methods: {
        refresh() {
            this.policy.xProperty = this.xProperty
            this.policy.yProperty = this.yProperty
            this.$refs.container.resetPolicy(this.policy)
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
